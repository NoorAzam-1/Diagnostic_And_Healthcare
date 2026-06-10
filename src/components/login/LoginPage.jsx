"use client";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export const LoginPage = () => {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleManualLogin,
    applyPresetCredentials,
  } = useApp();
  const router = useRouter();

  return (
    <div
      id="login-anchor"
      className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-full">
          <LockKeyhole size={28} />
        </div>
        <h2 className="text-xl font-bold">Workstation Access Portal</h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => applyPresetCredentials("admin")}
          className="p-3 bg-slate-50 border rounded-xl text-left hover:bg-slate-100"
        >
          <span className="font-bold text-indigo-600 block text-xs">
            Noor Azam
          </span>
        </button>
        <button
          type="button"
          onClick={() => applyPresetCredentials("staff")}
          className="p-3 bg-slate-50 border rounded-xl text-left hover:bg-slate-100"
        >
          <span className="font-bold text-emerald-600 block text-xs">
            Amit Mishra
          </span>
        </button>
      </div>

      <form
        onSubmit={(e) =>
          handleManualLogin(e, loginEmail, loginPassword, router)
        }
        className="space-y-4"
      >
        <input
          type="email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          className="w-full bg-slate-50 border p-3 rounded-xl text-xs"
        />
        <input
          type="password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full bg-slate-50 border p-3 rounded-xl text-xs"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 text-xs cursor-pointer"
        >
          <span>Authenticate Operator</span>
          <ArrowRight size={14} />
        </button>
      </form>
    </div>
  );
};
