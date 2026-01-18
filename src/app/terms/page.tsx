import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white">
            <Header />
            <main className="mx-auto max-w-3xl px-4 py-24">
                <h1 className="text-4xl font-black tracking-tighter mb-8">TERMS OF SERVICE</h1>
                <p className="text-slate-400 leading-relaxed mb-6">
                    Operational guidelines for the FreePromptHub ecosystem.
                </p>
                <div className="prose prose-invert">
                    <p>Placeholder content for compliance verification. Full legal definitions pending.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
