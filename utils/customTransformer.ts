import { formatDataStreamPart } from "ai";
import { json } from "stream/consumers";

type LangChainImageDetail = "auto" | "low" | "high";

type LangChainMessageContentText = {
  type: "text";
  text: string;
};

type LangChainMessageContentImageUrl = {
  type: "image_url";
  image_url:
    | string
    | {
        url: string;
        detail?: LangChainImageDetail;
      };
};

type LangChainMessageContentComplex =
  | LangChainMessageContentText
  | LangChainMessageContentImageUrl
  | (Record<string, any> & {
      type?: "text" | "image_url" | string;
    })
  | (Record<string, any> & {
      type?: never;
    });

type LangChainMessageContent = string | LangChainMessageContentComplex[];

type LangChainStreamEvent = {
  event: string;
  data: any;
  name: string;
};

type LangChainAIMessageChunk = {
  content: LangChainMessageContent;
};

export function prepareResponseHeaders(
  headers: HeadersInit | undefined,
  {
    contentType,
    dataStreamVersion,
  }: { contentType: string; dataStreamVersion?: "v1" | undefined },
) {
  const responseHeaders = new Headers(headers ?? {});

  if (!responseHeaders.has("Content-Type")) {
    responseHeaders.set("Content-Type", contentType);
  }

  if (dataStreamVersion !== undefined) {
    responseHeaders.set("X-Vercel-AI-Data-Stream", dataStreamVersion);
  }

  return responseHeaders;
}

export function langChainCustomTransformer(
  stream:
    | ReadableStream<LangChainStreamEvent>
    | ReadableStream<LangChainAIMessageChunk>
    | ReadableStream<string>,
) {
  return stream
    .pipeThrough(
      new TransformStream<
        LangChainStreamEvent | LangChainAIMessageChunk | string
      >({
        transform: async (value, controller) => {
          // text stream:
          if (typeof value === "string") {
            controller.enqueue(value);
            return;
          }

          // LC stream events v2:
          if ("event" in value) {
            // chunk is AIMessage Chunk for on_chat_model_stream event:
            if (value.event === "on_chat_model_stream") {
              forwardAIMessageChunk(
                value.data?.chunk as LangChainAIMessageChunk,
                controller,
              );
            } else {
              const eventData = {
                event: value.event,
                data: value.data,
                name: value.name,
              };
              console.log(eventData);
              console.log(value);
              //   controller.enqueue(eventData);
              const encoder = new TextEncoder();
              const dataChunk = encoder.encode(JSON.stringify(eventData));
              controller.enqueue(dataChunk);
            }
            return;
          }

          // AI Message chunk stream:
          forwardAIMessageChunk(value, controller);
        },
      }),
    )
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(
      new TransformStream({
        transform: async (chunk, controller) => {
          controller.enqueue(formatDataStreamPart("text", chunk));
        },
      }),
    );
}

function forwardAIMessageChunk(
  chunk: LangChainAIMessageChunk,
  controller: TransformStreamDefaultController<any>,
) {
  if (typeof chunk.content === "string") {
    controller.enqueue(chunk.content);
  } else {
    const content: LangChainMessageContentComplex[] = chunk.content;
    for (const item of content) {
      if (item.type === "text") {
        controller.enqueue(item.text);
      }
    }
  }
}

export function toDataStreamResponse(
  stream:
    | ReadableStream<LangChainStreamEvent>
    | ReadableStream<LangChainAIMessageChunk>
    | ReadableStream<string>,
) {
  const responseStream = langChainCustomTransformer(stream).pipeThrough(
    new TextEncoderStream(),
  );

  return new Response(responseStream, {
    status: 200,
    statusText: "",
    headers: prepareResponseHeaders(undefined, {
      contentType: "text/plain; charset=utf-8",
      dataStreamVersion: "v1",
    }),
  });
}
