"use client";

import { useState, useEffect } from "react";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Check if user already dismissed or subscribed
    const dismissed = localStorage.getItem("email_popup_dismissed");
    if (dismissed) return;

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("email_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      localStorage.setItem("email_popup_dismissed", "true");

      // Close after showing success
      setTimeout(() => setIsOpen(false), 3000);
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0a0a0b] border border-amber-500/30 rounded-3xl p-8 shadow-2xl shadow-amber-500/10">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re In!</h3>
            <p className="text-slate-400">Check your inbox for the free prompts guide.</p>
          </div>
        ) : (
          <>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-500 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              FREE DOWNLOAD
            </div>

            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
              50 High-Converting<br />
              <span className="text-amber-500">Business Prompts</span>
            </h2>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Get instant access to our curated collection of battle-tested AI prompts
              that top entrepreneurs use daily. No fluff, just results.
            </p>

            {/* Benefits */}
            <ul className="space-y-2 mb-6">
              {[
                "Sales & copywriting prompts that convert",
                "Strategy frameworks from elite operators",
                "Automation blueprints to 10x output",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-black font-black uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              >
                {status === "loading" ? "SENDING..." : "GET FREE PROMPTS"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-4 text-center text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
