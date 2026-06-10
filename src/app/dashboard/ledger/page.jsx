"use client";
import { AuditLedger } from "@/components/logs/AuditLedger";
import { useApp } from "@/context/AppContext";

export default function page() {
  const {
    isDarkMode,
    clinicalTemplateVer,
    auditLedger,
    setAuditLedger,
    triggerAlert,
  } = useApp();

  return (
    <AuditLedger
      isDarkMode={isDarkMode}
      clinicalTemplateVer={clinicalTemplateVer}
      auditLedger={auditLedger}
      setAuditLedger={setAuditLedger}
      triggerAlert={triggerAlert}
    />
  );
}
