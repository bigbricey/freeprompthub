import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgenticBlueprint Hub | Verified AI Agent Logic",
  description: "Architecting the future of autonomous intelligence. Get verified agentic blueprints and high-performance system prompts for AI agents.",
  keywords: ["Agentic Blueprints", "AI Agent Marketplace", "System Prompts", "Autonomous Logic", "B2B AI Solutions"],
  openGraph: {
    title: "AgenticBlueprint Hub | Verified AI Agent Logic",
    description: "Architecting the future of autonomous intelligence with verified agentic blueprints.",
    url: "https://agenticblueprint.com",
    siteName: "AgenticBlueprint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticBlueprint Hub | Verified AI Agent Logic",
    description: "Architecting the future of autonomous intelligence with verified agentic blueprints.",
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
