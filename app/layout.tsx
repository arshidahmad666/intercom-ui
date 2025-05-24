import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercom UI - BeyondChats",
  description: "Admin panel for chat management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex h-screen">{children}</div>
      </body>
    </html>
  );
}
