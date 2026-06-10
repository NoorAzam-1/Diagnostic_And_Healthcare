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
      className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8 space-y-6"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex p-3 bg-indigo-500/20 text-indigo-400 rounded-full">
          <LockKeyhole size={28} />
        </div>

        <h2 className="text-xl font-bold text-white">
          Workstation Access Portal
        </h2>

        <p className="text-slate-400 text-sm">
          Secure login for authorized operators
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => applyPresetCredentials("admin")}
          className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-left hover:bg-slate-700 transition-all duration-300 cursor-pointer"
        >
          <span className="font-bold text-indigo-400 block text-sm">
            Noor Azam
          </span>
        </button>

        <button
          type="button"
          onClick={() => applyPresetCredentials("staff")}
          className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-left hover:bg-slate-700 transition-all duration-300 cursor-pointer"
        >
          <span className="font-bold text-emerald-400 block text-sm">
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
          placeholder="Enter Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-900/30 cursor-pointer"
        >
          <span>Authenticate Operator</span>
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
};