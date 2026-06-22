"use client";

import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  ShieldCheck,
  ActivitySquare,
  GitBranch,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Centralized patient registration, healthcare records, demographics, visit history and workflow management across all branches.",
    span: "md:col-span-2",
    bg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: FlaskConical,
    title: "Lab Reporting",
    description:
      "Generate structured reports with configurable diagnostic panels and result workflows.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Role Based Access",
    description:
      "Separate Admin and Staff permissions with secure operational control.",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: ActivitySquare,
    title: "Audit Logs",
    description:
      "Track every action, update and login activity with complete transparency.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: GitBranch,
    title: "Multi-Branch Sync",
    description:
      "Manage multiple diagnostic centers through one centralized platform.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: SlidersHorizontal,
    title: "Dynamic Configuration",
    description:
      "Enable custom patient forms, test parameters and organization-specific workflows.",
    span: "md:col-span-2",
    bg: "bg-red-50",
    iconColor: "text-red-600",
  },
];

export default function ProductOverviewSection() {
  return (
    <section id="features" className="relative container-custom scroll-m-12 overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[140px]" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Product Capabilities
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Everything Your
            <span className="block md:py-2.5 bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              Healthcare Organization Needs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            HERAI ONE centralizes patient management, diagnostics,
            administration, reporting, compliance and security into one
            unified healthcare platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`${feature.span || ""} group rounded-[32px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg}`}
                >
                  <Icon size={24} className={feature.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-heading">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-relaxed text-body">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-600">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-surface p-5 text-center">
            <h4 className="text-3xl font-black text-heading">500K+</h4>
            <p className="mt-1 text-body">Patient Records Managed</p>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-5 text-center">
            <h4 className="text-3xl font-black text-heading">50+</h4>
            <p className="mt-1 text-body">Healthcare Centers</p>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-5 text-center">
            <h4 className="text-3xl font-black text-heading">99.9%</h4>
            <p className="mt-1 text-body">Platform Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}