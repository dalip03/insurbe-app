"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    logoSrc: "/partners/ottonova.png",
    logoAlt: "Ottonova",
    title: "Rürup Pension",
    description:
      "Ideal for self-employed professionals and high-income earners with strong tax advantages.",
  },
  {
    logoSrc: "/partners/barmer.png",
    logoAlt: "Barmer",
    title: "Company Pension Advisory",
    description:
      "Learn how to maximize employer contributions and long-term benefits.",
  },
  {
    logoSrc: "/partners/mawista.svg",
    logoAlt: "Mawista",
    title: "Private Pension Plans",
    description:
      "Flexible retirement savings you can pause, adjust, or withdraw from.",
  },
  {
    logoSrc: "/partners/barmer.png",
    logoAlt: "Barmer",
    title: "ETF-Linked Pension Options",
    description:
      "Market-based plans designed to build wealth over the long term.",
  },
];

export default function PensionPlansSection() {
  return (
    <section className="py-20 px-4 sm:px-10 lg:px-24 bg-gradient-to-b from-[#faf9ff] to-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-5">
          Seamless Synergy
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Pension Plans We Offer
        </h2>

        <p className="text-gray-600 text-lg">
          Trusted retirement solutions from leading insurance partners in Germany.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="
              group bg-white/80 backdrop-blur-md
              border border-gray-200 rounded-2xl
              p-6 flex flex-col
              shadow-sm hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Logo */}
            <div className="h-12 flex items-center mb-5">
              <Image
                src={plan.logoSrc}
                alt={plan.logoAlt}
                width={110}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {plan.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
              {plan.description}
            </p>

            {/* CTA */}
            {/* <button className="
              inline-flex items-center gap-2
              text-sm font-semibold text-primary
              hover:gap-3 transition-all
            ">
              Explore plan
              <ArrowRight className="w-4 h-4" />
            </button> */}

            {/* Hover glow */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100 transition
              bg-gradient-to-br from-primary/10 to-transparent
              pointer-events-none
            " />
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      {/* <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex items-center gap-3
            bg-primary text-white
            px-8 py-3 rounded-full
            font-semibold shadow-lg
            hover:bg-primary/90 transition
          "
        >
          See all plans
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div> */}
    </section>
  );
}
