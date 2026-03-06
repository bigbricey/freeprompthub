export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b border-neutral-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-amber-400">Free</span>PromptHub
          </span>
          <a
            href="https://bmitchelldigital.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
          >
            Shop Guides →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-block bg-amber-400/10 text-amber-400 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6">
            AI Prompts & Guides for Beginners
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Stop Guessing.
            <br />
            <span className="text-amber-400">Start Prompting.</span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Tested, copy-paste AI prompts and premium extraction guides for Etsy
            sellers, content creators, and anyone who wants to make money with AI
            — without the fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://bmitchelldigital.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-amber-400 text-neutral-950 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors text-lg"
            >
              Browse Guides
            </a>
            <a
              href="#free-prompts"
              className="inline-flex items-center justify-center border border-neutral-700 text-neutral-300 font-semibold px-8 py-3 rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors text-lg"
            >
              Free Prompts ↓
            </a>
          </div>
        </section>

        {/* Featured Product */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-2">
                  Featured Guide
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  2026 AI Profit Extraction System for Etsy Sellers
                </h2>
                <p className="text-neutral-400 mb-4">
                  150+ copy-paste prompts, 4 cheat sheets, and real frameworks
                  extracted from top Etsy sellers doing $3K–$15K/mo. Built for
                  beginners. First sale in 48 hours.
                </p>
                <ul className="text-neutral-400 text-sm space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">✓</span> 40+ page
                    PDF — instant download
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">✓</span> 150+
                    tested prompts for every step
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">✓</span> 4
                    done-for-you cheat sheets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">✓</span> 30-day
                    money-back guarantee
                  </li>
                </ul>
                <a
                  href="https://bmitchelldigital.gumroad.com/l/opapzc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-amber-400 text-neutral-950 font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Get It — $19
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Free Prompts Section */}
        <section id="free-prompts" className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-center mb-3">
            Free Prompts to Try Right Now
          </h2>
          <p className="text-neutral-400 text-center mb-10">
            No signup needed. Copy, paste into ChatGPT or Claude, and go.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {prompts.map((p, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
              >
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-2">
                  {p.category}
                </div>
                <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
                <div className="bg-neutral-950 rounded-lg p-4 text-sm text-neutral-300 font-mono leading-relaxed">
                  {p.prompt}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-500 mb-4">
              Want 150+ more prompts like these — plus frameworks and cheat
              sheets?
            </p>
            <a
              href="https://bmitchelldigital.gumroad.com/l/opapzc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-400 text-neutral-950 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Get the Full Guide — $19
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>© 2026 B. Mitchell Digital. All rights reserved.</span>
          <a
            href="mailto:hello@freeprompthub.com"
            className="hover:text-neutral-300 transition-colors"
          >
            hello@freeprompthub.com
          </a>
        </div>
      </footer>
    </div>
  );
}

const prompts = [
  {
    category: "Etsy Research",
    title: "Find Winning Niches",
    prompt:
      'Act as an Etsy market researcher. Analyze the top 20 best-selling digital products in [NICHE]. For each, list: title, price, estimated monthly sales, number of reviews. Then identify 3 underserved sub-niches with high demand and low competition.',
  },
  {
    category: "Product Creation",
    title: "Create a Digital Product in 10 Minutes",
    prompt:
      'I want to create a [PRODUCT TYPE] for [TARGET AUDIENCE]. Generate: 1) A compelling product name, 2) A complete outline with 8-10 sections, 3) The full content for section 1. Make it professional, actionable, and worth paying $12 for.',
  },
  {
    category: "Listing Optimization",
    title: "Write a High-Converting Etsy Title",
    prompt:
      "Write 10 SEO-optimized Etsy titles for a [PRODUCT TYPE] targeting [AUDIENCE]. Each title should use all 140 characters, front-load the primary keyword, and include 2-3 long-tail keywords that buyers actually search for.",
  },
  {
    category: "Marketing",
    title: "Generate 20 Social Media Hooks",
    prompt:
      'Generate 20 scroll-stopping hooks for promoting a [PRODUCT TYPE] on [PLATFORM]. Each hook should be under 15 words, create curiosity, and make someone stop scrolling. Include a mix of question hooks, stat hooks, and contrarian hooks.',
  },
];
