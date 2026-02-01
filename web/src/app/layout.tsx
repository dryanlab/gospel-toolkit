import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, BottomNav } from "@/components/Navigation";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "福音工具箱 | Gospel Toolkit",
  description: "福音问答、要理问答、护教学、书库 — 帮助你传扬福音的全方位工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased min-h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pb-20 lg:pb-0">
              {children}
            </main>
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
