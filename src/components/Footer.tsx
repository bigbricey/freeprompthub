import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
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
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Your free resource for discovering and sharing the best AI prompts.
            </p>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              AI Tools
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/chatgpt"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/claude"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/midjourney"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Midjourney Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/business"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Business Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Writing Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/coding"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Coding Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/tools/prompt-generator"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Prompt Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links.
            This means we may earn a commission if you click through and make a purchase, at no
            additional cost to you. We only recommend products and services we believe provide
            value. This helps support our free content.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} FreePromptHub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                Privacy
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
