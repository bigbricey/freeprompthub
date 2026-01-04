import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreePromptHub | Premium AI Agent Blueprints & Prompts",
  description: "The world's premier destination for high-performance AI prompts and verified agentic blueprints. Architecting the future of autonomous intelligence.",
  keywords: ["FreePromptHub", "Agentic Blueprints", "AI Agent Marketplace", "System Prompts", "Autonomous Logic"],
  openGraph: {
    title: "FreePromptHub | Premium AI Agent Blueprints",
    description: "The premier hub for high-performance AI prompts and verified agentic blueprints.",
    url: "https://freeprompthub.com",
    siteName: "FreePromptHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreePromptHub | Premium AI Agent Blueprints",
    description: "The premier hub for high-performance AI prompts and verified agentic blueprints.",
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
