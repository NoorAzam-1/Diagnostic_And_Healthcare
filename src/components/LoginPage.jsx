import React, { useState } from "react";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { INITIAL_AUDIT_LOGS, INITIAL_STAFF } from "@/constant/Data";

export const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("noor.azam@apexclinical.in");
  const [loginPassword, setLoginPassword] = useState("••••••••");
  const [licenseCode, setLicenseCode] = useState("IND-KA-9921");
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [staffDirectory, setStaffDirectory] = useState(INITIAL_STAFF);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auditLedger, setAuditLedger] = useState(INITIAL_AUDIT_LOGS);
  const [clinicalTemplateVer, setClinicalTemplateVer] = useState(2);

  const triggerAlert = (message, type = "success") => {
    setAlertMessage({ message, type });
    setTimeout(() => setAlertMessage(null), 4000);
  };

  const addLedgerEntry = (action, details, forcedOperator = null) => {
    const timestamp = new Date().toISOString();
    const previousChainSignature =
      auditLedger[0]?.integritySignature || "00000000...0000";

    // Simple mock SHA encryption logic for visual demonstration
    const hashSeed = action + details + timestamp;
    let computedHash = 0;
    for (let i = 0; i < hashSeed.length; i++) {
      computedHash =
        (computedHash << 5) - computedHash + hashSeed.charCodeAt(i);
      computedHash |= 0;
    }
    const signaturePrefix = Math.abs(computedHash)
      .toString(16)
      .padEnd(8, "9")
      .substring(0, 8);
    const mockHashSignature = `${signaturePrefix}...${previousChainSignature.substring(0, 4)}`;

    const operatingProfile = forcedOperator || currentUser;
    const isDirector = operatingProfile?.role?.includes("Admin");

    const newEntry = {
      id: auditLedger.length + 1,
      timestamp,
      operatorId: isDirector ? "DIR-101" : "REG-204",
      operatorName: operatingProfile?.name || "System Workspace",
      action,
      details,
      sourceIp: "192.168.1.10",
      clinicalTemplateVersion: clinicalTemplateVer,
      integritySignature: mockHashSignature,
    };

    setAuditLedger((prev) => [newEntry, ...prev]);
  };


  const applyPresetCredentials = (targetRole) => {
    if (targetRole === "admin") {
      setLoginEmail("noor.azam@apexclinical.in");
      triggerAlert("Noor Azam's credentials loaded.", "info");
    } else {
      setLoginEmail("a.mishra@apexclinical.in");
      triggerAlert("Amit Mishra's credentials loaded.", "info");
    }
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (!loginEmail) {
      triggerAlert("Invalid credentials entered. Please try again.", "error");
      return;
    }

    const foundStaff = staffDirectory.find(
      (s) => s.email.toLowerCase() === loginEmail.toLowerCase(),
    );
    if (foundStaff) {
      if (foundStaff.status === "Suspended") {
        triggerAlert(
          "Authentication Aborted: This profile is flagged as suspended.",
          "error",
        );
        return;
      }
      setCurrentUser(foundStaff);
    } else {
      const dynamicStaff = {
        id: "REG-Custom",
        name: loginEmail.split("@")[0].toUpperCase(),
        email: loginEmail,
        role: "Medical Registrar (Staff)",
        status: "Active",
        mfa: false,
        specialization: "General Practice Associate",
      };
      setCurrentUser(dynamicStaff);
    }

    setIsLoggedIn(true);
    triggerAlert("Workstation security session authorized.", "success");
    addLedgerEntry(
      "AUTH_SESSION_CREATED",
      `Operator logged in from terminal console`,
      foundStaff,
    );
    setActiveTab("overview");
  };

  return (
    <div
      id="login-anchor"
      className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-full">
          <LockKeyhole size={28} />
        </div>
        <h2 className="text-xl font-bold text-slate-950">
          Workstation Access Portal
        </h2>
        <p className="text-xs text-slate-500">
          Log in under standard roles to preview clinical configuration
          parameters and dashboard controls.
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-xs text-center text-red-600 bg-red-50 p-2 rounded-lg">
          {error}
        </div>
      )}

      {/* Quick Profile Load Presets */}
      <div className="space-y-2 text-xs">
        <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block">
          Fast Authentication Toggles:
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => applyPresetCredentials("admin")}
            className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${loginEmail === "noor.azam@apexclinical.in" ? "bg-indigo-50 border-indigo-400 text-indigo-950" : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"}`}
          >
            <span className="font-bold text-indigo-600 block text-xs">
              Noor Azam
            </span>
            <span className="text-[9px] text-slate-500 block">
              Director (Admin Profile)
            </span>
          </button>
          <button
            type="button"
            onClick={() => applyPresetCredentials("staff")}
            className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${loginEmail === "a.mishra@apexclinical.in" ? "bg-indigo-50 border-indigo-400 text-indigo-950" : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"}`}
          >
            <span className="font-bold text-emerald-600 block text-xs">
              Amit Mishra
            </span>
            <span className="text-[9px] text-slate-500 block">
              Registrar (Staff Profile)
            </span>
          </button>
        </div>
      </div>

      {/* Authentic Access Form */}
      <form onSubmit={handleManualLogin} className="space-y-4 text-xs">
        <div className="space-y-1">
          <label className="font-bold text-slate-700 uppercase tracking-wide block">
            Hospital Registered Email
          </label>
          <input
            type="email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="noor.azam@apexclinical.in"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold"
          />
        </div>

        <div className="space-y-1">
          <label className="font-bold text-slate-700 uppercase tracking-wide block">
            Security Keycode / Passphrase
          </label>
          <input
            type="password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition text-xs flex items-center justify-center space-x-2"
        >
          <span>Authenticate Operator</span>
          <ArrowRight size={14} />
        </button>
      </form>

      <div className="pt-2 text-center text-[10px] text-slate-400 border-t border-slate-100">
        License verified under code scope <strong>{licenseCode}</strong>.
      </div>
    </div>
  );
};

export default LoginPage;
