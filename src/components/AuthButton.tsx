"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function AuthButton() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };
        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, [supabase]);

    if (loading) {
        return <div className="h-9 w-20 animate-pulse rounded-lg bg-slate-800/50"></div>;
    }

    if (user) {
        return (
            <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800/50 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors border border-slate-700"
            >
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Dashboard
            </Link>
        );
    }

    return (
        <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all"
        >
            Login
        </Link>
    );
}
