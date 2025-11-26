"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getAllPrompts, Prompt } from "@/data/prompts";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const allPrompts = getAllPrompts();

  const filteredPrompts: Prompt[] = query
    ? allPrompts.filter(
        (prompt) =>
          prompt.title.toLowerCase().includes(query.toLowerCase()) ||
          prompt.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 dark:from-slate-900 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Search Results
            </h1>
            {query && (
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                {filteredPrompts.length} result{filteredPrompts.length !== 1 ? "s" : ""} for &quot;{query}&quot;
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!query ? (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h2 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">
                Enter a search term
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Type something in the search box to find prompts.
              </p>
            </div>
          ) : filteredPrompts.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">
                No prompts found for &quot;{query}&quot;
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Try a different search term or browse our categories.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="py-24 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            </div>
          }
        >
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
