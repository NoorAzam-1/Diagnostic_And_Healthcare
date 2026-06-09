import { AlertTriangle, ChevronRight, Home, Layers, Phone, Search, Shield } from "lucide-react";
import { Activity } from "react";

export function PatientRecords({
  licenseCode,
  isDarkMode,
  patients,
  inspectedPatientId,
  setInspectedPatientId,
  activeInspectedPatient,
  currentUser,
  triggerAlert
}) {
  return (
    <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
      
      <div className="space-y-6">
        
        {/* Header */}
        <div className="border-b pb-4 border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Patient Repository Vault</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              Direct query and lookup workspace isolated strictly to Indian License: <strong className="font-mono">{licenseCode || 'Apex'}</strong>.
            </p>
          </div>
        </div>

        {/* Database Query Search */}
        <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} flex items-center space-x-3`}>
          <Search className="text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Query repository using Patient Code, Full Name, or mobile index..."
            className="bg-transparent text-xs placeholder-slate-400 focus:outline-none w-full text-slate-900 dark:text-white font-semibold"
          />
        </div>

        {/* Dual pane layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left panel: list */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Patient Records Ledger</span>
            
            <div className="space-y-2">
              {patients.map((p, index) => (
                <div 
                  key={index} 
                  onClick={() => {
                    setInspectedPatientId(p.id);
                    triggerAlert(`Decrypted clinical dossier for ${p.fullName}.`, "info");
                  }}
                  className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${inspectedPatientId === p.id ? 'bg-indigo-50 border-indigo-300 dark:bg-indigo-950/25 dark:border-indigo-900' : 'bg-white dark:bg-slate-950 border-slate-200 hover:border-slate-350 dark:border-slate-850'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded font-bold font-mono text-[10px]">
                      {p.id.split('-').pop()}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block text-xs">{p.fullName}</span>
                      <span className="text-[9px] text-slate-400 block font-semibold">{p.gender} • DOB: {p.dob}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: dynamic details viewer */}
          <div className={`lg:col-span-7 p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-150 dark:border-slate-850">
              <div>
                <span className="text-[9px] uppercase font-bold text-indigo-600 block">Patient Dossier ID</span>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">{activeInspectedPatient?.fullName}</h3>
              </div>
              <span className="text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400 px-2.5 py-1 rounded font-mono font-bold">
                {activeInspectedPatient?.id}
              </span>
            </div>

            {/* Structured info fields */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-start space-x-2">
                <Phone size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Mobile Contact</span>
                  <span className="font-bold block mt-0.5">{activeInspectedPatient?.phone}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Activity size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Primary Diagnostic requested</span>
                  <span className="font-bold block mt-0.5">{activeInspectedPatient?.testRequested}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Shield size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Aadhaar Card Reference</span>
                  <span className="font-mono font-bold block mt-0.5 text-slate-700 dark:text-slate-300">{activeInspectedPatient?.demographics?.nationalId || 'Not Captured'}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Layers size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Blood Group</span>
                  <span className="font-bold block mt-0.5">{activeInspectedPatient?.demographics?.bloodGroup || 'Not Captured'}</span>
                </div>
              </div>
              <div className="col-span-2 flex items-start space-x-2">
                <Home size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Address Registered</span>
                  <span className="font-semibold block mt-0.5 leading-normal text-slate-700 dark:text-slate-300">
                    {activeInspectedPatient?.demographics?.address 
                      ? `${activeInspectedPatient.demographics.address.street}, ${activeInspectedPatient.demographics.address.city}, ${activeInspectedPatient.demographics.address.state} - ${activeInspectedPatient.demographics.address.pincode}`
                      : 'No address recorded'
                    }
                  </span>
                </div>
              </div>
              <div className="col-span-2 flex items-start space-x-2">
                <AlertTriangle size={14} className="text-rose-500 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase font-bold">Allergy History Annotations</span>
                  <span className="text-rose-600 dark:text-rose-400 font-bold block mt-0.5 leading-normal">
                    {activeInspectedPatient?.demographics?.knownAllergies || 'No Known Allergies'}
                  </span>
                </div>
              </div>
            </div>

            {/* Test readings display */}
            <div className="border-t pt-4 border-slate-150 dark:border-slate-850 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Laboratory Diagnostic Findings</span>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                {activeInspectedPatient?.diagnostics?.bloodGlucose && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-xl space-y-1">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-mono">Blood Glucose</span>
                    <div className="space-y-0.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Fasting:</span>
                        <span className="font-bold">{activeInspectedPatient.diagnostics.bloodGlucose.fasting} mg/dL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Post-Prandial:</span>
                        <span className="font-bold">{activeInspectedPatient.diagnostics.bloodGlucose.postPrandial} mg/dL</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeInspectedPatient?.diagnostics?.lipidProfile && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-xl space-y-1">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-mono">Lipid Profile Diagnostics</span>
                    <div className="space-y-0.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Total Chol:</span>
                        <span className="font-bold">{activeInspectedPatient.diagnostics.lipidProfile.totalCholesterol} mg/dL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">LDL / HDL:</span>
                        <span className="font-bold">{activeInspectedPatient.diagnostics.lipidProfile.ldl}/{activeInspectedPatient.diagnostics.lipidProfile.hdl}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Custom fields display if populated */}
            {activeInspectedPatient?.customClinicalParameters && Object.keys(activeInspectedPatient.customClinicalParameters).length > 0 && (
              <div className="border-t pt-3 border-slate-150 dark:border-slate-850">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Custom Facility Metrics</span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {Object.entries(activeInspectedPatient.customClinicalParameters).map(([name, val], i) => (
                    <div key={i} className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <span className="text-slate-500 font-semibold">{name}:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Binary row stream serialization visual */}
            <div className="border-t pt-3 border-slate-150 dark:border-slate-850 space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 font-mono block">BINARY ROW STREAM REPRESENTATION (PostgreSQL JSONB serialization)</span>
              <div className="p-3 bg-slate-950 text-emerald-400 rounded-lg font-mono text-[9px] max-h-36 overflow-y-auto">
                <pre>{JSON.stringify(activeInspectedPatient, null, 2)}</pre>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Inspector footer status bar */}
      <div className="text-[11px] text-slate-400 border-t pt-4 border-slate-200 dark:border-slate-800 flex justify-between items-center mt-6">
        <span>Clinical License: **{licenseCode}**</span>
        <span>Operator Account: **{currentUser?.name}**</span>
      </div>

    </div>
  );
}