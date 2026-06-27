"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small clinics and independent diagnostic labs.",
    monthlyPrice: 2999,
    annualPrice: 29988,
    features: [
      { text: "Up to 500 Patient Records", included: true },
      { text: "Basic Lab Panel Configuration", included: true },
      { text: "Single Branch Management", included: true },
      { text: "Standard Audit Logs", included: true },
      { text: "Email Support", included: true },
      { text: "Multi-Branch Sync", included: false },
      { text: "ABDM Integration", included: false },
    ],
    cta: "Start 14-Day Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing diagnostic centers and mid-size hospitals.",
    monthlyPrice: 5999,
    annualPrice: 59988,
    features: [
      { text: "Unlimited Patient Records", included: true },
      { text: "Advanced Configurable Lab Panels", included: true },
      { text: "Up to 5 Branches", included: true },
      { text: "Comprehensive Audit Logs", included: true },
      { text: "Priority Email & Chat Support", included: true },
      { text: "Multi-Branch Cloud Sync", included: true },
      { text: "ABDM Health ID Integration", included: true },
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Tailored for large hospital networks and healthcare chains.",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      { text: "Unlimited Everything", included: true },
      { text: "Custom Lab Workflow Builder", included: true },
      { text: "Unlimited Branches", included: true },
      { text: "Real-time Analytics Dashboard", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "On-Premise / Cloud Hybrid", included: true },
      { text: "Custom API & ABDM Integrations", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden py-6 md:py-8 lg:py-12 scroll-m-18 md:scroll-m-12">
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-[160px] animate-pulse-slow" />
      <div className="absolute left-0 bottom-20 h-[400px] w-[400px] rounded-full bg-teal-100/40 blur-[150px] animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 w-full text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Simple, Transparent Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-heading lg:text-5xl">
            Scale Your Healthcare
            <span className="block bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Operations Seamlessly
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-body">
            Choose the plan that fits your diagnostic center or hospital. 
            Upgrade or downgrade anytime as your requirements evolve.
          </p>

          <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-border bg-surface p-2 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                !isAnnual ? "bg-primary text-white shadow-md" : "text-body hover:text-heading"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isAnnual ? "bg-primary text-white shadow-md" : "text-body hover:text-heading"
              }`}
            >
              Yearly
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                -17%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${
                plan.popular ? "md:-my-6 md:py-6 z-10" : ""
              }`}
            >
              {plan.popular ? (
                <div className="animated-border-wrapper h-full">
                  <div className="relative z-10 h-full rounded-[34px] bg-surface p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                    <PricingCard plan={plan} isAnnual={isAnnual} />
                  </div>
                </div>
              ) : (
                <div className="h-full rounded-4xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg">
                  <PricingCard plan={plan} isAnnual={isAnnual} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, isAnnual }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const suffix = isAnnual ? "/ year" : "/ month";

  return (
    <>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-200">
          <Zap className="h-3.5 w-3.5 fill-current" />
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-heading">{plan.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{plan.description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        {price !== null ? (
          <>
            <span className="text-sm font-semibold text-body">₹</span>
            <span className="text-5xl font-black tracking-tight text-heading">
              {price.toLocaleString("en-IN")}
            </span>
            <span className="ml-2 text-sm text-muted">{suffix}</span>
          </>
        ) : (
          <span className="text-4xl font-black tracking-tight text-heading">Custom</span>
        )}
      </div>

      <button
        className={`group relative w-full rounded-2xl py-4 text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden ${
          plan.popular
            ? "bg-primary text-white shadow-[0_12px_32px_rgba(15,118,110,0.22)] hover:-translate-y-1 hover:shadow-lg"
            : "border border-border bg-surface text-heading hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
        }`}
      >
        <span className="relative z-10">{plan.cta}</span>
        {plan.popular && <span className="btn-shimmer-line" />}
      </button>

      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          {"What's included"}
        </p>
        <ul className="space-y-3.5">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3">
              {feature.included ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              ) : (
                <X className="mt-0.5 h-5 w-5 shrink-0 text-border" />
              )}
              <span
                className={`text-sm leading-snug ${
                  feature.included ? "text-body" : "text-muted line-through"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}