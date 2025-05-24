"use client";
import { chats } from "../lib/data";
import MessageInput from "./MessageInput";

export default function ChatWindow({ chatId }: { chatId: string }) {
  const chat = chats.find((c) => c.id === chatId);

  if (!chat) return <div className="p-10">Chat not found.</div>;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Chat header */}
      <div className="p-4 border-b bg-white flex items-center gap-3">
        <img
          src={chat.avatar}
          className="h-10 w-10 rounded-full"
          alt="avatar"
        />
        <span className="font-semibold">{chat.name}</span>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl max-w-xs text-sm ${
              msg.from === "me"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-100 text-gray-900 border border-gray-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message input */}
      <MessageInput />
    </div>
  );
}
