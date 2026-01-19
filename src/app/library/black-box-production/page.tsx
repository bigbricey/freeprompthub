"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstitutionalToolkit from "@/components/InstitutionalToolkit";
import Link from "next/link";

export default function BlackBoxProductionPage() {
    const prompt = `Analyze the following business process as a 'Breakfast Factory'. Identify the 'Limiting Step' (the bottleneck) and define 3 'Black Box' metrics to monitor output quality without slowing down production. Apply industrial manufacturing principles to this knowledge-work workflow.`;

    return (
        <div className="min-h-screen bg-black text-slate-200">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
                    <span>/</span>
                    <span className="text-slate-300">Black Box Production</span>
                </nav>

                <article className="prose prose-invert prose-cyan max-w-none">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-6xl mb-8">
                        <span className="text-cyan-500">Black Box</span> Production
                    </h1>

                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        <p>
                            In <em>High Output Management</em>, Andy Grove introduces the concept of the <strong>Breakfast Factory</strong>. He argues that management is not a creative "art" but a series of production processes that can be modeled using industrial engineering principles.
                        </p>

                        <p className="border-l-4 border-cyan-500/50 pl-6 italic text-slate-300">
                            "The logic of a production process is identical whether you are making silicon chips, cooking breakfast, or writing software."
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Limiting Step</h2>
                        <p>
                            Every production process has a <strong>Limiting Step</strong>—the bottleneck that dictates the overall output of the factory. In a breakfast factory, it might be the time it takes to toast the bread. No matter how fast you cook the eggs, breakfast isn't ready until the toast is done. Finding and optimizing the Limiting Step is the highest-leverage activity in production.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Black Box Concept</h2>
                        <p>
                            Knowledge work is often opaque. You can't see "work" happening in a developer's brain. Grove suggests treating these processes as a <strong>Black Box</strong>. You define the inputs and the desired outputs, and use indicators (metrics) to sense what is happening inside without having to open the box (micro-manage).
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Leading vs. Lagging Indicators</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <strong className="text-white">Leading Indicators:</strong> Metrics that allow you to see a problem before it happens (e.g., the number of bugs found in code review).
                            </li>
                            <li>
                                <strong className="text-white">Lagging Indicators:</strong> Metrics that show you a problem after it has already occurred (e.g., the number of customer support tickets).
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quality Assurance: In-Process Inspection</h2>
                        <p>
                            Quality should be inspected at the <strong>lowest-value stage</strong> possible. Finding a bug during coding is cheap. Finding a bug after it's deployed to millions of users is incredibly expensive. In-process inspection—like code reviews or automated tests—is the "Quiet Leverage" of production.
                        </p>
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">The Grove Blueprint: Black Box Auditor</h3>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 font-medium">
                            Audit your production line for hidden bottlenecks and throughput leaks.
                        </p>

                        <div className="relative group">
                            <pre className="overflow-x-auto rounded-xl bg-black px-6 py-5 text-sm leading-relaxed text-cyan-400 border border-white/5 whitespace-pre-wrap">
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
