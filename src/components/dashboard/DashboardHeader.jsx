"use client";

import {
  Activity,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();

  const {
    clinicName,
    licenseCode,
  } = useApp();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary text-white shadow-red">
              <Activity size={24} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg font-black text-heading">
                  {clinicName}
                </h1>

                <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-700">
                  Active
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <p className="text-xs text-body">
                  Healthcare Organization
                </p>

                <span className="h-1 w-1 rounded-full bg-muted" />

                <div className="flex items-center gap-1 text-xs text-body">
                  <ShieldCheck
                    size={12}
                    className="text-green-600"
                  />
                  ABDM Ready
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-border bg-surface px-4 py-2">
              <p className="text-[10px] uppercase tracking-wider text-muted">
                License Code
              </p>

              <p className="font-mono text-xs font-semibold text-heading">
                {licenseCode}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-red-100 cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}