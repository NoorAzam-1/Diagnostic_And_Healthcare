"use client";
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-background text-heading flex flex-col overflow-hidden">
      <DashboardHeader onMenuToggle={() => setMobileMenuOpen(true)} />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-background p-4 pt-6 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar isMobile onClose={() => setMobileMenuOpen(false)} />
      </aside>

      <div className="container-custom flex flex-1 gap-4 py-4 min-h-0">
        <aside className="hidden md:block w-72 shrink-0 overflow-y-auto pr-1">
          <DashboardSidebar />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col min-h-0">
          <main className="flex-1 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="relative flex h-full flex-col">
              <div className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-linear-to-b from-red-50/60 to-transparent" />

              <div className="relative z-10 flex-1 overflow-y-auto">
                {children}
                <DashboardFooter />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}