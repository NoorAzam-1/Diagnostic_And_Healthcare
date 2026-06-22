import { ShieldCheck } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer
      className={`border-t backdrop-blur-md transition-colors duration-300`}    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <ShieldCheck size={14} className="text-emerald-700" />
          <span className="text-[10px] font-semibold tracking-wider text-white uppercase">
            National Health Authority Certified
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Secure Session
          </span>
          <span className="opacity-50">|</span>
          <span>Demo Workspace Portal</span>
        </div>
      </div>
    </footer>
  );
}
