import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, BottomNav } from "@/components/Navigation";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "真理磐石 | Rock of Truth",
  description: "福音问答、要理问答、护教学、书库 — 扎根真理，传扬福音",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "真理磐石",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5KE7BNDTY3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5KE7BNDTY3');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
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
