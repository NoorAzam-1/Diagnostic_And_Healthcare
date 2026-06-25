"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div
        className="absolute left-0 top-0 rounded-full bg-emerald-100 blur-[140px]"
        style={{ height: 350, width: 350 }}
      />
      <div
        className="absolute right-0 bottom-0 rounded-full bg-teal-100 blur-[140px]"
        style={{ height: 350, width: 350 }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-border bg-white p-8 md:p-12 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
        >
          <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-teal-50" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              <ShieldCheck size={14} />
              Healthcare ERP Platform
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight text-heading md:text-5xl lg:text-6xl">
              Ready to Modernize Your
              <span className="block bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent md:py-2">
                Diagnostic Center?
              </span>
            </h2>

            <p className="mx-auto my-3 max-w-3xl text-lg leading-relaxed text-body">
              Streamline patient management, diagnostics, reporting,
              staff operations and compliance through a single
              healthcare operating system.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(15,118,110,0.22)] transition-all duration-300 hover:-translate-y-1"
              >
                <CalendarDays size={18} />
                Request Demo
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-7 py-4 text-sm font-semibold text-heading shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
              >
                Contact Sales
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm">
                ABDM Ready
              </div>

              <div className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm">
                Multi-Branch Support
              </div>

              <div className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm">
                Role-Based Access
              </div>

              <div className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm">
                AES-256 Encryption
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}