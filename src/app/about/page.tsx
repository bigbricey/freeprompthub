import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About AgenticBlueprint | The Logic Factory",
    description: "Learn about the mission to architect high-performance AI agent logic. We provide verified blueprints for the autonomous era.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-[#030014]">
            <div className="stars-bg"></div>
            <Header />
            <main className="relative z-10 py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] mb-6">
                            ABOUT <span className="text-gradient-cosmic">AGENTICBLUEPRINT</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Architecting verified logic for the autonomous 2026 era.
                        </p>
                    </div>

                    {/* Content Cards */}
                    <div className="space-y-8">
                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                OUR VISION
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                In 2026, AI is no longer just a chatbot; it is a workforce.
                                AgenticBlueprint Hub was founded to provide the verified logic chains—the "blueprints"—that drive autonomous agents.
                                We focus on verification, performance, and reliability, ensuring that every premium module in our vault
                                is ready for production environments.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                HYBRID DATA MODEL
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                We maintain a massive directory of free prompts to support the community.
                                However, for high-stakes enterprise workflows, we offer premium Verified Blueprints.
                                These high-ticket assets undergo rigorous auditing to ensure they handle hallucination,
                                tool-calling, and edge cases with 99%+ reliability.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-pink-500 rounded-full"></span>
                                THE TEAM
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                FreePromptHub is maintained by a dedicated team of AI engineers.
                                We constantly test and refine our prompts to ensure they deliver the best results.
                                Have a suggestion? We'd love to hear from you.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
