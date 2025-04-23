"use client";

import type React from "react";

import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";

import { ChatMessageBubble } from "@/components/ChatMessageBubble";
import { IntermediateStep } from "./IntermediateStep";
import { Button } from "./ui/button";
import { ArrowDown, LoaderCircle } from "lucide-react";

import { cn } from "@/utils/cn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "./ui/switch";
import type { JSONValue } from "ai";
import Image from "next/image";
import falcon from "../public/images/falcon.png";
import samus from "../public/images/samus.png";

function ChatMessages(props: {
  messages: UIMessage[];
  emptyStateComponent: ReactNode;
  sourcesForMessages: Record<string, any>;
  aiEmoji?: any;
  className?: string;
  data: JSONValue[] | undefined;
  showsteps: boolean;
}) {
  return (
    <div className="flex flex-col max-w-[768px] mx-auto pb-12 w-full character-portrait">
      {props.messages.map((m, i) => {
        if (m.role === "system") {
          return <IntermediateStep key={m.id} message={m} />;
        }

        const sourceKey = (props.messages.length - 1 - i).toString();
        return (
          <ChatMessageBubble
            key={m.id}
            message={m}
            aiEmoji={props.aiEmoji}
            sources={props.sourcesForMessages[sourceKey]}
            data={props.data}
            showSteps={props.showsteps}
          />
        );
      })}
    </div>
  );
}

export function ChatInput(props: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onStop?: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
  actions?: ReactNode;
}) {
  const disabled = props.loading && props.onStop == null;

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();

        if (props.loading) {
          props.onStop?.();
        } else {
          props.onSubmit(e);
        }
      }}
      className={cn("flex w-full flex-col", props.className)}
    >
      <div className="border border-input bg-secondary rounded-lg flex flex-col gap-2 max-w-[768px] w-full mx-auto">
        <input
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="border-none outline-none bg-transparent p-4"
        />
        <div className="flex justify-between sm:ml-4 mr-2 mb-2">
          <div className="flex gap-3">{props.children}</div>
          <div className="flex gap-2 self-end">
            {props.actions}
            <Button type="submit" className="self-end" disabled={disabled}>
              {props.loading ? (
                <span role="status" className="flex justify-center">
                  <LoaderCircle className="animate-spin" />
                  <span className="sr-only">Loading...</span>
                </span>
              ) : (
                <span className="rounded-md">Send</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

function ScrollToBottom(props: { className?: string }) {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  if (isAtBottom) return null;
  return (
    <Button
      variant="outline"
      className={props.className}
      onClick={() => scrollToBottom()}
    >
      <ArrowDown className="w-4 h-4" />
      <span>Scroll to bottom</span>
    </Button>
  );
}

function StickyToBottomContent(props: {
  content: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const context = useStickToBottomContext();

  // scrollRef will also switch between overflow: unset to overflow: auto
  return (
    <div
      ref={context.scrollRef}
      style={{ width: "100%", height: "100%" }}
      className={cn("grid grid-rows-[1fr,auto]", props.className)}
    >
      <div ref={context.contentRef} className={props.contentClassName}>
        {props.content}
      </div>

      {props.footer}
    </div>
  );
}

export function ChatLayout(props: { content: ReactNode; footer: ReactNode }) {
  return (
    <StickToBottom>
      <StickyToBottomContent
        className="absolute inset-0"
        contentClassName="py-4 sm:py-8 px-2"
        content={props.content}
        footer={
          <div className="sticky bottom-8 px-2 w-full max-w-[100vw] rounded-lg">
            <ScrollToBottom className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4" />
            {props.footer}
          </div>
        }
      />
    </StickToBottom>
  );
}

export function ChatWindow(props: {
  endpoint: string;
  emptyStateComponent: ReactNode;
  placeholder?: string;
  emoji?: any;
  showIngestForm?: boolean;
  showIntermediateStepsToggle?: boolean;
}) {
  const [tabValue, setTabValue] = useState("react");
  const [showSteps, setShowSteps] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleTabChange = (value: string) => {
    setTabValue(value);
  };

  const handleCheckedChange = (checked: boolean) => {
    setShowSteps(checked);
  };

  const [showIntermediateSteps, setShowIntermediateSteps] = useState(
    !!props.showIntermediateStepsToggle,
  );
  const [intermediateStepsLoading, setIntermediateStepsLoading] =
    useState(false);

  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});

  const chat = useChat({
    api: props.endpoint,
    onResponse(response) {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, "base64").toString("utf8"))
        : [];

      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        });
      }
    },
    streamProtocol: "data",
    onFinish: () => {
      chat.setData([]);
    },

    onError: (e) => console.log(e),
  });

  useEffect(() => {}, [chat.data]);

  console.log(chat.data);

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (chat.isLoading || intermediateStepsLoading) return;

    chat.handleSubmit(e, {
      data: {
        useCustom: tabValue === "custom",
        showSteps,
      },
    });
    return;
  }

  return (
    <ChatLayout
      content={
        chat.messages.length === 0 ? (
          <div>{props.emptyStateComponent}</div>
        ) : (
          <ChatMessages
            aiEmoji={props.emoji}
            messages={chat.messages}
            emptyStateComponent={props.emptyStateComponent}
            sourcesForMessages={sourcesForMessages}
            data={chat.data}
            showsteps={showSteps}
          />
        )
      }
      footer={
        <ChatInput
          value={chat.input}
          onChange={chat.handleInputChange}
          onSubmit={sendMessage}
          loading={chat.isLoading || intermediateStepsLoading}
          placeholder={props.placeholder ?? "What's it like to be a pirate?"}
        >
          <div className="flex items-stretch">
            <Tabs
              defaultValue="react"
              onValueChange={handleTabChange}
              className="w-full sm:w-auto"
            >
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger
                  value="react"
                  className="text-xs sm:text-sm  sm:flex-none rounded-md"
                >
                  <Image
                    src={falcon}
                    height={20}
                    width={20}
                    alt="ReAct Agent"
                    className="sm:hidden"
                  />
                  <span className="ml-1 sm:hidden">ReAct</span>
                  <span className="hidden sm:inline">ReAct Agent</span>
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="text-xs sm:text-sm  sm:flex-none"
                >
                  <Image
                    src={samus}
                    height={20}
                    width={20}
                    alt="Custom Agent"
                    className="sm:hidden"
                  />
                  <span className="ml-1 sm:hidden">Custom</span>
                  <span className="hidden sm:inline">Custom Agent</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2 items-center">
              <Switch
                checked={showSteps}
                onCheckedChange={handleCheckedChange}
                className="scale-85 sm:scale-100"
              />
              <div className="text-xs sm:text-sm whitespace-nowrap">
                <span className="hidden sm:inline">Show Agent Status</span>
                <span className="sm:hidden">Show Status</span>
              </div>
            </div>
          </div>
        </ChatInput>
      }
    />
  );
}
