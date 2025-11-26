"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              FreePromptHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                AI Tools
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full z-50 hidden w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
                <Link href="/chatgpt" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  ChatGPT
                </Link>
                <Link href="/claude" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  Claude
                </Link>
                <Link href="/midjourney" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  Midjourney
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                Categories
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full z-50 hidden w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
                <Link href="/business" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  Business
                </Link>
                <Link href="/writing" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  Writing
                </Link>
                <Link href="/coding" className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-indigo-400">
                  Coding
                </Link>
              </div>
            </div>
            <Link
              href="/tools/prompt-generator"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              Prompt Generator
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tools/prompt-generator"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                AI Tools
              </p>
              <Link
                href="/chatgpt"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                ChatGPT Prompts
              </Link>
              <Link
                href="/claude"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Claude Prompts
              </Link>
              <Link
                href="/midjourney"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Midjourney Prompts
              </Link>

              <p className="mt-4 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Categories
              </p>
              <Link
                href="/business"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Prompts
              </Link>
              <Link
                href="/writing"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Writing Prompts
              </Link>
              <Link
                href="/coding"
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coding Prompts
              </Link>

              <div className="mt-4 px-3">
                <Link
                  href="/tools/prompt-generator"
                  className="block rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-indigo-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prompt Generator
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
