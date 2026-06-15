"use client";

import {
  Building2,
  Users,
  Database,
  ShieldCheck,
  CheckCircle2,
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
  "Dynamic Patient Forms",
  "Role-Based Access",
  "Audit Logging",
  "Cloud Storage",
  "Local Storage",
  "AES-256 Encryption",
  "Cross Platform",
  "Real-Time Analytics",
  "Multi-Branch Sync",
];

const trustItems = [
  "Hospitals",
  "Diagnostic Labs",
  "Healthcare Networks",
  "Multi Branch Centers",
  "Medical Clinics",
  "Diagnostic Chains",
];

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden px-16 py-8">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[180px]
          pointer-events-none"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-600/10 blur-[180px] pointer-events-none "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="flex justify-center gap-4 mt-6 text-4xl md:text-5xl font-black text-white">
            Trusted by Modern
            <span
              className="block bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text
              text-transparent "
            >
              Healthcare Providers
            </span>
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-slate-400 text-lg leading-relaxed">
            Designed for hospitals, diagnostic laboratories and healthcare
            organizations that require enterprise-grade security,
            configurability and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 md:mt-10">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60
                  backdrop-blur-xl p-6 transition-all duration-300 hover:border-indigo-500/40"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                    duration-500 bg-linear-to-br from-indigo-500/5 via-violet-500/5 to-cyan-500/5"
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 "
                  >
                    <Icon size={22} className="text-indigo-400" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-white">
                    <CountUp
                      end={item.value}
                      duration={3}
                      decimals={item.decimals || 0}
                    />
                    {item.suffix}
                  </h3>

                  <p className="mt-2 text-white font-semibold">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-5 md:my-10 flex flex-wrap justify-center gap-3"
        >
          {featurePills.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2
                text-sm text-slate-300 backdrop-blur-xl"
            >
              <CheckCircle2 size={14} className="text-emerald-400" />
              {item}
            </motion.div>
          ))}
        </motion.div>

        <div className="my-10 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...trustItems, ...trustItems].map((item, index) => (
              <div key={index} className="text-xl font-bold text-slate-600">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
