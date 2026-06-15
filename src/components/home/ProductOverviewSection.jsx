"use client";

import {
  Users,
  FlaskConical,
  ShieldCheck,
  ActivitySquare,
  GitBranch,
  SlidersHorizontal,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Create, organize and access patient records instantly with dynamic healthcare workflows.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: FlaskConical,
    title: "Lab Reporting",
    description:
      "Capture diagnostic results and generate structured reports with configurable lab panels.",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: ShieldCheck,
    title: "Role Based Access",
    description:
      "Separate Admin and Staff permissions while keeping healthcare operations secure.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ActivitySquare,
    title: "Audit Logs",
    description:
      "Track every configuration change, login activity and patient record update.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: GitBranch,
    title: "Multi-Branch Sync",
    description:
      "Manage multiple diagnostic centers through a centralized cloud infrastructure.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: SlidersHorizontal,
    title: "Dynamic Configuration",
    description:
      "Enable custom patient forms, lab parameters and organization-specific workflows.",
    color: "from-cyan-500 to-indigo-600",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProductOverviewSection() {
  return (
    <section id="features" className="relative overflow-hidden py-18">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="flex gap-3 justify-center mt-6 text-4xl md:text-5xl font-black text-white">
            Everything Your Healthcare
            <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Organization Needs
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            HERAI ONE centralizes patient management, diagnostics,
            administration, reporting and security into one unified platform.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60
                  backdrop-blur-xl p-7 hover:border-indigo-500/30 transition-all"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center
                      justify-center shadow-xl mb-5 `}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-indigo-400 text-sm font-medium">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
