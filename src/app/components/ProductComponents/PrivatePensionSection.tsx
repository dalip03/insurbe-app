"use client";

import React from "react";
import {
  ShieldCheck,
  PiggyBank,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const reasons = [
  {
    title: "The State Pension Won’t Be Enough",
    description:
      "Public pensions usually replace only around 48% of your last net salary, leaving a significant gap.",
    icon: TrendingUp,
  },
  {
    title: "Tax Benefits While You Save",
    description:
      "Private pension contributions can be tax-deductible, especially valuable for high earners and freelancers.",
    icon: PiggyBank,
  },
  {
    title: "Portable Plans for Expats",
    description:
      "Your pension stays with you even if you move to another country.",
    icon: Globe2,
  },
  {
    title: "Financial Freedom at Retirement",
    description:
      "Choose flexible payouts: monthly income, lump sum, or a combination.",
    icon: ShieldCheck,
  },
];

export default function PrivatePensionSection() {
  const router = useRouter();

  return (
    <section
      id="family"
      className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden"
    >
      {/* Soft background blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96  rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16 relative z-10"
      >
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
          Why private pension matters
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why You Need a Private
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Pension in Germany
          </span>
        </h2>

        <p className="text-gray-600 text-lg">
          Plan ahead to protect your future lifestyle and financial independence.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {reasons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group bg-white
                border border-gray-200
                rounded-2xl p-7
                shadow-sm hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-md">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 text-base">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/products/insuranceJourney")}
          className="
            inline-flex items-center justify-center
            bg-gradient-to-r from-primary to-purple-600
            text-white
            px-10 py-4 rounded-full
            font-semibold
            shadow-lg hover:shadow-xl
            transition
          "
        >
          Check My Eligibility
        </motion.button>

        <p className="mt-4 text-sm text-gray-500">
          Takes less than 2 minutes • No commitment
        </p>
      </motion.div>
    </section>
  );
}
