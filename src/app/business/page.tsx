import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory } from "@/data/prompts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business & Money-Making AI Prompts | FreePromptHub",
  description: "Discover 10+ AI prompts to start businesses, generate income, and grow your revenue. Prompts for sales, marketing, and entrepreneurship - 100% free.",
  keywords: ["business AI prompts", "money-making prompts", "entrepreneur prompts", "sales prompts", "marketing AI prompts"],
};

const recommendedTools = [
  {
    name: "Copy.ai",
    description: "AI writing assistant that helps you create marketing copy, blog posts, and social media content in seconds.",
    href: "#", // Placeholder - replace with affiliate link
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Jasper",
    description: "Create content 10x faster with AI. Perfect for blog posts, ads, emails, and more with brand voice consistency.",
    href: "#", // Placeholder - replace with affiliate link
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Survey Junkie",
    description: "Earn extra income while building your business. Get paid to share your opinions through surveys.",
    href: "#", // Placeholder - replace with affiliate link
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-600",
  },
];

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

        {/* Recommended Tools Section */}
        <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Recommended Tools to Execute These Prompts
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
                Supercharge your business with these AI-powered tools
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                >
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tool.gradient} text-white`}
                  >
                    {tool.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {tool.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                    Try it free
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
              * Some links may be affiliate links. We only recommend tools we believe provide value.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
