"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import BlueprintCard from "@/components/BlueprintCard";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-client";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function performSearch() {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Keyword-based search across multiple columns
        const supabase = createClient();
        const { data, error: searchError } = await supabase
          .from("prompts")
          .select("*")
          .or(`title.ilike.%${query}%,description.ilike.%${query}%,content.ilike.%${query}%`)
          .limit(24);

        if (searchError) throw searchError;
        setResults(data || []);
      } catch (err: any) {
        console.error("Search error:", err);
        setError("Search protocol disruption. Please try a different query.");
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [query]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 text-center">
        <div className="stars-bg absolute inset-0 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-sm font-medium text-amber-500/80 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Local Logic Search Active
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-6">
            SEARCH <span className="text-gradient-cosmic">RESULTS</span>
          </h1>
          {query && !loading && (
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Discovered {results.length} relevant module{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
            </p>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-6"></div>
              <p className="text-amber-500/60 font-mono text-sm animate-pulse tracking-widest">
                // SCANNING LOGIC REPOSITORY...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-red-900/10 border border-red-500/20 rounded-2xl p-8 backdrop-blur-md">
              <svg className="mx-auto h-12 w-12 text-red-500/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl font-bold text-white mb-2">Interface Disruption</h2>
              <p className="text-slate-400">{error}</p>
            </div>
          ) : !query ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-bold text-white mb-2">Initiate Command</h2>
              <p className="text-slate-400">Specify search parameters in the console above.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16 bg-[#121214]/50 border border-white/5 rounded-2xl p-8 backdrop-blur-md">
              <svg
                className="mx-auto h-12 w-12 text-slate-600 mb-4"
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
              <h2 className="text-xl font-bold text-white mb-2">No Matches Found</h2>
              <p className="text-slate-400">The current query does not align with any known logic modules.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((prompt) => (
                prompt.type === 'blueprint' ? (
                  <BlueprintCard key={prompt.id} blueprint={prompt} />
                ) : (
                  <PromptCard key={prompt.id} prompt={prompt} />
                )
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
    <div className="min-h-screen bg-[#09090b]">
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
