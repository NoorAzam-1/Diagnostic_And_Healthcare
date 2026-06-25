import {
  ClipboardPenLine,
  FlaskConical,
  Building2,
  ShieldCheck,
  FileSearch,
  Cloud,
  HeartPulse,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

const advantages = [
  {
    icon: ClipboardPenLine,
    title: "Dynamic Patient Forms",
    description:
      "Create customizable patient registration and intake workflows without development effort.",
  },
  {
    icon: FlaskConical,
    title: "Configurable Lab Panels",
    description:
      "Design diagnostic panels and reporting workflows that match your laboratory operations.",
  },
  {
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description:
      "Independent environments with complete tenant-level configuration and data separation.",
  },
  {
    icon: ShieldCheck,
    title: "Role Based Access",
    description:
      "Granular permissions for administrators, technicians, receptionists and management teams.",
  },
  {
    icon: FileSearch,
    title: "Audit Logging",
    description:
      "Track every critical activity with full visibility and accountability.",
  },
  {
    icon: Cloud,
    title: "Cloud & Local Storage",
    description:
      "Deploy in the cloud or maintain infrastructure locally based on operational requirements.",
  },
  {
    icon: HeartPulse,
    title: "ABDM Ready",
    description:
      "Built to support healthcare interoperability and national digital health initiatives.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross Platform",
    description: "Unified experience across web, desktop and mobile devices.",
  },
];

export default function WhyChooseHaraiOne() {
  return (
    <section
      id="why-haraione"
      className="relative overflow-hidden py-6 md:py-8 lg:py-12"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-success/5 blur-3xl animate-pulse-slow" />
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 animate-pill-in">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Why Choose HaraiOne
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-heading md:text-5xl xl:text-6xl animate-slide-up-1">
              Everything Your
              <span className="block text-primary">Healthcare Team</span>
              Needs
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-body animate-slide-up-2">
              HaraiOne combines patient management, diagnostics, security,
              compliance and operational workflows into one intelligent platform
              designed for modern healthcare organizations.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-black text-primary">8+</p>
                <p className="mt-2 text-body">Core Modules</p>
              </div>

              <div>
                <p className="text-4xl font-black text-primary">3</p>
                <p className="mt-2 text-body">Platform Support</p>
              </div>

              <div>
                <p className="text-4xl font-black text-primary">100%</p>
                <p className="mt-2 text-body">Tenant Isolation</p>
              </div>

              <div>
                <p className="text-4xl font-black text-primary">ABDM</p>
                <p className="mt-2 text-body">Ready Infrastructure</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-0">
            <div className="absolute left-7 top-0 hidden h-full w-px bg-linear-to-b from-primary/40 via-border to-transparent md:block" />

            <div className="space-y-5 md:space-y-6">
              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative flex gap-5 animate-card-up"
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white text-primary shadow-(--shadow-sm) transition-all duration-500 group-hover:scale-110 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1 border-b border-border pb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-primary">
                          0{index + 1}
                        </span>

                        <h3 className="text-lg sm:text-xl font-bold text-heading md:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="max-w-2xl text-sm md:text-lg text-body leading-5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
