import { ShieldCheck, HeartPulse } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 lg:flex-row">
        <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
          <ShieldCheck size={14} className="text-green-600" />

          <span className="text-[11px] font-semibold uppercase tracking-wider text-green-700">
            ABDM Compliant Platform
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-body">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Secure Active Session
          </span>

          <span className="hidden md:block text-border-hover">
            |
          </span>

          <span>Healthcare Operations Workspace</span>

          <span className="hidden md:block text-border-hover">
            |
          </span>

          <span className="flex items-center gap-1">
            Powered by HERAI ONE
            <HeartPulse size={12} className="text-red-600" />
          </span>
        </div>
      </div>
    </footer>
  );
}