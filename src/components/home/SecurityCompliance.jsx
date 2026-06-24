import {
  ShieldCheck,
  Lock,
  KeyRound,
  Fingerprint,
  FileCheck,
  Database,
  Building2,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Argon2 Hashing",
    description:
      "Industry-standard password hashing with advanced brute-force protection.",
  },
  {
    icon: KeyRound,
    title: "JWT Authentication",
    description:
      "Secure token-based authentication with role-based access control.",
  },
  {
    icon: Fingerprint,
    title: "2FA Security",
    description:
      "Additional verification layer for administrators and privileged users.",
  },
  {
    icon: ShieldCheck,
    title: "AES-256 Encryption",
    description:
      "Military-grade encryption protecting patient and diagnostic data.",
  },
  {
    icon: FileCheck,
    title: "Audit Logs",
    description:
      "Complete activity tracking for accountability and compliance.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    description:
      "Strict tenant-level separation ensuring customer data privacy.",
  },
  {
    icon: Building2,
    title: "DPDP Compliance",
    description:
      "Built to support India's Digital Personal Data Protection requirements.",
  },
  {
    icon: ScanSearch,
    title: "ABDM Ready",
    description:
      "Aligned with Ayushman Bharat Digital Mission interoperability standards.",
  },
];

const highlights = [
  "AES-256 encryption for sensitive healthcare data",
  "Multi-tenant architecture with data isolation",
  "ABDM-ready healthcare interoperability",
  "DPDP Act aligned privacy controls",
];

const stats = [
  { value: "256-bit", label: "Encryption Standard", color: "text-primary" },
  { value: "100%", label: "Tenant Isolation", color: "text-green-600" },
  { value: "24/7", label: "Audit Monitoring", color: "text-sky-600" },
];

export default function SecurityCompliance() {
  return (
    <section
      id="security"
      className="relative container-custom w-full py-6 md:py-8 lg:py-12 scroll-m-12"
    >
      <div className="relative">
        <div className="flex flex-col items-between justify-center text-center">
          <div className="flex items-center justify-center mx-auto gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 animate-pill-in">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="whitespace-nowrap text-sm font-medium text-primary">
              Security &amp; Compliance
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl lg:text-6xl animate-slide-up-1 ">
            Enterprise-Grade Security
            <span className="block text-primary">Built For Healthcare</span>
          </h2>

          <p className="mt-5 w-full mx-auto max-w-6xl text-base leading-7 text-body sm:mt-6 sm:text-lg sm:leading-relaxed animate-slide-up-2">
            HARAI ONE follows modern security practices and healthcare
            compliance standards to protect patient records, diagnostic data,
            and operational workflows across every tenant.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 gap-5 md:gap-10">
            <div className="w-full max-w-3xl grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2.5 sm:gap-3 animate-slide-up-3">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-medium text-green-800 transition-colors duration-300 hover:bg-green-100 sm:px-4 sm:py-2 sm:text-sm"
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-600 sm:h-4 sm:w-4" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid w-full max-w-md grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 animate-slide-up-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-white px-3 py-2 shadow-(--shadow-sm) text-center transition-transform duration-300 hover:-translate-y-1 lg:px-3 lg:py-5"
                >
                  <p
                    className={`text-xl font-black sm:text-2xl md:text-3xl ${s.color}`}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-body sm:text-xs sm:leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full sm:mt-12 animated-border-wrapper animate-card-in">
            <div className="rounded-4xl bg-white p-4 md:p-8 sm:rounded-4xl">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                {securityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-(--shadow-red) sm:rounded-3xl sm:p-5 animate-card-up"
                      style={{ animationDelay: `${index * 0.06}s` }}
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative flex flex-col justify-center items-center">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>

                        <h3 className="mb-1.5 text-base font-bold text-heading sm:mb-2 sm:text-lg">
                          {feature.title}
                        </h3>

                        <p className="text-xs leading-5 text-body sm:text-sm sm:leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-4 overflow-hidden rounded-2xl border border-green-200 bg-green-50 p-4 sm:mt-6 sm:rounded-3xl sm:p-5">
                <div className="scan-line-green" />
                <div className="relative flex items-start gap-3 sm:items-center sm:gap-4">
                  <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-600 animate-glow-pulse sm:h-10 sm:w-10 sm:mt-0" />
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-green-900 sm:text-base">
                      Healthcare Security Certified
                    </h4>
                    <p className="mt-0.5 text-xs leading-5 text-green-700 sm:mt-1 sm:text-sm sm:leading-6">
                      Designed for hospitals, diagnostic laboratories and
                      healthcare organizations with a compliance-first
                      architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
