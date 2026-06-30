"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Brain, Eye, HeartHandshake, Settings2 } from "lucide-react";

const steps = [
  {
    icon: Eye,
    step: "01",
    title: "We Observed Healthcare",
    description:
      "We spent months inside hospitals, clinics, and diagnostic labs — watching how nurses, doctors, lab technicians, and front-desk staff actually work. Not how software assumes they work.",
    color: "#5eead4",
  },
  {
    icon: Brain,
    step: "02",
    title: "We Understood the Workflows",
    description:
      "A 500-bed hospital moves differently than a 10-room clinic. A pathology lab has entirely different needs than a polyclinic. We mapped IPD workflows, OPD queues, and lab sample chains — deeply and without shortcuts.",
    color: "#2dd4bf",
  },
  {
    icon: Settings2,
    step: "03",
    title: "We Built a Configurable Platform",
    description:
      "Instead of rigid software, we built a platform that adapts. The same core powering a hospital's IPD can be configured to run a single-doctor clinic or a diagnostic centre — without changing a single line of code.",
    color: "#0f766e",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "We Let Caregivers Focus on Patients",
    description:
      "Less time on screens. Less time fighting paperwork. More time where it matters — with the patient. Harai One exists to make technology invisible so care becomes visible.",
    color: "#14b8a6",
  },
];

function StepRow({ item, index }) {
  const rowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const isReversed = index % 2 !== 0;
  const Icon = item.icon;

  return (
    <motion.div
      ref={rowRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative rounded-4xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12 xl:gap-20 transition-all duration-700 cursor-default ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`relative z-10 lg:w-1/2 flex flex-col items-center ${isReversed ? "lg:items-start" : "lg:items-end"} gap-3 sm:gap-4 ${isReversed ? "lg:ml-44" : "lg:mr-24"} `}
      >
        <motion.span
          animate={{
            opacity: hovered ? 1 : 0.25,
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-bold font-heading leading-none select-none"
          style={{
            color: item.color,
          }}
        >
          {item.step}
        </motion.span>
        <motion.div
          animate={{
            y: hovered ? -4 : 0,
            scale: hovered ? 1.1 : 1,
            boxShadow: hovered
              ? `0 8px 24px ${item.color}20`
              : "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 border ${isReversed ? " lg:ml-4" : "lg:ml-28"}`}
          style={{
            backgroundColor: `${item.color}12`,
            borderColor: hovered ? `${item.color}80` : "transparent",
          }}
        >
          <Icon className="text-xl sm:text-2xl" style={{ color: item.color }} />
        </motion.div>
      </div>

      <div className="relative z-10 lg:w-1/2 max-w-xl text-center lg:text-left">
        <span
          className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3 block transition-all duration-300"
          style={{ color: item.color }}
        >
          Step {item.step}
        </span>
        <motion.h3
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-heading text-heading leading-tight"
        >
          {item.title}
        </motion.h3>
        <p className="text-sm sm:text-[15px] text-body font-light leading-relaxed transition-colors duration-500 group-hover:text-heading/80">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="container-custom relative z-10">
        <div
          className="absolute left-0 top-0 rounded-full bg-emerald-100 blur-[140px]"
          style={{ height: 350, width: 350 }}
        />
        <div
          className="absolute right-0 bottom-0 rounded-full bg-teal-100 blur-[140px]"
          style={{ height: 350, width: 350 }}
        />
        
        <div className="w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            our origin
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] my-5 sm:my-6 font-heading text-heading"
          >
            Why Harai One <span className="text-primary">exists</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-lg text-body font-light leading-relaxed"
          >
            We didn&apos;t start with a product idea. We started with a
            question: why does healthcare software make care harder?
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-6 md:mt-14">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-400"
          />

          <div className="flex flex-col gap-10 md:gap-4">
            {steps.map((item, index) => (
              <StepRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}