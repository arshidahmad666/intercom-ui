"use client";
import Link from "next/link";
// import { chats } from "../lib/data";
import { chats } from "../lib/data";

export default function ChatList() {
  return (
    <aside className="w-full md:w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 text-xl font-semibold">Chats</div>
      <ul>
        {chats.map((chat) => (
          <Link href={`/chat/${chat.id}`} key={chat.id}>
            <li className="p-4 hover:bg-gray-100 flex gap-3 items-center cursor-pointer transition-all">
              <img
                src={chat.avatar}
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-medium">{chat.name}</p>
                <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
