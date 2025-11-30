"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { prompts } from "@/data/prompts";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Helper to get category metadata (icon, color, description)
function getCategoryMeta(category: string) {
  const meta: Record<string, { icon: React.ReactNode; gradient: string; description: string }> = {
    chatgpt: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" /></svg>,
      gradient: "from-emerald-500 to-teal-600",
      description: "Master OpenAI's ChatGPT"
    },
    claude: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>,
      gradient: "from-orange-500 to-amber-600",
      description: "Optimized for Anthropic's Claude"
    },
    midjourney: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>,
      gradient: "from-purple-500 to-pink-600",
      description: "Create stunning AI art"
    },
    // Default fallback
    default: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      gradient: "from-indigo-500 to-blue-600",
      description: "Boost productivity with AI"
    }
  };
  return meta[category] || meta.default;
}

const recommendedTools = [
  {
    name: "Copy.ai",
    description: "Generate marketing copy, blog posts, and emails 10x faster.",
    href: "#", // Add affiliate link here
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Jasper",
    description: "The AI copywriter for enterprise teams. Brand voice & SEO built-in.",
    href: "#", // Add affiliate link here
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Survey Junkie",
    description: "Earn cash for your opinion. Great side hustle for beginners.",
    href: "#", // Add affiliate link here
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categoriesList = Object.keys(prompts).map(key => {
    const meta = getCategoryMeta(key);
    return {
      name: key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      slug: key,
      count: prompts[key].length,
      ...meta
    };
  });

  return (
    <div className="min-h-screen relative">
      <div className="stars-bg"></div>
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-40 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Online: {Object.values(prompts).flat().length} Modules Active
            </div>

            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl mb-6 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
              EXPLORE THE <br />
              <span className="text-gradient-cosmic">PROMPT UNIVERSE</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-slate-300 mb-12 leading-relaxed">
              Navigate through a galaxy of high-performance AI prompts. <br />
              Your command center for Business, Coding, and Creative Intelligence.
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Initiate Search Sequence..."
                  className="block w-full rounded-xl border-0 py-4 pl-12 pr-32 text-white bg-black/80 shadow-2xl ring-1 ring-inset ring-white/10 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-lg backdrop-blur-xl"
                />
                <div className="absolute inset-y-2 right-2">
                  <button
                    type="submit"
                    className="rounded-lg bg-cyan-600 px-6 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:bg-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300"
                  >
                    ENGAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="categories" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
              <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></span>
                SECTOR GRID
              </h2>
              <span className="text-sm font-mono text-cyan-400">
                // {categoriesList.length} SECTORS DETECTED
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoriesList.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="holo-card group relative overflow-hidden rounded-xl p-6"
                >
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${category.gradient} p-3 text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-sm text-slate-400 mb-6 line-clamp-2 group-hover:text-slate-200 transition-colors">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs font-mono text-cyan-500">
                        ID: {category.slug.toUpperCase()}
                      </span>
                      <div className="flex items-center text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                        ACCESS DATA
                        <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Tools (Monetization) */}
        <section className="py-24 border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                <span className="w-2 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></span>
                RECOMMENDED TOOLS
              </h2>
              <p className="mt-4 text-slate-400">
                // High-performance tools to execute these prompts
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-card group relative overflow-hidden rounded-xl p-6 hover:border-cyan-500/50"
                >
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br ${tool.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${tool.gradient} p-3 text-white shadow-lg mb-4`}>
                      {tool.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {tool.name}
                    </h3>

                    <p className="text-sm text-slate-400 mb-4">
                      {tool.description}
                    </p>

                    <div className="flex items-center text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                      INITIATE
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
