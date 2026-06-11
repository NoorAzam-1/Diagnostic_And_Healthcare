import { Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="p-2 bg-linear-to-br from-indigo-600 to-violet-600 rounded-xl text-white shadow-lg shadow-indigo-900/30">
            <Activity size={24} />
          </div>

          <div>
            <span className="font-extrabold text-white text-lg tracking-tight">
              ApexClinical
            </span>

            <span className="text-[10px] text-slate-500 block -mt-1 font-semibold uppercase tracking-wider">
              Multi-Tenant Diagnostic Suite
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="#login-anchor"
            className="bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-900/30 font-semibold tracking-wide flex items-center space-x-1 text-xs"
          >
            <span>Sign In to Workstation</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
};