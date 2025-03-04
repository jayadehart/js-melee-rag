import { JSONLoader } from "langchain/document_loaders/fs/json";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";

import { OpenAI } from "@langchain/openai";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import loadJsConfig from "next/dist/build/load-jsconfig";

const DATA_PATH = "chardata";

const loadJSON = () => {
  return fs
    .readdirSync(DATA_PATH)
    .filter((file) => file.endsWith(".json"))
    .map((file) => path.join(DATA_PATH, file)); // Return file paths
};

const loadDocuments = async (files: string[]) => {
  let documents: Document[] = [];

  for (const file of files) {
    const charName = path.basename(file, ".json");
    const jsonData = JSON.parse(fs.readFileSync(file, "utf-8")); // Read file contents

    if (!Array.isArray(jsonData)) {
      console.error(`Invalid JSON format in ${file}. Expected an array.`);
      continue;
    }

    jsonData.forEach((data, index) => {
      if (data) {
        let move = data.move;
        let grab = data.type;
        documents.push(
          new Document({
            pageContent: JSON.stringify(data),
            metadata: {
              source: file,
              character: charName,
              index,
              move: move || grab || "character stats",
            },
            id: uuidv4(),
          }),
        );
      }
    });
  }

  console.log(`Loaded ${documents.length} documents.`);
  return documents;
};

const createVectorStore = async () => {
  const files = loadJSON();
  const documents = await loadDocuments(files);
  console.log(documents[0], documents[20]);
  const embeddingFunction = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PRIVATE_KEY!,
  );

  const { error } = await client.from("documents").delete().neq("id", -1);
  if (error) {
    console.error("Error deleting documents:", error);
    return;
  }
  console.log("Existing documents deleted successfully.");

  const db = await new SupabaseVectorStore(embeddingFunction, {
    client,
    tableName: "documents",
    queryName: "match_documents",
  });

  await db.addDocuments(documents);

  console.log(`uploaded ${documents.length} documents to supabase`);
  process.exit(0);
};

createVectorStore();

// const files = loadJSON();
// loadDocuments(files);
