"use client";

import { TypeAnimation } from "react-type-animation";
import {
  HeartPulse,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      {/* Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[150px] animate-pulse-slow" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-teal-100 blur-[130px] animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 animate-fade-in-down">
              <Sparkles className="h-4 w-4" />
              About Harai One
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-heading">
              Building the Future of
              <span className="block mt-3 bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Healthcare Operations",
                    2500,
                    "Hospitals",
                    2000,
                    "Clinics",
                    2000,
                    "Diagnostic Labs",
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-body">
              Harai One was created with one belief— healthcare software should
              adapt to healthcare, not the other way around. We build secure,
              configurable and intelligent healthcare platforms that empower
              hospitals, clinics and diagnostic laboratories to deliver better
              patient care.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 font-semibold text-white shadow-red transition-all duration-300 hover:-translate-y-1">
                Book Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-border bg-white px-7 py-4 font-semibold text-heading shadow-sm transition hover:border-emerald-300 hover:shadow-md">
                Our Story
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-emerald-100 via-white to-teal-100 blur-3xl animate-glow-pulse" />

            <div className="relative rounded-[36px] border border-border bg-white p-8 shadow-lg">
              <img
                src="/images/about/about-hero.png"
                alt="Healthcare"
                className="w-full"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -left-6 top-10 rounded-2xl border border-border bg-white p-4 shadow-lg animate-float-1">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <HeartPulse className="text-emerald-600" />
                </div>

                <div>
                  <p className="font-semibold text-heading">
                    Built for Healthcare
                  </p>

                  <p className="text-sm text-muted">
                    Hospitals • Clinics • Labs
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-16 rounded-2xl border border-border bg-white p-4 shadow-lg animate-float-2">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-teal-50 p-3">
                  <Building2 className="text-teal-600" />
                </div>

                <div>
                  <p className="font-semibold text-heading">
                    Configurable Platform
                  </p>

                  <p className="text-sm text-muted">
                    One Platform. Every Workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-20 rounded-2xl border border-border bg-white p-4 shadow-lg animate-float-1">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-50 p-3">
                  <ShieldCheck className="text-cyan-600" />
                </div>

                <div>
                  <p className="font-semibold text-heading">Secure by Design</p>

                  <p className="text-sm text-muted">
                    Enterprise-grade Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
