import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory } from "@/data/prompts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding & Developer AI Prompts | FreePromptHub",
  description: "Discover 10+ AI prompts for code generation, debugging, documentation, and testing. Level up your development workflow - 100% free.",
  keywords: ["coding AI prompts", "developer prompts", "programming prompts", "code generation prompts", "debugging prompts"],
};

export default function CodingPage() {
  const prompts = getPromptsByCategory("coding");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {prompts.length} Prompts
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Coding & Developer Prompts
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Developer-focused AI prompts for code generation, debugging, documentation,
                testing, and optimization.
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
