"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  SlidersHorizontal,
  Users,
  ShieldCheck,
  ServerCog,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    icon: SlidersHorizontal,
    title: "Configurable by Design",
    description:
      "We believe no two healthcare facilities are identical. Software should mold itself to the organization — not the other way around.",
    iconColor: "#0f766e",
    hoverBg: "#0f766e",
    glow: "#0f766e",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description:
      "Every screen, every flow, every interaction is designed for the human using it — not the developer who built it. Usability isn't a feature; it's a responsibility.",
    iconColor: "#059669",
    hoverBg: "#059669",
    glow: "#059669",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description:
      "Healthcare data is sacred. We don't treat security as an add-on layer — it's woven into the architecture from the first line of code.",
    iconColor: "#0f766e",
    hoverBg: "#0f766e",
    glow: "#14b8a6",
  },
  {
    icon: ServerCog,
    title: "Flexible Deployment",
    description:
      "Cloud or on-premise — the choice belongs to the organization. Infrastructure decisions should be driven by compliance and preference, not vendor limitations.",
    iconColor: "#115e59",
    hoverBg: "#115e59",
    glow: "#115e59",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "From a single clinic to a nationwide healthcare network — the platform grows with the organization without rebuilds, migrations, or compromises.",
    iconColor: "#10b981",
    hoverBg: "#10b981",
    glow: "#10b981",
  },
];

function PhilosophyCard({ card, index }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const Icon = card.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        }),
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: spotlight.opacity
          ? `0 20px 50px ${card.glow}20, 0 0 0 1px ${card.glow}30`
          : `0 12px 30px rgba(15, 23, 42, 0.08)`,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative bg-surface border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-default h-full will-change-transform"
      style={{
        borderColor: spotlight.opacity ? `${card.glow}40` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 z-0 overflow-hidden"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, ${card.glow}0d, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: -10, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300"
          style={{
            backgroundColor: spotlight.opacity
              ? card.hoverBg
              : `${card.iconColor}12`,
            boxShadow: spotlight.opacity ? `0 8px 24px ${card.glow}35` : "none",
          }}
        >
          <Icon
            className="text-xl sm:text-2xl transition-colors duration-300"
            style={{ color: spotlight.opacity ? "#ffffff" : card.iconColor }}
          />
        </motion.div>

        <h3
          className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 font-heading text-heading leading-tight transition-colors duration-300"
          style={{ color: spotlight.opacity ? card.hoverBg : undefined }}
        >
          {card.title}
        </h3>

        <p className="text-sm sm:text-[15px] text-body font-light leading-relaxed transition-colors duration-300 group-hover:text-heading/80">
          {card.description}
        </p>
      </div>

      <div
        className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-[40px] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: spotlight.opacity ? 0.8 : 0.5,
          background: `linear-gradient(to bottom left, ${card.glow}10, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Design() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-red-50 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 rounded-full text-red-700 text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase animate-fade-in-down">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              philosphy
            </div>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 font-heading text-heading"
          >
            Beliefs that shape{" "}
            <span className="text-primary inline-block min-h-[1.2em] align-bottom">
              <TypeAnimation
                sequence={[
                  "every decision",
                  2500,
                  "our code",
                  2000,
                  "our UI",
                  2000,
                  "our architecture",
                  2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-lg text-body font-light leading-relaxed"
          >
            These aren&apos;t features we bolt on. They&apos;re
            <span className="font-medium text-heading mx-1 text-lg">
              <CountUp start={0} end={5} duration={2.5} />
            </span>
            core convictions we build from.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mw-full mx-auto">
          {cards.slice(0, 3).map((card, index) => (
            <PhilosophyCard key={index} card={card} index={index} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-2xl lg:max-w-[calc(66.666%-12px)] mx-auto mt-4 sm:mt-5 lg:mt-6">
          {cards.slice(3).map((card, index) => (
            <PhilosophyCard key={index + 3} card={card} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
