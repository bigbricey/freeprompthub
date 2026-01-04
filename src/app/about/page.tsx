import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About FreePromptHub | The Logic Factory",
    description: "Learn about FreePromptHub's mission to architect high-performance AI prompts and verified agentic blueprints.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-[#09090b]">
            <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-amber-600/5 to-transparent pointer-events-none"></div>
            <Header />
            <main className="relative z-10 py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-6">
                            ABOUT <span className="text-gradient-cosmic">FREEPROMPTHUB</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Architecting verified logic for the autonomous 2026 era.
                        </p>
                    </div>

                    {/* Content Cards */}
                    <div className="space-y-8">
                        <div className="holo-card rounded-2xl p-8 border border-white/5 bg-[#121214]">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.2)]"></span>
                                OUR VISION
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                In 2026, AI is no longer just a chatbot; it is a workforce.
                                FreePromptHub was founded to provide the verified logic chains—the "blueprints"—that drive autonomous agents.
                                We focus on verification, performance, and reliability, ensuring that every premium module in our vault
                                is ready for production environments.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8 border border-white/5 bg-[#121214]">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"></span>
                                HYBRID DATA MODEL
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                We maintain a massive directory of free prompts to support the community.
                                However, for high-stakes enterprise workflows, we offer premium Verified Blueprints.
                                These high-ticket assets undergo rigorous auditing to ensure they handle hallucination,
                                tool-calling, and edge cases with 99%+ reliability.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8 border border-white/5 bg-[#121214]">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)]"></span>
                                LOGIC INVENTORY
                            </h2>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Our neural repository is structured into high-intent sectors, each containing verified 'Layer Cake' modules designed for institutional use.
                            </p>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {["Legal", "Finance", "Pharma", "Engineering", "Real Estate", "Biotech", "Cybersecurity", "Web3"].map(sector => (
                                    <div key={sector} className="rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-xs font-bold text-slate-400 tracking-wider uppercase">
                                        // {sector}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="holo-card rounded-2xl p-8 border border-white/5 bg-[#121214]">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-slate-500 rounded-full"></span>
                                SYSTEM MAINTENANCE
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                FreePromptHub is operated by a network of logic architects.
                                We continuously refine the baseline performance of our prompts to handle model drift and emerging AI safety standards.
                                Our goal is to maintain the most reliable prompt registry in the intelligence economy.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
