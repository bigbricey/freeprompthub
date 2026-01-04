import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030014]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-110">
                <svg
                  className="h-6 w-6 text-white"
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
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                FreePrompt<span className="text-amber-500">Hub</span>
              </span>
            </Link>
            <p className="mt-4 text-sm font-medium text-slate-400 leading-relaxed">
              Architecting the future of autonomous intelligence with verified agentic blueprints.
            </p>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-500">
              AI Tools
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/chatgpt"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/claude"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/midjourney"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Midjourney Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/business-startups"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Business & Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/copywriting"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Copywriting Prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/coding"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Coding Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/tools/prompt-generator"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Prompt Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
          <p className="text-xs font-medium text-slate-500 leading-relaxed italic">
            <strong className="text-slate-400 not-italic">Institutional Disclosure:</strong> Some links on this platform are strategic partner links.
            This facilitates the continued operation of our logic factory at no additional cost to you.
            We only authorize blueprints and tools verified for highest-grade operational value.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs font-bold text-slate-500 tracking-tighter uppercase">
              &copy; {new Date().getFullYear()} FreePromptHub // NEURAL LOGIC FACILITY
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/about"
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
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
