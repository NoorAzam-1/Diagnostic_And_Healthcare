"use client";
import { Header } from "@/components/common/Header";
import { LoginPage } from "@/components/login/LoginPage";
import { Activity, ShieldCheck, CheckCircle2 } from "lucide-react";
import LandingFooter from "@/components/common/LandingFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 relative overflow-hidden">
      <Header />

      <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              ABDM Compliant Healthcare SaaS
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Unified Intelligence <br />
                <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  for Modern Indian Labs
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                Empower your diagnostic lab or hospital with real-time patient
                data tracking, structured clinical analytics, and
                high-performance workflow automation.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />{" "}
                Real-time Analytics
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />{" "}
                Multi-branch Sync
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" /> 100%
                Data Isolation
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white/70 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <Activity size={20} className="text-indigo-600" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">
                  Live Diagnostics Hub
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Monitor active test volumes, patient wait times, and
                  turnaround speed across all counters instantly.
                </p>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <ShieldCheck size={20} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-1">
                  ABDM Health Locker
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Seamless generation of ABHA IDs and secure processing of
                  digital health records under Indian national standards.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-emerald-500 rounded-3xl opacity-[0.03] blur-xl" />
            <div className="relative border border-slate-200/60 bg-white shadow-xl shadow-slate-100/50 rounded-2xl p-2">
              <LoginPage />
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
