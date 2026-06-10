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
    isDarkMode,
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
        <div className="border-b pb-4 border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Patient Repository Vault
            </h2>
          </div>
        </div>

        <div
          className={`p-3 rounded-lg border shadow-sm transition-colors ${
            isDarkMode
              ? "bg-slate-900 border-slate-800 focus-within:border-indigo-500"
              : "bg-white border-slate-200 focus-within:border-indigo-500"
          } flex items-center space-x-3`}
        >
          <Search className="text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by Patient Code, Name, or Mobile..."
            className="bg-transparent text-sm placeholder-slate-400 focus:outline-none w-full text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 overflow-hidden">
        <div className="lg:col-span-4 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
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
                    ? "bg-indigo-50 border-indigo-500 dark:bg-indigo-950/30 dark:border-indigo-500 shadow-sm ring-1 ring-indigo-500/20"
                    : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded text-xs font-bold font-mono ${
                      inspectedPatientId === p.id
                        ? "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                    }`}
                  >
                    {p.fullName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`font-bold block text-sm truncate ${
                        inspectedPatientId === p.id
                          ? "text-indigo-700 dark:text-indigo-300"
                          : "text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      {p.fullName}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium truncate">
                      {p.gender} • {p.dob}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className={`shrink-0 transition-transform ${
                    inspectedPatientId === p.id
                      ? "text-indigo-500 translate-x-1"
                      : "text-slate-300 group-hover:text-slate-500"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`lg:col-span-8 flex flex-col h-full rounded-2xl border overflow-hidden ${
            isDarkMode
              ? "bg-slate-950 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          {activeInspectedPatient ? (
            <>
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                      <User className="text-indigo-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {activeInspectedPatient.fullName}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        ID: {activeInspectedPatient.id}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Gender / Age
                    </div>

                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
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

              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {activeInspectedPatient.demographics?.knownAllergies && (
                  <div className="flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 rounded-xl">
                    <AlertTriangle
                      className="text-rose-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">
                        Known Allergy Warning
                      </span>
                      <p className="text-sm font-bold text-rose-800 dark:text-rose-300">
                        {activeInspectedPatient.demographics.knownAllergies}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone size={12} className="text-slate-400" />
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Mobile
                      </span>
                    </div>
                    <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {activeInspectedPatient.phone}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers size={12} className="text-slate-400" />
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Blood Group
                      </span>
                    </div>
                    <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {activeInspectedPatient.demographics?.bloodGroup || "N/A"}
                    </span>
                  </div>

                  <div className="col-span-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield size={12} className="text-slate-400" />
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        National ID (Aadhaar)
                      </span>
                    </div>
                    <span className="block text-sm font-mono font-semibold text-slate-700 dark:text-slate-300">
                      {activeInspectedPatient.demographics?.nationalId || "N/A"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-indigo-500" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Clinical Diagnostics
                    </h4>
                    <span className="text-xs font-medium text-slate-400">
                      Request: {activeInspectedPatient.testRequested}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeInspectedPatient.diagnostics?.bloodGlucose && (
                      <div className="p-4 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                        <span className="block text-[10px] uppercase font-bold text-slate-400 mb-3">
                          Blood Glucose Analysis
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="text-xs text-slate-500">
                              Fasting
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
                              {
                                activeInspectedPatient.diagnostics.bloodGlucose
                                  .fasting
                              }
                              <span className="text-[10px] font-normal text-slate-400">
                                mg/dL
                              </span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-500">
                              Post-Prandial
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
                              {
                                activeInspectedPatient.diagnostics.bloodGlucose
                                  .postPrandial
                              }
                              <span className="text-[10px] font-normal text-slate-400">
                                mg/dL
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeInspectedPatient.diagnostics?.lipidProfile && (
                      <div className="p-4 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                        <span className="block text-[10px] uppercase font-bold text-slate-400 mb-3">
                          Lipid Profile Analysis
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="text-xs text-slate-500">
                              Total Cholesterol
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
                              {
                                activeInspectedPatient.diagnostics.lipidProfile
                                  .totalCholesterol
                              }{" "}
                              <span className="text-[10px] font-normal text-slate-400">
                                mg/dL
                              </span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center gap-4">
                            <span className="text-xs text-slate-500">
                              LDL/HDL Ratio
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
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

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Home size={12} />
                    Registered Address
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {activeInspectedPatient.demographics?.address ? (
                      <>
                        <span className="block font-semibold">
                          {activeInspectedPatient.demographics.address.street}
                        </span>
                        <span className="block">
                          {activeInspectedPatient.demographics.address.city},{" "}
                          {activeInspectedPatient.demographics.address.state}
                        </span>
                        <span className="block font-mono text-xs mt-1 text-slate-400">
                          PIN:{" "}
                          {activeInspectedPatient.demographics.address.pincode}
                        </span>
                      </>
                    ) : (
                      <span className="italic text-slate-400">
                        No address on file.
                      </span>
                    )}
                  </div>
                </div>

                {activeInspectedPatient.customClinicalParameters &&
                  Object.keys(activeInspectedPatient.customClinicalParameters)
                    .length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                        <FileText size={12} />
                        Custom Facility Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(
                          activeInspectedPatient.customClinicalParameters,
                        ).map(([name, val], i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center p-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg"
                          >
                            <span className="text-xs text-slate-500 font-semibold uppercase">
                              {name}
                            </span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-slate-500">
                  {activeInspectedPatient.demographics?.emailAddress && (
                    <div>
                      <span className="block font-bold text-slate-700 dark:text-slate-300">
                        Email
                      </span>
                      {activeInspectedPatient.demographics.emailAddress}
                    </div>
                  )}
                  {activeInspectedPatient.demographics?.insurancePolicy && (
                    <div>
                      <span className="block font-bold text-slate-700 dark:text-slate-300">
                        Insurance Policy
                      </span>
                      {activeInspectedPatient.demographics.insurancePolicy}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-10 text-center">
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
