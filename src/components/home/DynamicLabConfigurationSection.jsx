"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FlaskConical,
  Plus,
  Sparkles,
  Settings2,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const panels = [
  "Complete Blood Count (CBC)",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "HbA1c",
  "Thyroid Function Test",
];

const customParameters = [
  "Vitamin D",
  "Ferritin",
  // "CRP",
  // "D-Dimer",
];

const features = [
  "Enable or Disable Lab Panels Instantly",
  "Create Organization-Specific Parameters",
  "Dynamic Form Generation",
  "Schema Version Tracking",
  "Custom Validation Rules",
  "No-Code Configuration",
];

export default function DynamicLabConfigurationSection() {
  return (
    <section
      id="lab-configuration"
      className="relative container-custom overflow-hidden py-6 md:py-8 lg:py-12"
    >
      <div className="absolute top-20 left-20 h-[450px] w-[450px] rounded-full bg-red-100 blur-[140px]" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Dynamic Lab Configuration
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Customize Every
            <span className="block bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              Lab Workflow Without Code
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            Unlike traditional laboratory software, HERAI ONE allows
            administrators to enable diagnostic panels, create custom
            parameters and generate patient workflows dynamically without
            developer involvement.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-5"
          >
            <div className="rounded-[36px] border border-border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-red-50">
                  <Settings2 size={24} className="text-red-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-heading">
                    Why It Matters
                  </h3>

                  <p className="text-body">
                    Configure your healthcare workflows in minutes.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <span className="text-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-border bg-surface p-3 text-center">
                  <h4 className="text-2xl font-black text-heading">
                    Unlimited
                  </h4>

                  <p className="mt-2 text-sm text-body">
                    Custom Parameters
                  </p>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-5 text-center">
                  <h4 className="text-2xl font-black text-heading">
                    Runtime
                  </h4>

                  <p className="mt-2 text-sm text-body">
                    Form Generation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-7"
          >
            <div className="rounded-[36px] border border-border bg-white shadow-sm overflow-hidden">
              <div className="border-b border-border bg-surface px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-heading">
                      Organization Configuration
                    </h3>

                    <p className="text-sm text-body">
                      Dynamic Healthcare Setup
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500" />

                    <span className="text-xs font-semibold text-green-700">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <FlaskConical
                    size={18}
                    className="text-red-600"
                  />

                  <h4 className="font-semibold text-heading">
                    Diagnostic Panels
                  </h4>
                </div>

                <div className="mt-5 space-y-3">
                  {panels.map((panel) => (
                    <motion.div
                      key={panel}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3"
                    >
                      <span className="font-medium text-heading">
                        {panel}
                      </span>

                      <div className="relative h-6 w-11 rounded-full bg-green-500">
                        <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={18}
                      className="text-sky-600"
                    />

                    <h4 className="font-semibold text-heading">
                      Custom Parameters
                    </h4>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {customParameters.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3"
                      >
                        <Plus
                          size={15}
                          className="text-sky-600"
                        />

                        <span className="font-medium text-sky-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-surface p-5">
                    <Database
                      size={20}
                      className="text-red-600"
                    />

                    <h4 className="mt-3 font-bold text-heading">
                      Dynamic Schema Engine
                    </h4>

                    <p className="mt-2 text-sm text-body">
                      Automatically generates patient forms and
                      diagnostic workflows from configured parameters.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-border bg-surface p-5">
                    <ShieldCheck
                      size={20}
                      className="text-green-600"
                    />

                    <h4 className="mt-3 font-bold text-heading">
                      Version Controlled
                    </h4>

                    <p className="mt-2 text-sm text-body">
                      Track every configuration change with complete
                      audit visibility.
                    </p>
                  </div>
                </div> */}

                {/* <button className="mt-8 flex items-center gap-2 font-semibold text-red-600">
                  Explore Configuration Engine
                  <ArrowRight size={16} />
                </button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}