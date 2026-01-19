import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-transparent border border-amber-500/50 text-amber-500 font-bold shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all duration-300">
              <span className="relative z-10">FP</span>
              <div className="absolute inset-0 bg-amber-500/10 rounded-lg blur-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
              FreePromptHub
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#categories"
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors tracking-wide"
            >
              CATEGORIES
            </Link>
            <Link
              href="/tools/prompt-generator"
              className="text-sm font-medium text-slate-300 hover:text-emerald-500 transition-colors tracking-wide"
            >
              GENERATOR
            </Link>
            <Link
              href="/library"
              className="text-sm font-medium text-slate-300 hover:text-cyan-500 transition-colors tracking-wide"
            >
              LIBRARY
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors tracking-wide"
            >
              ABOUT
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/tools/prompt-generator"
            className="relative inline-flex items-center justify-center rounded-lg bg-transparent px-6 py-2 text-sm font-bold text-white border border-amber-500/30 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-amber-600/10 group-hover:bg-amber-600/20 transition-colors"></div>
            <span className="relative z-10 tracking-wide">LAUNCH GENERATOR</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
