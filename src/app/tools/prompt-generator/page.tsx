"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRandomPrompt, Prompt } from "@/data/prompts";

const purposes = [
  { value: "business", label: "Business & Money-Making" },
  { value: "writing", label: "Writing & Content" },
  { value: "coding", label: "Coding & Development" },
  { value: "creative", label: "Creative & Design" },
  { value: "real-estate", label: "Real Estate" },
  { value: "legal", label: "Legal & Contracts" },
  { value: "marketing", label: "Marketing & Ads" },
  { value: "sales", label: "Sales & Negotiation" },
  { value: "finance", label: "Finance & Investing" },
  { value: "hr", label: "HR & Recruiting" },
  { value: "saas", label: "SaaS & Product" },
  { value: "consulting", label: "Consulting" },
  { value: "healthcare", label: "Healthcare" },
  { value: "content-creation", label: "Content Creation" },
];

const aiTools = [
  { value: "chatgpt", label: "ChatGPT" },
  { value: "claude", label: "Claude" },
  { value: "midjourney", label: "Midjourney" },
];

export default function PromptGeneratorPage() {
  const [purpose, setPurpose] = useState("");
  const [aiTool, setAiTool] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState<Prompt | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    // Map purpose to category logic
    let category = aiTool;

    // If a specific niche is selected, try to pull from that niche first
    if (purpose && purpose !== "creative" && purpose !== "writing" && purpose !== "coding" && purpose !== "business") {
      // For specific niches like real-estate, legal, etc.
      category = purpose;
    } else if (purpose === "creative" && aiTool === "midjourney") {
      category = "midjourney";
    } else if (purpose === "creative") {
      category = "midjourney"; // Default to midjourney for creative if no tool selected or text tool
    }

    // Fallback logic if category is still just a tool name but we want niche content
    // Actually, getRandomPrompt handles (category, subcategory)
    // We can pass the purpose as the category if it matches a file name

    const prompt = getRandomPrompt(category || undefined, purpose || undefined);
    setGeneratedPrompt(prompt);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen relative bg-[#030014]">
      <div className="stars-bg"></div>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                FREE TOOL ACCESS
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                AI PROMPT <span className="text-gradient-cosmic">GENERATOR</span>
              </h1>
              <p className="mt-4 text-lg text-slate-400">
                Select your mission parameters. We will retrieve the optimal prompt from our neural network.
              </p>
            </div>
          </div>
        </section>

        {/* Generator Tool */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="holo-card rounded-2xl p-8">
              <div className="space-y-6">
                {/* Purpose Select */}
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-bold text-cyan-400 tracking-wide mb-2"
                  >
                    // MISSION OBJECTIVE
                  </label>
                  <select
                    id="purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="block w-full cursor-pointer rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="" className="bg-slate-900">Select objective...</option>
                    {purposes.map((p) => (
                      <option key={p.value} value={p.value} className="bg-slate-900">
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* AI Tool Select */}
                <div>
                  <label
                    htmlFor="aiTool"
                    className="block text-sm font-bold text-purple-400 tracking-wide mb-2"
                  >
                    // AI MODEL
                  </label>
                  <select
                    id="aiTool"
                    value={aiTool}
                    onChange={(e) => setAiTool(e.target.value)}
                    className="block w-full cursor-pointer rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-900">Select model...</option>
                    {aiTools.map((tool) => (
                      <option key={tool.value} value={tool.value} className="bg-slate-900">
                        {tool.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-[1.02]"
                >
                  INITIALIZE GENERATION
                </button>
              </div>

              {/* Generated Prompt */}
              {generatedPrompt && (
                <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {generatedPrompt.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {generatedPrompt.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-400">
                      {generatedPrompt.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="rounded-lg bg-black/50 border border-white/5 p-4">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300">
                      {generatedPrompt.prompt}
                    </pre>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/30"
                    >
                      {copied ? (
                        <>
                          <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          DATA COPIED
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          COPY DATA
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-bold text-slate-300 transition-colors hover:text-white hover:border-white/30"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      RETRY
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="holo-card rounded-lg p-4">
                <h3 className="font-bold text-cyan-400 text-sm mb-1">// BE SPECIFIC</h3>
                <p className="text-xs text-slate-400">
                  Replace placeholders with precise data for optimal output.
                </p>
              </div>
              <div className="holo-card rounded-lg p-4">
                <h3 className="font-bold text-purple-400 text-sm mb-1">// ITERATE</h3>
                <p className="text-xs text-slate-400">
                  Refine and regenerate to achieve maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
