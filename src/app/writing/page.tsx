import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory } from "@/data/prompts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Content AI Prompts | FreePromptHub",
  description: "Discover 10+ AI prompts for blog posts, social media, copywriting, and creative writing. Boost your content creation - 100% free.",
  keywords: ["writing AI prompts", "content creation prompts", "copywriting prompts", "blog prompts", "social media prompts"],
};

export default function WritingPage() {
  const prompts = getPromptsByCategory("writing");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {prompts.length} Prompts
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Writing & Content Prompts
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                AI prompts for content creation, copywriting, and creative writing.
                From blog posts to social media to fiction.
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
