"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Stethoscope,
  Microscope,
  Server,
} from "lucide-react";

const modes = [
  {
    icon: Building2,
    title: "Hospitals",
    subtitle: "EMR/HIS Mode",
    color: "#0f766e",
    bg: "bg-red-50",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    subtitle: "OPD Mode",
    color: "#059669",
    bg: "bg-rose-50",
  },
  {
    icon: Microscope,
    title: "Labs",
    subtitle: "Diagnostics Mode",
    color: "#14b8a6",
    bg: "bg-sky-50",
  },
];

const features = [
  {
    title: "Hospitals",
    description:
      "Configured for inpatient-outpatient transitions, admissions, discharge sheets, and departmental prescriptions.",
    color: "#0f766e",
  },
  {
    title: "Clinics",
    description:
      "Optimized for rapid doctor consultation timelines, digital bookings, and quick patient note logging.",
    color: "#059669",
  },
  {
    title: "Labs & Diagnostics",
    description:
      "Tuned explicitly for sample tracking, machine syncing, and smart reporting outputs directly to charts.",
    color: "#14b8a6",
  },
];

function VisualCard({ item, index, isActive, setIsActive }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsActive(index)}
      onMouseLeave={() => setIsActive(null)}
      className="relative flex flex-col items-center text-center group cursor-default"
    >
      <div
        className={`w-full p-4 sm:p-5 rounded-2xl border transition-all duration-500 flex flex-col items-center justify-center aspect-square ${
          item.bg
        } ${
          isActive === index
            ? "border-current shadow-lg scale-105"
            : "border-transparent"
        }`}
        style={{
          color: item.color,
          boxShadow:
            isActive === index ? `0 10px 30px ${item.color}20` : "none",
          borderColor: isActive === index ? `${item.color}40` : "transparent",
        }}
      >
        <Icon
          className="text-2xl sm:text-3xl mb-2 transition-transform duration-300 group-hover:scale-110"
          style={{ color: item.color }}
        />
        <span className="text-xs sm:text-sm font-bold text-heading">
          {item.title}
        </span>
        <span
          className="text-[10px] sm:text-xs font-medium mt-1 opacity-70"
          style={{ color: item.color }}
        >
          {item.subtitle}
        </span>
      </div>
    </motion.div>
  );
}

export default function Platfor() {
  const containerRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [activeMode, setActiveMode] = useState(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    setActiveMode(null);
  }, []);

  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-red-50 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-5 sm:mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
          Configurability
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 font-heading text-heading"
            >
              One platform,
              <span className="text-primary">different workflows</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base lg:text-lg text-body font-light leading-relaxed mb-8 sm:mb-10"
            >
              There is no such thing as a standard healthcare organization.
              Harai One&apos;s flexible core adapts natively to distinct clinical
              settings without breaking a sweat.
            </motion.p>

            <div className="space-y-5">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setActiveMode(index)}
                  onMouseLeave={() => setActiveMode(null)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default ${
                    activeMode === index
                      ? "border-border bg-surface shadow-md"
                      : "border-transparent bg-transparent"
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300"
                    style={{
                      backgroundColor:
                        activeMode === index
                          ? `${item.color}15`
                          : `${item.color}10`,
                    }}
                  >
                    <CheckCircle2
                      className="text-lg transition-transform duration-300"
                      style={{
                        color: item.color,
                        transform:
                          activeMode === index ? "scale(1.2)" : "scale(1)",
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-body font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-sm will-change-transform"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-0 overflow-hidden"
              style={{
                opacity: spotlight.opacity,
                background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, #0f766e08, transparent 60%)`,
              }}
            />

            <div className="relative z-10 flex justify-end mb-6">
              <div className="flex items-center gap-2 bg-heading text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                <Server size={14} className="text-red-400" />
                Adaptive Core
              </div>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-4 sm:p-5 rounded-2xl bg-heading text-white flex items-center justify-between shadow-xl"
              >
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Harai One Engine
                  </p>
                  <p className="text-sm sm:text-base font-bold">
                    Configurable Core
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <Server className="text-red-400 text-lg" />
                </div>
              </motion.div>

              <div className="flex justify-center py-4 relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-px border-l-2 border-dashed border-border transition-colors duration-500"
                  style={{
                    borderColor: activeMode !== null ? modes[activeMode].color + '40' : undefined
                  }}
                />
              </div>

              <div className="relative h-4 w-full flex items-center justify-center mb-2">
                <div className="absolute left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-border transition-colors duration-500"
                  style={{
                    borderColor: activeMode !== null ? modes[activeMode].color + '40' : undefined
                  }}
                />
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {modes.map((item, index) => (
                  <VisualCard
                    key={item.title}
                    item={item}
                    index={index}
                    isActive={activeMode}
                    setIsActive={setActiveMode}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 w-24 h-24 rounded-tr-3xl rounded-bl-[60px] pointer-events-none bg-linear-to-bl from-red-50/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}