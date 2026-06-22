"use client";
import {
  AlertTriangle,
  ChevronRight,
  Home,
  Layers,
  Phone,
  Search,
  Shield,
  Activity,
  FileText,
  User,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export function PatientRecords() {
  const {
    patients,
    inspectedPatientId,
    setInspectedPatientId,
    triggerAlert,
  } = useApp();

  const activeInspectedPatient =
    patients.find((p) => p.id === inspectedPatientId) || patients[0];

  return (
    <div className="p-6 space-y-6 flex-1 flex flex-col justify-between h-full overflow-hidden">
      <div className="space-y-4 shrink-0">
        <div className="border-b border-border pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-heading">
              Patient Repository Vault
            </h2>
          </div>
        </div>

        <div className="p-3 rounded-lg border border-border bg-white shadow-sm transition-colors focus-within:border-primary flex items-center space-x-3">
          <Search className="text-muted" size={18} />
          <input
            type="text"
            placeholder="Search by Patient Code, Name, or Mobile..."
            className="bg-transparent text-sm placeholder-muted focus:outline-none w-full text-heading"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 overflow-hidden">
        <div className="lg:col-span-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <span className="text-[10px] uppercase font-bold text-muted tracking-wider">
              Patient Ledger ({patients.length})
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            {patients.map((p, index) => (
              <div
                key={index}
                onClick={() => {
                  setInspectedPatientId(p.id);
                  triggerAlert(
                    `Decrypted clinical dossier for ${p.fullName}.`,
                    "info",
                  );
                }}
                className={`group p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  inspectedPatientId === p.id
                    ? "bg-red-50 border-primary shadow-sm ring-1 ring-primary/20"
                    : "bg-white border-border hover:border-border-hover"
                }`}
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded text-xs font-bold font-mono ${
                      inspectedPatientId === p.id
                        ? "bg-red-100 text-primary"
                        : "bg-surface text-body"
                    }`}
                  >
                    {p.fullName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`font-bold block text-sm truncate ${
                        inspectedPatientId === p.id
                          ? "text-primary"
                          : "text-heading"
                      }`}
                    >
                      {p.fullName}
                    </span>
                    <span className="text-[10px] text-muted block font-medium truncate">
                      {p.gender} • {p.dob}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className={`shrink-0 transition-transform ${
                    inspectedPatientId === p.id
                      ? "text-primary translate-x-1"
                      : "text-muted group-hover:text-body"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col h-full rounded-2xl border border-border bg-white overflow-hidden">
          {activeInspectedPatient ? (
            <>
              <div className="p-6 border-b border-border bg-surface shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border border-border shadow-sm">
                      <User className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-heading">
                        {activeInspectedPatient.fullName}
                      </h3>
                      <p className="text-xs text-muted font-mono mt-0.5">
                        ID: {activeInspectedPatient.id}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-muted">
                      Gender / Age
                    </div>
                    <div className="text-sm font-semibold text-body">
                      {activeInspectedPatient?.gender} •{" "}
                      {new Date().getFullYear() -
                        new Date(
                          activeInspectedPatient?.dob,
                        ).getFullYear()}{" "}
                      Years
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {/* Allergy Warning */}
                {activeInspectedPatient.demographics?.knownAllergies && (
                  <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-100 rounded-xl">
                    <AlertTriangle
                      className="text-rose-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">
                        Known Allergy Warning
                      </span>
                      <p className="text-sm font-bold text-rose-800">
                        {activeInspectedPatient.demographics.knownAllergies}
                      </p>
                    </div>
                  </div>
                )}

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 rounded-lg bg-surface border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone size={12} className="text-muted" />
                      <span className="text-[10px] uppercase font-bold text-muted">
                        Mobile
                      </span>
                    </div>
                    <span className="block text-sm font-semibold text-body">
                      {activeInspectedPatient.phone}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers size={12} className="text-muted" />
                      <span className="text-[10px] uppercase font-bold text-muted">
                        Blood Group
                      </span>
                    </div>
                    <span className="block text-sm font-semibold text-body">
                      {activeInspectedPatient.demographics?.bloodGroup || "N/A"}
                    </span>
                  </div>

                  <div className="col-span-2 p-3 rounded-lg bg-surface border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield size={12} className="text-muted" />
                      <span className="text-[10px] uppercase font-bold text-muted">
                        National ID (Aadhaar)
                      </span>
                    </div>
                    <span className="block text-sm font-mono font-semibold text-body">
                      {activeInspectedPatient.demographics?.nationalId || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Clinical Diagnostics */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-primary" />
                    <h4 className="text-sm font-bold text-heading uppercase tracking-wide">
                      Clinical Diagnostics
                    </h4>
                    <span className="text-xs font-medium text-muted">
                      Request: {activeInspectedPatient.testRequested}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeInspectedPatient.diagnostics?.bloodGlucose && (
                      <div className="p-4 rounded-xl border bg-white border-border shadow-sm">
                        <span className="block text-[10px] uppercase font-bold text-muted mb-3">
                          Blood Glucose Analysis
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center border-b border-border pb-2">
                            <span className="text-xs text-body">
                              Fasting
                            </span>
                            <span className="font-mono font-bold text-heading">
                              {
                                activeInspectedPatient.diagnostics.bloodGlucose
                                  .fasting
                              }
                              <span className="text-[10px] font-normal text-muted">
                                mg/dL
                              </span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-body">
                              Post-Prandial
                            </span>
                            <span className="font-mono font-bold text-heading">
                              {
                                activeInspectedPatient.diagnostics.bloodGlucose
                                  .postPrandial
                              }
                              <span className="text-[10px] font-normal text-muted">
                                mg/dL
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeInspectedPatient.diagnostics?.lipidProfile && (
                      <div className="p-4 rounded-xl border bg-white border-border shadow-sm">
                        <span className="block text-[10px] uppercase font-bold text-muted mb-3">
                          Lipid Profile Analysis
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center border-b border-border pb-2">
                            <span className="text-xs text-body">
                              Total Cholesterol
                            </span>
                            <span className="font-mono font-bold text-heading">
                              {
                                activeInspectedPatient.diagnostics.lipidProfile
                                  .totalCholesterol
                              }{" "}
                              <span className="text-[10px] font-normal text-muted">
                                mg/dL
                              </span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center gap-4">
                            <span className="text-xs text-body">
                              LDL/HDL Ratio
                            </span>
                            <span className="font-mono font-bold text-heading">
                              {
                                activeInspectedPatient.diagnostics.lipidProfile
                                  .ldl
                              }
                              /
                              {
                                activeInspectedPatient.diagnostics.lipidProfile
                                  .hdl
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-2">
                    <Home size={12} />
                    Registered Address
                  </h4>
                  <div className="p-4 rounded-xl bg-surface border border-border text-sm leading-relaxed text-body">
                    {activeInspectedPatient.demographics?.address ? (
                      <>
                        <span className="block font-semibold">
                          {activeInspectedPatient.demographics.address.street}
                        </span>
                        <span className="block">
                          {activeInspectedPatient.demographics.address.city},{" "}
                          {activeInspectedPatient.demographics.address.state}
                        </span>
                        <span className="block font-mono text-xs mt-1 text-muted">
                          PIN:{" "}
                          {activeInspectedPatient.demographics.address.pincode}
                        </span>
                      </>
                    ) : (
                      <span className="italic text-muted">
                        No address on file.
                      </span>
                    )}
                  </div>
                </div>

                {/* Custom Metrics */}
                {activeInspectedPatient.customClinicalParameters &&
                  Object.keys(activeInspectedPatient.customClinicalParameters)
                    .length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-2">
                        <FileText size={12} />
                        Custom Facility Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(
                          activeInspectedPatient.customClinicalParameters,
                        ).map(([name, val], i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center p-2.5 bg-white border border-border rounded-lg"
                          >
                            <span className="text-xs text-body font-semibold uppercase">
                              {name}
                            </span>
                            <span className="text-xs font-bold text-heading">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-body">
                  {activeInspectedPatient.demographics?.emailAddress && (
                    <div>
                      <span className="block font-bold text-heading">
                        Email
                      </span>
                      {activeInspectedPatient.demographics.emailAddress}
                    </div>
                  )}
                  {activeInspectedPatient.demographics?.insurancePolicy && (
                    <div>
                      <span className="block font-bold text-heading">
                        Insurance Policy
                      </span>
                      {activeInspectedPatient.demographics.insurancePolicy}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-muted p-10 text-center">
              <Search size={48} className="opacity-20 mb-4" />
              <p className="font-medium">Select a patient from the ledger</p>
              <p className="text-xs mt-1">to view their clinical dossier.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}