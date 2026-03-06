export default function Home() {
  const freePrompts = [
    {
      title: "Product Research Prompt",
      category: "Etsy / Digital Products",
      prompt:
        "Act as a market research analyst. Analyze the top 20 best-selling digital products in [NICHE] on Etsy. For each, identify: price point, number of sales, review rating, what makes it unique, and the primary keyword in the title. Output as a ranked table.",
    },
    {
      title: "Blog Post Outline Generator",
      category: "Content Marketing",
      prompt:
        "Create a detailed blog post outline for the topic: [TOPIC]. Include a compelling headline, meta description (under 160 chars), 8-10 H2 sections with 2-3 bullet points each, a FAQ section with 5 questions, and a call-to-action. Target keyword: [KEYWORD].",
    },
    {
      title: "Landing Page Copy Framework",
      category: "Copywriting",
      prompt:
        "Write landing page copy for [PRODUCT] using the PAS framework (Problem-Agitate-Solve). Include: a headline under 10 words, a subheadline that addresses the core pain point, 3 bullet points of benefits (not features), social proof placeholder, and a CTA button text. Tone: conversational, urgent.",
    },
    {
      title: "SEO Keyword Cluster Builder",
      category: "SEO",
      prompt:
        "Generate a keyword cluster for the seed keyword [KEYWORD]. Include: 5 pillar content ideas, 15 supporting long-tail keywords grouped by intent (informational, commercial, transactional), estimated difficulty (low/medium/high), and a suggested internal linking structure.",
    },
    {
      title: "Social Media Hook Generator",
      category: "Social Media",
      prompt:
        "Generate 10 scroll-stopping hooks for [PLATFORM] about [TOPIC]. Each hook should be under 15 words, use proven formats (question, bold claim, story opener, stat lead, controversy), and include a suggested follow-up line. Rank them by estimated engagement.",
    },
    {
      title: "Customer Avatar Builder",
      category: "Marketing Strategy",
      prompt:
        "Build a detailed customer avatar for someone who would buy [PRODUCT]. Include: demographics, psychographics, top 5 pain points, where they spend time online, what they Google at 2am, objections to buying, and the emotional trigger that makes them pull out their credit card.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-50 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold">FreePromptHub</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#prompts" className="text-sm text-gray-400 hover:text-white transition-colors">
              Free Prompts
            </a>
            <a href="#guides" className="text-sm text-gray-400 hover:text-white transition-colors">
              Premium Guides
            </a>
            <a
              href="https://bmitchelldigital.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Shop Guides →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
          Free prompts updated weekly
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          AI Prompts That Actually{" "}
          <span className="gradient-text">Make You Money</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Stop wasting hours on bad prompts. We extract what works from top performers
          and give you tested, copy-paste frameworks — free and premium.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#prompts"
            className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
          >
            Browse Free Prompts ↓
          </a>
          <a
            href="https://bmitchelldigital.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
          >
            View Premium Guides
          </a>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>⚡ 150+ Tested Prompts</span>
          <span>📊 Extracted From Top Sellers</span>
          <span>🔄 Updated Weekly</span>
          <span>💰 Free + Premium Options</span>
        </div>
      </section>

      {/* Free Prompts */}
      <section id="prompts" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Free Prompts — Copy & Paste</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No signup required. Just copy, paste into ChatGPT or Claude, and customize
            the [BRACKETS] for your niche.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {freePrompts.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 font-mono leading-relaxed">
                {item.prompt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <section id="guides" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-violet-600/20 to-pink-600/10 border border-violet-500/20 rounded-2xl p-10 md:p-14 text-center glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want the Full System?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Our premium guides go deeper — 150+ prompts, done-for-you cheat sheets,
            extracted frameworks from top sellers, and step-by-step blueprints.
          </p>
          <p className="text-gray-400 mb-8">
            Built using the Profit Extraction Method: we research what&apos;s actually working
            and hand you the playbook.
          </p>
          <a
            href="https://bmitchelldigital.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Browse Premium Guides →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            30-day money-back guarantee on all guides.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚡</span>
                <span className="font-bold">FreePromptHub</span>
              </div>
              <p className="text-sm text-gray-500">
                Free AI prompts and premium guides for beginners.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="mailto:hello@freeprompthub.com" className="hover:text-gray-300 transition-colors">
                hello@freeprompthub.com
              </a>
              <a
                href="https://bmitchelldigital.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                Gumroad Store
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800/50 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} B. Mitchell Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
