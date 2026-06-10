"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Layers,
  UserPlus,
  Database,
  Settings,
  Users,
  Shield,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { currentUser } = useApp();
  const isAdmin = currentUser?.role?.includes("Admin");

  return (
    <aside className="w-64 shrink-0 flex flex-col space-y-6">
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50"></span>
          </span>
          <span className="text-sm font-black text-slate-800 dark:text-slate-100">
            {currentUser?.name || "Active User"}
          </span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5 mt-0.5 font-medium">
          {currentUser?.role || "Staff"}
        </p>
      </div>

      <nav className="space-y-1.5 flex-1">
        <NavItem
          href="/dashboard"
          icon={<Layers size={16} />}
          label="Overview"
          active={pathname === "/dashboard"}
        />
        <NavItem
          href="/dashboard/intake"
          icon={<UserPlus size={16} />}
          label="Add Patient"
          active={pathname === "/dashboard/intake"}
        />
        <NavItem
          href="/dashboard/records"
          icon={<Database size={16} />}
          label="Patient's Details"
          active={pathname === "/dashboard/records"}
        />

        {isAdmin && (
          <>
            <div className="pt-6 pb-2 mt-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest px-4 block">
                System Administration
              </span>
            </div>

            <NavItem
              href="/dashboard/protocols"
              icon={<Settings size={16} />}
              label="Protocols Config"
              active={pathname === "/dashboard/protocols"}
            />
            <NavItem
              href="/dashboard/staff"
              icon={<Users size={16} />}
              label="Staff Management"
              active={pathname === "/dashboard/staff"}
            />
            <NavItem
              href="/dashboard/ledger"
              icon={<Shield size={16} />}
              label="Audit Ledger"
              active={pathname === "/dashboard/ledger"}
            />
          </>
        )}
      </nav>
    </aside>
  );
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none"
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}