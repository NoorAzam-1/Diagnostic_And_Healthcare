"use client";
import { useApp } from "@/context/AppContext";
import { DashboardOverview } from "@/components/DashboardOverview";

export default function Overview() {
  const { patients, storageStrategy, clinicalTemplateVer, networkSyncStatus, isDarkMode, auditLedger } = useApp();

  return (
    <DashboardOverview
      patients={patients}
      storageStrategy={storageStrategy}
      clinicalTemplateVer={clinicalTemplateVer}
      networkSyncStatus={networkSyncStatus}
      isDarkMode={isDarkMode}
      auditLedger={auditLedger}
      setActiveTab={(tab) => console.log("Navigation handled by Layout")}
    />
  );
}