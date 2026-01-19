import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
    {
        slug: "managerial-leverage",
        title: "Managerial Leverage",
        description: "How to maximize the output of your organization by focusing on high-impact activities.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "from-amber-500/20 to-amber-900/20",
        border: "border-amber-500/20",
        hover: "hover:border-amber-500/40"
    },
    {
        slug: "strategic-inflection-points",
        title: "Strategic Inflection Points",
        description: "Recognizing the massive shifts in business that require a fundamental change in strategy.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: "from-blue-500/20 to-blue-900/20",
        border: "border-blue-500/20",
        hover: "hover:border-blue-500/40"
    },
    {
        slug: "high-output-meetings",
        title: "High Output Meetings",
        description: "Transforming meetings from time-wasters into powerful tools for organizational alignment.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: "from-emerald-500/20 to-emerald-900/20",
        border: "border-emerald-500/20",
        hover: "hover:border-emerald-500/40"
    },
    {
        slug: "okr-framework",
        title: "The OKR Framework",
        description: "The definitive guide to Objectives and Key Results, as pioneered by Intel.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "from-purple-500/20 to-purple-900/20",
        border: "border-purple-500/20",
        hover: "hover:border-purple-500/40"
    },
    {
        slug: "black-box-production",
        title: "Black Box Production",
        description: "Applying industrial production principles to knowledge-based management work.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        color: "from-cyan-500/20 to-cyan-900/20",
        border: "border-cyan-500/20",
        hover: "hover:border-cyan-500/40"
    }
];

export default function LibraryIndex() {
    return (
        <div className="min-h-screen bg-black text-slate-200">
            <Header />

            <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-black tracking-tight text-white uppercase sm:text-7xl">
                        THE <span className="text-amber-500">GROVE</span> LIBRARY
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                        High-leverage management frameworks and mental models for the modern operator.
                        Deterministic blueprints for organizational output.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/library/${article.slug}`}
                            className={`group relative overflow-hidden rounded-3xl border ${article.border} bg-white/[0.02] p-8 transition-all hover:-translate-y-2 ${article.hover} hover:bg-white/[0.04]`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 transition-opacity group-hover:opacity-100`}></div>

                            <div className="relative z-10">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-transform group-hover:scale-110">
                                    {article.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {article.description}
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white">
                                    Study Architecture
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
