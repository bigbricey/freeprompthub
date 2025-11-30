"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [savedPrompts, setSavedPrompts] = useState<any[]>([]);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push("/login");
            } else {
                setUser(user);
                // Fetch saved prompts
                const { data } = await supabase
                    .from('saved_prompts')
                    .select('prompt_id')
                    .eq('user_id', user.id);

                if (data) {
                    setSavedPrompts(data);
                }
            }
            setLoading(false);
        };
        checkUser();
    }, [router, supabase]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030014] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative bg-[#030014]">
            <div className="stars-bg"></div>
            <Header />

            <main className="relative z-10 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Command <span className="text-gradient-cosmic">Center</span>
                            </h1>
                            <p className="text-slate-400">
                                Welcome back, {user?.email}
                            </p>
                        </div>
                        <button
                            onClick={async () => {
                                await supabase.auth.signOut();
                                router.push("/");
                            }}
                            className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
                        <div className="holo-card rounded-xl p-6">
                            <div className="text-sm text-slate-400 mb-1">Saved Prompts</div>
                            <div className="text-3xl font-bold text-white">{savedPrompts.length}</div>
                        </div>
                        <div className="holo-card rounded-xl p-6">
                            <div className="text-sm text-slate-400 mb-1">Collections</div>
                            <div className="text-3xl font-bold text-white">1</div>
                        </div>
                        <div className="holo-card rounded-xl p-6">
                            <div className="text-sm text-slate-400 mb-1">Plan</div>
                            <div className="text-3xl font-bold text-cyan-400">Free Tier</div>
                        </div>
                    </div>

                    {/* Saved Prompts */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            Saved Prompts
                        </h2>

                        {/* Saved Prompts List */}
                        {savedPrompts.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {savedPrompts.map((item) => (
                                    <div key={item.prompt_id} className="holo-card rounded-xl p-6">
                                        <div className="text-sm font-mono text-cyan-400 mb-2">ID: {item.prompt_id}</div>
                                        <Link
                                            href={`/search?q=${item.prompt_id}`}
                                            className="text-white hover:text-cyan-300 font-bold"
                                        >
                                            View Prompt &rarr;
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/30 p-12 text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
                                    <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">No saved prompts yet</h3>
                                <p className="text-slate-400 mb-6">Start exploring the library to save your favorite prompts.</p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-2 text-sm font-bold text-white hover:bg-cyan-500 transition-colors"
                                >
                                    Browse Prompts
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
