import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About FreePromptHub | Our Mission",
    description: "Learn about FreePromptHub's mission to democratize AI. We provide high-quality, open-source prompts for ChatGPT, Claude, and Midjourney completely free.",
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
                            ABOUT <span className="text-gradient-cosmic">FREEPROMPTHUB</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Democratizing Artificial Intelligence for everyone.
                        </p>
                    </div>

                    {/* Content Cards */}
                    <div className="space-y-8">
                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                OUR MISSION
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                We believe that the power of AI should be accessible to everyone, not just tech experts.
                                FreePromptHub was built to be the ultimate open-source repository for high-quality AI prompts.
                                Whether you are a developer, a marketer, or a creative artist, our goal is to provide you with
                                the "cheat codes" you need to unlock the full potential of tools like ChatGPT, Claude, and Midjourney.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                WHY FREE?
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                Most "prompt marketplaces" charge you for basic text. We think that's wrong.
                                Innovation shouldn't be paywalled. We monetize through partnerships with premium tool providers
                                (like the ones listed on our homepage) so that we can keep the core prompt library 100% free for you.
                            </p>
                        </div>

                        <div className="holo-card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-pink-500 rounded-full"></span>
                                THE TEAM
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                FreePromptHub is curated by a small team of AI enthusiasts and prompt engineers.
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
