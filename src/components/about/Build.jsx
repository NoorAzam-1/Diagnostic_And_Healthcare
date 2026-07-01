"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Microscope,
  Network,
  ArrowRight,
} from "lucide-react";

const targets = [
  {
    icon: Building2,
    title: "Hospitals",
    description:
      "Managing hundreds of beds, rotating shifts, complex billing, and multi-department coordination — all while ensuring every patient receives continuous, documented care.",
    challenges: ["IPD/OPD Management", "Multi-Department Sync", "Shift Rotations"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop",
    color: "#0f766e",
    bg: "bg-red-50",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    description:
      "Delivering rapid, empathetic consultations, tracking outpatient histories, and scheduling follow-ups without getting bogged down by clunky software or repetitive admin entry.",
    challenges: ["Rapid Consultations", "History Tracking", "Follow-up Scheduling"],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop",
    color: "#059669",
    bg: "bg-rose-50",
  },
  {
    icon: Microscope,
    title: "Diagnostic Labs",
    description:
      "Connecting sample intake directly with digital patient charts, ensuring rapid test result dispatching, and integrating seamlessly with testing machinery.",
    challenges: ["Sample Intake", "Result Dispatch", "Machinery Integration"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
    color: "#0f766e",
    bg: "bg-sky-50",
  },
  {
    icon: Network,
    title: "Healthcare Networks",
    description:
      "Unifying multiple facilities under one secure platform, granting administrators visibility while letting localized satellite clinics operate independently.",
    challenges: ["Multi-Facility Unification", "Admin Visibility", "Independent Satellites"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    color: "#14b8a6",
    bg: "bg-red-50",
  },
];

function TargetRow({ item, index }) {
  const isReversed = index % 2 !== 0;
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group grid md:grid-cols-2 gap-6 lg:gap-10 xl:gap-16 items-center ${
        isReversed ? "md:direction-rtl" : ""
      }`}
    >
      <div className={`${isReversed ? "md:order-2 md:direction-ltr" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-16/10 w-full rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-0"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-surface/90 backdrop-blur-md border border-border px-4 py-2.5 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
            <div
              className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}
            >
              <Icon size={20} style={{ color: item.color }} />
            </div>
            <span className="text-sm font-bold font-heading text-heading">
              {item.title}
            </span>
          </div>
        </motion.div>
      </div>

      <div className={`${isReversed ? "md:order-1 md:direction-ltr" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: item.color }}
          >
            0{index + 1} — Care Setting
          </span>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-heading leading-tight mb-4">
            {item.title}
          </h3>
          
          <p className="text-sm sm:text-[15px] lg:text-base text-body font-light leading-relaxed mb-6 max-w-lg">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.challenges.map((challenge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border"
                style={{
                  backgroundColor: `${item.color}08`,
                  borderColor: `${item.color}20`,
                  color: item.color,
                }}
              >
                <ArrowRight size={12} />
                {challenge}
              </span>
            ))}
          </div>

          <button
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn"
            style={{ color: item.color }}
          >
            Explore {item.title} Workflow
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Build() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-red-50 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-5 sm:mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Who We Build For
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 font-heading text-heading"
          >
            Designed for the people{" "}
            <span className="text-primary">who deliver care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-lg text-body font-light leading-relaxed max-w-3xl mx-auto"
          >
            We don&apos;t build for industries. We build for the specific
            operational realities of each care setting.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {targets.map((item, index) => (
            <TargetRow key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}