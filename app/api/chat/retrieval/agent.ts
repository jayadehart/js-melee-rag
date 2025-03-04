import { SqlToolkit } from "langchain/agents/toolkits/sql";
import { openAIModel as model } from "./models";
import { DataSource } from "typeorm";
import { SqlDatabase } from "langchain/sql_db";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { getRetriever, Retriever } from "./retrievers";
import { createRetrieverTool } from "langchain/tools/retriever";
import { createReactAgent, ToolNode } from "@langchain/langgraph/prebuilt";
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

export const getGraph = async () => {
  const toolkit = await getAgentToolkit(model);
  const toolNode = new ToolNode(toolkit);
  const modelWithTools = model.bindTools(toolkit);
  const GraphState = Annotation.Root({
    question: Annotation<string>({
      reducer: (_, question) => question,
    }),
    context: Annotation<string[]>({
      reducer: (prev, next) => prev.concat(next),
    }),
    answer: Annotation<string | boolean>,
  });

  const callAgent = async (state: typeof GraphState.State) => {
    const template = `You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee.
    This is the question you are trying to answer: ${state.question}
    This is the existing context from previous query calls: ${state.context}

    If you do not have enough context to answer the question, call a query tool to gain more context. If you do have enough context, answer the provided question using the provided context`;
    const response = await modelWithTools.invoke(template);
    return { context: response };
  };

  const workflow = new StateGraph(GraphState)
    .addNode("agent", callAgent)
    .addNode("tools", toolNode)
    .addEdge(START, "agent")
    .addEdge("tools", "agent");

  const graph = workflow.compile();
  return graph;
};

export const getAgentToolkit = async (model: BaseChatModel) => {
  const datasource = new DataSource({
    type: "postgres",
    url: process.env.SUPABASE_DATABASE_URL!,
  });

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
