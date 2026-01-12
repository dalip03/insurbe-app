"use client";

import React from "react";
import { ShieldCheck, PiggyBank, Globe2, TrendingUp } from "lucide-react";
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
    <section id="family" className="py-20 px-4 sm:px-10 lg:px-20 bg-gradient-to-b from-[#f9f7fd] to-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why You Need a Private <br className="hidden sm:block" />
          Pension in Germany
        </h2>
        <p className="text-gray-600 text-lg">
          Plan ahead to protect your future lifestyle and financial independence.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {reasons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="
                group bg-white/80 backdrop-blur-md
                border border-purple-100
                rounded-2xl p-6
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-[#ede9fb] flex items-center justify-center text-[#511E6D]">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
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
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/products/insuranceJourney")}
          className="
            inline-flex items-center justify-center
            bg-primary text-white
            px-8 py-3 rounded-full
            font-semibold shadow-lg
            hover:shadow-xl hover:bg-primary/90
            
            transition
          "
        >
          Check My Eligibility
        </motion.button>
      </div>
    </section>
  );
}
