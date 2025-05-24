export const chats = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/avatars/john.png",
    lastMessage: "Hey, how can I help?",
    messages: [
      { from: "user", text: "Hi there!" },
      { from: "me", text: "Hello! How can I assist you?" },
      { from: "user", text: "I need help with my order." },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/avatars/jane.png",
    lastMessage: "Thank you!",
    messages: [
      { from: "me", text: "Let me check that for you." },
      { from: "user", text: "Thanks!" },
    ],
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatar: "/avatars/alice.png",
    lastMessage: "See you tomorrow!",
    messages: [
      { from: "user", text: "Are we still on for tomorrow?" },
      { from: "me", text: "Yes! Looking forward to it." },
    ],
  },
  {
    id: "4",
    name: "Michael Brown",
    avatar: "/avatars/michael.png",
    lastMessage: "Got it, thanks!",
    messages: [
      { from: "user", text: "Can you send me the report?" },
      { from: "me", text: "Sure, I will email it shortly." },
      { from: "user", text: "Got it, thanks!" },
    ],
  },
];
