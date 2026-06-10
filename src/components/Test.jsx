"use client";
import React, { useState } from "react";
import {
  Activity,
  Shield,
  Users,
  Settings,
  Database,
  UserPlus,
  Lock,
  Layers,
  Moon,
  Sun,
} from "lucide-react";
import { LandingPage } from "./LandingPage";
import { DashboardOverview } from "./DashboardOverview";
import { PatientIntakeForm } from "./PatientIntakeForm";
import { PatientRecords } from "./PatientRecords";
import { ProtocolConfig } from "./ProtocolConfig";
import { StaffDirectory } from "./staff/StaffDirectory";
import { AuditLedger } from "./AuditLedger";
import { INITIAL_AUDIT_LOGS } from "@/constant/Data";
import { INITIAL_STAFF } from "@/constant/Data";
import { INITIAL_PATIENT_RECORDS } from "@/constant/Data";
import Footer from "./Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Credentials & active clinic details
  const [currentUser, setCurrentUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState("noor.azam@apexclinical.in");
  const [loginPassword, setLoginPassword] = useState("••••••••");
  const [clinicName, setClinicName] = useState(
    "Apex Diagnostic & Wellness Center",
  );
  const [licenseCode, setLicenseCode] = useState("IND-KA-9921");

  // Systems State Config
  const [networkSyncStatus, setNetworkSyncStatus] = useState("online");
  const [clinicalTemplateVer, setClinicalTemplateVer] = useState(2);
  const [storageStrategy, setStorageStrategy] = useState("LOCAL_ENCLAVE");
  const [isMigratingData, setIsMigratingData] = useState(false);
  const [dataMigrationProgress, setDataMigrationProgress] = useState(0);

  // Dynamic parameters checklist & state configurations
  const [demographicFieldSettings, setDemographicFieldSettings] = useState({
    emailAddress: true,
    address: true,
    nationalId: true,
    insurancePolicy: true,
    emergencyContact: true,
    bloodGroup: true,
    knownAllergies: true,
    chronicConditions: false,
  });

  const [diagnosticModuleSettings, setDiagnosticModuleSettings] = useState({
    cbcPanel: false,
    lipidProfile: true,
    bloodGlucose: true,
    hba1cPanel: false,
    liverFunction: false,
    kidneyFunction: false,
    thyroidPanel: false,
    urineRoutine: false,
  });

  const [customClinicalFields, setCustomClinicalFields] = useState([
    {
      name: "Oxygen Saturation (SpO2)",
      type: "number",
      unit: "%",
      rangeLimits: "90-100",
      mandatory: false,
    },
  ]);

  const [patients, setPatients] = useState(INITIAL_PATIENT_RECORDS);
  const [auditLedger, setAuditLedger] = useState(INITIAL_AUDIT_LOGS);
  const [staffDirectory, setStaffDirectory] = useState(INITIAL_STAFF);
  const [inspectedPatientId, setInspectedPatientId] =
    useState("PAT-2026-00042");

  // Forms dynamic input state
  const [patientIntakeForm, setPatientIntakeForm] = useState({
    fullName: "",
    dob: "",
    gender: "Male",
    phone: "",
    testRequested: "Routine Coronary Profile",
    demographics: {},
    diagnostics: {},
    customClinicalParameters: {},
  });

  const [newFieldCreator, setNewFieldCreator] = useState({
    name: "",
    type: "number",
    unit: "",
    rangeLimits: "",
    mandatory: false,
  });

  const [staffInvitationForm, setStaffInvitationForm] = useState({
    name: "",
    email: "",
    role: "Medical Registrar (Staff)",
    specialization: "",
  });

  // Global Alert system
  const [alertMessage, setAlertMessage] = useState(null);
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

  const migrateStorageType = (desiredStrategy) => {
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert(
        "Access Denied: Unauthorised configuration change attempted.",
        "error",
      );
      return;
    }
    if (desiredStrategy === storageStrategy) return;
    setIsMigratingData(true);
    setDataMigrationProgress(0);

    const progressTracker = setInterval(() => {
      setDataMigrationProgress((current) => {
        if (current >= 100) {
          clearInterval(progressTracker);
          setIsMigratingData(false);
          setStorageStrategy(desiredStrategy);
          addLedgerEntry(
            "STORAGE_RE_ROUTING",
            `Migrated patient registry storage mode to: ${desiredStrategy === "CENTRAL_CLOUD" ? "Central Hospital Cloud Network" : "On-Premise Cryptographic Enclave"}`,
          );
          triggerAlert(
            `Residency route shifted to ${desiredStrategy === "CENTRAL_CLOUD" ? "Enterprise Cloud Server" : "Local Enclave"}`,
            "success",
          );
          return 100;
        }
        return current + 25;
      });
    }, 450);
  };

  const saveClinicalTemplate = () => {
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert(
        "Access Denied: Only Admins can modify global templates.",
        "error",
      );
      return;
    }
    const nextVer = clinicalTemplateVer + 1;
    setClinicalTemplateVer(nextVer);
    addLedgerEntry(
      "CLINICAL_TEMPLATE_REVISION",
      `Intake parameters template successfully updated to Protocol Form Version ${nextVer}`,
    );
    triggerAlert(
      `Protocol Configuration version bumped to v${nextVer}.00`,
      "success",
    );
  };

  const savePatientRegistration = (e) => {
    e.preventDefault();
    const nextRecordIndex = patients.length + 42;
    const patientCode = `PAT-2026-000${nextRecordIndex}`;

    const newlyCreatedRecord = {
      id: patientCode,
      fullName: patientIntakeForm.fullName,
      dob: patientIntakeForm.dob,
      gender: patientIntakeForm.gender,
      phone: patientIntakeForm.phone,
      visitDate: new Date().toISOString().substring(0, 16),
      testRequested: patientIntakeForm.testRequested,
      storageArchitecture: storageStrategy,
      appliedTemplateVersion: clinicalTemplateVer,
      demographics: { ...patientIntakeForm.demographics },
      diagnostics: { ...patientIntakeForm.diagnostics },
      customClinicalParameters: {
        ...patientIntakeForm.customClinicalParameters,
      },
    };

    setPatients([newlyCreatedRecord, ...patients]);
    addLedgerEntry(
      "PATIENT_RECORD_COMMITTED",
      `Recorded patient ${patientCode} (${patientIntakeForm.fullName}) into active ${storageStrategy === "LOCAL_ENCLAVE" ? "Local Enclave" : "Enterprise Cloud"}`,
    );
    triggerAlert(
      `Saved Aarogya record for ${patientIntakeForm.fullName}! Reference: ${patientCode}`,
      "success",
    );
    setInspectedPatientId(patientCode);

    setPatientIntakeForm({
      fullName: "",
      dob: "",
      gender: "Male",
      phone: "",
      testRequested: "Routine Coronary Profile",
      demographics: {},
      diagnostics: {},
      customClinicalParameters: {},
    });
    setActiveTab("records");
  };

  const createCustomClinicalField = (e) => {
    e.preventDefault();
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert("Permission Denied.", "error");
      return;
    }
    if (!newFieldCreator.name) return;

    setCustomClinicalFields([...customClinicalFields, newFieldCreator]);
    addLedgerEntry(
      "CUSTOM_METRIC_PROVISIONED",
      `Provisioned custom variable input: '${newFieldCreator.name}' (${newFieldCreator.unit || "Standard Text"})`,
    );
    triggerAlert(
      `Custom field '${newFieldCreator.name}' integrated successfully.`,
      "success",
    );

    setNewFieldCreator({
      name: "",
      type: "number",
      unit: "",
      rangeLimits: "",
      mandatory: false,
    });
  };

  const deleteCustomField = (index) => {
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert("Permission Denied.", "error");
      return;
    }
    const deletedItem = customClinicalFields[index];
    setCustomClinicalFields(customClinicalFields.filter((_, i) => i !== index));
    addLedgerEntry(
      "CUSTOM_METRIC_DEPROVISIONED",
      `Deprovisioned dynamic custom metric field: '${deletedItem.name}'`,
    );
    triggerAlert(`Removed variable field '${deletedItem.name}'`, "warning");
  };

  const sendStaffInvitation = (e) => {
    e.preventDefault();
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert("Insufficient clearance.", "error");
      return;
    }
    if (staffInvitationForm.role === "Clinical Director (Admin)") {
      triggerAlert(
        "Security Mandate: Clinical Director level access profiles must be verified by NHA.",
        "error",
      );
      return;
    }
    if (!staffInvitationForm.name || !staffInvitationForm.email) return;

    const addedStaff = {
      id: `REG-${staffDirectory.length + 201}`,
      name: staffInvitationForm.name,
      email: staffInvitationForm.email,
      role: staffInvitationForm.role,
      status: "Active",
      mfa: false,
      specialization:
        staffInvitationForm.specialization || "Clinical Associate",
    };

    setStaffDirectory([...staffDirectory, addedStaff]);
    addLedgerEntry(
      "STAFF_CREDENTIAL_PROVISIONED",
      `Issued credentials to ${staffInvitationForm.name} as role: ${staffInvitationForm.role}`,
    );
    triggerAlert(
      `Credential activation link generated for ${staffInvitationForm.name}`,
      "success",
    );
    setStaffInvitationForm({
      name: "",
      email: "",
      role: "Medical Registrar (Staff)",
      specialization: "",
    });
  };

  const changeStaffAvailability = (id) => {
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert(
        "Clearance Required: Only Clinical Directors can alter credentials.",
        "error",
      );
      return;
    }
    setStaffDirectory(
      staffDirectory.map((staff) => {
        if (staff.id === id) {
          const nextStatus = staff.status === "Active" ? "Suspended" : "Active";
          addLedgerEntry(
            "STAFF_STATUS_REVOCATION",
            `Altered system login privileges for ${staff.name} to: ${nextStatus}`,
          );
          triggerAlert("Workstation access updated.", "info");
          return { ...staff, status: nextStatus };
        }
        return staff;
      }),
    );
  };

  const changeStaffCredentials = (id) => {
    if (currentUser?.role !== "Clinical Director (Admin)") {
      triggerAlert(
        "Clearance Required: Only Clinical Directors can elevate privileges.",
        "error",
      );
      return;
    }
    setStaffDirectory(
      staffDirectory.map((staff) => {
        if (staff.id === id) {
          const nextRole = staff.role.includes("Admin")
            ? "Medical Registrar (Staff)"
            : "Clinical Director (Admin)";
          addLedgerEntry(
            "STAFF_PRIVILEGE_PROMOTED",
            `Modified permissions bracket for ${staff.name} to: ${nextRole}`,
          );
          triggerAlert(
            `Modified assignment for ${staff.name} to ${nextRole}`,
            "info",
          );
          return { ...staff, role: nextRole };
        }
        return staff;
      }),
    );
  };

  const updateDemographicIntake = (fieldName, val) => {
    setPatientIntakeForm((prev) => ({
      ...prev,
      demographics: { ...prev.demographics, [fieldName]: val },
    }));
  };

  const updateDiagnosticIntake = (panel, fieldName, val) => {
    setPatientIntakeForm((prev) => ({
      ...prev,
      diagnostics: {
        ...prev.diagnostics,
        [panel]: { ...prev.diagnostics[panel], [fieldName]: val },
      },
    }));
  };

  const updateCustomParameterValue = (fieldName, val) => {
    setPatientIntakeForm((prev) => ({
      ...prev,
      customClinicalParameters: {
        ...prev.customClinicalParameters,
        [fieldName]: val,
      },
    }));
  };

  const applyPresetCredentials = (targetRole) => {
    if (targetRole === "admin") {
      setLoginEmail("noor.azam@apexclinical.in");
      triggerAlert(
        "Noor Azam's credentials loaded. App logon pe click kijiye.",
        "info",
      );
    } else {
      setLoginEmail("a.mishra@apexclinical.in");
      triggerAlert(
        "Amit Mishra's credentials loaded. App logon pe click kijiye.",
        "info",
      );
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

  const activeInspectedPatient =
    patients.find((p) => p.id === inspectedPatientId) || patients[0];

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-205 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      {!isLoggedIn ? (
        <LandingPage
          applyPresetCredentials={applyPresetCredentials}
          handleManualLogin={handleManualLogin}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          licenseCode={licenseCode}
        />
      ) : (
        // SECURE OPERATOR WORKSPACE (DASHBOARD PORTAL)
        <div className="flex flex-col min-h-screen">
          {/* Header Workspace Bar */}
          <header
            className={`border-b shrink-0 sticky top-0 z-40 transition-colors duration-200 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md">
                  <Activity size={22} className="animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-base font-black tracking-tight text-slate-950 dark:text-white">
                      {clinicName}
                    </h1>
                    <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 text-[10px] uppercase font-bold rounded-md">
                      Tenant-Isolated
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 mt-0.5">
                    <span>
                      License Code:{" "}
                      <strong className="text-slate-700 dark:text-slate-200 font-mono">
                        {licenseCode}
                      </strong>
                    </span>
                    <span>•</span>
                    <span>
                      Intake Template:{" "}
                      <strong className="text-indigo-600 dark:text-indigo-400 font-mono">
                        v{clinicalTemplateVer}.00
                      </strong>
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Active Connection state indicator */}
                <div
                  className={`flex items-center space-x-1 rounded-lg p-1 border text-xs ${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}
                >
                  <button
                    onClick={() => {
                      setNetworkSyncStatus("online");
                      triggerAlert(
                        "Network synchronized with Central Hospital Cloud.",
                        "success",
                      );
                    }}
                    className={`p-1 px-2 rounded font-semibold text-[10px] ${networkSyncStatus === "online" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-400"}`}
                  >
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping"></span>
                      <span>Cloud Sync Active</span>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setNetworkSyncStatus("offline");
                      triggerAlert(
                        "Workstation offline mode initiated. Local caching buffer ready.",
                        "warning",
                      );
                    }}
                    className={`p-1 px-2 rounded font-semibold text-[10px] ${networkSyncStatus === "offline" ? "bg-white text-amber-600 shadow-sm" : "text-slate-400"}`}
                  >
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full inline-block"></span>
                      <span>Local SQLite Buffer</span>
                    </span>
                  </button>
                </div>

                {/* Dark Mode toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 border rounded-lg text-slate-500 dark:text-slate-300 ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-205"}`}
                >
                  {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                </button>

                {/* Logout Trigger */}
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setCurrentUser(null);
                    triggerAlert(
                      "Safely logged out of current workspace.",
                      "warning",
                    );
                  }}
                  className="bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                >
                  Secure Log Out
                </button>
              </div>
            </div>
          </header>

          {/* Core Portal Navigation & Multi-Tab Router */}
          <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
            {/* Left Hand Navigation Controller */}
            <aside className="lg:w-64 shrink-0 flex flex-col space-y-2">
              <div
                className={`p-4 rounded-xl border ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"} space-y-3`}
              >
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                  Active Session
                </span>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-black">
                      {currentUser?.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block pl-4">
                    {currentUser?.specialization}
                  </span>
                </div>

                <div className="border-t border-slate-150 dark:border-slate-800 pt-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Clearance Class:</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-bold ${currentUser?.role?.includes("Admin") ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"}`}
                    >
                      {currentUser?.role?.includes("Admin")
                        ? "Director (Admin)"
                        : "Registrar (Staff)"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "overview" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"}`}
                >
                  <Layers size={15} />
                  <span>Clinical Dashboard</span>
                </button>

                <button
                  onClick={() => setActiveTab("intake")}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "intake" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"}`}
                >
                  <UserPlus size={15} />
                  <span>Patient Intake Form</span>
                </button>

                <button
                  onClick={() => setActiveTab("records")}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "records" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"}`}
                >
                  <Database size={15} />
                  <span>Patient Records Vault</span>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 font-bold">
                    {patients.length}
                  </span>
                </button>

                {/* Secure Privilege Isolation Segment */}
                <div className="pt-4 pb-1 border-t border-slate-200 dark:border-slate-800 mt-2">
                  <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider px-4">
                    Administrative Settings
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (currentUser?.role !== "Clinical Director (Admin)") {
                      triggerAlert(
                        "Access Denied: Only Noor Azam (Clinical Director) can access Configurations.",
                        "error",
                      );
                      return;
                    }
                    setActiveTab("protocols");
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "protocols" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"} ${currentUser?.role !== "Clinical Director (Admin)" ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <Settings size={15} />
                  <span>Protocol Parameter Config</span>
                  {currentUser?.role !== "Clinical Director (Admin)" && (
                    <Lock size={12} className="ml-auto text-slate-400" />
                  )}
                </button>

                <button
                  onClick={() => {
                    if (currentUser?.role !== "Clinical Director (Admin)") {
                      triggerAlert(
                        "Access Denied: Staff directory management restricted to Admins.",
                        "error",
                      );
                      return;
                    }
                    setActiveTab("staff-directory");
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "staff-directory" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"} ${currentUser?.role !== "Clinical Director (Admin)" ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <Users size={15} />
                  <span>Staff & Access Control</span>
                  {currentUser?.role !== "Clinical Director (Admin)" && (
                    <Lock size={12} className="ml-auto text-slate-400" />
                  )}
                </button>

                <button
                  onClick={() => {
                    if (currentUser?.role !== "Clinical Director (Admin)") {
                      triggerAlert(
                        "Access Denied: Ledger inspection requires Administrator credentials.",
                        "error",
                      );
                      return;
                    }
                    setActiveTab("ledger");
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === "ledger" ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-900"} ${currentUser?.role !== "Clinical Director (Admin)" ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <Shield size={15} />
                  <span>Clinical Integrity Ledger</span>
                  {currentUser?.role !== "Clinical Director (Admin)" && (
                    <Lock size={12} className="ml-auto text-slate-400" />
                  )}
                </button>
              </div>
            </aside>

            {/* Core Router Presentation Space */}
            <main
              className={`flex-1 rounded-2xl border ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"} shadow-sm overflow-hidden min-h-[600px] flex flex-col`}
            >
              {/* TAB 1: CLINICAL DASHBOARD OVERVIEW */}
              {activeTab === "overview" && (
                <DashboardOverview
                  patients={patients}
                  storageStrategy={storageStrategy}
                  clinicalTemplateVer={clinicalTemplateVer}
                  networkSyncStatus={networkSyncStatus}
                  isDarkMode={isDarkMode}
                  auditLedger={auditLedger}
                  setActiveTab={setActiveTab}
                  currentUser={currentUser}
                />
              )}

              {/* TAB 2: PATIENT INTAKE FORM */}
              {activeTab === "intake" && (
                <PatientIntakeForm
                  clinicalTemplateVer={clinicalTemplateVer}
                  storageStrategy={storageStrategy}
                  isDarkMode={isDarkMode}
                  patientIntakeForm={patientIntakeForm}
                  setPatientIntakeForm={setPatientIntakeForm}
                  demographicFieldSettings={demographicFieldSettings}
                  diagnosticModuleSettings={diagnosticModuleSettings}
                  customClinicalFields={customClinicalFields}
                  savePatientRegistration={savePatientRegistration}
                  updateDemographicIntake={updateDemographicIntake}
                  updateDiagnosticIntake={updateDiagnosticIntake}
                  updateCustomParameterValue={updateCustomParameterValue}
                />
              )}

              {/* TAB 3: PATIENT RECORDS EXPLORER */}
              {activeTab === "records" && (
                <PatientRecords
                  licenseCode={licenseCode}
                  isDarkMode={isDarkMode}
                  patients={patients}
                  inspectedPatientId={inspectedPatientId}
                  setInspectedPatientId={setInspectedPatientId}
                  activeInspectedPatient={activeInspectedPatient}
                  currentUser={currentUser}
                  triggerAlert={triggerAlert}
                />
              )}

              {/* TAB 4: PROTOCOLS AND PARAMETER CONFIG (ADMIN ONLY) */}
              {activeTab === "protocols" &&
                currentUser?.role?.includes("Admin") && (
                  <ProtocolConfig
                    isDarkMode={isDarkMode}
                    storageStrategy={storageStrategy}
                    isMigratingData={isMigratingData}
                    migrateStorageType={migrateStorageType}
                    dataMigrationProgress={dataMigrationProgress}
                    demographicFieldSettings={demographicFieldSettings}
                    setDemographicFieldSettings={setDemographicFieldSettings}
                    diagnosticModuleSettings={diagnosticModuleSettings}
                    setDiagnosticModuleSettings={setDiagnosticModuleSettings}
                    customClinicalFields={customClinicalFields}
                    newFieldCreator={newFieldCreator}
                    setNewFieldCreator={setNewFieldCreator}
                    createCustomClinicalField={createCustomClinicalField}
                    deleteCustomField={deleteCustomField}
                    saveClinicalTemplate={saveClinicalTemplate}
                  />
                )}

              {/* TAB 5: STAFF & ACCESS DIRECTORY (ADMIN ONLY) */}
              {activeTab === "staff-directory" &&
                currentUser?.role?.includes("Admin") && (
                  <StaffDirectory
                    isDarkMode={isDarkMode}
                    staffDirectory={staffDirectory}
                    staffInvitationForm={staffInvitationForm}
                    setStaffInvitationForm={setStaffInvitationForm}
                    sendStaffInvitation={sendStaffInvitation}
                    changeStaffCredentials={changeStaffCredentials}
                    changeStaffAvailability={changeStaffAvailability}
                  />
                )}

              {/* TAB 6: SECURITY JOURNAL LEDGER (ADMIN ONLY) */}
              {activeTab === "ledger" &&
                currentUser?.role?.includes("Admin") && (
                  <AuditLedger
                    isDarkMode={isDarkMode}
                    clinicalTemplateVer={clinicalTemplateVer}
                    auditLedger={auditLedger}
                    setAuditLedger={setAuditLedger}
                    triggerAlert={triggerAlert}
                  />
                )}
            </main>
          </div>
          <Footer isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
}
