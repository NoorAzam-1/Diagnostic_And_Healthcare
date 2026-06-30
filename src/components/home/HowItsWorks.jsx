"use client";

import { motion, useInView } from "framer-motion";
import {
  Building2,
  Settings2,
  Users,
  UserRound,
  FlaskConical,
  FileBarChart,
  ShieldCheck,
  ArrowRight,
  Lock,
  Network,
} from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

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
    subtitle: "Executive • Doctors • Technicians",
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

const bottomStats = [
  { prefix: "~", end: 15, suffix: " Min", label: "Average Setup Time" },
  { end: 100, suffix: "%", label: "Tenant Isolation" },
  { end: 99.9, suffix: "%", decimals: 1, label: "Platform Availability" },
  { end: 24, suffix: "/7", label: "Monitoring" },
];

function StatCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-4xl border border-border bg-surface p-6 text-center hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-3xl font-black text-heading">
        {item.prefix}
        <CountUp
          start={isInView ? 0 : null}
          end={item.end}
          duration={1.5}
          decimals={item.decimals || 0}
        />
        {item.suffix}
      </h3>
      <p className="mt-2 text-body">{item.label}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="workflow" className="relative container-custom scroll-m-18 md:scroll-m-12 overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />
      <div className="absolute bottom-20 right-20 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[140px]" />

      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            From organization onboarding to diagnostics and reporting,
            HARAI ONE centralizes every healthcare workflow into a single,
            secure and scalable platform.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 md:flex flex-wrap justify-center gap-4">
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
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="relative"
                    >
                      <div className="group mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-white shadow-sm">
                        <Icon size={28} className="text-red-600 group-hover:scale-120 duration-300" />
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
                  viewport={{ once: false }}
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
          {bottomStats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}