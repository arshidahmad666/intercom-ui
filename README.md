# 💬 Intercom-Style Chat UI Clone

This project is a **responsive chat interface** inspired by Intercom's admin panel — built as part of the BeyondChats Node Frontend Internship Assignment.

> 🛠 Tech Stack: `Next.js 14`, `Tailwind CSS`, `TypeScript`, `App Router`, `Client Components`

---

## 🔥 Features

- ✅ Intercom-style 2-pane layout (chat list + chat window)
- ✅ Fully responsive for desktop and mobile
- ✅ Clean UI with smooth transitions
- ✅ Dummy chat data (avatars, messages, send button)
- ✅ State managed via props and local dummy data
- ✅ Dark text and border-enhanced bubbles for visibility
- ✅ Clean folder structure with reusable components

---

## 📂 Folder Structure
intercom-ui/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── chat/
│ └── [id]/page.tsx
├── components/
│ ├── ChatList.tsx
│ ├── ChatWindow.tsx
│ ├── ChatPageClient.tsx
│ └── MessageInput.tsx
├── lib/
│ └── data.ts # Dummy chat data
├── public/
│ └── avatars/ # john.png, jane.png
├── styles/
│ └── globals.css
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js


