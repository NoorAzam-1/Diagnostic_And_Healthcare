"use client";
import React from "react";
import Image from "next/image";
import { HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function AboutPage() {
  return (
    <section className="relative container-custom overflow-hidden pt-16 pb-6 sm:pt-20 md:pt-24 lg:pt-28">
      <div className="absolute top-20 -left-40 h-[600px] w-[600px] animate-pulse-slow rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 h-[500px] w-[500px] rounded-full bg-info/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid w-full gap-10 sm:gap-14 lg:grid-cols-[6fr_4fr] lg:gap-12 xl:gap-16 items-center">
        
        {/* Text Side */}
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            custom={0}
            variants={textVariants}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            About HARAI ONE
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            className="font-heading mb-6 sm:mb-8 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.1] text-heading"
          >
            Healthcare isn&apos;t built around software.
            <br />
            <span className="text-primary">
              Software should be built around healthcare.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            className="font-light text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-2xl leading-relaxed text-body max-w-xl mb-8 sm:mb-10"
          >
            Harai One was born from a simple observation — the people who save
            lives spend more time fighting technology than benefiting from it.
            We&apos;re here to change that.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            className="flex items-center gap-3 sm:gap-4 text-sm text-muted"
          >
            <div className="flex -space-x-2">
              <Image
                src="https://picsum.photos/seed/harai-team1/64/64.jpg"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white object-cover"
                alt="Team member"
              />
              <Image
                src="https://picsum.photos/seed/harai-team2/64/64.jpg"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white object-cover"
                alt="Team member"
              />
              <Image
                src="https://picsum.photos/seed/harai-team3/64/64.jpg"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white object-cover"
                alt="Team member"
              />
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-teal-100 text-[9px] sm:text-[10px] font-bold text-teal-700">
                +20
              </div>
            </div>
            <span className="text-xs sm:text-sm">
              Building for healthcare, with healthcare
            </span>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-square w-70 sm:w-[320px] md:w-84 lg:w-full">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-teal-50 via-color-teal-100/40 to-transparent" />

            <Image
              src="https://picsum.photos/seed/healthcare-illustration/800/800.jpg"
              alt="Healthcare Illustration"
              fill
              sizes="(max-width: 1023px) 320px, 400px"
              priority
              className="relative z-10 rounded-3xl object-cover shadow-lg"
            />

            <motion.div
              className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 z-20 flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-border bg-surface p-3 sm:p-4 shadow-md"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(15, 118, 110, 0.15)" }}
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-teal-50">
                <HeartPulse className="text-lg sm:text-xl text-color-primary" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-muted">
                  Our Mission
                </p>
                <p className="text-xs sm:text-sm font-semibold text-heading">
                  Care over complexity
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}