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
  ChevronRight,
  X,
} from "lucide-react";

export default function DashboardSidebar({ isMobile, onClose }) {
  const pathname = usePathname();

  const { currentUser } = useApp();

  const isAdmin = currentUser?.role?.includes("Admin");

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col relative pb-4">
      {isMobile && (
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 z-10 p-2 rounded-xl border border-border bg-white text-body hover:bg-surface-hover transition cursor-pointer"
        >
          <X size={18} />
        </button>
      )}

      <div className="rounded-xl md:rounded-2xl border border-border bg-white p-5 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="block h-3 w-3 rounded-full bg-green-500" />
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-heading truncate">
              {currentUser?.name || "Healthcare User"}
            </h3>
            <p className="text-xs text-body truncate">{currentUser?.role || "Staff"}</p>
          </div>
        </div>
      </div>

      <nav className="mt-5 flex-1 rounded-2xl border border-border bg-white p-3 shadow-sm">
        <div className="space-y-1">
          <NavItem
            href="/dashboard"
            icon={<Layers size={18} />}
            label="Overview"
            active={pathname === "/dashboard"}
            onClick={handleLinkClick}
          />

          <NavItem
            href="/dashboard/intake"
            icon={<UserPlus size={18} />}
            label="Patient Registration"
            active={pathname === "/dashboard/intake"}
            onClick={handleLinkClick}
          />

          <NavItem
            href="/dashboard/records"
            icon={<Database size={18} />}
            label="Patient Records"
            active={pathname === "/dashboard/records"}
            onClick={handleLinkClick}
          />
        </div>

        {isAdmin && (
          <>
            <div className="my-5 border-t border-border pt-5">
              <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                Administration
              </p>
            </div>

            <div className="space-y-1">
              <NavItem
                href="/dashboard/protocols"
                icon={<Settings size={18} />}
                label="Lab Configuration"
                active={pathname === "/dashboard/protocols"}
                onClick={handleLinkClick}
              />

              <NavItem
                href="/dashboard/staff"
                icon={<Users size={18} />}
                label="Staff Management"
                active={pathname === "/dashboard/staff"}
                onClick={handleLinkClick}
              />

              <NavItem
                href="/dashboard/ledger"
                icon={<Shield size={18} />}
                label="Audit Logs"
                active={pathname === "/dashboard/ledger"}
                onClick={handleLinkClick}
              />
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

function NavItem({ href, icon, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
        active
          ? "bg-primary text-white shadow-red"
          : "text-body hover:bg-red-50 hover:text-primary"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>

      <ChevronRight
        size={14}
        className={`transition-transform ${
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
        }`}
      />
    </Link>
  );
}