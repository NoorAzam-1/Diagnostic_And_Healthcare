import Link from "next/link";
import { Activity, ChevronRight, CalendarDays } from "lucide-react";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Workflow",
    href: "#workflow",
  },
  {
    name: "Security",
    href: "#security",
  },
  {
    name: "Platforms",
    href: "#platforms",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/30">
              <Activity size={22} />
            </div>

            <div>
              <h1 className="font-black text-white text-lg leading-none">
                HERAI ONE
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold mt-1">
                Healthcare SaaS Platform
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#demo"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800
                bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <CalendarDays size={16} />
              <span className="text-sm font-medium">Book Demo</span>
            </Link>

            <Link
              href="#login-anchor"
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600
                px-5 py-2.5 text-white font-semibold text-sm shadow-lg shadow-indigo-900/30 hover:scale-[1.02]
                transition-all "
            >
              Sign In
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
