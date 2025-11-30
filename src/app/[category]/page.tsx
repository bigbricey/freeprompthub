import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import { getPromptsByCategory, prompts } from "@/data/prompts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        category: string;
    }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
    return Object.keys(prompts).map((category) => ({
        category: category,
    }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${categoryName} AI Prompts | FreePromptHub`,
        description: `Discover high-quality AI prompts for ${categoryName}. Boost productivity and automate tasks with our curated collection.`,
        keywords: [`${category} prompts`, "AI prompts", "productivity", "automation"],
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;
    const categoryPrompts = getPromptsByCategory(category);

    if (!categoryPrompts || categoryPrompts.length === 0) {
        notFound();
    }

    const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

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
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {categoryPrompts.length} Prompts
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                                {categoryName} Prompts
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                Battle-tested collection of the best AI prompts for {categoryName}.
                                Copy, paste, and get results instantly.
                            </p>

                            {/* SEO Content Slot (Hidden by default until text provided) */}
                            <div id="seo-content" className="mt-8 text-left prose prose-slate dark:prose-invert max-w-none hidden">
                                {/* Placeholder for future SEO text */}
                                <p>Detailed guide on how to use {categoryName} prompts effectively...</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommended Tools Section (Moved Up) */}
                <section className="border-b border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-800/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
                                Recommended Tools for {categoryName}
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {recommendedTools.map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.href}
                                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${tool.gradient} text-white`}
                                        >
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                                {tool.name}
                                            </h3>
                                            <div className="mt-1 flex items-center text-xs font-medium text-indigo-600 transition-colors group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                                                Try it free &rarr;
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
                        <div className="grid gap-6 md:grid-cols-2">
                            {categoryPrompts.map((prompt) => (
                                <PromptCard key={prompt.id} prompt={prompt} />
                            ))}
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
