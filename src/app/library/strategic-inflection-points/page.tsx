"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstitutionalToolkit from "@/components/InstitutionalToolkit";
import Link from "next/link";

export default function StrategicInflectionPointsPage() {
    const prompt = `Act as Andy Grove. Analyze the current [INDUSTRY/TOPIC]. Identify potential '10X forces' (competitors, technology, regulation) that could cause a Strategic Inflection Point. Advise on whether to pivot or persevere.`;

    return (
        <div className="min-h-screen bg-black text-slate-200">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
                    <span>/</span>
                    <span className="text-slate-300">Strategic Inflection Points</span>
                </nav>

                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-6xl mb-8">
                        The <span className="text-blue-500">Strategic Inflection</span> Point
                    </h1>

                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        <p>
                            In business, things change. But some changes are more fundamental than others. Andy Grove, the legendary CEO of Intel, coined the term <strong>Strategic Inflection Point (SIP)</strong> to describe a time in the life of a business when its fundamentals are about to change.
                        </p>

                        <p className="border-l-4 border-blue-500/50 pl-6 italic text-slate-300">
                            "A strategic inflection point is a time in the life of a business when its fundamentals are about to change. That change can mean an opportunity to rise to new heights. But it may just as likely signal the beginning of the end."
                        </p>

                        <p>
                            An SIP is often caused by what Grove calls <strong>"10X forces."</strong> These are factors that shift the competitive landscape not slightly, but by an order of magnitude. These forces can come from new technology (like the internet or AI), regulatory changes, or a massive shift in consumer behavior.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Recognizing the Signal</h2>
                        <p>
                            The most difficult part of an SIP is recognizing it while it's happening. The early signs are often dismissed as "noise" or outliers. Grove highlights that the person closest to the customer—the salesperson or the support agent—is often the first to feel the shift, while the executives are the last to know.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Valley of Death</h2>
                        <p>
                            Navigating an SIP requires crossing the "Valley of Death." This is the period of chaos where the old strategy no longer works, and the new strategy hasn't yet proven itself. It requires <strong>Intellectual Honesty</strong> and the courage to abandon once-successful models.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Application: The 10X Audit</h2>
                        <p>
                            How do you know if you are facing an SIP? Ask yourself: Has the most important competitor changed? Has the most important technology changed? If the balance of power has shifted by a factor of 10, the old rules no longer apply. You must pivot or you will perish.
                        </p>
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">The Grove Blueprint: SIP Detector</h3>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 font-medium">
                            Initialize this analytical protocol to identify "10X Forces" in your industry.
                        </p>

                        <div className="relative group">
                            <pre className="overflow-x-auto rounded-xl bg-black px-6 py-5 text-sm leading-relaxed text-blue-400 border border-white/5 whitespace-pre-wrap">
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
