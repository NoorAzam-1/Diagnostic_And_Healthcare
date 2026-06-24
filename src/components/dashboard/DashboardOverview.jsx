"use client";
import { Terminal, TrendingUp, TrendingDown, UserPlus, Users, IndianRupee, FlaskConical } from "lucide-react";
import { useApp } from "@/context/AppContext"; 

export function DashboardOverview() {
  const {
    patients,
    storageStrategy,
    clinicalTemplateVer,
    auditLedger,
    currentUser,
  } = useApp();

  const totalPatients = patients?.length || 0;
  const patientsThisMonth = 14;
  const patientsThisYear = 84;
  const patientMonthGrowth = 12.0;
  const patientYearGrowth = 24.5;

  const totalStaff = 8;
  const staffThisMonth = 1;
  const staffThisYear = 2;
  const staffMonthGrowth = 50.0;
  const staffYearGrowth = 33.3;

  const revenueAll = 4125000;
  const revenueThisMonth = 485750;
  const revenueThisYear = 4125000;
  const revenueMonthGrowth = 8.2;
  const revenueYearGrowth = 14.5;

  const testsAll = 1240;
  const testsThisMonth = 124;
  const testsThisYear = 840;
  const testsMonthGrowth = 12.0;
  const testsYearGrowth = 18.5;

  const formatCurrency = (val) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)}L`;
    if (val >= 1000) return `₹${(val / 1000).toFixed(1)}K`;
    return `₹${val}`;
  };

  return (
    <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
      
      <div className="space-y-6">        
        <div className="border-b pb-4 border-border flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-heading">Facility Operations Monitor</h2>
            <p className="text-muted text-xs mt-1">
              Real-time monitoring panel displaying clinical metrics, data residency status, and transaction trends.
            </p>
          </div>
          <span className="hidden md:inline-flex items-center space-x-1.5 text-xs bg-red-50 text-primary px-3 py-1 rounded-full font-semibold border border-red-200">
            <TrendingUp size={14} />
            <span>Facility Status: Optimal</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">          
          <div className="p-4 rounded-xl border bg-surface border-border flex flex-col h-full">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Patient Records</span>
              <UserPlus className="text-primary" />
            </div>
            <div className="mt-3 space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="text-2xl font-black text-heading">{totalPatients} <span className="text-xs font-normal text-muted">Total</span></div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Year</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{patientsThisYear}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{patientYearGrowth}%</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Month</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{patientsThisMonth}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{patientMonthGrowth}%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-surface border-border flex flex-col h-full">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Staff Strength</span>
              <Users className="text-primary" />
            </div>
            <div className="mt-3 space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="text-2xl font-black text-heading">{totalStaff} <span className="text-xs font-normal text-muted">Total</span></div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Year</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>+{staffThisYear}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{staffYearGrowth}%</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Month</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>+{staffThisMonth}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{staffMonthGrowth}%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-surface border-border flex flex-col h-full">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Revenue</span>
              <IndianRupee className="text-success" />
            </div>
            <div className="mt-3 space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="text-2xl font-black text-heading">{formatCurrency(revenueAll)} <span className="text-xs font-normal text-muted">Total</span></div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Year</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{formatCurrency(revenueThisYear)}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{revenueYearGrowth}%</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Month</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{formatCurrency(revenueThisMonth)}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{revenueMonthGrowth}%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-surface border-border flex flex-col h-full">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Diagnostics</span>
              <FlaskConical className="text-primary" />
            </div>
            <div className="mt-3 space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="text-2xl font-black text-heading">{testsAll} <span className="text-xs font-normal text-muted">Total</span></div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Year</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{testsThisYear}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{testsYearGrowth}%</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-body">This Month</span>
                <span className="font-bold text-heading flex items-center space-x-1">
                  <span>{testsThisMonth}</span>
                  <span className="text-success text-[10px] flex items-center"><TrendingUp size={9}/>{testsMonthGrowth}%</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">          
          <div className="p-5 rounded-2xl border lg:col-span-8 flex flex-col justify-between bg-white border-border">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider block">Intake Volume Trend</h4>
                  <span className="text-lg font-bold text-heading">Aarogya Registrations</span>
                </div>
                <span className="text-[10px] bg-red-50 text-primary px-2 py-0.5 rounded font-mono font-bold border border-red-200">Past 7 Days</span>
              </div>

              <div className="h-44 w-full mt-4 flex items-end justify-between relative px-2">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                  <div className="border-b border-border w-full h-0"></div>
                  <div className="border-b border-border w-full h-0"></div>
                  <div className="border-b border-border w-full h-0"></div>
                </div>

                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '70px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Mon</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '50px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Tue</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '90px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Wed</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '110px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Thu</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '80px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Fri</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '120px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Sat</span>
                </div>
                <div className="flex flex-col items-center space-y-2 z-10 w-1/7">
                  <div className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300" style={{ height: '40px' }}></div>
                  <span className="text-[9px] text-muted font-semibold uppercase font-mono">Sun</span>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t border-border text-[11px] text-muted flex justify-between items-center mt-4">
              <span>Weekly registration load: Normal limits</span>
              <span className="font-bold text-primary">+12% increase vs last week</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border lg:col-span-4 flex flex-col justify-between bg-white border-border">
            <div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Diagnostic split</h4>
              <span className="text-base font-bold text-heading">Investigation Requests</span>
              
              <div className="flex items-center justify-center py-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="absolute inset-0" viewBox="0 0 36 36">
                    <path className="text-border" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-primary" strokeDasharray="60, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" />
                    <path className="text-success" strokeDasharray="40, 100" strokeDashoffset="60" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" />
                  </svg>
                  <div className="text-center">
                    <span className="text-base font-bold block">{testsAll}</span>
                    <span className="text-[8px] uppercase text-muted font-bold tracking-wider">Profiles</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-[10px] pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-primary rounded"></span>
                    <span>Blood Glucose Studies</span>
                  </div>
                  <span className="font-bold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-success rounded"></span>
                    <span>Lipid Profile Panels</span>
                  </div>
                  <span className="font-bold">40%</span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-muted leading-normal border-t pt-2 border-border mt-4 flex justify-between">
              <span>* Based on active configurations.</span>
              <span className="font-semibold text-body">Storage: {storageStrategy === 'LOCAL_ENCLAVE' ? 'Local' : 'Cloud'}</span>
            </div>
          </div>
        </div>
      </div>

      {currentUser?.role?.includes('Admin') && auditLedger && (
        <div className="p-4 rounded-xl border mt-6 bg-surface border-border space-y-3">
          <div className="flex items-center justify-between text-xs">
            <h4 className="font-bold text-muted uppercase tracking-widest flex items-center space-x-1.5">
              <Terminal size={14} />
              <span>Active Terminal Journal Overview</span>
            </h4>
            <span className="text-[10px] text-primary font-bold">Admin Verified</span>
          </div>
          <div className="space-y-1 font-mono text-[10px] text-body">
            {auditLedger.slice(0, 2).map((item, idx) => (
              <div key={idx} className="truncate">
                &gt; [{item.timestamp?.substring(11, 19)}] {item.action}: {item.details}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}