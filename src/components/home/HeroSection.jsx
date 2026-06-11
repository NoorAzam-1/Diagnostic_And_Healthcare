import { LoginPage } from "@/components/login/LoginPage";
import { Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mt-10 py-12 lg:py-20 px-6 max-w-7xl mx-auto">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium text-xs tracking-wide backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            ABDM Compliant Healthcare SaaS
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Unified Intelligence
              <br />
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                for Modern Indian Labs
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Empower your diagnostic lab or hospital with real-time patient
              data tracking, structured clinical analytics, and high-performance
              workflow automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              Real-time Analytics
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              Multi-branch Sync
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              100% Data Isolation
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Activity size={20} className="text-indigo-400" />
              </div>

              <h3 className="font-bold text-base text-white mb-2">
                Live Diagnostics Hub
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Monitor active test volumes, patient wait times, and turnaround
                speed across all counters instantly.
              </p>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <ShieldCheck size={20} className="text-emerald-400" />
              </div>

              <h3 className="font-bold text-base text-white mb-2">
                ABDM Health Locker
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless generation of ABHA IDs and secure processing of digital
                health records under Indian national standards.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />

          <div className="relative border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl rounded-2xl p-2">
            <LoginPage />
          </div>
        </div>
      </div>
    </section>
  );
}
