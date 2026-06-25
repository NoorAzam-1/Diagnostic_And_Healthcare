"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Security", href: "#security" },
  { name: "Platform", href: "#platform" },
  { name: "Pricing", href: "#pricing" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/brandLogo.jpeg"
              alt="HARAI ONE"
              width={180}
              height={55}
              priority
              className="h-18 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                HARAI
              </span>
              <span className="block text-lg font-bold text-heading">
                Innovations Pvt. Ltd.
              </span>
            </div>
          </Link>

          <nav className="hidden items-center lg:flex lg:gap-4 xl:gap-8">
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

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/demo"
              className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-heading shadow-sm transition-all hover:border-border-hover hover:bg-surface-hover"
            >
              <CalendarDays size={16} />
              Book Demo
            </Link>

            <Link
              href="#login-anchor"
              className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-red transition-all duration-300 hover:-translate-y-0.5"
            >
              Sign In
              <ChevronRight size={16} />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
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
