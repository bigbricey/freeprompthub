import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen relative bg-[#030014]">
            <div className="stars-bg"></div>
            <Header />
            <main className="relative z-10 py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] mb-6">
                            CONTACT <span className="text-gradient-cosmic">COMMAND</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Establish a secure channel with our team.
                        </p>
                    </div>

                    <div className="mx-auto max-w-2xl">
                        <div className="holo-card rounded-2xl p-8 text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/20 text-cyan-400 mb-6">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-4">
                                B2B Agentic Logic Audits
                            </h2>
                            <p className="text-slate-300 mb-8">
                                Need a specialized logic chain for your enterprise AI agents?
                                We provide security audits, performance optimization, and custom blueprint development.
                            </p>

                            <a
                                href="mailto:consult@freeprompthub.com"
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-300 hover:scale-[1.02]"
                            >
                                consult@freeprompthub.com
                            </a>

                            <p className="mt-8 text-sm text-slate-500">
                                // Direct pipeline for enterprise inquiries <br />
                                // Average logic audit retainer: $2k - $5k / mo
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
