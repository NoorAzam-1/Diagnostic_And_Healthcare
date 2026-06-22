import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-heading">
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />

        <div className="container-custom flex flex-1 gap-4 py-4">
          <aside className="hidden md:block w-72 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
              <DashboardSidebar />
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <main className="flex-1 overflow-hidden rounded-[32px] border border-border bg-white shadow-sm">
              <div className="relative flex h-full flex-col">
                <div className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-linear-to-b from-red-50/60 to-transparent" />

                <div className="relative z-10 flex-1 overflow-y-auto">
                  {children}
                </div>

                <div className="border-t border-border">
                  <DashboardFooter />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}