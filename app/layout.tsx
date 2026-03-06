import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreePromptHub — Free AI Prompts & Premium Guides",
  description:
    "Copy-paste AI prompts for Etsy sellers, content creators, and beginners. Free resources plus premium extraction guides.",
  openGraph: {
    title: "FreePromptHub — Free AI Prompts & Premium Guides",
    description:
      "Copy-paste AI prompts for Etsy sellers, content creators, and beginners.",
    url: "https://freeprompthub.com",
    siteName: "FreePromptHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
