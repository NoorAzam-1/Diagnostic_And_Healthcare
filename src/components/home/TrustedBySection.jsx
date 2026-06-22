"use client";

import {
  Building2,
  Users,
  Database,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Server,
  Network,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Healthcare Centers",
    description: "Hospitals, Clinics & Labs",
  },
  {
    icon: Users,
    value: 500,
    suffix: "K+",
    label: "Patient Records",
    description: "Securely Managed",
  },
  {
    icon: Database,
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "System Uptime",
    description: "Enterprise Reliability",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "ABDM Ready",
    description: "Healthcare Compliance",
  },
];

const featurePills = [
  "Multi-Tenant Architecture",
  "Role-Based Access",
  "Audit Logging",
  "AES-256 Encryption",
  "Cloud Storage",
  "Local Storage",
  "Cross Platform",
  "Real-Time Analytics",
  "Multi-Branch Sync",
  "Dynamic Patient Forms",
];

const trustItems = [
  "Diagnostic Labs",
  "Hospitals",
  "Healthcare Networks",
  "Pathology Centers",
  "Medical Clinics",
  "Multi Branch Labs",
];

const trustFeatures = [
  {
    icon: ShieldCheck,
    label: "ABDM Compliant",
  },
  {
    icon: Lock,
    label: "AES-256 Encryption",
  },
  {
    icon: Users,
    label: "Role Based Access",
  },
  {
    icon: Server,
    label: "99.9% Uptime",
  },
  {
    icon: Network,
    label: "Tenant Isolation",
  },
];

export default function TrustedBySection() {
  return (
    <section className="relative container-custom overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[140px]" />

      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Trusted Healthcare Infrastructure
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Built For Modern
            <span className="block md:py-2.5 bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              Healthcare Organizations
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            Enterprise-grade platform trusted by hospitals, diagnostic
            laboratories and healthcare providers requiring security,
            compliance and scalability.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {trustFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm"
              >
                <Icon size={15} className="text-red-600" />
                {item.label}
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[28px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Icon size={22} className="text-red-600" />
                </div>

                <h3 className="text-3xl font-black text-heading">
                  <CountUp
                    end={item.value}
                    duration={3}
                    decimals={item.decimals || 0}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-2 font-semibold text-heading">
                  {item.label}
                </p>

                <p className="mt-1 text-sm text-body">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {featurePills.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-body shadow-sm"
            >
              <CheckCircle2 size={14} className="text-green-600" />
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...trustItems, ...trustItems].map((item, index) => (
              <div
                key={index}
                className="text-lg md:text-xl font-bold uppercase tracking-wide text-heading/60"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}