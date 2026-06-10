import { Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-slate-50 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-sm">
            <Activity size={24} />
          </div>
          <div>
            <span className="font-extrabold text-slate-950 text-lg tracking-tight">
              ApexClinical
            </span>
            <span className="text-[10px] text-slate-500 block -mt-1 font-semibold uppercase tracking-wider">
              Multi-Tenant Diagnostic Suite
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-4 text-xs font-bold text-slate-600">
          <Link
            href="#login-anchor"
            className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl hover:bg-indigo-700 transition shadow-sm font-semibold tracking-wide flex items-center space-x-1"
          >
            <span>Sign In to Workstation</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
