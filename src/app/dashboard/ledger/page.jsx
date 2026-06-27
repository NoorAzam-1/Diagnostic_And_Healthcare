"use client";
import { AuditLedger } from "@/components/logs/AuditLedger";
import { useApp } from "@/context/AppContext";
import { SUPERADMIN_NETWORK_LOGIN_LOGS } from "@/constant/Data";

export default function Page() {
  const {
    currentUser,
    isDarkMode,
    clinicalTemplateVer,
    auditLedger,
    setAuditLedger,
    triggerAlert,
  } = useApp();

  const isSuperAdmin = currentUser?.role?.includes("Super Admin");
  const loginOnlyAudit = auditLedger.filter((item) =>
    item.action?.includes("AUTH_SESSION"),
  );
  const ledgerView = isSuperAdmin
    ? loginOnlyAudit.length
      ? loginOnlyAudit
      : SUPERADMIN_NETWORK_LOGIN_LOGS
    : auditLedger;

  return (
    <AuditLedger
      isDarkMode={isDarkMode}
      clinicalTemplateVer={clinicalTemplateVer}
      auditLedger={ledgerView}
      setAuditLedger={setAuditLedger}
      triggerAlert={triggerAlert}
    />
  );
}
