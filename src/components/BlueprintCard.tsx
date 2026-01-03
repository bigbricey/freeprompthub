"use client";

import { useState } from "react";
import { Blueprint } from "@/data/blueprints";

interface BlueprintCardProps {
    blueprint: Blueprint;
}

export default function BlueprintCard({ blueprint }: BlueprintCardProps) {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const copyToClipboard = async () => {
        const text = blueprint.prompt;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-white dark:bg-slate-900 shadow-2xl transition-all hover:border-indigo-500 hover:shadow-indigo-500/10">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl tracking-widest uppercase z-10">
                VERIFIED BLUEPRINT
            </div>

            <div className="p-6">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                            {blueprint.title}
                        </h3>
                        <span className="text-lg font-mono font-bold text-emerald-500">{blueprint.price}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {blueprint.description}
                    </p>
                </div>

                {/* Performance Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800">
                    <div className="text-center">
                        <div className="text-[10px] uppercase tracking-tighter text-slate-500">Reliability</div>
                        <div className="text-sm font-bold text-indigo-400">{blueprint.performanceMetrics.reliability}</div>
                    </div>
                    <div className="text-center border-x border-slate-100 dark:border-slate-800">
                        <div className="text-[10px] uppercase tracking-tighter text-slate-500">Speed</div>
                        <div className="text-sm font-bold text-indigo-400">{blueprint.performanceMetrics.speed}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] uppercase tracking-tighter text-slate-500">Efficiency</div>
                        <div className="text-sm font-bold text-indigo-400">{blueprint.performanceMetrics.costEfficiency}</div>
                    </div>
                </div>

                {/* Verification Logs */}
                <div className="mb-4 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-widest">Audit Logs</div>
                    {blueprint.verificationLogs.map((log, i) => (
                        <div key={i} className="flex items-center text-[11px] text-emerald-400 font-mono">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            {log}
                        </div>
                    ))}
                </div>

                {/* Blueprint content preview */}
                <div className="relative group/content">
                    <div
                        className={`rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 font-mono text-xs ${expanded ? "" : "max-h-24 overflow-hidden"
                            }`}
                    >
                        <pre className="whitespace-pre-wrap text-slate-700 dark:text-indigo-100/70">
                            {blueprint.prompt}
                        </pre>
                    </div>
                    {!expanded && (
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-50 dark:from-slate-950/50 to-transparent" />
                    )}
                </div>

                {/* Footer Actions */}
                <div className="mt-6 flex items-center justify-between">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs font-bold uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors"
                    >
                        {expanded ? "[ Collapse Logic ]" : "[ Expand Logic ]"}
                    </button>

                    <button
                        onClick={copyToClipboard}
                        className={`relative px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${copied
                                ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                            }`}
                    >
                        {copied ? "Logic Copied" : "Acquire Blueprint"}
                    </button>
                </div>
            </div>
        </div>
    );
}
