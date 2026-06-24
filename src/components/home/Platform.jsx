import { Globe, Monitor, Smartphone, CheckCircle2 } from "lucide-react";

const platforms = [
  {
    icon: Globe,
    title: "Web",
    description:
      "Access HARAI ONE directly from any modern browser without installation.",
    features: ["Chrome", "Edge", "Safari", "Firefox"],
  },
  {
    icon: Monitor,
    title: "Desktop",
    description:
      "Optimized desktop experience for laboratories and healthcare operations.",
    features: ["Windows", "macOS", "Linux"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Manage diagnostics and patient workflows from anywhere.",
    features: ["Android", "iOS", "Tablet Support"],
  },
];

export default function Platform() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden py-6 md:py-8 lg:py-12 scroll-m-18 md:scroll-m-12"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500/5 blur-3xl animate-pulse-slow" />

      <div className="container-custom">
        <div className="mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 animate-pill-in">
            <Globe className="h-4 w-4 text-primary" />

            <span className="text-sm font-medium text-primary">
              Cross Platform Access
            </span>
          </div>

          <h2 className="w-full mx-auto my-3 md:my-5 text-4xl font-black tracking-tight text-heading md:text-5xl animate-slide-up-1">
            Available On Every
            <span className="text-primary ml-3">Platform You Use</span>
          </h2>

          <p className="text-lg leading-8 text-body animate-slide-up-2">
            Access HARAI ONE seamlessly across web, desktop, and mobile devices
            with a consistent healthcare experience everywhere.
          </p>
        </div>

        <div className="relative mt-5 md:mt-10">
          <div className="absolute left-1/2 top-10 hidden h-px w-[65%] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.title}
                  className="group relative overflow-hidden rounded-4xl border border-border bg-white p-4 md:p-8
                    shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-3 hover:border-primary/20
                    hover:shadow-(--shadow-red) animate-card-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-2xl font-black text-heading">
                      {platform.title}
                    </h3>

                    <p className="mt-2 text-body leading-7">
                      {platform.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 my-4">
                      {platform.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-heading">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-sm text-body">Fully Supported</span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Available
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
