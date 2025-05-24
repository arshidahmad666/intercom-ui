"use client";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="p-4 border-t bg-white flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (message.trim()) {
          console.log("Send:", message);
          setMessage("");
        }
      }}
    >
      <input
        className="flex-1 border rounded-xl px-4 py-2 outline-none"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl"
      >
        Send
      </button>
    </form>
  );
}
