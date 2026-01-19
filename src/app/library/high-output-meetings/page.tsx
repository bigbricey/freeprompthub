"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstitutionalToolkit from "@/components/InstitutionalToolkit";
import Link from "next/link";

export default function HighOutputMeetingsPage() {
    const prompt = `Create a structured meeting agenda for [TOPIC]. Identify the 'Chairman' and 'Stakeholders'. Ensure the meeting focuses on 'leading indicators' and provides a high ratio of output to the time spent by attendees. Avoid status updates; focus on decision-making or knowledge exchange.`;

    return (
        <div className="min-h-screen bg-black text-slate-200">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
                    <span>/</span>
                    <span className="text-slate-300">High Output Meetings</span>
                </nav>

                <article className="prose prose-invert prose-emerald max-w-none">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-6xl mb-8">
                        <span className="text-emerald-500">High Output</span> Meetings
                    </h1>

                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        <p>
                            Meetings are usually seen as a drain on productivity. However, in Andy Grove's view, a meeting is a manager's <strong>medium of work</strong>. If a meeting identifies a problem that would have cost the company $100,000, and it took 10 hours total for all attendees, that meeting has massive leverage.
                        </p>

                        <p className="border-l-4 border-emerald-500/50 pl-6 italic text-slate-300">
                            "A meeting is nothing less than the medium through which managerial work is performed."
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Process-Oriented Meeting</h2>
                        <p>
                            These are regular, synchronized meetings designed for knowledge exchange and status monitoring.
                        </p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <strong className="text-white">One-on-Ones:</strong> The most important meeting. The subordinate sets the agenda. The manager listens and asks probing questions. Purpose: Mutual teaching and exchange of information.
                            </li>
                            <li>
                                <strong className="text-white">Staff Meetings:</strong> Opportunity for peers to interact and for the manager to observe group dynamics.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Mission-Oriented Meetings</h2>
                        <p>
                            These are ad-hoc meetings called to reach a specific decision. They are expensive. If you have 8 people in a room for an hour, that's a whole work-day of cost.
                            <strong>Rules:</strong> Never call a mission-oriented meeting unless you know exactly what decision needs to be made. Ensure the "Chairman" is defined and responsible for the result.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Chairman's Duty</h2>
                        <p>
                            The Chairman is responsible for the <strong>output</strong> of the meeting. This includes sending an agenda beforehand, maintaining focus during the meeting, and circulating minutes with specific action items immediately after. If a meeting ends without a clear decision or next step, it was a failure of leverage.
                        </p>
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">The Grove Blueprint: Meeting Architect</h3>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 font-medium">
                            Transform your next meeting into a high-output production event.
                        </p>

                        <div className="relative group">
                            <pre className="overflow-x-auto rounded-xl bg-black px-6 py-5 text-sm leading-relaxed text-emerald-400 border border-white/5 whitespace-pre-wrap">
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
