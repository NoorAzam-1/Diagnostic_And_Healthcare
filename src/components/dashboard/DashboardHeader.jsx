"use client";
import { Activity, Moon, Sun, LogOut } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();
  const {
    clinicName,
    licenseCode,
    isDarkMode,
    setIsDarkMode,
  } = useApp();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-200 dark:shadow-none">
            <Activity size={22} className="animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">
              {clinicName}
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              License: <span className="font-mono">{licenseCode}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={handleLogout}
            className="bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 dark:hover:bg-rose-500/20 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            <LogOut size={14} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
