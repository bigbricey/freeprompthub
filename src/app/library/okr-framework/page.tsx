"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstitutionalToolkit from "@/components/InstitutionalToolkit";
import Link from "next/link";

export default function OKRFrameworkPage() {
    const prompt = `Define 3 Objectives and 5 Key Results for [PROJECT/GOAL]. Ensure Key Results are measurable, time-bound, and directly verifiable. Avoid vanity metrics; focus only on outcomes that move the needle. Maintain a high standard of precision in your Key Results.`;

    return (
        <div className="min-h-screen bg-black text-slate-200">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
                    <span>/</span>
                    <span className="text-slate-300">The OKR Framework</span>
                </nav>

                <article className="prose prose-invert prose-purple max-w-none">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-6xl mb-8">
                        The <span className="text-purple-500">OKR</span> Framework
                    </h1>

                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        <p>
                            Objectives and Key Results (OKRs) are the "Secret Sauce" behind the rapid scaling of Intel and Google. The framework, popularized by John Doerr and pioneered by Andy Grove, is a goal-setting protocol that ensures entire organizations are aligned toward the same mission.
                        </p>

                        <p className="border-l-4 border-purple-500/50 pl-6 italic text-slate-300">
                            "The objective is the direction. Key results are the milestones that tell you if you've reached your destination."
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Objective (The "Where")</h2>
                        <p>
                            An Objective is a qualitative, aspirational statement of what you want to achieve. It should be aggressive, yet realistic. It should provide meaning and motivation to the team.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Key Results (The "How")</h2>
                        <p>
                            Key Results are the quantitative indicators of success. They must be measurable and verifiable. A Key Result is not an activity (e.g., "Launch a marketing campaign"); it is an outcome (e.g., "Acquire 10,000 new users").
                            <strong>Grove's Rule:</strong> Either you met the Key Result, or you didn't. There is no middle ground.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Alignment and Focus</h2>
                        <p>
                            The power of OKRs comes from focus. An organization should have no more than 3-5 high-level objectives. OKRs should be transparent across the organization, allowing every individual to see how their work contributes to the top-level goals. This creates a "Line of Sight" from the daily task to the organizational mission.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Maturity and Adaptation</h2>
                        <p>
                            OKRs are not set-it-and-forget-it. They require regular check-ins and scoring. In a high-velocity environment, tactical OKRs may even be adjusted mid-quarter if a Strategic Inflection Point is detected.
                        </p>
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">The Grove Blueprint: OKR Architect</h3>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 font-medium">
                            Structure your next mission with absolute quantitative precision.
                        </p>

                        <div className="relative group">
                            <pre className="overflow-x-auto rounded-xl bg-black px-6 py-5 text-sm leading-relaxed text-purple-400 border border-white/5 whitespace-pre-wrap">
                                {prompt}
                            </pre>
                            <button
                                onClick={() => navigator.clipboard.writeText(prompt)}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>

                <InstitutionalToolkit />
            </main>

            <Footer />
        </div>
    );
}
