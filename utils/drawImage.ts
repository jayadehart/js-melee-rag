import { getGraphAgent } from "../app/api/chat/retrieval/graphAgent";
import { writeFileSync } from "node:fs";

export async function drawMermaid() {
  const graphAgent = await getGraphAgent();
  const graph = await graphAgent.getGraphAsync();

  const image = await graph.drawMermaidPng();
  const arrayBuffer = await image.arrayBuffer();
  const filePath = "./graph.png";
  writeFileSync(filePath, new Uint8Array(arrayBuffer));
  process.exit(0);
}
