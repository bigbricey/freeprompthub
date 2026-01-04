import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import BlueprintCard from "@/components/BlueprintCard";
import { createAdminClient } from "@/lib/supabase-server";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        category: string;
    }>;
}

// Generate static params for all categories from Supabase
export async function generateStaticParams() {
    const supabase = createAdminClient();
    const { data: categories } = await supabase.from("categories").select("slug");
    return (categories || []).map((cat) => ({
        category: cat.slug,
    }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${categoryName} | FreePromptHub`,
        description: `Verified ${categoryName} blueprints and high-performance prompts from FreePromptHub.`,
        keywords: [`${category} prompts`, `${category} blueprints`, "agentic logic", "AI prompts"],
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category: slug } = await params;
    const supabase = createAdminClient();

    // 1. Fetch category details
    const { data: categoryData } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!categoryData) {
        notFound();
    }

    // 2. Fetch prompts for this category
    const { data: categoryPrompts } = await supabase
        .from("prompts")
        .select("*")
        .eq("category_id", categoryData.id)
        .order("created_at", { ascending: false });

    const categoryName = categoryData.name;
    const promptsDisplay = categoryPrompts || [];

    const recommendedTools = [
        {
            name: "Copy.ai",
            description: "AI writing assistant that helps you create marketing copy, blog posts, and social media content in seconds.",
            href: "#",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            gradient: "from-violet-500 to-purple-600",
        },
        {
            name: "Jasper",
            description: "Create content 10x faster with AI. Perfect for blog posts, ads, emails, and more with brand voice consistency.",
            href: "#",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: "from-orange-500 to-red-600",
        },
        {
            name: "Survey Junkie",
            description: "Earn extra income while building your business. Get paid to share your opinions through surveys.",
            href: "#",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-green-500 to-emerald-600",
        },
    ];

    return (
        <div className="min-h-screen bg-[#09090b]">
            <Header />
            <main>
                {/* Hero */}
                <section className={`${slug === 'agentic-blueprints' ? 'bg-[#0a0a0b] py-24 relative overflow-hidden' : 'bg-[#121214] border-b border-white/5 py-16'} `}>
                    {slug === 'agentic-blueprints' && (
                        <>
                            <div className="absolute inset-0 bg-transparent opacity-30"></div>
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-amber-600 opacity-5 blur-[120px]"></div>
                        </>
                    )}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className={`mb - 4 inline - flex items - center gap - 2 rounded - full px - 4 py - 1.5 text - sm font - medium ${categoryData.slug === 'agentic-blueprints'
                                ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                                : 'bg-white/5 text-amber-500/80 border border-white/10'
                                } `}>
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                {promptsDisplay.length} Verified Modules
                            </div>
                            <h1 className="text-4xl font-black tracking-tighter sm:text-6xl text-white">
                                {categoryName} {categoryData.slug === 'agentic-blueprints' ? '' : 'Prompts'}
                            </h1>
                            <p className={`mt - 4 text - xl ${categoryData.slug === 'agentic-blueprints' ? 'text-amber-200/50' : 'text-slate-400'
                                } `}>
                                {categoryData.slug === 'agentic-blueprints'
                                    ? "Enterprise-grade autonomous logic chains for the 2026 Agentic Era."
                                    : `Battle - tested collection of the best AI prompts for ${categoryName}.`}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Recommended Tools Section (Moved Up) */}
                <section className="border-b border-white/5 bg-black/40 py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                                Recommended Toolkit
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {recommendedTools.map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.href}
                                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#121214] p-4 transition-all hover:border-emerald-500/30 hover:shadow-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`inline - flex h - 12 w - 12 flex - shrink - 0 items - center justify - center rounded - lg bg - gradient - to - br ${tool.gradient} text - white opacity - 80 group - hover: opacity - 100 transition - opacity`}
                                        >
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white">
                                                {tool.name}
                                            </h3>
                                            <div className="mt-1 flex items-center text-xs font-black uppercase tracking-widest text-emerald-500 group-hover:text-emerald-400 transition-colors">
                                                Initiate Access &rarr;
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Prompts Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {promptsDisplay.map((p) => (
                                p.type === 'blueprint' ? (
                                    <BlueprintCard key={p.id} blueprint={p} />
                                ) : (
                                    <PromptCard key={p.id} prompt={p} />
                                )
                            ))}
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
