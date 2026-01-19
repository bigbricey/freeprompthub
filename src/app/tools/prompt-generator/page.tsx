"use client";

import React, { useState } from 'react';
import { Copy, CheckCircle, Zap } from 'lucide-react'; // Ensure lucide-react is installed
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// HARD CODED DATA - NO IMPORTS FROM OTHER FILES TO PREVENT CRASHES
const GROVE_BLUEPRINTS = {
  "Strategy": {
    title: "The Strategic Inflection Point Detector",
    prompt: "Act as Andy Grove. Analyze the current [INSERT INDUSTRY]. Identify potential '10X forces' (competitors, technology, regulation) that could cause a Strategic Inflection Point. Advise on whether to pivot or persevere."
  },
  "Management": {
    title: "The High Output 1:1 Agenda",
    prompt: "Create a structured 1:1 meeting agenda for a subordinate with [LOW/HIGH] Task-Relevant Maturity. Focus on 'leading indicators' of trouble and mutual teaching, avoiding simple status updates."
  },
  "Production": {
    title: "The Black Box Production Audit",
    prompt: "Analyze the following business process as a 'Breakfast Factory'. Identify the 'Limiting Step' (the bottleneck) and define 3 'Black Box' metrics to monitor output quality without slowing down production."
  },
  "Coding": {
    title: "The 10x Engineer's Leverage",
    prompt: "Review the following code logic. Identify which activity provides the highest 'Managerial Leverage'—where a small input of effort will result in the highest output of value. Suggest refactoring for leverage."
  }
};

export default function GeneratorPage() {
  const [selectedTopic, setSelectedTopic] = useState("Strategy");
  const [generatedResult, setGeneratedResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    // DIRECT MAPPING - NO ASYNC, NO FETCH
    const blueprint = GROVE_BLUEPRINTS[selectedTopic as keyof typeof GROVE_BLUEPRINTS];
    setGeneratedResult(blueprint.prompt);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto border border-amber-900/30 p-12 rounded-[2.5rem] shadow-2xl bg-white/[0.02] backdrop-blur-xl">
          <h1 className="text-4xl font-black mb-10 tracking-tighter border-b border-white/10 pb-6 text-white uppercase">
            <Zap className="inline w-10 h-10 mr-4 text-amber-500 animate-pulse" />
            EXECUTIVE <span className="text-amber-500">LOGIC</span> ENGINE
          </h1>

          <div className="space-y-6 mb-10">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Target Objective</label>
            <div className="relative group">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-amber-500 outline-none appearance-none cursor-pointer transition-all hover:border-white/20"
              >
                {Object.keys(GROVE_BLUEPRINTS).map((key) => (
                  <option key={key} value={key}>{key.toUpperCase()}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-6 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-[0.2em] transition-all rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:-translate-y-1"
          >
            Initialize Generation
          </button>

          {generatedResult && (
            <div className="mt-12 p-8 bg-white/[0.03] border border-amber-500/30 rounded-3xl relative animate-in fade-in slide-in-from-bottom-4 group">
              <label className="block text-[10px] font-black text-amber-600 mb-4 uppercase tracking-[0.3em]">OUTPUT STREAM</label>
              <div className="pr-12">
                <p className="text-xl leading-relaxed text-slate-100 font-medium italic">"{generatedResult}"</p>
              </div>
              <button
                onClick={handleCopy}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-amber-500 transition-all active:scale-95"
                title="Copy to Clipboard"
              >
                {copied ? <CheckCircle className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
