"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ChevronRight,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

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
    name: "Platform",
    href: "#platform",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed container-custom inset-x-0 top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_10px_25px_rgba(230,0,18,0.18)]">
              <Activity size={22} />
            </div>

            <div>
              <h1 className="text-lg font-black leading-none text-heading">
                HARAI ONE
              </h1>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Healthcare SaaS Platform
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center xl:gap-8 lg:gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-body transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-heading shadow-sm transition-all hover:border-red-200 hover:bg-red-50"
            >
              <CalendarDays size={16} />
              Book Demo
            </Link>

            <Link
              href="#login-anchor"
              className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(230,0,18,0.18)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Sign In
              <ChevronRight size={16} />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white xl:hidden">
          <div className="container-custom py-6">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-body"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/demo"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 font-medium text-heading"
                >
                  <CalendarDays size={16} />
                  Book Demo
                </Link>

                <Link
                  href="#login-anchor"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-semibold text-white"
                >
                  Sign In
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};