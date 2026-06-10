import { ShieldCheck, Heart } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
            <p className="font-bold text-white text-sm tracking-tight">
              ApexClinical{" "}
              <span className="text-indigo-400 font-normal">
                Software Suite
              </span>
            </p>

            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono border border-slate-700">
              v1.0.0-demo
            </span>
          </div>

          <p className="text-slate-400 max-w-md leading-relaxed text-xs">
            Securely hosted within Indian borders. Fully compliant with national
            healthcare digital data protection architecture.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg">
            <ShieldCheck size={14} className="text-emerald-400" />

            <span className="text-[11px] font-medium text-slate-300">
              Data Sovereignty Guaranteed
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-[11px]">
            <span>&copy; {new Date().getFullYear()} ApexClinical.</span>
            <span>• Made with</span>
            <Heart size={10} className="text-rose-500 fill-rose-500" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}