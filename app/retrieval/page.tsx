import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={<div></div>}
      showIngestForm={false}
      placeholder={"Ask me about melee frame data"}
      emoji="🐶"
    />
  );
}
