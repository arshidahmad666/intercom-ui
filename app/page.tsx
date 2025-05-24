import ChatList from "@/components/ChatList";

export default function Home() {
  return (
    <main className="flex h-screen">
      <ChatList />
      <div className="flex-1 hidden md:flex items-center justify-center text-gray-500">
        Select a chat to start messaging
      </div>
    </main>
  );
}
