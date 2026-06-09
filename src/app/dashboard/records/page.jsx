"use client";
import { useApp } from "@/context/AppContext";
import { PatientRecords } from "@/components/PatientRecords";

export default function Records() {
  const { licenseCode, isDarkMode, patients, inspectedPatientId, setInspectedPatientId, currentUser, triggerAlert } = useApp();
  
  const activeInspectedPatient = patients.find((p) => p.id === inspectedPatientId) || patients[0];

  return (
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
  );
}