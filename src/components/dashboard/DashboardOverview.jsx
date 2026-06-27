"use client";
import {
  Terminal,
  TrendingUp,
  TrendingDown,
  UserPlus,
  Users,
  IndianRupee,
  FlaskConical,
  ShieldCheck,
  BriefcaseBusiness,
  Timer,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { ROLE_DASHBOARD_SNAPSHOTS } from "@/constant/Data";

const metricIcons = {
  users: Users,
  plans: BriefcaseBusiness,
  mrr: IndianRupee,
  uptime: ShieldCheck,
  renewals: BriefcaseBusiness,
  expiring: Timer,
  patients: UserPlus,
  staff: Users,
  revenue: IndianRupee,
  tests: FlaskConical,
  myIntake: UserPlus,
  pending: Terminal,
  turnaround: Timer,
  quality: ShieldCheck,
};

const weekdayShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function DashboardOverview() {
  const { currentUser, auditLedger, storageStrategy } = useApp();

  const roleKey = currentUser?.role?.includes("Super Admin")
    ? "superadmin"
    : currentUser?.role?.includes("Admin")
      ? "admin"
      : "staff";

  const snapshot = ROLE_DASHBOARD_SNAPSHOTS[roleKey];
  const isSuperAdmin = roleKey === "superadmin";
  const feedEntries =
    roleKey === "admin" && auditLedger?.length
      ? auditLedger.slice(0, 3).map((item) => `${item.action}: ${item.details}`)
      : snapshot.stream;

  return (
    <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="border-b pb-4 border-border flex justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-heading">{snapshot.title}</h2>
            <p className="text-muted text-xs mt-1">{snapshot.description}</p>
          </div>
          <span className="hidden md:inline-flex items-center space-x-1.5 text-xs bg-red-50 text-primary px-3 py-1 rounded-full font-semibold border border-red-200 whitespace-nowrap">
            <TrendingUp size={14} />
            <span>{snapshot.statusText}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {snapshot.metrics.map((metric) => {
            const MetricIcon = metricIcons[metric.id] || TrendingUp;
            const yearTrendUp = !metric.yearTrend.startsWith("-");
            const monthTrendUp = !metric.monthTrend.startsWith("-");

            return (
              <div
                key={metric.id}
                className="p-4 rounded-xl border bg-surface border-border flex flex-col h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                    {metric.label}
                  </span>
                  <MetricIcon className="text-primary" />
                </div>

                <div className="mt-3 space-y-2.5 flex-1 flex flex-col justify-center">
                  <div className="text-2xl font-black text-heading">
                    {metric.total}{" "}
                    <span className="text-xs font-normal text-muted">
                      {metric.totalHint}
                    </span>
                  </div>
                  <div className="h-px bg-border" />

                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-body">{metric.yearLabel}</span>
                    <span className="font-bold text-heading flex items-center space-x-1">
                      <span>{metric.yearValue}</span>
                      <span
                        className={`text-[10px] flex items-center ${
                          yearTrendUp ? "text-success" : "text-rose-600"
                        }`}
                      >
                        {yearTrendUp ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                        {metric.yearTrend}
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-body">{metric.monthLabel}</span>
                    <span className="font-bold text-heading flex items-center space-x-1">
                      <span>{metric.monthValue}</span>
                      <span
                        className={`text-[10px] flex items-center ${
                          monthTrendUp ? "text-success" : "text-rose-600"
                        }`}
                      >
                        {monthTrendUp ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                        {metric.monthTrend}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="p-5 rounded-2xl border lg:col-span-8 flex flex-col justify-between bg-white border-border">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider block">
                    {snapshot.trendTitle}
                  </h4>
                  <span className="text-lg font-bold text-heading">Weekly Activity</span>
                </div>
                <span className="text-[10px] bg-red-50 text-primary px-2 py-0.5 rounded font-mono font-bold border border-red-200">
                  {snapshot.trendTag}
                </span>
              </div>

              <div className="h-44 w-full mt-4 flex items-end justify-between relative px-2">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                  <div className="border-b border-border w-full h-0" />
                  <div className="border-b border-border w-full h-0" />
                  <div className="border-b border-border w-full h-0" />
                </div>

                {snapshot.trendBars.map((height, idx) => (
                  <div
                    key={`${weekdayShort[idx]}-${height}`}
                    className="flex flex-col items-center space-y-2 z-10 w-1/7"
                  >
                    <div
                      className="bg-primary w-8 rounded-t-md hover:bg-primary-hover transition-all duration-300"
                      style={{ height: `${height}px` }}
                    />
                    <span className="text-[9px] text-muted font-semibold uppercase font-mono">
                      {weekdayShort[idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-border text-[11px] text-muted flex justify-between items-center mt-4">
              <span>{snapshot.trendFooter}</span>
              <span className="font-bold text-primary">Storage: {storageStrategy === "LOCAL_ENCLAVE" ? "Local" : "Cloud"}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border lg:col-span-4 flex flex-col justify-between bg-white border-border">
            <div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                {snapshot.splitTitle}
              </h4>
              <span className="text-base font-bold text-heading">{snapshot.splitTotal}</span>

              <div className="flex items-center justify-center py-6">
                <div className="relative w-32 h-32 p-2 flex items-center justify-center">
                  <svg className="absolute inset-0" viewBox="0 0 36 36">
                    <path
                      className="text-border"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-primary"
                      strokeDasharray="60, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                    />
                    <path
                      className="text-success"
                      strokeDasharray="40, 100"
                      strokeDashoffset="60"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                    />
                  </svg>
                  <div className="text-center">
                    <span className="text-base font-bold block p-2">{snapshot.splitTotal}</span>
                    <span className="text-[7px] uppercase text-muted font-bold tracking-wider">
                      Distribution
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-[10px] pt-3">
                {snapshot.splitLegend.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 bg-primary rounded" />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-bold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[9px] text-muted leading-normal border-t pt-2 border-border mt-4">
              * {snapshot.splitNote}
            </div>
          </div>
        </div>

        {isSuperAdmin && Array.isArray(snapshot.planSubscriptions) && (
          <div className="p-5 rounded-2xl border bg-white border-border">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider block">
                  Tenant Subscription Ledger
                </h4>
                <span className="text-base font-bold text-heading">
                  Plan type, seat usage, and expiry details
                </span>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-160 text-left text-xs">
                <thead>
                  <tr className="text-muted border-b border-border">
                    <th className="py-2 pr-3 font-semibold">Tenant</th>
                    <th className="py-2 pr-3 font-semibold">Plan</th>
                    <th className="py-2 pr-3 font-semibold">Users</th>
                    <th className="py-2 pr-3 font-semibold">Expires On</th>
                    <th className="py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {snapshot.planSubscriptions.map((item) => (
                    <tr key={`${item.tenant}-${item.plan}`} className="border-b border-border/60">
                      <td className="py-2 pr-3 text-heading font-semibold">{item.tenant}</td>
                      <td className="py-2 pr-3">{item.plan}</td>
                      <td className="py-2 pr-3">{item.users}</td>
                      <td className="py-2 pr-3 font-mono">{item.expiresOn}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            item.status === "Active"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : item.status === "Renewal Due"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-rose-50 text-rose-700 border border-rose-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 rounded-xl border mt-6 bg-surface border-border space-y-3">
        <div className="flex items-center justify-between text-xs">
          <h4 className="font-bold text-muted uppercase tracking-widest flex items-center space-x-1.5">
            <Terminal size={14} />
            <span>{snapshot.streamTitle}</span>
          </h4>
          <span className="text-[10px] text-primary font-bold">{snapshot.streamTag}</span>
        </div>
        <div className="space-y-1 font-mono text-[10px] text-body">
          {feedEntries.map((entry, idx) => (
            <div key={`${entry}-${idx}`} className="truncate">
              &gt; {entry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}