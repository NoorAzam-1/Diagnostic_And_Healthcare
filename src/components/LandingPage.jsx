import { 
  Activity, 
  Shield, 
  Server, 
  ArrowRight,
  Layers,
  ChevronRight,
  LockKeyhole,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';
import LandingFooter from './LandingFooter';
import LoginPage from './LoginPage';

export function LandingPage({ 
  applyPresetCredentials, 
  handleManualLogin, 
  loginEmail, 
  setLoginEmail, 
  loginPassword, 
  setLoginPassword, 
  licenseCode 
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Top Navigation */}
      <nav className="bg-slate-50 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-sm">
              <Activity size={24} />
            </div>
            <div>
              <span className="font-extrabold text-slate-950 text-lg tracking-tight">ApexClinical</span>
              <span className="text-[10px] text-slate-500 block -mt-1 font-semibold uppercase tracking-wider">Multi-Tenant Diagnostic Suite</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4 text-xs font-bold text-slate-600">
            <Link href="#login-anchor" className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl hover:bg-indigo-700 transition shadow-sm font-semibold tracking-wide flex items-center space-x-1">
              <span>Sign In to Workstation</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content Section */}
      <section className="bg-linear-to-b from-slate-50 via-white to-slate-50 py-16 px-6 relative overflow-hidden flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Diagnostic System Value Propositions (Aligning with PPT/Docx goals) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
              <Shield size={14} />
              <span>Compliant with India DPDP Act 2023 & NHA specifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Adaptive Laboratory Workstation <br />
              <span className="text-indigo-600">for Indian Clinics & Diagnostics</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Our unified web and desktop interface gives diagnostic labs complete control. Configure regional registration forms, custom blood test modules, and localized offline storage strategies easily, without rewriting database code.
            </p>

            {/* Visual core aspects list */}
            <div id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white border border-slate-150 rounded-xl hover:shadow-md transition">
                <Layers size={20} className="text-indigo-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Adaptive Intake Schema</h3>
                <p className="text-xs text-slate-500 mt-1">Easily configure national IDs (Aadhaar), Blood Glucose metrics, or completely custom clinic fields.</p>
              </div>
              <div className="p-4 bg-white border border-slate-150 rounded-xl hover:shadow-md transition">
                <Server size={20} className="text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Flexible Data Residency</h3>
                <p className="text-xs text-slate-500 mt-1">Fulfill data guidelines by keeping diagnostic records exclusively on-site or synchronized via cloud network.</p>
              </div>
            </div>
          </div>

          {/* Secure Interactive Login Module */}
          <div id="login-anchor" className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
            
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-full">
                <LockKeyhole size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-950">Workstation Access Portal</h2>
              <p className="text-xs text-slate-500">
                Log in under standard roles to preview clinical configuration parameters and dashboard controls.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block">Fast Authentication Toggles:</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => applyPresetCredentials('admin')}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${loginEmail === 'noor.azam@apexclinical.in' ? 'bg-indigo-50 border-indigo-400 text-indigo-950' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                >
                  <span className="font-bold text-indigo-600 block text-xs">Noor Azam</span>
                  <span className="text-[9px] text-slate-500 block">Director (Admin Profile)</span>
                </button>
                <button
                  type="button"
                  onClick={() => applyPresetCredentials('staff')}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${loginEmail === 'a.mishra@apexclinical.in' ? 'bg-indigo-50 border-indigo-400 text-indigo-950' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                >
                  <span className="font-bold text-emerald-600 block text-xs">Amit Mishra</span>
                  <span className="text-[9px] text-slate-500 block">Registrar (Staff Profile)</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleManualLogin} className="space-y-4 text-xs">
              
              <div className="space-y-1">
                <label className="font-bold text-slate-700 uppercase tracking-wide block">Hospital Registered Email</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="noor.azam@apexclinical.in"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 uppercase tracking-wide block">Security Keycode / Passphrase</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition text-xs flex items-center justify-center space-x-2"
              >
                <span>Authenticate Operator</span>
                <ArrowRight size={14} />
              </button>

            </form>

            <div className="pt-2 text-center text-[10px] text-slate-400 border-t border-slate-100">
              License verified under code scope **{licenseCode}**.
            </div>

          </div>

          {/* <LoginPage /> */}

        </div>
      </section>

      {/* Landing Footer */}
      <LandingFooter />

    </div>
  );
}