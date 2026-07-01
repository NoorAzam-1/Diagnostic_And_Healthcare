"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Link2,
  LayoutDashboard,
  WifiOff,
  BarChart3,
  Cable,
  ArrowUpRight,
} from "lucide-react";

const roadmap = [
  {
    icon: Brain,
    title: "AI-Assisted Healthcare",
    color: "#0f766e",
  },
  {
    icon: Link2,
    title: "FHIR Integration",
    color: "#059669",
  },
  {
    icon: LayoutDashboard,
    title: "Patient Portal",
    color: "#14b8a6",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    color: "#0f766e",
  },
  {
    icon: BarChart3,
    title: "Smart Reporting",
    color: "#059669",
  },
  {
    icon: Cable,
    title: "Lab Device Integration",
    color: "#14b8a6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Looking() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-red-50 blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-rose-50 blur-[120px] opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-5 sm:mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              Future Vision
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 font-heading text-heading"
            >
              Looking <span className="text-primary">ahead</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base lg:text-lg text-body font-light leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              Our vision goes beyond digitizing records. We are consistently
              building toward a smarter, more connected medical ecosystem that
              removes friction entirely from caregiver interactions.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {roadmap.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      borderColor: `${item.color}40`,
                      boxShadow: `0 8px 24px ${item.color}15`,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-surface cursor-default transition-all duration-300"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <Icon
                        size={18}
                        style={{ color: item.color }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-semibold text-heading flex items-center gap-2">
                      {item.title}
                      <ArrowUpRight
                        size={14}
                        className="text-muted opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: item.color }}
                      />
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-4/3 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop"
              alt="Future Vision Healthcare Technology"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-heading/80 via-heading/20 to-transparent flex items-end p-6 sm:p-8">
              <div className="border-l-4 border-red-400 pl-4 sm:pl-5">
                <p className="text-slate-200 font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm">
                  Empowering the next generation of caregivers with invisible
                  software and highly visible care.
                </p>
              </div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-surface/90 backdrop-blur-md border border-border text-heading text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
              In Development
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}