import { ChatOpenAI } from "@langchain/openai";

export const openAIModel = new ChatOpenAI({
  model: "gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});
