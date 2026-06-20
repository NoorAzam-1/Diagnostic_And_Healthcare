"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Settings2,
  Users,
  UserRound,
  FlaskConical,
  FileBarChart,
  ShieldCheck,
  Database,
  ArrowRight,
  Lock,
  Network,
} from "lucide-react";

const workflow = [
  {
    icon: Building2,
    title: "Create Organization",
    subtitle: "Hospital • Clinic • Diagnostic Center",
  },
  {
    icon: Settings2,
    title: "Configure Workspace",
    subtitle: "Storage • Parameters • Lab Panels",
  },
  {
    icon: Users,
    title: "Invite Medical Team",
    subtitle: "Admins • Doctors • Technicians",
  },
  {
    icon: UserRound,
    title: "Register Patients",
    subtitle: "Dynamic Demographics Forms",
  },
  {
    icon: FlaskConical,
    title: "Process Diagnostics",
    subtitle: "CBC • LFT • KFT • Thyroid • Custom Tests",
  },
  {
    icon: FileBarChart,
    title: "Generate Reports",
    subtitle: "Analytics • Insights • Audit Logs",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "ABDM Compliant",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
  },
  {
    icon: Users,
    title: "Role Based Access",
  },
  {
    icon: Network,
    title: "Multi-Tenant",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="workflow" className="relative container-custom overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />
      <div className="absolute bottom-20 right-20 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[140px]" />

      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Healthcare Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Launch Your Entire
            <span className="block bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              Healthcare Operation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-body">
            From organization onboarding to diagnostics and reporting,
            HERAI ONE centralizes every healthcare workflow into a single,
            secure and scalable platform.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm"
              >
                <Icon size={15} className="text-red-600" />
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-10 h-px bg-border" />

              <div className="grid grid-cols-6 gap-4">
                {workflow.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="relative"
                    >
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-white shadow-sm">
                        <Icon size={28} className="text-red-600" />
                      </div>

                      <div className="mt-6 text-center">
                        <span className="text-xs font-bold text-red-600">
                          STEP {index + 1}
                        </span>

                        <h3 className="mt-2 font-bold text-heading">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm text-body">
                          {step.subtitle}
                        </p>
                      </div>

                      {index !== workflow.length - 1 && (
                        <ArrowRight
                          size={18}
                          className="absolute -right-3 top-8 text-red-400"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[28px] border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                      <Icon size={22} className="text-red-600" />
                    </div>

                    <div>
                      <span className="text-xs font-bold text-red-600">
                        STEP {index + 1}
                      </span>

                      <h3 className="mt-1 font-bold text-heading">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm text-body">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          <div className="rounded-4xl border border-border bg-surface p-6 text-center">
            <h3 className="text-3xl font-black text-heading">15 Min</h3>
            <p className="mt-2 text-body">Average Setup Time</p>
          </div>

          <div className="rounded-4xl border border-border bg-surface p-6 text-center">
            <h3 className="text-3xl font-black text-heading">100%</h3>
            <p className="mt-2 text-body">Tenant Isolation</p>
          </div>

          <div className="rounded-4xl border border-border bg-surface p-6 text-center">
            <h3 className="text-3xl font-black text-heading">99.9%</h3>
            <p className="mt-2 text-body">Platform Availability</p>
          </div>

          <div className="rounded-4xl border border-border bg-surface p-6 text-center">
            <h3 className="text-3xl font-black text-heading">24/7</h3>
            <p className="mt-2 text-body">Monitoring</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-4xl border border-green-200 bg-green-50 p-6"
        >
          <div className="flex items-start gap-4">
            <Database size={24} className="text-green-600 shrink-0" />

            <div>
              <h3 className="font-bold text-green-700">
                Smart Storage Routing
              </h3>

              <p className="mt-2 text-green-700/80">
                Automatically routes healthcare records to Local SQLite or
                Cloud PostgreSQL based on organization settings, ensuring
                maximum flexibility and compliance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}