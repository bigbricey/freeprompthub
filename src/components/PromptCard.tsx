"use client";

import { useState } from "react";
import { Prompt } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copyToClipboard = async () => {
    const text = prompt.content || (prompt as any).prompt;
    if (!text) return;

    let success = false;

    // Try modern clipboard API first
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
        console.log("Clipboard API succeeded");
      } catch (err) {
        console.error("Clipboard API failed:", err);
      }
    }

    // Fallback: create a temporary textarea
    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const result = document.execCommand('copy');
        document.body.removeChild(textArea);
        success = result;
        console.log("Fallback copy result:", result);
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    }

    // Always show visual feedback (even if copy failed, button was clicked)
    console.log("Setting copied state to true");
    setCopied(true);
    setTimeout(() => {
      console.log("Resetting copied state to false");
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="rounded-xl border border-white/5 bg-[#121214] p-6 transition-all hover:border-emerald-500/30">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {prompt.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {prompt.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {(prompt.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Prompt content */}
      <div className="relative">
        <div
          className={`rounded-lg bg-black/40 p-4 border border-white/5 ${expanded ? "" : "max-h-32 overflow-hidden"
            }`}
        >
          <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">
            {prompt.content || (prompt as any).prompt}
          </pre>
        </div>

        {/* Gradient fade for collapsed state */}
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#121214] to-transparent" />
        )}
      </div>

      {/* Actions (Sticky on Mobile) */}
      <div className="mt-4 flex items-center justify-between sticky bottom-0 bg-[#121214] py-2 -mb-2 border-t border-white/5 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400"
          >
            {expanded ? "Collapse" : "Expand Logic"}
          </button>

          {/* Affiliate Link (The Money Slot) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:from-amber-400 hover:to-orange-500 transition-all"
          >
            <span>⚡ Recommended Tool</span>
          </a>
        </div>

        <button
          onClick={copyToClipboard}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all ${copied
            ? "bg-emerald-600 text-white"
            : "bg-white text-black hover:bg-emerald-500 hover:text-white"
            }`}
        >
          {copied ? (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy Prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
}
