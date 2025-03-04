import { NextRequest, NextResponse } from "next/server";
import { getGraph } from "./agent";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const chat = body.messages;
  const latest = chat[chat.length - 1].content;

  try {
    const graph = await getGraph();

    const result = await graph.invoke({
      question: latest,
      context: [],
      answer: false,
    });

    return NextResponse.json(
      { ok: true, answer: result.answer },
      { status: 200 },
    );
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
