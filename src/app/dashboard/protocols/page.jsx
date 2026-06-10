"use client";
import { useApp } from "@/context/AppContext";
import { ProtocolConfig } from "@/components/acess/ProtocolConfig";

export default function Protocols() {
  const { 
    isDarkMode, storageStrategy, isMigratingData, migrateStorageType, dataMigrationProgress,
    demographicFieldSettings, setDemographicFieldSettings, diagnosticModuleSettings, setDiagnosticModuleSettings,
    customClinicalFields, newFieldCreator, setNewFieldCreator, createCustomClinicalField, deleteCustomField, saveClinicalTemplate 
  } = useApp();

  return (
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
  );
}