"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FlaskConical,
  Plus,
  Sparkles,
} from "lucide-react";

const panels = [
  "Complete Blood Count (CBC)",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "HbA1c",
  "Thyroid Function Test",
];

const customParameters = ["Vitamin D", "Ferritin", "CRP", "D-Dimer"];

const features = [
  "Enable or disable lab panels instantly",
  "Create organization-specific test parameters",
  "Dynamic form generation",
  "Schema version tracking",
  "Custom validation rules",
  "No code configuration",
];

export default function DynamicLabConfigurationSection() {
  return (
    <section
      id="lab-configuration"
      className="relative overflow-hidden py-12 px-6 lg:px-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Dynamic Configuration
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
              Customize Every
              <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Lab Workflow
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Unlike traditional laboratory software, HERAI ONE allows
              administrators to enable diagnostic panels, create custom
              parameters and dynamically generate patient forms without
              developer involvement.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 shrink-0"
                  />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">Unlimited</p>
                <p className="text-xs text-slate-400 mt-1">Custom Parameters</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">Runtime</p>
                <p className="text-xs text-slate-400 mt-1">Form Generation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-slate-800 bg-slate-900/60
              backdrop-blur-xl overflow-hidden lg:mt-6"
          >
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Lab Configuration</h3>
                <p className="text-xs text-slate-500">Organization Settings</p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-400">
                  Active
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical size={18} className="text-indigo-400" />
                <h4 className="font-semibold text-white">Diagnostic Panels</h4>
              </div>

              <div className="space-y-3">
                {panels.map((panel) => (
                  <motion.div
                    key={panel}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between rounded-2xl border
                      border-slate-800 bg-slate-950/60 px-4 py-3"
                  >
                    <span className="text-sm text-slate-300">{panel}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-10 rounded-full bg-emerald-500 relative">
                        <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={18} className="text-cyan-400" />
                  <h4 className="font-semibold text-white">
                    Custom Parameters
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {customParameters.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10
                        px-3 py-2"
                    >
                      <Plus size={14} className="text-cyan-400" />
                      <span className="text-sm text-cyan-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
