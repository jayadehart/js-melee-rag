import { NextRequest, NextResponse } from "next/server";
import {
  Message as VercelChatMessage,
  LangChainAdapter,
  createDataStream,
} from "ai";

import {
  AIMessage,
  ChatMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { getAgentToolkit } from "../retrieval/agent";
import { AGENT_TEMPLATE } from "../retrieval/templates";
import { getGraphAgent } from "./graphAgent";
import { FakeListChatModel } from "@langchain/core/utils/testing";
import { StringOutputParser } from "@langchain/core/output_parsers";

import { StreamData } from "ai";
import { drawMermaid } from "@/utils/drawImage";

const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    return new ChatMessage(message.content, message.role);
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
    const useCustom = body.data.useCustom;

    const chat = new FakeListChatModel({
      responses: [
        "very long output with lots and lots of text to see how streaming looks when there is a very long verbose response that takes a long timne to output and has a lot of words sometimes even more words than that it could have a whole lot of text and stuff as an output like this",
      ],
    });

    const testStream = await chat
      .pipe(new StringOutputParser())
      .stream(`You want to hear a JavasSript joke?`);

    const latestMessage = messages.at(-1);

    const chatModel = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0.0,
    });

    const toolKit = await getAgentToolkit(chatModel);

    const reactAgent = createReactAgent({
      llm: chatModel,
      tools: toolKit,
      messageModifier: new SystemMessage(AGENT_TEMPLATE),
    });

    const graphAgent = await getGraphAgent();

    //uncomment this to draw the mermaid
    // await drawMermaid();

    const agentToUse = useCustom ? graphAgent : reactAgent;

    const stream = agentToUse.streamEvents(
      { messages: [latestMessage] },
      { version: "v2", recursionLimit: 20 },
    );

    const data = new StreamData();

    //this is how you could do it if they update LangChainAdapter to not use the deprecated StreamData()
    // const testDataStream = createDataStream({
    //   async execute(dataStream) {
    //     const stream = agentToUse.streamEvents(
    //       { messages: [latestMessage] },
    //       { version: "v2", recursionLimit: 15 },
    //     );
    //     const addDataTransformer = new TransformStream({
    //       async transform(chunk, controller) {
    //         if (chunk.event !== "on_chat_model_stream") {
    //           dataStream.writeData(chunk.data);
    //         }
    //         controller.enqueue(chunk);
    //       },
    //     });
    //     const addDataStream = stream.pipeThrough(addDataTransformer);
    //     dataStream.merge(addDataStream);
    //   },
    // });

    const addDataStream = new TransformStream({
      async transform(chunk, controller) {
        // console.log("Stream chunk:", chunk);

        if (typeof chunk !== "string" && "event" in chunk) {
          if (chunk.event === "on_chat_model_stream") {
            if (chunk.metadata.langgraph_node === "extractRelevant") {
              return;
            }
          }
          if (chunk.event !== "on_chat_model_stream") {
            data.append({
              type: "langchain_event",
              value: {
                event: chunk.event,
                name: useCustom ? chunk.metadata.langgraph_node : chunk.name,
                data: chunk.data,
              },
            });
          }
        }

        controller.enqueue(chunk);
      },
      flush() {
        data.close();
      },
    });

    const finalStream = stream.pipeThrough(addDataStream);

    return LangChainAdapter.toDataStreamResponse(finalStream, { data });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ hi: "hi" });
  }
}
