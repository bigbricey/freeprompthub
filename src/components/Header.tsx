import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-transparent border border-cyan-500/50 text-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
              <span className="relative z-10">FP</span>
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              FreePromptHub
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#categories"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide"
            >
              CATEGORIES
            </Link>
            <Link
              href="/tools/prompt-generator"
              className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors tracking-wide"
            >
              GENERATOR
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide"
            >
              ABOUT
            </Link>
            <div className="pl-4 border-l border-slate-700">
              <AuthButton />
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/tools/prompt-generator"
            className="relative inline-flex items-center justify-center rounded-lg bg-transparent px-6 py-2 text-sm font-bold text-white border border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/40 transition-colors"></div>
            <span className="relative z-10 tracking-wide">LAUNCH GENERATOR</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
