"use client";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { PatientIntakeForm } from "@/components/PatientIntakeForm";

export default function Intake() {
  const router = useRouter();
  const { 
    clinicalTemplateVer, storageStrategy, isDarkMode, 
    patientIntakeForm, setPatientIntakeForm,
    demographicFieldSettings, diagnosticModuleSettings, customClinicalFields,
    savePatientRegistration, updateDemographicIntake, updateDiagnosticIntake, updateCustomParameterValue
  } = useApp();

  // Context mein save function ko router pass karke wrap kar rahe hain
  const handleSave = (e) => savePatientRegistration(e, router);

  return (
    <PatientIntakeForm
      clinicalTemplateVer={clinicalTemplateVer}
      storageStrategy={storageStrategy}
      isDarkMode={isDarkMode}
      patientIntakeForm={patientIntakeForm}
      setPatientIntakeForm={setPatientIntakeForm}
      demographicFieldSettings={demographicFieldSettings}
      diagnosticModuleSettings={diagnosticModuleSettings}
      customClinicalFields={customClinicalFields}
      savePatientRegistration={handleSave}
      updateDemographicIntake={updateDemographicIntake}
      updateDiagnosticIntake={updateDiagnosticIntake}
      updateCustomParameterValue={updateCustomParameterValue}
    />
  );
}