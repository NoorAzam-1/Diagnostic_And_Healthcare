"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What exactly is HARAI ONE?",
    answer:
      "HARAI ONE is a comprehensive Healthcare ERP platform designed specifically for diagnostic centers, clinics, and hospitals. It digitizes patient records, automates lab workflows, manages multi-branch operations, and ensures ABDM compliance, all from a single unified dashboard.",
  },
  {
    question: "Is HARAI ONE ABDM compliant?",
    answer:
      "Yes, HARAI ONE is fully ABDM (Ayushman Bharat Digital Mission) ready. It supports Health ID generation, seamless linking of patient records, and enables easy sharing of digital health records across the ABDM ecosystem.",
  },
  {
    question: "Can I manage multiple branches from one account?",
    answer:
      "Absolutely. Our Professional and Enterprise plans support multi-branch management. You can synchronize patient data, lab configs, and audit logs across all your branches in real-time using our secure cloud infrastructure.",
  },
  {
    question: "How secure is my patient data?",
    answer:
      "Security is our top priority. We use AES-256 encryption for data at rest and in transit. The platform includes role-based access control (RBAC), comprehensive audit logs for every action, and strict tenant isolation to ensure your sensitive healthcare data is fully protected.",
  },
  {
    question: "Do I need technical knowledge to set it up?",
    answer:
      "Not at all. HARAI ONE is designed with a highly intuitive UI. Our onboarding team handles the initial setup, data migration, and staff training. You and your staff can start using the system confidently from day one without any coding or technical background.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you have complete flexibility. You can upgrade or downgrade your subscription plan at any time directly from your dashboard. Changes will be prorated and reflected in your next billing cycle, ensuring you only pay for what you use.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-12 scroll-m-18 md:scroll-m-12">
      <div className="absolute left-0 top-40 h-[450px] w-[450px] rounded-full bg-teal-100/50 blur-[160px] animate-pulse-slow" />
      <div className="absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-emerald-100/40 blur-[150px] animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16  text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-heading lg:text-5xl">
            Everything You Need to
            <span className="block bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Know About HARAI
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-body max-w-5xl mx-auto">
            Find quick answers to common questions about our platform, security,
            features, and implementation process.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => toggleFaq(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-surface p-6 transition-all duration-300 ${
                  isOpen
                    ? "border-emerald-300 shadow-lg"
                    : "border-border shadow-sm hover:border-emerald-200 hover:shadow-md"
                }`}
              >
                {isOpen && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-emerald-600 to-teal-500" />
                )}

                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base font-semibold transition-colors duration-300 ${
                      isOpen ? "text-emerald-700" : "text-heading"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-emerald-600 text-white shadow-sm"
                        : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="leading-7 text-body">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}