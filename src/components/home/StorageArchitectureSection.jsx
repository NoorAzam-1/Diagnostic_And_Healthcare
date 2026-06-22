"use client";

import { motion } from "framer-motion";
import {
  HardDrive,
  Cloud,
  ShieldCheck,
  WifiOff,
  Database,
  Server,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const localFeatures = [
  "Data stays on device",
  "Offline support",
  "AES-256 encryption",
  "Fast local access",
  "No internet dependency",
  "SQLite powered storage",
];

const cloudFeatures = [
  "Multi-branch access",
  "Anywhere accessibility",
  "Nightly backups",
  "Centralized data management",
  "Cloud PostgreSQL",
  "Scalable infrastructure",
];

export default function StorageArchitectureSection() {
  return (
    <section id="storage" className="relative container-custom overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[140px]" />

      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Storage Architecture
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Choose How Your
            <span className="block bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              Healthcare Data Lives
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            HARAI ONE supports both local and cloud storage models,
            allowing healthcare organizations to choose the architecture
            that best fits their compliance, performance and operational
            requirements.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -6 }}
            className="rounded-[36px] border border-border bg-white p-8 shadow-sm transition-all duration-2000 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50">
                <HardDrive size={30} className="text-red-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-heading">
                  Local Storage
                </h3>

                <p className="text-body">
                  Maximum control and offline access
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {localFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-5">
              <div className="flex items-center gap-3">
                <WifiOff size={20} className="text-red-600" />

                <div>
                  <h4 className="font-bold text-heading">
                    Works Offline
                  </h4>

                  <p className="text-sm text-body">
                    Continue operations even without internet access.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white shadow-sm">
              <ArrowRight size={22} className="text-red-600" />
            </div>

            <span className="font-bold text-muted">
              OR
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -6 }}
            className="rounded-[36px] border border-border bg-white p-8 shadow-sm transition-all duration-2000 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-50">
                <Cloud size={30} className="text-sky-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-heading">
                  Cloud Storage
                </h3>

                <p className="text-body">
                  Centralized and scalable infrastructure
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {cloudFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-sky-100 bg-sky-50 p-5">
              <div className="flex items-center gap-3">
                <Server size={20} className="text-sky-600" />

                <div>
                  <h4 className="font-bold text-heading">
                    Multi-Branch Ready
                  </h4>

                  <p className="text-sm text-body">
                    Access healthcare data from anywhere securely.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-12 rounded-[36px] border border-green-200 bg-green-50 p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <Database size={24} className="text-green-600 shrink-0" />

              <div>
                <h3 className="text-xl font-bold text-heading">
                  Flexible Storage Engine
                </h3>

                <p className="mt-2 text-body">
                  Organizations can choose the storage architecture that
                  best fits their operational model while maintaining
                  enterprise-grade security and healthcare compliance.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2">
              <ShieldCheck size={16} className="text-green-600" />
              <span className="text-sm font-semibold text-green-700">
                AES-256 Protected
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}