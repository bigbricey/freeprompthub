import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory } from "@/data/prompts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Money-Making AI Prompts | FreePromptHub",
  description: "Discover 10+ AI prompts to start businesses, generate income, and grow your revenue. Prompts for sales, marketing, and entrepreneurship - 100% free.",
  keywords: ["business AI prompts", "money-making prompts", "entrepreneur prompts", "sales prompts", "marketing AI prompts"],
};

export default function BusinessPage() {
  const prompts = getPromptsByCategory("business");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {prompts.length} Prompts
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Business & Money-Making Prompts
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                AI prompts to help you start businesses, generate income, and scale your revenue.
                From idea validation to sales copy to pitch decks.
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
