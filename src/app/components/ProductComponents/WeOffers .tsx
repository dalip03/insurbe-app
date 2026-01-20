"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  HeartPulse,
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
  hidden: { opacity: 0, y: 24 },
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
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium px-5 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Landmark className="w-4 h-4 text-primary" />
          Seamless Coverage
        </span>

        {/* Gradient Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span>Plans </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            We Offer
          </span>
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
                bg-white
                border border-gray-200
                cursor-pointer
                transition-all duration-300
                hover:border-primary/40
                hover:shadow-xl
              "
            >
              {/* Gradient Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r from-primary to-purple-600 text-white shadow-md">
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {plan.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {plan.description}
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Explore plan
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0 rounded-3xl opacity-0
                  group-hover:opacity-100 transition
                  bg-gradient-to-br from-primary/10 to-purple-600/5
                  pointer-events-none
                "
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal (kept for future use) */}
      <ServiceModal open={false} onClose={() => {}} />
    </section>
  );
}
