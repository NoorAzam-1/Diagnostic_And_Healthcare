"use client";
import { CheckCircle, Database, Plus } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export function PatientIntakeForm() {
  const {
    clinicalTemplateVer,
    storageStrategy,
    patientIntakeForm,
    setPatientIntakeForm,
    demographicFieldSettings,
    diagnosticModuleSettings,
    customClinicalFields,
    savePatientRegistration,
    updateDemographicIntake,
    updateDiagnosticIntake,
    updateCustomParameterValue
  } = useApp();

  const [adHocName, setAdHocName] = useState("");
  const [adHocValue, setAdHocValue] = useState("");

  const handleAddAdHocField = (e) => {
    e.preventDefault();
    if (adHocName.trim()) {
      updateCustomParameterValue(adHocName.trim(), adHocValue);
      setAdHocName("");
      setAdHocValue("");
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto w-full">
      
      <div className="border-b pb-4 border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-heading">Patient Clinical Registration Entry</h2>
          <p className="text-muted text-xs mt-1">
            Data validation criteria dynamically rendered to comply with Protocol Layout <strong className="text-primary font-mono">v{clinicalTemplateVer}.00</strong>.
          </p>
        </div>
        <div className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface self-start sm:self-center flex items-center space-x-2">
          <Database size={14} className="text-primary" />
          <span className="text-muted">Destination:</span>
          <span className="font-mono font-bold text-heading">
            {storageStrategy === 'LOCAL_ENCLAVE' ? 'Workstation SQLite' : 'PostgreSQL Cloud'}
          </span>
        </div>
      </div>

      <form onSubmit={savePatientRegistration} className="space-y-6 text-xs">
        
        <div className="p-4 sm:p-5 rounded-xl border bg-surface border-border space-y-4">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Section 1: Mandatory Demographics (System Mandated)</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-bold text-body">Patient Full Name <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Aarav Sharma"
                value={patientIntakeForm.fullName}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, fullName: e.target.value})}
                className="bg-white border border-border rounded-lg p-2.5 font-semibold text-heading focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-body">Date of Birth <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="date" 
                required 
                value={patientIntakeForm.dob}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, dob: e.target.value})}
                className="bg-white border border-border rounded-lg p-2.5 text-heading font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-body">Biological Sex <span className="text-rose-500 font-bold">*</span></label>
              <select 
                required 
                value={patientIntakeForm.gender}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, gender: e.target.value})}
                className="bg-white border border-border rounded-lg p-2.5 text-heading font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-bold text-body">Contact Number <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. +91 99887 76655"
                value={patientIntakeForm.phone}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, phone: e.target.value})}
                className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col space-y-1 sm:col-span-2 md:col-span-1">
              <label className="font-bold text-body">Primary Diagnostic requested <span className="text-rose-500 font-bold">*</span></label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Diabetic Monitoring Profile"
                value={patientIntakeForm.testRequested}
                onChange={(e) => setPatientIntakeForm({...patientIntakeForm, testRequested: e.target.value})}
                className="bg-white border border-border rounded-lg p-2.5 text-heading font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl border bg-surface border-border space-y-4">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Section 2: Optional Demographics (Enabled in settings)</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {demographicFieldSettings.emailAddress && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-body">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. patient@healthcare.in"
                  value={patientIntakeForm.demographics.emailAddress || ''}
                  onChange={(e) => updateDemographicIntake('emailAddress', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {demographicFieldSettings.bloodGroup && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-body">Blood Group</label>
                <select 
                  value={patientIntakeForm.demographics.bloodGroup || ''}
                  onChange={(e) => updateDemographicIntake('bloodGroup', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="font-bold text-body">Aadhaar Card Reference (Format: XXXX-XXXX-5678)</label>
                <input 
                  type="text" 
                  placeholder="Aadhaar 12-Digit Identity"
                  value={patientIntakeForm.demographics.nationalId || ''}
                  onChange={(e) => updateDemographicIntake('nationalId', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {demographicFieldSettings.insurancePolicy && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-body">Insurance Provider Policy Identification</label>
                <input 
                  type="text" 
                  placeholder="e.g. HDFC Ergo Optima #20119"
                  value={patientIntakeForm.demographics.insurancePolicy || ''}
                  onChange={(e) => updateDemographicIntake('insurancePolicy', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {demographicFieldSettings.emergencyContact && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-body">Emergency Contact Person & Phone</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sunita Sharma (+91 98765 43209)"
                  value={patientIntakeForm.demographics.emergencyContact || ''}
                  onChange={(e) => updateDemographicIntake('emergencyContact', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {demographicFieldSettings.knownAllergies && (
              <div className="flex flex-col space-y-1">
                <label className="font-bold text-body">Allergy History Annotations</label>
                <textarea 
                  placeholder="e.g. Contrast Dye, Penicillin..."
                  value={patientIntakeForm.demographics.knownAllergies || ''}
                  onChange={(e) => updateDemographicIntake('knownAllergies', e.target.value)}
                  className="bg-white border border-border rounded-lg p-2 text-heading h-11 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            )}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl border bg-surface border-border space-y-4">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Section 3: Enabled Diagnostic Test Panels</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diagnosticModuleSettings.lipidProfile && (
              <div className="p-4 rounded-xl border bg-white border-border space-y-3">
                <h4 className="font-bold text-primary uppercase tracking-wider text-[11px]">Lipid Profile (mg/dL)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
                  <div>
                    <label className="text-muted font-bold">Total Cholesterol</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <200"
                      value={patientIntakeForm.diagnostics.lipidProfile?.totalCholesterol || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'totalCholesterol', e.target.value)}
                      className="w-full bg-surface border border-border rounded p-1.5 text-heading mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-muted font-bold">HDL (Good)</label>
                    <input 
                      type="number" 
                      placeholder="Normal: >40"
                      value={patientIntakeForm.diagnostics.lipidProfile?.hdl || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'hdl', e.target.value)}
                      className="w-full bg-surface border border-border rounded p-1.5 text-heading mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-muted font-bold">LDL (Bad)</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <100"
                      value={patientIntakeForm.diagnostics.lipidProfile?.ldl || ''}
                      onChange={(e) => updateDiagnosticIntake('lipidProfile', 'ldl', e.target.value)}
                      className="w-full bg-surface border border-border rounded p-1.5 text-heading mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {diagnosticModuleSettings.bloodGlucose && (
              <div className="p-4 rounded-xl border bg-white border-border space-y-3">
                <h4 className="font-bold text-primary uppercase tracking-wider text-[11px]">Blood Glucose Diagnostics (mg/dL)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <label className="text-muted font-bold">Fasting Glucose</label>
                    <input 
                      type="number" 
                      placeholder="Normal: 70-100"
                      value={patientIntakeForm.diagnostics.bloodGlucose?.fasting || ''}
                      onChange={(e) => updateDiagnosticIntake('bloodGlucose', 'fasting', e.target.value)}
                      className="w-full bg-surface border border-border rounded p-1.5 text-heading mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-muted font-bold">Post-Prandial Glucose</label>
                    <input 
                      type="number" 
                      placeholder="Normal: <140"
                      value={patientIntakeForm.diagnostics.bloodGlucose?.postPrandial || ''}
                      onChange={(e) => updateDiagnosticIntake('bloodGlucose', 'postPrandial', e.target.value)}
                      className="w-full bg-surface border border-border rounded p-1.5 text-heading mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {!diagnosticModuleSettings.lipidProfile && !diagnosticModuleSettings.bloodGlucose && (
              <div className="col-span-1 md:col-span-2 text-center text-muted italic text-[11px] py-4">
                No diagnostic modules are active. Configure template sections under settings dashboard.
              </div>
            )}
          </div>
        </div>

        {(customClinicalFields.length > 0 || Object.keys(patientIntakeForm.customClinicalParameters).length > 0) && (
          <div className="p-4 sm:p-5 rounded-xl border bg-surface border-border space-y-4">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Section 4: Custom Facility-Configured Parameters</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customClinicalFields.map((field, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <label className="font-bold text-body">
                    {field.name} {field.unit && `(${field.unit})`}
                    {field.mandatory && <span className="text-rose-500 font-bold"> *</span>}
                  </label>
                  <input 
                    type={field.type === 'number' ? 'number' : 'text'}
                    required={field.mandatory}
                    placeholder={field.rangeLimits ? `Expected validation limits: ${field.rangeLimits}` : 'Enter value...'}
                    value={patientIntakeForm.customClinicalParameters[field.name] || ''}
                    onChange={(e) => updateCustomParameterValue(field.name, e.target.value)}
                    className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}

              {Object.keys(patientIntakeForm.customClinicalParameters)
                .filter(name => !customClinicalFields.some(f => f.name === name))
                .map((name, idx) => (
                  <div key={`adhoc-${idx}`} className="flex flex-col space-y-1">
                    <label className="font-bold text-body">{name} <span className="text-primary text-[9px] font-normal">(Ad-hoc)</span></label>
                    <input 
                      type="text"
                      value={patientIntakeForm.customClinicalParameters[name] || ''}
                      onChange={(e) => updateCustomParameterValue(name, e.target.value)}
                      className="bg-white border border-border rounded-lg p-2.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 sm:p-5 rounded-xl border border-dashed bg-surface/50 border-border space-y-3">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest block">Add Unlisted Ad-hoc Field</span>
          <div className="flex flex-col sm:flex-row items-end gap-3">
            <div className="flex flex-col space-y-1 w-full sm:w-1/2">
              <label className="font-bold text-body text-[11px]">Field Name</label>
              <input 
                type="text" 
                placeholder="e.g. SpO2 Level, Pulse Rate"
                value={adHocName}
                onChange={(e) => setAdHocName(e.target.value)}
                className="bg-white border border-border rounded-lg p-2 text-heading focus:outline-none focus:ring-2 focus:ring-primary text-xs"
              />
            </div>
            <div className="flex flex-col space-y-1 w-full sm:w-1/2">
              <label className="font-bold text-body text-[11px]">Initial Value</label>
              <input 
                type="text" 
                placeholder="e.g. 98%, 72 bpm"
                value={adHocValue}
                onChange={(e) => setAdHocValue(e.target.value)}
                className="bg-white border border-border rounded-lg p-2 text-heading focus:outline-none focus:ring-2 focus:ring-primary text-xs"
              />
            </div>
            <button 
              type="button"
              onClick={handleAddAdHocField}
              className="w-full sm:w-auto bg-heading hover:bg-body text-white font-bold px-4 py-2 rounded-lg transition flex items-center justify-center space-x-1 shrink-0 h-8.5"
            >
              <Plus size={14} />
              <span>Add Field</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-xl shadow-red transition flex items-center justify-center space-x-2"
          >
            <CheckCircle size={16} />
            <span>Commit Diagnostic File to Secure Enclave</span>
          </button>
        </div>

      </form>
    </div>
  );
}