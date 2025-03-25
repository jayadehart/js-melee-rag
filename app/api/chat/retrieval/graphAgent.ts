import { openAIModel as model } from "./models";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ToolNode, createReactAgent } from "@langchain/langgraph/prebuilt";
import {
  AGENT_TEMPLATE,
  MELEE_RAG_TEMPLATE,
  RAG_AGENT_TEMPLATE,
  RELEVENCE_EXTRACTOR_TEMPLATE,
} from "./templates";
import {
  Annotation,
  START,
  END,
  StateGraph,
  Graph,
} from "@langchain/langgraph";
import { SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import { Client } from "pg";
import "reflect-metadata";
import { BaseMessage } from "@langchain/core/messages";
import { getAgentToolkit } from "./agent";
import { z } from "zod";
import { AIMessage } from "@langchain/langgraph-sdk";
import { tool } from "@langchain/core/tools";

export const getExampleGraphAgent = async () => {
  const GraphState = Annotation.Root({
    messages: Annotation<BaseMessage[]>({
      reducer: (x, y) => x.concat(y),
      default: () => [],
    }),
    documents: Annotation<String>,
  });

  const toolkit = await getAgentToolkit(model);
  const toolNode = new ToolNode<typeof GraphState.State>(toolkit);

  const shouldRetrieve = (state: typeof GraphState.State): string => {
    const { messages } = state;
    console.log("---DECIDE TO RETRIEVE---");
    const lastMessage = messages[messages.length - 1];

    if (
      "tool_calls" in lastMessage &&
      Array.isArray(lastMessage.tool_calls) &&
      lastMessage.tool_calls.length
    ) {
      console.log("---DECISION: RETRIEVE---");
      return "retrieve";
    }
    // If there are no tool calls then we finish.
    console.log("---DECISION: END---");
    return "generate";
  };

  const gradeDocumentsRelevence = async (
    state: typeof GraphState.State,
  ): Promise<Partial<typeof GraphState.State>> => {
    console.log("---GET RELEVENCE---");
    console.log(state);

    const { messages } = state;
    const tool = {
      name: "give_relevence_score",
      description: "Give a relevence score to the retrieved documents.",
      schema: z.object({
        binaryScore: z.string().describe("relevence score 'yes' or 'no'"),
      }),
    };

    const prompt = ChatPromptTemplate.fromTemplate(
      `You are a grader assessing relevence of retrieved docs to a user question.
      Here are the retrieved docs:
      \n ------- \n
      {context} 
      \n ------- \n
      Here is the user question: {question}
      If the content of the docs are relevant to the users question, score them as relevant.
      Give a binary score 'yes' or 'no' score to indicate whether the docs are relevant to the question.
      Yes: The docs are relevant to the question.
      No: The docs are not relevant to the question.`,
    );

    const model = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0,
    }).bindTools([tool], {
      tool_choice: tool.name,
    });

    const chain = prompt.pipe(model);

    const lastMessage = messages[messages.length - 1];

    const score = await chain.invoke({
      question: messages[0].content as string,
      context: lastMessage.content as string,
    });

    return {
      messages: [score],
    };
  };

  const gradeDocumentCompleteness = async (
    state: typeof GraphState.State,
  ): Promise<Partial<typeof GraphState.State>> => {
    console.log("---GET COMPLETENESS---");
    console.log(state);

    const { messages } = state;

    const retrievedDocs = messages
      .map((message) => message.content)
      .join("\n\n");
    const tool = {
      name: "give_completeness_score",
      description: "Give a completeness score to the retrieved documents.",
      schema: z.object({
        binaryScore: z.string().describe("Completeness score 'yes' or 'no'"),
      }),
    };

    const prompt = ChatPromptTemplate.fromTemplate(
      `You are a grader assessing ability of the retrieved docs to fully answer a user question.
        Here are the retrieved docs:
        \n ------- \n
        {context} 
        \n ------- \n
        Here is the user question: {question}
        If the content of the docs are able to fully answer the user's question, score them as complete.
        Give a binary score 'yes' or 'no' to indicate whether the docs are able to completely answer the user's question.
        Yes: The docs fully answer the question.
        No: The docs do not fully answer the question, or only partly answer it.`,
    );

    const model = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0,
    }).bindTools([tool], {
      tool_choice: tool.name,
    });

    const chain = prompt.pipe(model);

    const score = await chain.invoke({
      question: messages[0].content as string, // Assuming first message is user question
      context: retrievedDocs, // Pass the full retrieved context
    });

    return {
      messages: [score],
    };
  };

  const checkCompleteness = (state: typeof GraphState.State): string => {
    console.log("---CHECK COMPLETENESS---");

    const { messages } = state;
    const lastMessage = messages[messages.length - 1];
    if (!("tool_calls" in lastMessage)) {
      throw new Error(
        "The 'checkCOMPLETENESS' node requires the most recent message to contain tool calls.",
      );
    }
    const toolCalls: any = (lastMessage as unknown as AIMessage).tool_calls;
    if (!toolCalls || !toolCalls.length) {
      throw new Error("Last message was not a function message");
    }

    if (toolCalls[0].args.binaryScore === "yes") {
      console.log("---DECISION: DOCS COMPLETE---");
      return "yes";
    }
    console.log("---DECISION: DOCS NOT COMPLETE---");
    return "no";
  };

  const agent = async (
    state: typeof GraphState.State,
  ): Promise<Partial<typeof GraphState.State>> => {
    console.log("---CALL AGENT---");
    console.log("STATE AT AGENT", state);

    const { messages } = state;
    // Find the AIMessage which contains the `give_relevence_score` tool call,
    // and remove it if it exists. This is because the agent does not need to know
    // the relevence score.
    const filteredMessages = messages.filter((message) => {
      if (
        "tool_calls" in message &&
        Array.isArray(message.tool_calls) &&
        message.tool_calls.length > 0
      ) {
        return message.tool_calls[0].name !== "give_relevence_score";
      }
      return true;
    });

    const prompt = new SystemMessage(AGENT_TEMPLATE);

    filteredMessages.unshift(prompt);

    const model = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0,
      streaming: true,
    }).bindTools(toolkit);

    const response = await model.invoke(filteredMessages);
    console.log(response);
    return {
      messages: [response],
    };
  };

  const generate = async (
    state: typeof GraphState.State,
  ): Promise<Partial<typeof GraphState.State>> => {
    console.log("---GENERATE---");

    const { messages } = state;
    const question = messages[0].content as string;
    // Extract the most recent ToolMessage

    const retrievedDocs = messages
      .map((message) => message.content) // Extract the content
      .join("\n\n"); // Join all retrieved docs

    const prompt: ChatPromptTemplate =
      ChatPromptTemplate.fromTemplate(MELEE_RAG_TEMPLATE);

    const llm = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0,
      streaming: true,
    });

    const ragChain = prompt.pipe(llm);

    const response = await ragChain.invoke({
      context: retrievedDocs,
      question,
    });

    return {
      messages: [response],
    };
  };

  //add nodes
  const workflow = new StateGraph(GraphState)
    .addNode("agent", agent)
    .addNode("retrieve", toolNode)
    .addNode("gradeRelevence", gradeDocumentsRelevence)
    .addNode("gradeCompleteness", gradeDocumentCompleteness)
    .addNode("generate", generate)
    .addEdge(START, "agent")
    .addConditionalEdges("agent", shouldRetrieve)
    .addEdge("retrieve", "gradeRelevence")
    .addEdge("gradeRelevence", "gradeCompleteness")
    .addConditionalEdges("gradeCompleteness", checkCompleteness, {
      yes: "generate",
      no: "agent",
    })
    .addEdge("generate", END);

  const app = workflow.compile();
  return app;
};

export const getGraphAgent = async () => {
  const GraphState = Annotation.Root({
    messages: Annotation<BaseMessage[]>({
      reducer: (x, y) => x.concat(y),
      default: () => [],
    }),
    context: Annotation<string>({
      reducer: (x, y) => x.concat(y),
    }),
  });

  const model = new ChatOpenAI({
    model: "gpt-4o",
    temperature: 0,
    streaming: true,
  });

  const toolkit = await getAgentToolkit(model);
  const toolNode = new ToolNode<typeof GraphState.State>(toolkit);
  const modelWithTools = model.bindTools(toolkit);

  const agent = async (state: typeof GraphState.State) => {
    console.log("---AGENT---");
    console.log(state);
    const { context, messages } = state;

    if (messages.length === 0) {
      throw new Error("No messages found in state");
    }

    const question = messages[0].content as string;

    const prompt: ChatPromptTemplate =
      ChatPromptTemplate.fromTemplate(RAG_AGENT_TEMPLATE);

    console.log(prompt);

    const chain = prompt.pipe(modelWithTools);
    const response = await chain.invoke({
      question,
      context,
    });

    return {
      messages: [response],
    };
  };

  const shouldRetrieve = (state: typeof GraphState.State): string => {
    const { messages } = state;
    console.log("---DECIDE TO RETRIEVE---");
    console.log(state);

    if (messages.length === 0) return END; // Prevent accessing undefined

    const lastMessage = messages[messages.length - 1];

    if (
      "tool_calls" in lastMessage &&
      Array.isArray(lastMessage.tool_calls) &&
      lastMessage.tool_calls.length
    ) {
      console.log("---DECISION: RETRIEVE---");
      return "retrieve";
    }
    console.log("---DECISION: END---");
    return END;
  };

  const extractRelevant = async (state: typeof GraphState.State) => {
    console.log("---EXTRACT---");
    console.log(state);

    const { context, messages } = state;

    if (messages.length === 0) {
      throw new Error("No messages found in state");
    }

    const question = messages[0].content as string;
    const toolCallMessage = messages[messages.length - 1];

    const prompt: ChatPromptTemplate = ChatPromptTemplate.fromTemplate(
      RELEVENCE_EXTRACTOR_TEMPLATE,
    );

    const chain = prompt.pipe(model);
    const response = await chain.invoke({
      question,
      context: toolCallMessage.content,
    });

    return {
      context: response.content,
    };
  };

  const workflow = new StateGraph(GraphState)
    .addNode("agent", agent)
    .addNode("retrieve", toolNode)
    .addNode("extractRelevant", extractRelevant)
    .addEdge(START, "agent")
    .addConditionalEdges("agent", shouldRetrieve)
    .addEdge("retrieve", "extractRelevant")
    .addEdge("extractRelevant", "agent");

  const app = workflow.compile();
  return app;
};
