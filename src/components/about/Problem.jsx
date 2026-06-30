"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FileStack, Puzzle, Shuffle } from "lucide-react";

const problems = [
  {
    icon: Puzzle,
    color: "#2dd4bf",
    title: "Fragmented Systems",
    description:
      "Patient data lives in silos — billing in one system, prescriptions in another, lab results in a third, diagnostics in a fourth. Caregivers stitch together a picture from fragments instead of seeing the whole patient at once.",
    tags: ["Billing", "Prescriptions", "Lab Results", "Diagnostics"],
  },
  {
    icon: FileStack,
    color: "#34d399",
    title: "Paper-Heavy Workflows",
    description:
      "Registration forms, consent sheets, discharge summaries, referral letters — paper remains the backbone of most healthcare facilities. Every sheet added slows care down and introduces manual errors that could have been avoided.",
    tags: ["Registration", "Consent", "Discharge", "Referrals"],
  },
  {
    icon: Shuffle,
    color: "#5eead4",
    title: "Rigid, One-Size-Fits-All Software",
    description:
      "A hospital manages IPD and OPD. A clinic handles consultations. A diagnostic lab processes samples. Each operates fundamentally differently — yet most software forces a single model on all of them, creating friction everywhere.",
    tags: ["Hospitals", "Clinics", "Diagnostic Labs", "Networks"],
  },
];

const stats = [
  { end: 70, suffix: "%", label: "systems can't share patient data" },
  { end: 3, suffix: "×", label: "more time on admin than care" },
  { end: 40, suffix: "%", label: "still rely on paper records" },
  { end: 8, suffix: " in 10", label: "use 3+ disconnected tools" },
  { prefix: "~", end: 15, suffix: " min", label: "wasted per patient manually" },
];

function ProblemCard({ problem, index }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setSpotlight({ x, y, opacity: 1 });
    setTilt({
      x: ((y - centerY) / centerY) * -3,
      y: ((x - centerX) / centerX) * 3,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    setTilt({ x: 0, y: 0 });
  }, []);

  const Icon = problem.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full bg-white/3 border border-white/6 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 transition-all duration-500 ease-out cursor-default"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${spotlight.opacity ? 1.02 : 1})`,
          borderColor: spotlight.opacity ? `${problem.color}35` : undefined,
          boxShadow: spotlight.opacity
            ? `0 12px 48px ${problem.color}15, 0 0 0 1px ${problem.color}20`
            : "none",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 z-0"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, ${problem.color}0a, transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5 sm:mb-6">
            <div
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
              style={{
                backgroundColor: `${problem.color}12`,
                boxShadow: spotlight.opacity
                  ? `0 4px 20px ${problem.color}25`
                  : "none",
              }}
            >
              <Icon
                className="text-lg sm:text-2xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: problem.color }}
              />
            </div>
            <span
              className="text-3xl sm:text-4xl font-bold opacity-[0.27] font-heading leading-none select-none transition-all duration-500 group-hover:opacity-[0.75]"
              style={{ color: problem.color }}
            >
              0{index + 1}
            </span>
          </div>

          <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2.5 sm:mb-3 font-heading transition-colors duration-300 group-hover:text-white">
            {problem.title}
          </h3>

          <p className="text-[13px] sm:text-[15px] text-slate-400 font-light leading-relaxed mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-slate-300">
            {problem.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {problem.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium border border-white/[0.07] text-slate-500 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:text-slate-300 hover:bg-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-[40px] pointer-events-none transition-opacity duration-500 group-hover:opacity-150"
          style={{
            background: `linear-gradient(to bottom left, ${problem.color}08, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`text-center transition-all duration-300 cursor-default ${
        index === 4 ? "col-span-2 sm:col-span-1" : ""
      } ${hovered ? "-translate-y-1" : ""}`}
    >
      <p
        className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold font-heading mb-1 sm:mb-1.5 leading-tight transition-all duration-300"
        style={{
          color: hovered ? "#5eead4" : "#2dd4bf",
          textShadow: hovered ? "0 0 30px #2dd4bf40" : "none",
        }}
      >
        {stat.prefix}
        <CountUp
          start={isInView ? 0 : null}
          end={stat.end}
          duration={2.5}
          separator=","
        />
        {stat.suffix}
      </p>
      <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 leading-snug transition-colors duration-300 hover:text-slate-400">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative z-10 container-custom bg-heading py-6 md:py-8 lg:py-12">
        <div className="mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 md:mb-8 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            the reality
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-3 sm:mb-4 font-heading"
          >
            Healthcare today is
            <span className="text-[#2dd4bf] ml-2">broken by design</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-lg text-slate-400 font-light leading-relaxed mx-auto"
          >
            Across the world, healthcare delivery is trapped under systems that
            were never designed for the way care actually works.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/6 pt-10 sm:pt-12 lg:pt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-y-10 lg:gap-x-8 w-full mx-auto">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}