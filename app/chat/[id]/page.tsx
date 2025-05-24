import ChatList from "@/components/ChatList";
import ChatPageClient from "@/components/ChatPageClient";

export default function ChatPage() {
  return (
    <div className="flex h-screen w-width">
      <ChatList />
      <ChatPageClient />
    </div>
  );
}
