export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-900/30" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[400px] rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            100% Free AI Prompts
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Discover the Best{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Prompts
            </span>{" "}
            for Free
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Your go-to directory for curated AI prompts. Find the perfect prompts
            for ChatGPT, Claude, Midjourney, and more. Boost your productivity
            with battle-tested templates.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/50">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search prompts..."
                  className="w-full border-0 bg-transparent px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                500+
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                AI Prompts
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                10+
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Categories
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                Free
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Forever
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
