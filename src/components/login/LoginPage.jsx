"use client";

import { useState } from "react";
import {
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
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

  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
    applyPresetCredentials(role);
  };

  return (
    <div id="login-anchor" className="p-1 md:p-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 border border-red-100">
          <LockKeyhole size={28} className="text-red-600" />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-heading">
          Workstation Access
        </h2>

        <p className="mt-2 text-sm text-body">
          Secure login for administrators and healthcare staff.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-green-600" />
          <span className="text-xs font-medium text-green-700">
            ABDM Compliant & Secure Authentication
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSelect("admin")}
          className={`rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
            selectedRole === "admin"
              ? "border-red-500 bg-red-50 ring-2 ring-red-100"
              : "border-gray-200 bg-surface hover:border-red-200 hover:bg-red-50"
          }`}
        >
          <p className="text-xs text-muted">Administrator</p>

          <span className="mt-1 block font-semibold text-red-600">
            Noor Azam
          </span>

          {selectedRole === "admin" && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-[10px] font-semibold text-red-700">
              <CheckCircle2 size={10} />
              Selected
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => handleSelect("staff")}
          className={`rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
            selectedRole === "staff"
              ? "border-sky-500 bg-sky-50 ring-2 ring-sky-100"
              : "border-gray-200 bg-surface hover:border-sky-200 hover:bg-sky-50"
          }`}
        >
          <p className="text-xs text-muted">Staff Member</p>

          <span className="mt-1 block font-semibold text-sky-600">
            Amit Mishra
          </span>

          {selectedRole === "staff" && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700">
              <CheckCircle2 size={10} />
              Selected
            </span>
          )}
        </button>
      </div>

      <form
        onSubmit={(e) =>
          handleManualLogin(e, loginEmail, loginPassword, router)
        }
        className="mt-6 space-y-4"
      >
        <input
          type="email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="admin@hospital.com"
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />

        <input
          type="password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 shadow-[0_12px_32px_rgba(230,0,18,0.18)] cursor-pointer"
        >
          <span>Authenticate Operator</span>
          <ArrowRight size={16} />
        </button>
      </form>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Role-based access control enabled
      </div>
    </div>
  );
};
