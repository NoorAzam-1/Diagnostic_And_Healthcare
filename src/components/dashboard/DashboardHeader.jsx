"use client";

import {
  Activity,
  LogOut,
  ShieldCheck,
  Menu,
} from "lucide-react";

import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function DashboardHeader({ onMenuToggle }) {
  const router = useRouter();

  const {
    clinicName,
    licenseCode,
  } = useApp();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 lg:py-4 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={onMenuToggle} 
              className="p-2 rounded-xl border border-border bg-surface text-heading md:hidden hover:bg-surface-hover transition cursor-pointer"
            >
              <Menu size={20} />
            </button>

            <div className="flex h-11 w-11 lg:h-14 lg:w-14 items-center justify-center rounded-2xl lg:rounded-3xl bg-primary text-white shadow-red shrink-0">
              <Activity size={20} className="lg:hidden" />
              <Activity size={24} className="hidden lg:block" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm lg:text-lg font-black text-heading truncate">
                  {clinicName}
                </h1>
                <span className="hidden sm:inline-flex rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700 shrink-0">
                  Active
                </span>
              </div>

              <div className="mt-0.5 hidden sm:flex items-center gap-2">
                <p className="text-[11px] text-body">
                  Healthcare Organization
                </p>
                <span className="h-1 w-1 rounded-full bg-muted" />
                <div className="flex items-center gap-1 text-[11px] text-body">
                  <ShieldCheck size={11} className="text-green-600" />
                  ABDM Ready
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <div className="hidden lg:flex rounded-2xl border border-border bg-surface px-4 py-2">
              <p className="text-[10px] uppercase tracking-wider text-muted">
                License Code
              </p>
              <p className="font-mono text-xs font-semibold text-heading">
                {licenseCode}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl lg:rounded-2xl border border-red-200 bg-red-50 px-3 py-2 lg:px-4 lg:py-3 text-xs lg:text-sm font-semibold text-red-600 transition-all hover:bg-red-100 cursor-pointer"
            >
              <LogOut size={14} className="lg:hidden" />
              <LogOut size={16} className="hidden lg:block" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}