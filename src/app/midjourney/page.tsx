import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory } from "@/data/prompts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midjourney Prompts - Free AI Art Prompts | FreePromptHub",
  description: "Discover 10+ stunning Midjourney prompts for portraits, products, logos, and more. Copy and create amazing AI art - 100% free.",
  keywords: ["Midjourney prompts", "AI art prompts", "Midjourney v6 prompts", "free Midjourney prompts"],
};

export default function MidjourneyPage() {
  const prompts = getPromptsByCategory("midjourney");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                {prompts.length} Prompts
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Midjourney Prompts
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Creative image generation prompts for Midjourney. Create stunning visuals
                for portraits, products, art, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Prompts Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {prompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
