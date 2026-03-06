import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreePromptHub — Free AI Prompts & Premium Guides for Beginners",
  description:
    "150+ free AI prompts for ChatGPT, Claude, and Midjourney. Plus premium guides with tested frameworks from top sellers. Start making money with AI today.",
  keywords: [
    "AI prompts",
    "free prompts",
    "ChatGPT prompts",
    "Claude prompts",
    "Etsy AI",
    "AI for beginners",
    "prompt engineering",
    "digital products",
  ],
  openGraph: {
    title: "FreePromptHub — Free AI Prompts & Premium Guides",
    description:
      "150+ free AI prompts and premium extraction guides. Built for beginners.",
    url: "https://freeprompthub.com",
    siteName: "FreePromptHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
