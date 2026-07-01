"use client";
import React from "react";
import { motion } from "framer-motion";

const principles = [
  "Built for Healthcare",
  "Simple by Design",
  "Reliable by Default",
  "Secure by Architecture",
  "Flexible by Configuration",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Principle() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-[150px] opacity-40 pointer-events-none animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <div className="mx-auto text-center mb-6 sm:mb-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-3 sm:mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Our Compass
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] font-heading text-heading"
          >
            Principles we <span className="text-primary">build by</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="group flex flex-wrap justify-center gap-2 lg:gap-3 mx-auto"
        >
          {principles.map((title) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="relative rounded-2xl sm:rounded-3xl border border-transparent bg-primary/3 px-5 py-4 sm:px-8 sm:py-6 cursor-default select-none transition-all duration-500 ease-out
              opacity-20 group-hover:opacity-8 hover:opacity-100 hover:border-border hover:bg-surface
              hover:shadow-lg hover:scale-105 group-hover:scale-95"
            >
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-500 group-hover:w-0 hover:w-12" />

              <span className="relative z-10 block text-2xl sm:text-3xl lg:text-4xl  font-black tracking-tight font-heading text-heading leading-tight transition-colors duration-500 hover:text-primary">
                {title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
