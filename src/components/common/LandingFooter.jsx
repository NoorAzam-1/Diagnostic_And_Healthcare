"use client";

import Link from "next/link";
import { Activity, ShieldCheck, Heart, Database } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                <Activity size={22} />
              </div>

              <div>
                <h3 className="font-black text-white text-lg">HERAI ONE</h3>

                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Healthcare SaaS Platform
                </p>
              </div>
            </div>

            <p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-md">
              Unified healthcare operations platform for hospitals, diagnostic
              laboratories and clinics. Manage patient records, diagnostics,
              reporting and administration from a single secure ecosystem.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">
                  ABDM Ready
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2">
                <Database size={14} className="text-cyan-400" />
                <span className="text-xs text-cyan-400 font-medium">
                  Data Sovereignty
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>

            <div className="space-y-3">
              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                About
              </Link>

              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Careers
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>

            <div className="space-y-3">
              <Link
                href="#features"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Features
              </Link>

              <Link
                href="#security"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Security
              </Link>

              <Link
                href="#pricing"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="#workflow"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Workflow
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>

            <div className="space-y-3">
              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Documentation
              </Link>

              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Help Center
              </Link>

              <Link
                href="#"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Status
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} HERAI ONE. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>

            <div className="flex items-center gap-1">
              Made with
              <Heart size={12} className="text-rose-500 fill-rose-500" />
              in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
