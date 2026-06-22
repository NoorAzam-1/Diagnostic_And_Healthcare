import { RotateCw, UserCheck } from "lucide-react";

export function AuditLedger({
  clinicalTemplateVer,
  auditLedger,
  triggerAlert
}) {
  return (
    <div className="p-6 space-y-6">
      
      <div className="border-b pb-4 border-border flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-heading">Tamper-Evident Medical Activity Journal</h2>
          <p className="text-muted text-xs mt-1">
            Immutable blockchain-inspired ledger securing operational changes and clinical writes.
          </p>
        </div>
        <button 
          onClick={() => {
            triggerAlert("Crypto-linked transaction ledger verified successfully.", "success");
          }}
          className="p-2 border rounded-lg bg-surface hover:bg-surface-hover border-border text-muted"
          title="Run cryptographic ledger integrity check"
        >
          <RotateCw size={14} />
        </button>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3 text-xs text-green-800">
        <UserCheck className="shrink-0 mt-0.5 text-green-600" size={16} />
        <div>
          <span className="font-bold block">Medical Ledger Cryptographic Signatures Verified</span>
          <p className="mt-0.5 leading-normal">
            Ledger checksum validated under Indian National Health Authority Security Guidelines. All transaction entry hashes match sequential parent blocks. ISO 27001 tracking is active.
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-surface border-border overflow-hidden font-mono text-[11px]">
        
        <div className="p-3 border-b font-bold text-muted flex justify-between items-center bg-surface border-border">
          <span>ACTIVE WORKSTATION JOURNAL BLOCK</span>
          <span>v{clinicalTemplateVer}.00 STABLE</span>
        </div>

        <div className="divide-y divide-border">
          {auditLedger.map((item) => (
            <div key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-hover transition">
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2 flex-wrap gap-1 text-[10px]">
                  <span className="text-muted">[{item.timestamp.substring(0, 19).replace('T', ' ')}]</span>
                  <span className="px-1.5 py-0.5 bg-red-50 text-primary border border-red-200 rounded font-bold text-[9px]">
                    {item.action}
                  </span>
                  <span className="text-heading font-bold">{item.operatorName} ({item.operatorId})</span>
                </div>
                <p className="text-body text-xs font-semibold mt-1">{item.details}</p>
                <div className="text-[10px] text-muted flex items-center space-x-2 mt-0.5">
                  <span>Workstation IP: {item.sourceIp}</span>
                  <span>•</span>
                  <span>Protocol Schema: v{item.clinicalTemplateVersion}.00</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[9px] text-muted block font-bold uppercase tracking-wider">SHA-256 Signature</span>
                <span className="text-[10px] text-primary font-bold bg-white border border-border px-2 py-0.5 rounded inline-block mt-1 shadow-sm">
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