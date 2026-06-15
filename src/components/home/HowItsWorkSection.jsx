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
    subtitle: "CBC • LFT • KFT • TFT • Custom",
  },
  {
    icon: FileBarChart,
    title: "Generate Reports",
    subtitle: "Analytics • Insights • Audit Logs",
  },
];

const highlights = [
  "ABDM Compliant",
  "Multi-Tenant",
  "Role Based Access",
  "Audit Logging",
  "Cloud Storage",
  "Local Storage",
  "AES-256 Encryption",
  "Cross Platform",
];

export default function HowItWorksSection() {
  return (
    <section id="workflow" className="relative overflow-hidden py-24 px-6 lg:px-16">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Healthcare Workflow
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
              Launch Your Entire
              <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Healthcare Operation
              </span>
            </h2>

            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              From organization setup to patient diagnostics and reporting,
              HERAI ONE centralizes every workflow into a single secure
              healthcare ecosystem.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <ShieldCheck
                    size={14}
                    className="text-emerald-400 shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
                <p className="text-2xl font-black text-white">15 Min</p>
                <p className="text-xs text-slate-400 mt-1">
                  Average Setup Time
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Data Isolation</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-xs text-slate-400 mt-1">
                  System Availability
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute left-6 top-10 bottom-10 w-px bg-linear-to-b from-indigo-500 via-violet-500 to-cyan-500" />

            <div className="space-y-4">
              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    whileHover={{ x: 8 }}
                    className="group relative flex items-center gap-4"
                  >
                    <div
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-2xl bg-linear-to-br from-indigo-500 via-violet-500 to-cyan-500 shadow-lg
                      "
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    <div
                      className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/60
                        backdrop-blur-xl px-5 py-2 transition-all duration-300 group-hover:border-indigo-500/30 "
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-white">{step.title}</h3>

                          <p className="text-sm text-slate-400 mt-1">
                            {step.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <span className="text-slate-600 font-bold text-sm">
                            0{index + 1}
                          </span>

                          <ArrowRight size={16} className="text-indigo-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2
              "
            >
              <div className="flex items-center gap-3">
                <Database size={20} className="text-emerald-400" />

                <div>
                  <h4 className="font-semibold text-emerald-400">
                    Smart Storage Routing
                  </h4>

                  <p className="text-sm text-slate-300">
                    Automatically routes records to Local SQLite or Cloud
                    PostgreSQL based on organization settings.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
