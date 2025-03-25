import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import {
  AIMessage,
  BaseMessage,
  ChatMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { getAgentToolkit, getAgentToolkitWithoutSQL } from "../retrieval/agent";
import { AGENT_TEMPLATE } from "../retrieval/templates";
import { getSqlRetriever } from "./retrievers";
import { getExampleGraphAgent, getGraphAgent } from "./graphAgent";

const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    return new ChatMessage(message.content, message.role);
  }
};

const convertLangChainMessageToVercelMessage = (message: BaseMessage) => {
  if (message._getType() === "human") {
    return { content: message.content, role: "user" };
  } else if (message._getType() === "ai") {
    return {
      content: message.content,
      role: "assistant",
      tool_calls: (message as AIMessage).tool_calls,
    };
  } else {
    return { content: message.content, role: message._getType() };
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const messages = (body.messages ?? [])
      .filter(
        (message: VercelChatMessage) =>
          message.role === "user" || message.role === "assistant",
      )
      .map(convertVercelMessageToLangChainMessage);
    const returnIntermediateSteps = false;

    console.log(body);
    const useCustom = body.useCustom;
    const showSteps = body.show_intermediate_steps;

    console.log("usecustom", useCustom);
    console.log("steps", showSteps);

    const latestMessage = messages.at(-1);

    console.log("messages", messages);

    console.log("latest", latestMessage);
    const chatModel = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0.0,
    });

    const toolKit = await getAgentToolkit(chatModel);

    const reactAgent = await createReactAgent({
      llm: chatModel,
      tools: toolKit,
      messageModifier: new SystemMessage(AGENT_TEMPLATE),
    });

    const graphAgent = await getGraphAgent();

    const agentToUse = useCustom ? graphAgent : reactAgent;

    if (!returnIntermediateSteps) {
      const eventStream = await agentToUse.streamEvents(
        {
          messages: [latestMessage],
        },
        { version: "v2", recursionLimit: 15 },
      );

      const textEncoder = new TextEncoder();
      const transformStream = new ReadableStream({
        async start(controller) {
          for await (const { event, data } of eventStream) {
            if (event === "on_chat_model_stream") {
              if (!!data.chunk.content) {
                controller.enqueue(textEncoder.encode(data.chunk.content));
              }
            }
          }
          controller.close();
        },
      });

      return new StreamingTextResponse(transformStream);
    } else {
      const result = await agentToUse.invoke({ messages });
      return NextResponse.json(
        {
          messages: result.messages.map(convertLangChainMessageToVercelMessage),
        },
        { status: 200 },
      );
    }
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
