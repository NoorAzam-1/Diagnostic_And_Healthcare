"use client";
import { TypeAnimation } from "react-type-animation";
import { LoginPage } from "@/components/login/LoginPage";
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  Database,
  Users,
  FlaskConical,
} from "lucide-react";

const features = [
  "ABDM Ready",
  "Role Based Access",
  "Audit Logs",
  "Patient Records",
  "Lab Diagnostics",
  "Multi Branch Management",
];

export default function HeroSection() {
  return (
    <section className="relative container-custom overflow-hidden pt-24 pb-6 md:pt-24 lg:pt-28">
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-100/80 blur-[160px] animate-pulse-slow" />
      <div className="absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-teal-100/70 blur-[150px] animate-pulse-slow" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase animate-fade-in-down">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              Healthcare ERP Platform
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-heading leading-[1.05]">
              <span className="block animate-slide-up-1">
                Healthcare Operating System
              </span>

              <span className="block py-1 md:py-2 bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slide-up-2">
                <TypeAnimation
                  sequence={[
                    "For Diagnostic Labs",
                    2000,
                    "For Hospitals",
                    2000,
                    "For Clinics",
                    2000,
                    "Multi Branch Org.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            <p className="mt-6 max-w-6xl text-lg md:text-xl leading-relaxed text-body animate-slide-up-3">
              Manage patient records, laboratory workflows, staff operations,
              reports, audit logs and healthcare data through one secure,
              scalable and ABDM-ready platform.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3  gap-3">
              {features.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs sm:text-sm font-medium text-body shadow-sm animate-pill-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2 size={14} className="text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 animate-slide-up-4">
              <button className="group relative rounded-2xl bg-primary px-6 py-4 text-white font-semibold shadow-[0_12px_32px_rgba(15,118,110,0.22)] transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                <span className="relative z-10">Request Demo</span>
                <span className="btn-shimmer-line" />
              </button>

              <button className="rounded-2xl border border-border bg-white px-6 py-4 font-semibold text-heading shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md cursor-pointer">
                View Platform
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative animate-card-in">
              <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-emerald-100 via-white to-teal-100 blur-3xl animate-glow-pulse" />

              <div className="animated-border-wrapper">
                <div className="relative rounded-[34px] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <LoginPage />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-lg animate-float-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  <span className="text-sm font-semibold text-heading">
                    ABDM Ready
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-teal-200 bg-white px-4 py-3 shadow-lg animate-float-2">
                <div className="flex items-center gap-2">
                  <Activity size={18} className="text-teal-600" />
                  <span className="text-sm font-semibold text-heading">
                    Real-time Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-5">
          <div
            className="md:col-span-6 rounded-4xl border border-border bg-surface p-6 shadow-sm animate-card-up"
            style={{ animationDelay: "0ms" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
              <Users size={22} className="text-emerald-600" />
            </div>

            <h3 className="text-xl font-bold text-heading">
              Patient Management
            </h3>

            <p className="mt-3 text-body leading-relaxed">
              Centralized patient registration, demographic information,
              clinical history, search, tracking and healthcare records
              management across all branches.
            </p>
          </div>

          <div
            className="md:col-span-3 rounded-4xl border border-border bg-surface p-6 shadow-sm animate-card-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
              <FlaskConical size={22} className="text-teal-600" />
            </div>

            <h3 className="text-lg font-bold text-heading">Lab Diagnostics</h3>

            <p className="mt-3 text-sm text-body leading-relaxed">
              CBC, LFT, KFT, Thyroid and custom test configuration.
            </p>
          </div>

          <div
            className="md:col-span-3 rounded-4xl border border-border bg-surface p-6 shadow-sm animate-card-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
              <Database size={22} className="text-cyan-600" />
            </div>

            <h3 className="text-lg font-bold text-heading">Secure Data</h3>

            <p className="mt-3 text-sm text-body leading-relaxed">
              Tenant isolation, audit logs and enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}