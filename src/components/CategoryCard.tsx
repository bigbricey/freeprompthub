import Link from "next/link";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  promptCount: number;
  href: string;
  gradient: string;
}

export default function CategoryCard({
  name,
  description,
  icon,
  promptCount,
  href,
  gradient,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5 ${gradient}`}
      />

      {/* Icon */}
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${gradient} text-white`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {promptCount} prompts
        </span>
        <span className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400">
          Explore
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
