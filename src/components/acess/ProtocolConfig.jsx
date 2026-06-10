import { Check, Globe, Lock, Plus, RotateCw, Trash2 } from "lucide-react";

export function ProtocolConfig({
  isDarkMode,
  storageStrategy,
  isMigratingData,
  migrateStorageType,
  dataMigrationProgress,
  demographicFieldSettings,
  setDemographicFieldSettings,
  diagnosticModuleSettings,
  setDiagnosticModuleSettings,
  customClinicalFields,
  newFieldCreator,
  setNewFieldCreator,
  createCustomClinicalField,
  deleteCustomField,
  saveClinicalTemplate
}) {
  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Clinical Protocol Parameter Configurations</h2>
          <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold rounded-md">
            Clinical Director Mode Only
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
          Define global data residency storage modes, manage laboratory panels, or customize diagnostic form templates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        
        {/* Data Residency config */}
        <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
          <div>
            <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">Protocol Block A</span>
            <h3 className="text-sm font-bold mt-1 text-slate-900 dark:text-white">Global Data Strategy</h3>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
              Enforce local on-premises device rules or route directly to cloud databases.
            </p>
          </div>

          <div className="space-y-3">
            <button
              disabled={isMigratingData}
              onClick={() => migrateStorageType('LOCAL_ENCLAVE')}
              className={`w-full text-left p-3.5 rounded-xl border flex items-start space-x-3 transition ${storageStrategy === 'LOCAL_ENCLAVE' ? 'bg-indigo-50 border-indigo-500 text-indigo-950 dark:bg-indigo-950/25 dark:border-indigo-900' : 'bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 text-slate-500'}`}
            >
              <Lock className="shrink-0 mt-0.5 text-indigo-600" size={15} />
              <div>
                <span className="font-bold block text-slate-900 dark:text-white text-xs">Workstation SQL Enclave</span>
                <span className="text-[10px] text-slate-500 block mt-1 leading-normal">
                  Write patient data only to secure local SQLite file-storage models. Compliant with regional data residency guidelines.
                </span>
              </div>
            </button>

            <button
              disabled={isMigratingData}
              onClick={() => migrateStorageType('CENTRAL_CLOUD')}
              className={`w-full text-left p-3.5 rounded-xl border flex items-start space-x-3 transition ${storageStrategy === 'CENTRAL_CLOUD' ? 'bg-indigo-50 border-indigo-500 text-indigo-950 dark:bg-indigo-950/25 dark:border-indigo-900' : 'bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 text-slate-500'}`}
            >
              <Globe className="shrink-0 mt-0.5 text-indigo-600" size={15} />
              <div>
                <span className="font-bold block text-slate-900 dark:text-white text-xs">Central Cloud Network</span>
                <span className="text-[10px] text-slate-500 block mt-1 leading-normal">
                  Synchronize files automatically across all authorized branch computers using central PostgreSQL cloud architecture.
                </span>
              </div>
            </button>
          </div>

          {/* Migration progress tracker */}
          {isMigratingData && (
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between mb-1 text-[10px]">
                <span className="text-indigo-600 font-bold flex items-center space-x-1.5">
                  <RotateCw size={11} className="animate-spin" />
                  <span>Migrating clinical files...</span>
                </span>
                <span className="font-mono text-slate-500">{dataMigrationProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: `${dataMigrationProgress}%` }}></div>
              </div>
            </div>
          )}

        </div>

        {/* Dynamic form builders */}
        <div className={`lg:col-span-2 p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-6`}>
          
          <div>
            <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">Protocol Block B</span>
            <h3 className="text-sm font-bold mt-1 text-slate-900 dark:text-white">Validation Intake Form Configurator</h3>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
              Activate demographics, diagnostic panel fields, or customize clinic parameters instantly.
            </p>
          </div>

          {/* Demographic toggles */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Optional Patient Demographics</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {Object.keys(demographicFieldSettings).map((fieldName) => (
                <label key={fieldName} className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer hover:border-slate-350">
                  <span className="capitalize text-slate-700 dark:text-slate-300 text-[11px]">{fieldName.replace(/([A-Z])/g, ' $1')}</span>
                  <input 
                    type="checkbox"
                    checked={demographicFieldSettings[fieldName]}
                    onChange={(e) => setDemographicFieldSettings({...demographicFieldSettings, [fieldName]: e.target.checked})}
                    className="accent-indigo-600 w-3.5 h-3.5 rounded cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Laboratory panel toggles */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Diagnostic Panel Integration</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {Object.keys(diagnosticModuleSettings).map((moduleName) => (
                <label key={moduleName} className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer hover:border-slate-350">
                  <span className="uppercase text-indigo-600 dark:text-indigo-400 font-bold text-[9px]">{moduleName.replace(/([A-Z])/g, ' $1')}</span>
                  <input 
                    type="checkbox"
                    checked={diagnosticModuleSettings[moduleName]}
                    onChange={(e) => setDiagnosticModuleSettings({...diagnosticModuleSettings, [moduleName]: e.target.checked})}
                    className="accent-indigo-600 w-3.5 h-3.5 rounded cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Dynamic custom parameters creator */}
          <div className="border-t pt-4 border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Dynamic Custom Parameter Provisioning</span>
            
            {customClinicalFields.length > 0 && (
              <div className="space-y-2">
                {customClinicalFields.map((field, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-[11px]">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">{field.name}</span>
                      <span className="text-slate-400 font-mono text-[10px] ml-2">[{field.type}] {field.unit && `(${field.unit})`}</span>
                      {field.rangeLimits && <span className="text-indigo-600 font-mono text-[10px] ml-2">Limits: {field.rangeLimits}</span>}
                    </div>
                    <button 
                      onClick={() => deleteCustomField(idx)}
                      className="text-rose-500 hover:text-rose-600 p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={createCustomClinicalField} className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input 
                type="text"
                placeholder="Parameter Name (e.g. HbA1c)"
                value={newFieldCreator.name}
                onChange={(e) => setNewFieldCreator({...newFieldCreator, name: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2 text-[11px]"
              />
              <select 
                value={newFieldCreator.type}
                onChange={(e) => setNewFieldCreator({...newFieldCreator, type: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2 text-[11px]"
              >
                <option value="number">Numeric Metric</option>
                <option value="string">Text Label</option>
                <option value="date">Date Entry</option>
                <option value="boolean">Boolean Switch</option>
              </select>
              <input 
                type="text"
                placeholder="Unit (e.g. % / mmol/L)"
                value={newFieldCreator.unit}
                onChange={(e) => setNewFieldCreator({...newFieldCreator, unit: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2 text-[11px]"
              />
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded-lg text-[11px] flex items-center justify-center space-x-1"
              >
                <Plus size={14} />
                <span>Add Field</span>
              </button>
            </form>
          </div>

          {/* Commit layout parameter set */}
          <div className="border-t pt-4 border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={saveClinicalTemplate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs flex items-center space-x-2 transition"
            >
              <Check size={14} />
              <span>Commit Parameters Schema Template</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}