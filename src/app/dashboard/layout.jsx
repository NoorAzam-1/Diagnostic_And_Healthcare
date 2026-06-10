"use client";
import { useApp } from "@/context/AppContext";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Footer from "@/components/common/Footer";

export default function DashboardLayout({ children }) {
  const { isDarkMode } = useApp();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="h-screen font-sans antialiased flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden px-4">
        <DashboardHeader />

        <div className="flex-1 flex overflow-hidden w-full mx-auto gap-2">
          <div className="hidden md:block w-64 shrink-0 py-4 overflow-y-auto h-full ">
            <DashboardSidebar />
          </div>
          <div className="flex-1 py-4 h-full flex flex-col overflow-hidden">
            <main className="flex-1 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-y-auto relative flex flex-col min-h-0">
              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 to-transparent dark:from-slate-800/10 dark:to-transparent pointer-events-none z-20" />
              <div className="relative z-10 flex-1 ">{children}</div>
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
