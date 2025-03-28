import { cn } from "@/utils/cn";
import type { Message } from "ai/react";
import samus from "../public/images/samus.png";
import Image from "next/image";
import hmn from "../public/textures/hmn.png";
import cpu from "../public/textures/cpu.png";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: any;
  sources: any[];
}) {
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
            <Image src={cpu} alt="picture of samus" height={60} width={60} />
          </div>
        )}
        <span>{props.message.content}</span>
        {props.message.role == "user" && (
          <div className="-mr-16 -mt-4 rounded-full w-16 h-11 flex-shrink-0 flex items-center justify-center">
            <Image src={hmn} alt="picture of samus" height={60} width={60} />
          </div>
        )}
      </div>
    </div>
  );
}
