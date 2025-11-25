import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreePromptHub - Free AI Prompts Directory",
  description: "Discover and share the best AI prompts for ChatGPT, Claude, Midjourney, and more. Free prompt templates to boost your productivity.",
  keywords: ["AI prompts", "ChatGPT prompts", "Claude prompts", "Midjourney prompts", "free prompts", "prompt templates"],
  openGraph: {
    title: "FreePromptHub - Free AI Prompts Directory",
    description: "Discover and share the best AI prompts for ChatGPT, Claude, Midjourney, and more.",
    url: "https://freepromphub.com",
    siteName: "FreePromptHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreePromptHub - Free AI Prompts Directory",
    description: "Discover and share the best AI prompts for ChatGPT, Claude, Midjourney, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
