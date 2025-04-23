import { cn } from "@/utils/cn";
import type { Message } from "ai/react";
import samus from "../public/images/samus.png";
import Image from "next/image";
import hmn from "../public/textures/hmn.png";
import cpu from "../public/textures/cpu.png";
import { JSONValue, UIMessage } from "ai";
import { useMemo } from "react";
import { eventMessageMap } from "@/utils/eventMap";

export function ChatMessageBubble(props: {
  message: UIMessage;
  aiEmoji?: any;
  sources: any[];
  data?: JSONValue[] | undefined;
  showSteps: boolean;
}) {
  const latestEvent = useMemo(() => {
    if (props.data) {
      const obj = props.data[props.data.length - 1] as any;
      if (obj) {
        return obj.value.name;
      } else {
        return null;
      }
    }
  }, [props.data]);

  return (
    <div
      className={cn(
        `relative rounded-[24px] max-w-[80%] mb-8 flex`,

        "bg-secondary text-secondary-foreground px-4 py-2",

        props.message.role === "user" ? "ml-auto" : "mr-auto",
      )}
    >
      <div className="whitespace-pre-wrap flex">
        {props.message.role !== "user" && (
          <div className="-ml-16  -mt-4 rounded-full w-16 h-11 flex-shrink-0 flex items-center justify-center">
            <Image
              src={cpu}
              alt="melee cpu image"
              height={60}
              width={60}
              className="hidden sm:block"
            />
          </div>
        )}
        {props.data &&
          props.message.role === "assistant" &&
          !props.message.content &&
          props.showSteps && (
            <div className="animate-pulse">
              {eventMessageMap.get(latestEvent) || "Thinking"}
            </div>
          )}
        <span>{props.message.content}</span>
        {props.message.role == "user" && (
          <div className="-mr-16 -mt-4 rounded-full w-16 h-11 flex-shrink-0 flex items-center justify-center">
            <Image
              src={hmn}
              alt="melee human image"
              height={60}
              width={60}
              className="hidden sm:block"
            />
          </div>
        )}
      </div>
    </div>
  );
}
