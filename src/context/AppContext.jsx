"use client";
import React, { createContext, useContext, useState } from "react";
import {
  INITIAL_AUDIT_LOGS,
  INITIAL_STAFF,
  INITIAL_PATIENT_RECORDS,
} from "@/constant/Data";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [clinicName] = useState("Apex Diagnostic & Wellness Center");
  const [licenseCode] = useState("IND-KA-9921");  
  const [loginEmail, setLoginEmail] = useState("noor.azam@apexclinical.in");
  const [loginPassword, setLoginPassword] = useState("••••••••");
  const [networkSyncStatus, setNetworkSyncStatus] = useState("online");
  const [clinicalTemplateVer, setClinicalTemplateVer] = useState(2);
  const [storageStrategy, setStorageStrategy] = useState("LOCAL_ENCLAVE");
  const [isMigratingData, setIsMigratingData] = useState(false);
  const [dataMigrationProgress, setDataMigrationProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const [alertMessage, setAlertMessage] = useState(null);
  const triggerAlert = (message, type = "success") => {
    setAlertMessage({ message, type });
    setTimeout(() => setAlertMessage(null), 4000);
  };

  const addLedgerEntry = (action, details, forcedOperator = null) => {
    const timestamp = new Date().toISOString();
    const previousChainSignature =
      auditLedger[0]?.integritySignature || "00000000...0000";
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

  const handleManualLogin = (e, email, password, router) => {
    e.preventDefault();
    if (!email) return triggerAlert("Invalid credentials entered.", "error");

    const foundStaff = staffDirectory.find(
      (s) => s.email.toLowerCase() === email.toLowerCase(),
    );
    if (foundStaff) {
      if (foundStaff.status === "Suspended")
        return triggerAlert("Authentication Aborted: Suspended.", "error");
      setCurrentUser(foundStaff);
    } else {
      setCurrentUser({
        id: "REG-Custom",
        name: email.split("@")[0].toUpperCase(),
        email,
        role: "Medical Registrar (Staff)",
        status: "Active",
        specialization: "General Practice",
      });
    }
    addLedgerEntry("AUTH_SESSION_CREATED", "Operator logged in", foundStaff);
    triggerAlert("Workstation security session authorized.", "success");
    router.push("/dashboard"); // Route based navigation
  };

  const savePatientRegistration = (e, router) => {
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
      `Recorded patient ${patientCode}`,
    );
    triggerAlert(
      `Saved record for ${patientIntakeForm.fullName}! Ref: ${patientCode}`,
    );
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
    router.push("/dashboard/records"); // Redirect after save
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

  const activeInspectedPatient =
    patients.find((p) => p.id === inspectedPatientId) || patients[0];

  return (
    <AppContext.Provider
      value={{
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        currentUser,
        setCurrentUser,
        clinicName,
        licenseCode,
        networkSyncStatus,
        setNetworkSyncStatus,
        clinicalTemplateVer,
        setClinicalTemplateVer,
        storageStrategy,
        setStorageStrategy,
        isMigratingData,
        setIsMigratingData,
        dataMigrationProgress,
        setDataMigrationProgress,
        isDarkMode,
        setIsDarkMode,
        demographicFieldSettings,
        setDemographicFieldSettings,
        diagnosticModuleSettings,
        setDiagnosticModuleSettings,
        customClinicalFields,
        setCustomClinicalFields,
        patients,
        setPatients,
        auditLedger,
        setAuditLedger,
        staffDirectory,
        setStaffDirectory,
        inspectedPatientId,
        setInspectedPatientId,
        patientIntakeForm,
        setPatientIntakeForm,
        newFieldCreator,
        setNewFieldCreator,
        staffInvitationForm,
        setStaffInvitationForm,
        alertMessage,
        triggerAlert,
        addLedgerEntry,
        handleManualLogin,
        savePatientRegistration,
        applyPresetCredentials,
        updateCustomParameterValue,
        updateDiagnosticIntake,
        updateDemographicIntake,
        changeStaffCredentials,
        activeInspectedPatient,
        changeStaffAvailability,
        sendStaffInvitation,
        createCustomClinicalField,
        deleteCustomField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
