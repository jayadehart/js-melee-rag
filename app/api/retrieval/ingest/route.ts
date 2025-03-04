import { NextRequest, NextResponse } from "next/server";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Document } from "@langchain/core/documents";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const text = body.text;
  const CHROMA_PATH = "chroma";

  try {
    const embeddingFunction = new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    const vectorstore = new Chroma(embeddingFunction, {
      url: CHROMA_PATH,
    });

    const retriever = vectorstore.asRetriever({
      verbose: true,
      k: 3,
    });

    const formatDocumentsAsString = (documents: Document[]) => {
      return documents.map((document) => document.pageContent).join("\n\n");
    };

    const ragTemplate = `You are a Super Smash Brothers Melee frame data expert. You will use the provided context to generate answers to users questions. Refrain from answering with data other than what is provided in the context. Do not answer subjects outside of the context of Super Smash Brothers Melee

    CONTEXT:
    {context}`;

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", ragTemplate],
      ["human", "{question}"],
    ]);

    const model = new ChatOpenAI({
      model: "gpt-4o-mini",
      apiKey: process.env.OPENAI_API_KEY,
    });

    const chain = RunnableSequence.from([
      {
        context: retriever.pipe(formatDocumentsAsString),
        question: new RunnablePassthrough(),
      },
      prompt,
      model,
      new StringOutputParser(),
    ]);

    const answer = chain.invoke(text);

    //reinitialize the chroma db here

    //set up the rag chain and execute it

    //send the response

    return NextResponse.json({ ok: true, answer }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
