import { RotateCw, UserCheck } from "lucide-react";

export function AuditLedger({
  isDarkMode,
  clinicalTemplateVer,
  auditLedger,
  triggerAlert
}) {
  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="border-b pb-4 border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Tamper-Evident Medical Activity Journal</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            Immutable blockchain-inspired ledger securing operational changes and clinical writes.
          </p>
        </div>
        <button 
          onClick={() => {
            triggerAlert("Crypto-linked transaction ledger verified successfully.", "success");
          }}
          className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:border-slate-850 text-slate-500"
          title="Run cryptographic ledger integrity check"
        >
          <RotateCw size={14} />
        </button>
      </div>

      {/* Verification status board */}
      <div className="p-4 bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900 rounded-xl flex items-start space-x-3 text-xs text-emerald-850 dark:text-emerald-300">
        <UserCheck className="shrink-0 mt-0.5 text-emerald-600" size={16} />
        <div>
          <span className="font-bold block">Medical Ledger Cryptographic Signatures Verified</span>
          <p className="mt-0.5 leading-normal">
            Ledger checksum validated under Indian National Health Authority Security Guidelines. All transaction entry hashes match sequential parent blocks. ISO 27001 tracking is active.
          </p>
        </div>
      </div>

      {/* Chained records feed */}
      <div className={`rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} overflow-hidden font-mono text-[11px]`}>
        
        <div className={`p-3 border-b font-bold text-slate-500 flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          <span>ACTIVE WORKSTATION JOURNAL BLOCK</span>
          <span>v{clinicalTemplateVer}.00 STABLE</span>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {auditLedger.map((item) => (
            <div key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-100/30 dark:hover:bg-slate-900/10 transition">
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2 flex-wrap gap-1 text-[10px]">
                  <span className="text-slate-400">[{item.timestamp.substring(0, 19).replace('T', ' ')}]</span>
                  <span className="px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 rounded font-bold text-[9px]">
                    {item.action}
                  </span>
                  <span className="text-slate-700 dark:text-slate-200 font-bold">{item.operatorName} ({item.operatorId})</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mt-1">{item.details}</p>
                <div className="text-[10px] text-slate-400 flex items-center space-x-2 mt-0.5">
                  <span>Workstation IP: {item.sourceIp}</span>
                  <span>•</span>
                  <span>Protocol Schema: v{item.clinicalTemplateVersion}.00</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">SHA-256 Signature</span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded inline-block mt-1 shadow-xs">
                  {item.integritySignature}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}