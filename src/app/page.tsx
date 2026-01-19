"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Helper to get category metadata (icon, color, description)
function getCategoryMeta(category: string) {
  const meta: Record<string, { icon: React.ReactNode; gradient: string; description: string }> = {
    chatgpt: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" /></svg>,
      gradient: "from-emerald-600/20 to-emerald-900/40",
      description: "Master OpenAI's ChatGPT"
    },
    claude: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>,
      gradient: "from-amber-600/20 to-amber-900/40",
      description: "Optimized for Anthropic's Claude"
    },
    midjourney: {
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>,
      gradient: "from-orange-600/20 to-orange-900/40",
      description: "Create stunning AI art"
    },
    "business-startups": {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      gradient: "from-slate-600/20 to-slate-900/40",
      description: "Scale your startup with AI"
    },
    copywriting: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      gradient: "from-stone-600/20 to-stone-900/40",
      description: "Write better copy, faster"
    },
    "agentic-blueprints": {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
      gradient: "from-amber-600/30 to-amber-900/50",
      description: "High-ticket autonomous logic chains."
    },
    legal: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
      gradient: "from-blue-600/20 to-blue-900/40",
      description: "Forensic legal & compliance logic."
    },
    finance: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      gradient: "from-emerald-600/20 to-emerald-900/40",
      description: "Institutional finance & risk models."
    },
    hr: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      gradient: "from-purple-600/20 to-purple-900/40",
      description: "Agentic human resource frameworks."
    },
    "m-and-a": {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
      gradient: "from-amber-600/20 to-amber-900/40",
      description: "Mergers, Acquisitions & Synergies."
    },
    pharma: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.596 15.12a2 2 0 01-1.022-.547l-2.387-2.387a2 2 0 112.828-2.828l.63.63a2 2 0 002.828 0L9.23 9.428a2 2 0 012.828 0l.56.56a2 2 0 002.828 0l.56-.56a2 2 0 012.828 0l2.387 2.387a2 2 0 11-2.828 2.828l-.63-.63a2 2 0 00-2.828 0l-.56.56z" /></svg>,
      gradient: "from-blue-600/20 to-indigo-900/40",
      description: "Pharma research & FDA compliance."
    },
    engineering: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      gradient: "from-orange-600/20 to-red-900/40",
      description: "Advanced structural & mechanical logic."
    },
    "real-estate": {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      gradient: "from-amber-600/20 to-amber-900/40",
      description: "Institutional real estate modeling."
    },
    biotech: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.596 15.12a2 2 0 01-1.022-.547l-2.387-2.387a2 2 0 112.828-2.828l.63.63a2 2 0 002.828 0L9.23 9.428a2 2 0 012.828 0l.56.56a2 2 0 002.828 0l.56-.56a2 2 0 012.828 0l2.387 2.387a2 2 0 11-2.828 2.828l-.63-.63a2 2 0 00-2.828 0l-.56.56z" /></svg>,
      gradient: "from-emerald-600/20 to-teal-900/40",
      description: "Genomics & synthetic biology logic."
    },
    cybersecurity: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      gradient: "from-red-600/20 to-rose-900/40",
      description: "Forensic security & threat mitigation."
    },
    web3: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      gradient: "from-blue-600/20 to-purple-900/40",
      description: "Blockchain & decentralized economy."
    },
    // Default fallback
    default: {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      gradient: "from-zinc-600/20 to-zinc-900/40",
      description: "Boost productivity with AI"
    }
  };
  return meta[category] || meta.default;
}

import { AFFILIATE_OFFERS } from "@/config/monetization";

// High-grade icons for the slots
const SlotIcons = {
  slot1: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  slot2: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  slot3: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
};

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Map offers for the toolkit section
  const offers = [
    { ...AFFILIATE_OFFERS.slot1, icon: SlotIcons.slot1 },
    { ...AFFILIATE_OFFERS.slot2, icon: SlotIcons.slot2 },
    { ...AFFILIATE_OFFERS.slot3, icon: SlotIcons.slot3 },
  ];

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();

        // Enrich with icons and gradients
        const enriched = data.map((cat: any) => {
          const meta = getCategoryMeta(cat.slug);
          return { ...cat, ...meta };
        });

        setCategoriesList(enriched);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const totalModules = categoriesList.reduce((acc, cat) => acc + (cat.count || 0), 0);

  return (
    <div className="min-h-screen relative">
      <div className="stars-bg"></div>
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-40 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-sm font-medium text-amber-500/80 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              System Online: {totalModules} Modules Active
            </div>

            <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl mb-6">
              FREEPROMPT <br />
              <span className="text-gradient-cosmic">HUB</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-slate-300 mb-12 leading-relaxed">
              The premier source for high-performance AI prompts. <br />
              Featuring verified agentic blueprints for the 2026 intelligence economy.
            </p>

            {/* Search Bar - AMPUTATED P0 */}
            <div className="mx-auto max-w-2xl text-center py-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-md">
              <span className="text-amber-500 font-black uppercase tracking-[0.2em] text-sm">
                Library Mode: Browse Categories Below
              </span>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="categories" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
              <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)]"></span>
                SECTOR GRID
              </h2>
              <span className="text-sm font-mono text-amber-500/60">
                // {categoriesList.length} SECTORS DETECTED
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoriesList.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={`group relative p-6 rounded-2xl bg-[#121214]/50 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl ${category.featured ? 'ring-2 ring-amber-500/20' : ''}`}
                >
                  {category.featured && (
                    <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-bl-lg tracking-widest uppercase">
                      Verification Active
                    </div>
                  )}
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${category.gradient} p-3 text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-amber-500 transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-sm text-slate-400 mb-6 line-clamp-2 group-hover:text-slate-200 transition-colors">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center text-xs font-bold text-amber-500/80 group-hover:translate-x-1 transition-transform">
                        EXPLORE ASSETS
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
                <span className="w-2 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]"></span>
                VERIFIED TOOLKIT
              </h2>
              <p className="mt-4 text-slate-400">
                // Professional infrastructure for logic execution
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => (
                <a
                  key={offer.title}
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-card group relative overflow-hidden rounded-xl p-6 hover:border-emerald-500/30"
                >
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br ${offer.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}></div>

                  {/* Institutional Badge */}
                  {offer.badge && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] backdrop-blur-sm shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {offer.badge}
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${offer.gradient} p-3 text-white shadow-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                      {offer.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">
                      {offer.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                      {offer.description}
                    </p>

                    <div className="flex items-center text-xs font-black text-emerald-500 group-hover:translate-x-1 transition-transform tracking-widest uppercase">
                      INITIATE ACCESS
                      <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
