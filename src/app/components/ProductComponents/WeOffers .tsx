"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  Building2,
  Users,
  HeartPulse,
  PlaneTakeoff,
  Stethoscope,
  Landmark,
} from "lucide-react";
import ServiceModal from "./ServiceModal";

const plans = [
  {
    title: "Public Health",
    description:
      "Government-backed coverage with broad access and long-term stability.",
    icon: Stethoscope,
    key: "public",
    href: "/insurance/public-health",
  },
 
  {
    title: "Private Health",
    description:
      "Premium care with faster access and flexible coverage options.",
    icon: HeartPulse,
    key: "private",
    href: "/insurance/private-health",
  },
   {
    title: "Expat Health",
    description:
      "Tailored plans for internationals moving or working in Germany.",
    icon: Users,
    key: "expat",
    href: "/insurance/expat-health",
  },
];


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WeOffers() {
  const router = useRouter();

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20  overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium px-5 py-2 rounded-full bg-[#ede9fb] text-[#511e6d] mb-6">
          <Landmark className="w-4 h-4" />
          Seamless Coverage
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1e25] mb-4">
          Plans We Offer
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Carefully selected insurance plans from trusted German providers.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <motion.div
              key={plan.key}
              variants={cardVariant}
              whileHover={{ y: -6 }}
               onClick={() => router.push(plan.href)}
              className="
                group relative rounded-3xl p-7
                bg-white/70 backdrop-blur-md
                border border-gray-200
                transition-all duration-300
                hover:border-[#511e6d]/40
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#ede9fb] flex items-center justify-center mb-6 text-[#511e6d]">
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#1d1e25] mb-2">
                {plan.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {plan.description}
              </p>

              {/* CTA */}
              <button
                onClick={() => router.push("/products/insuranceJourney")}
                className="
                  inline-flex items-center gap-2 text-sm font-semibold
                  text-[#511e6d]
                  group-hover:gap-3 transition-all cursor-pointer
                "
              >
                Explore plan
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Hover glow */}
              <div className="
                absolute inset-0 rounded-3xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-br from-[#511e6d]/10 to-transparent
                pointer-events-none
              " />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal (kept for future use) */}
      <ServiceModal open={false} onClose={() => {}} />
    </section>
  );
}
