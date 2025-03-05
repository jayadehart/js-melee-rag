import { SqlToolkit } from "langchain/agents/toolkits/sql";
import { openAIModel as model } from "./models";
import { DataSource } from "typeorm";
import { SqlDatabase } from "langchain/sql_db";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { getRetriever, Retriever } from "./retrievers";
import { createRetrieverTool } from "langchain/tools/retriever";
import { ToolNode, createReactAgent } from "@langchain/langgraph/prebuilt";
import { AGENT_TEMPLATE } from "./templates";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import {
  Annotation,
  AnnotationRoot,
  MemorySaver,
  START,
  END,
  StateGraph,
} from "@langchain/langgraph";
import { SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

export const getGraph = async () => {
  const toolkit = await getAgentToolkit(model);
  const vectorRetriever = await getRetriever(Retriever.default);

  const vectorRetrieverTool = createRetrieverTool(vectorRetriever, {
    name: "vectorSearch",
    description:
      "Use to perform a vector search on the stored documents with the provided query",
  });

  const altToolNode = new ToolNode([vectorRetrieverTool]);
  const toolNode = new ToolNode(toolkit, { handleToolErrors: true });
  const modelWithTools = model.bindTools(toolkit);
  const GraphState = Annotation.Root({
    question: Annotation<string>,
    context: Annotation<string[]>({
      reducer: (prev, next) => prev.concat(next),
    }),
    answer: Annotation<string | boolean>,
  });

  const callAgent = async (state: typeof GraphState.State) => {
    console.log("agent", state);
    const template = `You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee.
    This is the question you are trying to answer: ${state.question}
    This is the existing context from previous query calls: ${state.context}

    If you do not have enough context to answer the question, call a query tool to gain more context. If you do have enough context, answer the provided question using the provided context. Indicate that you are sending a final response by beginning your message with FINAL RESPONSE:`;
    const response = await modelWithTools.invoke(template);
    console.log(response);
    const answer = response.content as String;

    if (answer.startsWith("FINAL RESPONSE:")) {
      return { answer: answer.replace("FINAL RESPONSE:", "") };
    } else {
      return { answer: false };
    }
  };

  const shouldContinue = (state: typeof GraphState.State) => {
    console.log("continue", state);
    if (typeof state.answer === "string") {
      return "__end__";
    }
    return "agent";
  };

  const workflow = new StateGraph(GraphState)
    .addNode("agent", callAgent)
    .addNode("tools", altToolNode)
    .addEdge(START, "agent")
    .addEdge("tools", "agent")
    .addConditionalEdges("agent", shouldContinue);

  const graph = workflow.compile();
  return graph;
};

export const getAgentToolkit = async (model: BaseChatModel) => {
  const datasource = new DataSource({
    type: "postgres",
    url: process.env.SUPABASE_DATABASE_URL_ALT!,
  });

  await datasource.initialize();

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const vectorRetriever = await getRetriever(Retriever.default);

  const vectorRetrieverTool = createRetrieverTool(vectorRetriever, {
    name: "vectorSearch",
    description:
      "Use to perform a vector search on the stored documents with the provided query",
  });

  const keywordRetriever = await getRetriever(Retriever.keyword);

  const keywordRetrieverTool = createRetrieverTool(keywordRetriever, {
    name: "keywordSearch",
    description:
      "Use to perform a key word search on the stored documents with the provided query",
  });

  const sqlTools = new SqlToolkit(db, model).getTools();

  return [...sqlTools, vectorRetrieverTool, keywordRetrieverTool];
};

export const getAgentToolkitWithoutSQL = async (model: BaseChatModel) => {
  const vectorRetriever = await getRetriever(Retriever.default);

  const vectorRetrieverTool = createRetrieverTool(vectorRetriever, {
    name: "vectorSearch",
    description:
      "Use to perform a vector search on the stored documents with the provided query",
  });

  const keywordRetriever = await getRetriever(Retriever.keyword);

  const keywordRetrieverTool = createRetrieverTool(keywordRetriever, {
    name: "keywordSearch",
    description:
      "Use to perform a key word search on the stored documents with the provided query",
  });

  return [vectorRetrieverTool, keywordRetrieverTool];
};

export const getAgent = async () => {
  const openAIModel = new ChatOpenAI({
    model: "gpt-4o-mini",
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  const toolkit = await getAgentToolkit(openAIModel);

  console.log("Toolkit:", toolkit);
  console.log("AGENT_TEMPLATE:", AGENT_TEMPLATE);

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", AGENT_TEMPLATE],
    ["human", "{input}"],
  ]);

  const agent = createReactAgent({
    llm: openAIModel,
    tools: toolkit,
    prompt,
  });
  return agent;
};
