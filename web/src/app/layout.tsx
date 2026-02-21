import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, BottomNav } from "@/components/Navigation";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "真理磐石 Rock of Truth",
  description: "改革宗信仰资源：家庭祭坛、圣经伴读、圣徒来信、韦敏斯德要理问答、福音问答、敬拜诗歌",
  keywords: ["改革宗", "韦敏斯德要理问答", "家庭祭坛", "圣经伴读", "福音", "Reformed", "Westminster Catechism"],
  metadataBase: new URL("https://rockoftruth.net"),
  manifest: "/manifest.json",
  openGraph: {
    title: "真理磐石 Rock of Truth",
    description: "改革宗信仰资源：家庭祭坛、圣经伴读、圣徒来信、韦敏斯德要理问答、福音问答、敬拜诗歌",
    type: "website",
    url: "https://rockoftruth.net",
    siteName: "真理磐石 Rock of Truth",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "真理磐石 Rock of Truth",
      },
    ],
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "真理磐石 Rock of Truth",
    description: "改革宗信仰资源：家庭祭坛、圣经伴读、圣徒来信、韦敏斯德要理问答、福音问答、敬拜诗歌",
    images: ["/og-default.jpg"],
  },
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
  alternates: {
    types: {
      "application/rss+xml": "https://rockoftruth.net/feed.xml",
    },
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
      <body className="antialiased min-h-screen overflow-x-hidden">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pb-20 lg:pb-0 overflow-x-hidden">
              {children}
            </main>
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
