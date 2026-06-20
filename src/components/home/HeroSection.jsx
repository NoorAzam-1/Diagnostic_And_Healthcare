import { LoginPage } from "@/components/login/LoginPage";
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  Database,
  Users,
  FlaskConical,
} from "lucide-react";

const features = [
  "ABDM Ready",
  "Role Based Access",
  "Patient Records",
  "Multi Branch Management",
  "Lab Diagnostics",
  "Audit Logs",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-6 md:pt-24 lg:pt-28">
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-red-100 blur-[160px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold tracking-wider text-red-700 uppercase">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Healthcare ERP Platform
            </div>

            <h1 className="mt-4 max-w-6xl text-4xl sm:text-5xl md:text-6xl  font-black tracking-tight text-heading leading-[1.05]">
              <span className="block">Healthcare Operating System</span>

              <span className="block py-1 md:py-2 bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
                For Diagnostic Labs
              </span>

              <span className="block">& Hospitals</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-body">
              Manage patient records, laboratory workflows, staff operations,
              reports, audit logs and healthcare data through one secure,
              scalable and ABDM-ready platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm"
                >
                  <CheckCircle2 size={14} className="text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-primary px-6 py-4 text-white font-semibold shadow-[0_12px_32px_rgba(230,0,18,0.18)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                Request Demo
              </button>

              <button className="rounded-2xl border border-border bg-white px-6 py-4 font-semibold text-heading shadow-sm transition-all duration-300 hover:border-red-300 cursor-pointer">
                View Platform
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-red-100 via-white to-sky-100 blur-3xl" />

              <div className="relative rounded-[36px] border border-border bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <LoginPage />
              </div>

              <div className="absolute -top-4 -right-4 rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-green-600" />
                  <span className="text-sm font-semibold text-heading">
                    ABDM Ready
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-sky-200 bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Activity size={18} className="text-sky-600" />
                  <span className="text-sm font-semibold text-heading">
                    Real-time Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-5">
          <div className="md:col-span-6 rounded-4xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
              <Users size={22} className="text-red-600" />
            </div>

            <h3 className="text-xl font-bold text-heading">
              Patient Management
            </h3>

            <p className="mt-3 text-body leading-relaxed">
              Centralized patient registration, demographic information,
              clinical history, search, tracking and healthcare records
              management across all branches.
            </p>
          </div>

          <div className="md:col-span-3 rounded-4xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
              <FlaskConical size={22} className="text-green-600" />
            </div>

            <h3 className="text-lg font-bold text-heading">Lab Diagnostics</h3>

            <p className="mt-3 text-sm text-body leading-relaxed">
              CBC, LFT, KFT, Thyroid and custom test configuration.
            </p>
          </div>

          <div className="md:col-span-3 rounded-4xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
              <Database size={22} className="text-sky-600" />
            </div>

            <h3 className="text-lg font-bold text-heading">Secure Data</h3>

            <p className="mt-3 text-sm text-body leading-relaxed">
              Tenant isolation, audit logs and enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
