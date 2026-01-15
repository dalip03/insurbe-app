"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PiggyBank,
  Briefcase,
  TrendingUp,
  LineChart,
  Building2,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    logoSrc: "/partners/ottonova.png",
    logoAlt: "Ottonova",
    title: "Rürup Pension",
    description:
      "Ideal for self-employed professionals and high-income earners with strong tax advantages.",
    icon: PiggyBank,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-white",
  },
  {
    logoSrc: "/partners/barmer.png",
    logoAlt: "Barmer",
    title: "Company Pension Advisory",
    description:
      "Learn how to maximize employer contributions and long-term benefits.",
    icon: Briefcase,
    color: "from-[#531D6F] to-purple-600",
    textColor: "text-white",
  },
  {
    logoSrc: "/partners/mawista.svg",
    logoAlt: "Mawista",
    title: "Private Pension Plans",
    description:
      "Flexible retirement savings you can pause, adjust, or withdraw from.",
    icon: Building2,
    color: "from-violet-500 to-purple-500",
    textColor: "text-white",
  },
  {
    logoSrc: "/partners/barmer.png",
    logoAlt: "Barmer",
    title: "ETF-Linked Pension Options",
    description:
      "Market-based plans designed to build wealth over the long term.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    textColor: "text-white",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PensionPlansSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#531D6F]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#531D6F]/10 to-purple-100 mb-6"
          >
            <LineChart className="w-4 h-4 text-[#531D6F]" />
            <span className="text-sm font-semibold text-[#531D6F]">
              Seamless Synergy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Pension Plans <span className="text-[#531D6F]">We Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Trusted retirement solutions from leading insurance partners in
            Germany.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-white rounded-2xl border-2 border-gray-200 hover:border-[#531D6F]/30 p-6 flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`}
                  />

                  {/* Icon Badge */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <Icon className={`w-7 h-7 text-[#531D6F]`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Logo */}
                  <div className="relative h-10 mb-6 flex items-center">
                    <Image
                      src={plan.logoSrc}
                      alt={plan.logoAlt}
                      width={100}
                      height={32}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex-grow">
                    <h3
                      className={`text-lg font-bold text-gray-900 mb-3  group-hover:text-white transition-colors`}
                    >
                      {plan.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white transition-colors">
                      {plan.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative mt-6 pt-4 border-t border-gray-200"
                  >
                    <div className="flex items-center gap-2 text-[#531D6F] font-semibold text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#531D6F]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 mb-6">
            Need help choosing the right pension plan?
          </p>
          <Link href="/book-appointment">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#531D6F] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#531D6F]/25 hover:bg-[#531D6F]/90 transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
