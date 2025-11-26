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
    // Map purpose to category
    let category = aiTool;
    if (purpose === "creative" && aiTool === "midjourney") {
      category = "midjourney";
    } else if (purpose === "creative") {
      category = "midjourney";
    }

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
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Free Tool
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                AI Prompt Generator
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Get the perfect prompt for your needs in seconds. Select your purpose and
                preferred AI tool, and we&apos;ll find a matching prompt from our curated library.
              </p>
            </div>
          </div>
        </section>

        {/* Generator Tool */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="space-y-6">
                {/* Purpose Select */}
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    What do you want to create?
                  </label>
                  <select
                    id="purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="mt-2 block w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select a purpose...</option>
                    {purposes.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* AI Tool Select */}
                <div>
                  <label
                    htmlFor="aiTool"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Which AI tool will you use?
                  </label>
                  <select
                    id="aiTool"
                    value={aiTool}
                    onChange={(e) => setAiTool(e.target.value)}
                    className="mt-2 block w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select an AI tool...</option>
                    {aiTools.map((tool) => (
                      <option key={tool.value} value={tool.value}>
                        {tool.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  className="w-full rounded-lg bg-indigo-600 px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Generate Prompt
                </button>
              </div>

              {/* Generated Prompt */}
              {generatedPrompt && (
                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-600 dark:bg-slate-900">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {generatedPrompt.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {generatedPrompt.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                      {generatedPrompt.category}
                    </span>
                  </div>

                  <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300">
                      {generatedPrompt.prompt}
                    </pre>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                    >
                      {copied ? (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy Prompt
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Try Another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Tips for Better Results
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="font-medium text-slate-900 dark:text-white">Be Specific</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Replace the placeholders with detailed, specific information for better outputs.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="font-medium text-slate-900 dark:text-white">Iterate</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Don&apos;t settle for the first result. Refine and regenerate to find the perfect prompt.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="font-medium text-slate-900 dark:text-white">Add Context</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Include relevant background information to help the AI understand your needs.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="font-medium text-slate-900 dark:text-white">Customize</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Feel free to modify the prompts to match your unique requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
