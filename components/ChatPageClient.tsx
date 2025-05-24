"use client";

import { useParams } from "next/navigation";
import ChatWindow from "./ChatWindow";

export default function ChatPageClient() {
  const params = useParams();
  const chatId = params?.id as string;

  return <ChatWindow chatId={chatId} />;
}
