import { Lock } from "lucide-react";

export default function Footer({isDarkMode}) {
  return (
    <footer
      className={`border-t py-4 text-xs shrink-0 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-205"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div className="flex items-center space-x-2">
          <Lock className="text-emerald-600 animate-pulse" size={14} />
          <span>
            Encrypted medical workstation. National Health Authority verified
            schema isolation.
          </span>
        </div>
        <p>Demo Workspace Portal • Prepared for Client Technical Audit</p>
      </div>
    </footer>
  );
}

