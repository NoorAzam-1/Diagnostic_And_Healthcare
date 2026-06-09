import { ArrowRight, Terminal, TrendingUp, UserPlus } from "lucide-react";

export function DashboardOverview({ 
  patients, 
  storageStrategy, 
  clinicalTemplateVer, 
  networkSyncStatus, 
  isDarkMode, 
  auditLedger,
  setActiveTab,
  currentUser
}) {
  return (
    <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
      
      <div className="space-y-6">
        
        {/* Header Block */}
        <div className="border-b pb-4 border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Facility Operations Monitor</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              Real-time monitoring panel displaying clinical metrics, data residency status, and transaction trends.
            </p>
          </div>
          <span className="hidden md:inline-flex items-center space-x-1.5 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 px-3 py-1 rounded-full font-semibold">
            <TrendingUp size={14} />
            <span>Facility Status: Optimal</span>
          </span>
        </div>

        {/* Operational Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Storage Residency</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2">
              {storageStrategy === 'LOCAL_ENCLAVE' ? 'Workstation' : 'Central Network'}
            </h3>
            <p className="text-[10px] text-slate-500 mt-1 leading-normal">
              {storageStrategy === 'LOCAL_ENCLAVE' ? 'Encrypted On-Premise SQLite' : 'Enterprise Cloud Database'}
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Registered Patient Files</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2">{patients.length} Active Records</h3>
            <p className="text-[10px] text-slate-500 mt-1">
              Indian clinical template active
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Active Schema Protocol</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2">Version v{clinicalTemplateVer}.00</h3>
            <p className="text-[10px] text-slate-500 mt-1">
              Dynamic client rendering online
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">NHA Sync State</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2 capitalize">{networkSyncStatus}</h3>
            <p className="text-[10px] text-slate-500 mt-1">
              {networkSyncStatus === 'online' ? 'Active clinical gateway sync' : 'Offline local cache buffer'}
            </p>
          </div>

        </div>

        {/* MODERNISED INTERACTIVE CLINICAL CHARTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Chart Card 1: Patients registration volume & trend */}
          <div className={`p-5 rounded-2xl border lg:col-span-8 flex flex-col justify-between ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border border-slate-200'}`}>
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Intake Volume Trend</h4>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Aarogya Registrations</span>
                </div>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400 px-2 py-0.5 rounded font-mono font-bold">Past 7 Days</span>
              </div>

              {/* Pure SVG Bar/Line graph representing daily registration metrics */}
              <div className="h-44 w-full mt-4 flex items-end justify-between relative px-2">
                
                {/* Horizontal reference lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                  <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                  <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                  <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                </div>

                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '70px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Mon</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '50px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Tue</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '90px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Wed</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '110px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Thu</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '80px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Fri</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '120px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Sat</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-indigo-600 w-8 rounded-t-md hover:bg-indigo-500 transition-all duration-300" style={{ height: '40px' }}></div>
                  <span className="text-[9px] text-slate-400 font-semibold uppercase font-mono">Sun</span>
                </div>

              </div>
            </div>
            
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex justify-between items-center mt-4">
              <span>Weekly registration load: Normal limits</span>
              <span className="font-bold text-indigo-600">+12% increase vs last week</span>
            </div>
          </div>

          {/* Chart Card 2: Diagnostic requests split (Visual donut) */}
          <div className={`p-5 rounded-2xl border lg:col-span-4 flex flex-col justify-between ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border border-slate-200'}`}>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Diagnostic split</h4>
              <span className="text-base font-bold text-slate-900 dark:text-white">Investigation Requests</span>
              
              {/* Circular Representation */}
              <div className="flex items-center justify-center py-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="absolute inset-0" viewBox="0 0 36 36">
                    {/* Circle Background */}
                    <path className="text-slate-100 dark:text-slate-800" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    {/* Donut slice 1: Glucose (60%) */}
                    <path className="text-indigo-600" strokeDasharray="60, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" />
                    {/* Donut slice 2: Lipid (40%) */}
                    <path className="text-emerald-500" strokeDasharray="40, 100" strokeDashoffset="60" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" />
                  </svg>
                  <div className="text-center">
                    <span className="text-base font-bold block">{patients.length}</span>
                    <span className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Profiles</span>
                  </div>
                </div>
              </div>

              {/* Legends */}
              <div className="space-y-1.5 text-[10px] pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded"></span>
                    <span>Blood Glucose Studies</span>
                  </div>
                  <span className="font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded"></span>
                    <span>Lipid Profile Panels</span>
                  </div>
                  <span className="font-bold">40%</span>
                </div>
              </div>
            </div>

            <p className="text-[9px] text-slate-400 leading-normal border-t pt-2 border-slate-100 dark:border-slate-800 mt-4">
              * Based on active configurations enabled inside Settings.
            </p>
          </div>

        </div>

        {/* Dynamic Patient Entry Form Shortcut Bar */}
        <div className="bg-linear-to-r from-indigo-500 to-indigo-700 p-5 rounded-2xl text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base flex items-center space-x-2">
              <UserPlus size={18} />
              <span>Ready to register a new Patient?</span>
            </h4>
            <p className="text-xs opacity-90 mt-1 max-w-xl">
              Execute standardized patient entry forms dynamically matched to the active template validation metrics. Form saves instantly in chosen localized strategy.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('intake')}
            className="bg-white text-indigo-700 hover:bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1"
          >
            <span>Launch Intake Form</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>

      {/* Terminal View preview */}
      {currentUser?.role?.includes('Admin') && (
        <div className={`p-4 rounded-xl border mt-6 ${isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'} space-y-3`}>
          <div className="flex items-center justify-between text-xs">
            <h4 className="font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
              <Terminal size={14} />
              <span>Active Terminal Journal Overview</span>
            </h4>
            <span className="text-[10px] text-indigo-600 font-bold">Admin Verified</span>
          </div>
          <div className="space-y-1 font-mono text-[10px] text-slate-600 dark:text-slate-400">
            {auditLedger.slice(0, 2).map((item, idx) => (
              <div key={idx} className="truncate">
                &gt; [{item.timestamp.substring(11, 19)}] {item.action}: {item.details}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
