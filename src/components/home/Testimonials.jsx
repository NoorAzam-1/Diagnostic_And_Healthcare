"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Medical Director",
    hospital: "Sunrise Diagnostic Centre",
    location: "Lucknow, India",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    review:
      "HARAI ONE completely transformed our laboratory workflow. Dynamic patient forms and configurable lab panels reduced paperwork while improving reporting accuracy.",
  },
  {
    id: 2,
    name: "Dr. Priya Nair",
    role: "Operations Head",
    hospital: "CarePlus Diagnostics",
    location: "Bengaluru, India",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    review:
      "Managing multiple branches became incredibly simple. Cloud synchronization, role-based permissions, and audit logs have improved our operational efficiency.",
  },
  {
    id: 3,
    name: "Anjali Singh",
    role: "Laboratory Manager",
    hospital: "Precision Labs",
    location: "Noida, India",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    review:
      "The configurable lab panels are amazing. We enabled only the tests our center performs, making patient data entry significantly faster and more organized.",
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    role: "Hospital Administrator",
    hospital: "HealthFirst Clinic",
    location: "New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80",
    review:
      "Security was our biggest concern. AES-256 encryption, audit logs, and role-based access provide complete confidence in protecting sensitive patient information.",
  },
];

const pages = [
  [testimonials[0], testimonials[1]],
  [testimonials[2], testimonials[3]],
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);
  const visibleCount = isMdUp ? 2 : 1;
  const totalPages = testimonials.length;

  const paginate = (dir) => {
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + totalPages) % totalPages);
  };

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateMatch = () => setIsMdUp(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const visibleTestimonials = Array.from({ length: visibleCount }, (_, index) =>
    testimonials[(currentIndex + index) % testimonials.length],
  );

  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12 scroll-m-18 md:scroll-m-12">
      <div className="absolute left-10 top-10 h-125 w-125 rounded-full bg-emerald-100/60 blur-[160px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-teal-100/50 blur-[150px] animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Trusted by Healthcare Professionals
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-heading lg:text-5xl">
            Trusted by Diagnostic Centers,
            <span className="block bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Clinics & Healthcare Providers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-body mb-5 md:mb-8 max-w-5xl mx-auto">
            Healthcare organizations rely on HARAI ONE to simplify patient
            registration, laboratory workflows, secure data management, and
            multi-user collaboration.
          </p>
        </motion.div>

        <div className="relative mx-auto w-full">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`${currentIndex}-${visibleCount}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visibleTestimonials.map((item, i) => (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative overflow-hidden rounded-4xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-200"
                  >
                    <div className="absolute right-6 top-6 rounded-xl bg-emerald-50 p-2.5">
                      <Quote className="h-5 w-5 text-emerald-600" />
                    </div>

                    <div className="mb-5 flex">
                      {[...Array(5)].map((_, si) => (
                        <Star
                          key={si}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="leading-7 text-body">
                      &ldquo;{item.review}&rdquo;
                    </p>

                    <div className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-0.5 rounded-full bg-linear-to-tr from-emerald-400/30 to-teal-300/30 blur-sm" />
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={52}
                          height={52}
                          className="relative h-13 w-13 rounded-full object-cover ring-3 ring-emerald-100"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="truncate text-base font-bold tracking-tight text-heading">
                          {item.name}
                        </h4>
                        <p className="text-xs text-body">{item.role}</p>
                        <div className="mt-0.5 flex items-center gap-1 text-xs font-medium text-emerald-700">
                          <Building2 className="h-3 w-3 shrink-0" />
                          <span className="truncate">{item.hospital}</span>
                        </div>
                        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted">
                          <MapPin className="h-2.5 w-2.5 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 text-body transition-colors group-hover:text-emerald-600" />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === currentIndex
                      ? "w-8 bg-emerald-600"
                      : "w-2.5 bg-border hover:bg-emerald-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ArrowRight className="h-5 w-5 text-body transition-colors group-hover:text-emerald-600" />
            </button>
          </div>

          <div className="mt-6 text-center text-sm font-medium text-muted">
            <span className="text-emerald-700">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2">/</span>
            <span>{String(totalPages).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}