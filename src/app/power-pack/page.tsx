"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    title: "500+ Premium Prompts",
    description: "Curated collection of high-converting prompts across 20+ business categories",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Agentic Blueprints",
    description: "Advanced multi-step prompt chains that automate entire workflows",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Copy-Paste Ready",
    description: "Instantly usable with ChatGPT, Claude, Gemini - no tweaking required",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
      </svg>
    ),
  },
  {
    title: "Lifetime Updates",
    description: "Get all future prompts and updates at no extra cost",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const categories = [
  "Sales & Lead Gen",
  "Copywriting",
  "Business Strategy",
  "Marketing",
  "Finance",
  "Hiring & Team",
  "Productivity",
  "AI Automation",
  "Customer Research",
  "Content Creation",
];

const testimonials = [
  {
    quote: "These prompts saved me 10+ hours a week on content creation alone.",
    author: "Sarah K.",
    role: "Marketing Director",
  },
  {
    quote: "The sales prompts helped me close 3 deals in my first week using them.",
    author: "Mike T.",
    role: "Sales Consultant",
  },
  {
    quote: "Finally, prompts that actually work for real business problems.",
    author: "Jennifer L.",
    role: "Founder",
  },
];

export default function PowerPackPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-500 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                LIMITED TIME OFFER
              </div>

              <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl mb-6">
                PROMPT <span className="text-amber-500">POWER PACK</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                500+ battle-tested AI prompts that turn ChatGPT into your personal
                business army. Sales, marketing, strategy, automation - all covered.
              </p>

              {/* Price Box */}
              <div className="bg-white/5 border border-amber-500/30 rounded-3xl p-8 max-w-md mx-auto mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-slate-500 line-through">$197</span>
                  <span className="text-5xl font-black text-white">$47</span>
                </div>
                <p className="text-amber-500 font-bold mb-6">One-time payment • Lifetime access</p>

                <a
                  href="https://1d77bj5bjgmu0s7241gzfctk7c.hop.clickbank.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-wider rounded-2xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:-translate-y-1"
                >
                  GET INSTANT ACCESS
                </a>

                <p className="mt-4 text-sm text-slate-500">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              What&apos;s Inside
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Categories Covered
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Prompts for every area of your business
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              What People Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <p className="text-slate-300 mb-4 italic">&quot;{t.quote}&quot;</p>
                  <div>
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What AI tools do these prompts work with?",
                  a: "All prompts are tested and optimized for ChatGPT (GPT-4), Claude, and Gemini. They work with any modern AI chatbot."
                },
                {
                  q: "How do I access the prompts after purchase?",
                  a: "You'll get instant access to download all prompts in organized folders. Copy, paste, and use immediately."
                },
                {
                  q: "Is there a money-back guarantee?",
                  a: "Yes! If you're not satisfied within 30 days, we'll refund you in full. No questions asked."
                },
                {
                  q: "Do I get future updates?",
                  a: "Absolutely. Your one-time purchase includes all future prompt additions and updates."
                }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-amber-500/10 to-transparent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to 10x Your AI Output?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Stop wasting time writing mediocre prompts. Get proven templates that work.
            </p>
            <a
              href="https://1d77bj5bjgmu0s7241gzfctk7c.hop.clickbank.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-wider rounded-2xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:-translate-y-1"
            >
              GET THE POWER PACK - $47
            </a>
            <p className="mt-6 text-slate-500">
              Join 1,000+ entrepreneurs already using these prompts
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
