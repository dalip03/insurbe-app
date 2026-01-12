"use client";

import { motion } from "framer-motion";
import { Check, Landmark, Stethoscope } from "lucide-react";

const data = [
  {
    feature: "Eligibility",
    public: "Most students & employees",
    private: "Limited by age & health",
  },
  {
    feature: "Family Coverage",
    public: "Included",
    private: "Optional (paid)",
  },
  {
    feature: "Doctor Access",
    public: "Public doctors only",
    private: "Public & private doctors",
  },
  {
    feature: "Language Support",
    public: "Mostly German",
    private: "English & German",
  },
  {
    feature: "Monthly Cost",
    public: "Fixed (↑ after 30)",
    private: "Fixed (slight ↑)",
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function StudentInsuranceComparisonLight() {
  return (
    <section id="student" className="pt-2 pb-20 px-4 sm:px-10 lg:px-24 ">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Public vs Private Insurance
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          A simple, clear comparison to help students choose the right health
          insurance in Germany.
        </p>
      </motion.div>

      {/* Column Headers */}
      <div className="max-w-4xl mx-auto hidden md:grid grid-cols-3 gap-4 mb-6">
        <div /> {/* empty for Feature column */}
        <div className="flex items-center gap-2 text-lg font-bold text-primary">
          <Landmark className="w-5 h-5" />
          Public Insurance
        </div>
        <div className="flex items-center gap-2 text-lg font-bold text-primary">
          <Stethoscope className="w-5 h-5" />
          Private Insurance
        </div>
      </div>
      {/* Comparison Rows */}
      <div className="max-w-4xl mx-auto space-y-4">
        {data.map((row, i) => (
          <motion.div
            key={row.feature}
            custom={i}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid grid-cols-1 md:grid-cols-3 gap-4
              rounded-2xl p-6
              bg-white/80 backdrop-blur-md
              border border-gray-200
              shadow-sm
            "
          >
            {/* Feature */}
            <div className="font-medium text-gray-900">{row.feature}</div>

            {/* Public */}
            <div
              className="
              flex items-center gap-2
              bg-purple-50 text-purple-800
              px-4 py-3 rounded-xl
            "
            >
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm">{row.public}</span>
            </div>

            {/* Private */}
            <div
              className="
              flex items-center gap-2
              bg-indigo-50 text-indigo-800
              px-4 py-3 rounded-xl
            "
            >
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm">{row.private}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
