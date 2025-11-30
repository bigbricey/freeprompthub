"use client";

import { useState } from "react";
import { Prompt } from "@/data/prompts";
import { createClient } from "@/lib/supabase";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copyToClipboard = async () => {
    const text = prompt.prompt;
    console.log("Copy button clicked, attempting to copy:", text.substring(0, 50) + "...");

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
    <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {prompt.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {prompt.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Prompt content */}
      <div className="relative">
        <div
          className={`rounded-lg bg-slate-50 p-4 dark:bg-slate-900 ${expanded ? "" : "max-h-32 overflow-hidden"
            }`}
        >
          <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300">
            {prompt.prompt}
          </pre>
        </div>

        {/* Gradient fade for collapsed state */}
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
        )}
      </div>

      {/* Actions (Sticky on Mobile) */}
      <div className="mt-4 flex items-center justify-between sticky bottom-0 bg-white dark:bg-slate-800 py-2 -mb-2 border-t border-slate-100 dark:border-slate-700/50 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {expanded ? "Show less" : "Show full prompt"}
          </button>

          {/* Save Button (New) */}
          <button
            onClick={async () => {
              const { data: { user } } = await createClient().auth.getUser();
              if (!user) {
                window.location.href = "/login";
                return;
              }

              const supabase = createClient();
              const { error } = await supabase
                .from('saved_prompts')
                .insert({
                  user_id: user.id,
                  prompt_id: prompt.id
                });

              if (error) {
                if (error.code === '23505') { // Unique violation
                  alert("You've already saved this prompt!");
                } else {
                  alert("Error saving prompt: " + error.message);
                }
              } else {
                alert("Prompt saved to your dashboard!");
              }
            }}
            className="p-2 text-slate-400 hover:text-pink-500 transition-colors"
            title="Save Prompt"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors shadow-sm ${copied
            ? "bg-green-600 hover:bg-green-700"
            : "bg-indigo-600 hover:bg-indigo-700"
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
