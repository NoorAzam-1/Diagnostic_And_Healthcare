"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Activity, Layers, UserPlus, Database, Settings, Users, Shield, Lock, Moon, Sun, LogOut } from "lucide-react";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, clinicName, licenseCode, clinicalTemplateVer, networkSyncStatus, setNetworkSyncStatus, triggerAlert, isDarkMode, setIsDarkMode } = useApp();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className={`min-h-screen font-sans antialiased flex flex-col ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
      
      {/* HEADER */}
      <header className={`border-b shrink-0 sticky top-0 z-40 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md">
              <Activity size={22} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-base font-black">{clinicName}</h1>
              <p className="text-[11px] text-slate-500">License: <span className="font-mono">{licenseCode}</span> • Template v{clinicalTemplateVer}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             {/* Network Toggle */}
             <div className={`flex border rounded-lg p-1 text-xs ${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
               <button onClick={() => { setNetworkSyncStatus("online"); triggerAlert("Cloud Active", "success"); }} className={`px-2 py-1 rounded text-[10px] font-bold ${networkSyncStatus === "online" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400"}`}>Cloud</button>
               <button onClick={() => { setNetworkSyncStatus("offline"); triggerAlert("Local Mode", "warning"); }} className={`px-2 py-1 rounded text-[10px] font-bold ${networkSyncStatus === "offline" ? "bg-white text-amber-600 shadow-sm" : "text-slate-400"}`}>Local</button>
             </div>

             <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 border rounded-lg ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
               {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
             </button>
             
             <button onClick={handleLogout} className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">
               <LogOut size={12} /> Logout
             </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 flex gap-6">
        {/* SIDEBAR */}
        <aside className="w-64 shrink-0 flex flex-col space-y-2">
          <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-black">{currentUser?.name}</span>
            </div>
            <p className="text-[10px] text-slate-500 pl-4">{currentUser?.role}</p>
          </div>

          <nav className="space-y-1 pt-2">
            <NavItem href="/dashboard" icon={<Layers size={15}/>} label="Overview" active={pathname === "/dashboard"} />
            <NavItem href="/dashboard/intake" icon={<UserPlus size={15}/>} label="Patient Intake" active={pathname === "/dashboard/intake"} />
            <NavItem href="/dashboard/records" icon={<Database size={15}/>} label="Records Vault" active={pathname === "/dashboard/records"} />
            
            <div className="pt-4 pb-1 border-t border-slate-200 dark:border-slate-800 mt-2">
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider px-4 block">Admin Only</span>
            </div>
            
            <AdminNavItem href="/dashboard/protocols" icon={<Settings size={15}/>} label="Config" active={pathname === "/dashboard/protocols"} role={currentUser?.role} />
            <AdminNavItem href="/dashboard/staff" icon={<Users size={15}/>} label="Staff" active={pathname === "/dashboard/staff"} role={currentUser?.role} />
            <AdminNavItem href="/dashboard/ledger" icon={<Shield size={15}/>} label="Audit Ledger" active={pathname === "/dashboard/ledger"} role={currentUser?.role} />
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className={`flex-1 rounded-2xl border shadow-sm overflow-hidden min-h-[600px] ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
          {children}
        </main>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

// Sidebar Navigation Helper
function NavItem({ href, icon, label, active }) {
  return (
    <Link href={href} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${active ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"}`}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function AdminNavItem({ href, icon, label, active, role }) {
  const isAdmin = role?.includes("Admin");
  return (
    <Link href={href} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${active ? "bg-indigo-600 text-white" : !isAdmin ? "opacity-40 cursor-not-allowed text-slate-400" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"}`}>
      {icon}
      <span>{label}</span>
      {!isAdmin && <Lock size={12} className="ml-auto" />}
    </Link>
  );
}