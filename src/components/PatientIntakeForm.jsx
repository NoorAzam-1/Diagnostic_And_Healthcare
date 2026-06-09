import { CheckCircle, Database } from "lucide-react";

export function PatientIntakeForm({
  clinicalTemplateVer,
  storageStrategy,
  isDarkMode,
  patientIntakeForm,
  setPatientIntakeForm,
  demographicFieldSettings,
  diagnosticModuleSettings,
  customClinicalFields,
  savePatientRegistration,
  updateDemographicIntake,
  updateDiagnosticIntake,
  updateCustomParameterValue
}) {
  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="border-b pb-4 border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Patient Clinical Registration Entry</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            Data validation criteria dynamically rendered to comply with Protocol Layout <strong className="text-indigo-600 font-mono">v{clinicalTemplateVer}.00</strong>.
          </p>
        </div>
        <div className={`text-xs px-3 py-1.5 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} flex items-center space-x-2`}>
          <Database size={14} className="text-indigo-600" />
          <span className="text-slate-500">Destination:</span>
          <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
            {storageStrategy === 'LOCAL_ENCLAVE' ? 'Workstation SQLite' : 'PostgreSQL Cloud'}
          </span>
        </div>
      </div>

      {/* Main Form container */}
      <form onSubmit={savePatientRegistration} className="space-y-6 text-xs">
        
        {/* Section 1: Fixed Demographics */}
        <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Section 1: Mandatory Demographics (System Mandated)</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="flex flex-col space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Patient Full Name <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Aarav Sharma"
                value={patientIntakeForm.fullName}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, fullName: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 font-semibold text-slate-950 dark:text-white"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Date of Birth <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="date" 
                required 
                value={patientIntakeForm.dob}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, dob: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white font-semibold"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Biological Sex <span className="text-rose-500 font-bold">*</span></label>
              <select 
                required 
                value={patientIntakeForm.gender}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, gender: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-955 dark:text-white font-semibold"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Contact Number <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. +91 99887 76655"
                value={patientIntakeForm.phone}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, phone: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Primary Diagnostic requested <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Diabetic Monitoring Profile"
                value={patientIntakeForm.testRequested}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, testRequested: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-lg p-2.5 text-slate-950 dark:text-white font-semibold"
              />
            </div>

          </div>
        </div>

        {/* Section 2: Dynamically Configurable Demographics */}
        <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Section 2: Optional Demographics (Enabled in settings)</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {demographicFieldSettings.emailAddress && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. patient@aarogya.in"
                  value={patientIntakeForm.demographics.emailAddress || ''}
                  onChange={(e) => updateDemographicIntake('emailAddress', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
                />
              </div>
            )}

            {demographicFieldSettings.bloodGroup && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Blood Group</label>
                <select 
                  value={patientIntakeForm.demographics.bloodGroup || ''}
                  onChange={(e) => updateDemographicIntake('bloodGroup', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
                >
                  <option value="">-- No Record --</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            )}

            {demographicFieldSettings.nationalId && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Aadhaar Card Reference (Format: XXXX-XXXX-5678)</label>
                <input 
                  type="text" 
                  placeholder="Aadhaar 12-Digit Identity"
                  value={patientIntakeForm.demographics.nationalId || ''}
                  onChange={(e) => updateDemographicIntake('nationalId', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
                />
              </div>
            )}

            {demographicFieldSettings.insurancePolicy && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Insurance Provider Policy Identification</label>
                <input 
                  type="text" 
                  placeholder="e.g. HDFC Ergo Optima #20119"
                  value={patientIntakeForm.demographics.insurancePolicy || ''}
                  onChange={(e) => updateDemographicIntake('insurancePolicy', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
                />
              </div>
            )}

            {demographicFieldSettings.emergencyContact && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Emergency Contact Person & Phone</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sunita Sharma (+91 98765 43209)"
                  value={patientIntakeForm.demographics.emergencyContact || ''}
                  onChange={(e) => updateDemographicIntake('emergencyContact', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-950 dark:text-white"
                />
              </div>
            )}

            {demographicFieldSettings.knownAllergies && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Allergy History Annotations</label>
                <textarea 
                  placeholder="e.g. Contrast Dye, Penicillin..."
                  value={patientIntakeForm.demographics.knownAllergies || ''}
                  onChange={(e) => updateDemographicIntake('knownAllergies', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-slate-955 dark:text-white h-11"
                />
              </div>
            )}

          </div>
        </div>

        {/* Section 3: Diagnostic Laboratory test panels */}
        <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Section 3: Enabled Diagnostic Test Panels</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {diagnosticModuleSettings.lipidProfile && (
              <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border border-slate-200'} space-y-3`}>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[11px]">Lipid Profile (mg/dL)</h4>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <label className="text-slate-500 font-bold">Total Cholesterol</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <200"
                      value={patientIntakeForm.diagnostics.lipidProfile?.totalCholesterol || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'totalCholesterol', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded p-1.5 text-slate-900 dark:text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-bold">HDL (Good Cholesterol)</label>
                    <input 
                      type="number" 
                      placeholder="Normal: >40"
                      value={patientIntakeForm.diagnostics.lipidProfile?.hdl || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'hdl', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded p-1.5 text-slate-900 dark:text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-bold">LDL (Bad Cholesterol)</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <100"
                      value={patientIntakeForm.diagnostics.lipidProfile?.ldl || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'ldl', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded p-1.5 text-slate-900 dark:text-white mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {diagnosticModuleSettings.bloodGlucose && (
              <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border border-slate-200'} space-y-3`}>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[11px]">Blood Glucose Diagnostics (mg/dL)</h4>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <label className="text-slate-500 font-bold">Fasting Glucose</label>
                    <input 
                      type="number" 
                      placeholder="Normal: 70-100"
                      value={patientIntakeForm.diagnostics.bloodGlucose?.fasting || ''}
                      onChange={(e) => updateDiagnosticIntake('bloodGlucose', 'fasting', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded p-1.5 text-slate-900 dark:text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-bold">Post-Prandial Glucose</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <140"
                      value={patientIntakeForm.diagnostics.bloodGlucose?.postPrandial || ''}
                      onChange={(e) => updateDiagnosticIntake('bloodGlucose', 'postPrandial', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded p-1.5 text-slate-900 dark:text-white mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {!diagnosticModuleSettings.lipidProfile && !diagnosticModuleSettings.bloodGlucose && (
              <div className="col-span-2 text-center text-slate-400 italic text-[11px] py-4">
                No diagnostic modules are active. Configure template sections under settings dashboard.
              </div>
            )}

          </div>
        </div>

        {/* Section 4: Dynamic Custom Variables */}
        {customClinicalFields.length > 0 && (
          <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Section 4: Custom Facility-Configured Parameters</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customClinicalFields.map((field, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">
                    {field.name} {field.unit && `(${field.unit})`}
                    {field.mandatory && <span className="text-rose-500 font-bold"> *</span>}
                  </label>
                  <input 
                    type={field.type === 'number' ? 'number' : 'text'}
                    required={field.mandatory}
                    placeholder={field.rangeLimits ? `Expected validation limits: ${field.rangeLimits}` : 'Enter value...'}
                    value={patientIntakeForm.customClinicalParameters[field.name] || ''}
                    onChange={(e) => updateCustomParameterValue(field.name, e.target.value)}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-slate-955 dark:text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-xl shadow-md transition flex items-center space-x-2"
          >
            <CheckCircle size={16} />
            <span>Commit Diagnostic File to Secure Enclave</span>
          </button>
        </div>

      </form>

    </div>
  );
}
