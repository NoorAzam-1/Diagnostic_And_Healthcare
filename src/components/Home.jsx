"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  const router = useRouter();
  const { currentUser, handleManualLogin, licenseCode, triggerAlert, applyPresetCredentials } = useApp();
  
  const [loginEmail, setLoginEmail] = useState("noor.azam@apexclinical.in");
  const [loginPassword, setLoginPassword] = useState("••••••••");

  if (currentUser) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <LandingPage
        applyPresetCredentials={applyPresetCredentials}
        handleManualLogin={(e) => handleManualLogin(e, loginEmail, loginPassword, router)}
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        licenseCode={licenseCode}
        triggerAlert={triggerAlert}
      />
    </div>
  );
}