import { AFFILIATE_OFFERS } from "@/config/monetization";
import Link from "next/link";

const SlotIcons = {
    1: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    2: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    3: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.228-.445a2 2 0 01-1.022-.547l-1.39-1.39a2 2 0 010-2.828l1.39-1.39a2 2 0 011.022-.547l2.228-.445a4 4 0 012.574.345l.675.337a6 6 0 003.86.517l2.387-.477a2 2 0 001.022-.547l1.39-1.39a2 2 0 012.828 0l1.39 1.39a2 2 0 010 2.828l-1.39 1.39z" />
        </svg>
    ),
};

export default function InstitutionalToolkit() {
    // Convert object to array for mapping
    const offers = Object.entries(AFFILIATE_OFFERS).map(([key, value]) => ({
        id: parseInt(key.replace("slot", "")),
        ...value
    }));

    return (
        <div className="mt-24 border-t border-white/5 pt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
                    <span className="text-amber-500">VERIFIED</span> STRATEGIC TOOLKIT
                </h2>
                <p className="mt-4 text-slate-400 font-medium">
                    High-leverage resources for implementation excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {offers.map((offer) => (
                    <Link
                        key={offer.id}
                        href={offer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]"
                    >
                        {/* Gradient Background */}
                        <div
                            className={`absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 bg-gradient-to-br ${offer.gradient}`}
                        ></div>

                        <div className="relative z-10">
                            <div className="mb-6 flex items-center justify-between">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${offer.gradient} shadow-lg shadow-black/20`}>
                                    {SlotIcons[offer.id as keyof typeof SlotIcons]}
                                </div>
                                {offer.badge && (
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {offer.badge}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                {offer.description}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2">
                                Access Asset
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Institutional Disclosure */}
            <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-xs font-medium text-slate-500 leading-relaxed italic">
                    <strong className="text-slate-400 not-italic">Institutional Disclosure:</strong> Some links above are strategic partner links.
                    We only authorize blueprints and tools verified for highest-grade operational value.
                </p>
            </div>
        </div>
    );
}
