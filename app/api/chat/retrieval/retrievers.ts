import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { SelfQueryRetriever } from "langchain/retrievers/self_query";
import { SupabaseTranslator } from "@langchain/community/structured_query/supabase";
import { attributeInfo } from "./utils";
import { SqlDatabase } from "langchain/sql_db";
import { DataSource } from "typeorm";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { SQL_RETRIEVER_TEMPLATE } from "./templates";
import { z } from "zod";
import { VectorStore } from "@langchain/core/vectorstores";
import { QuerySqlTool } from "langchain/tools/sql";
import { openAIModel as model } from "./models";
import { BM25Retriever } from "@langchain/community/retrievers/bm25";
import { Document } from "@langchain/core/documents";

export enum Retriever {
  default = "default",
  selfQuerying = "selfQuerying",
  sql = "sql",
  keyword = "keyword",
}

export const getRetriever = async (type: Retriever) => {
  const client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PRIVATE_KEY!,
  );
  const vectorStore = new SupabaseVectorStore(new OpenAIEmbeddings(), {
    client,
    tableName: "documents",
    queryName: "match_documents",
  });

  if (type === Retriever.default) {
    return getVectorRetriever(vectorStore);
  } else if (type === Retriever.selfQuerying) {
    return getSelfQueryRetriever(model, vectorStore);
    // } else if (type === Retriever.sql) {
    //   return await getSqlRetriever(model);
  } else if ((type = Retriever.keyword)) {
    return getKeyWordRetriever(client);
  } else {
    return getVectorRetriever(vectorStore);
  }
};

const getVectorRetriever = (store: VectorStore) => {
  return store.asRetriever({
    verbose: true,
    k: 3,
  });
};

const getSelfQueryRetriever = (model: BaseChatModel, store: VectorStore) => {
  return SelfQueryRetriever.fromLLM({
    llm: model,
    vectorStore: store,
    documentContents:
      "JSON object of move or character frame data for an SSBM character",
    attributeInfo: attributeInfo,
    structuredQueryTranslator: new SupabaseTranslator(),
    verbose: true,
  });
};

const getKeyWordRetriever = async (client: SupabaseClient) => {
  const { data, error } = await client.from("documents").select("content");

  if (error) {
    console.error("Error fetching documents from Supabase:", error);
    throw new Error("Failed to retrieve documents");
  }

  const documents: Document[] = data.map((doc) => ({
    pageContent: doc.content,
    metadata: [],
  }));
  return BM25Retriever.fromDocuments(documents, { k: 3, verbose: true });
};

const getSqlRetriever = async (model: BaseChatModel) => {
  const datasource = new DataSource({
    type: "postgres",
    url: process.env.SUPABASE_DATABASE_URL!,
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const prompt = ChatPromptTemplate.fromTemplate(SQL_RETRIEVER_TEMPLATE);

  const queryOutput = z.object({
    query: z.string().describe("Syntactically valid SQL query."),
  });

  const structuredLlm = model.withStructuredOutput(queryOutput);

  const convertQuestionToSQL = async (question: string) => {
    const promptValue = await prompt.invoke({
      dialect: db.appDataSourceOptions.type,
      top_k: 5,
      table_info: await db.getTableInfo(),
      input: question,
    });
    const result = await structuredLlm.invoke(promptValue);
    const executeQueryTool = new QuerySqlTool(db);
    const docs = await executeQueryTool.invoke(result.query);
    return docs;
  };
  return convertQuestionToSQL;
};
