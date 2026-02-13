"use client";

import { motion } from "framer-motion";
import { Wallet, FileText, Zap } from "lucide-react";
import { ICON_BG } from "../constants/styles";

const advantages = [
  {
    title: "In Your Own Way",
    desc: "Choose coverage options that truly fit your needs and your budget — no unnecessary extras.",
    icon: Wallet,
  },
  {
    title: "No Hidden Fees",
    desc: "What you see is what you pay. Full pricing transparency with no surprises later.",
    icon: FileText,
  },
  {
    title: "Simple & Fast",
    desc: "Simulate, customise, and activate your insurance in minutes — zero paperwork.",
    icon: Zap,
  },
];

export default function Featureshome() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              Advantage
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Smart, transparent, and flexible insurance solutions designed for
            modern businesses and individuals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-xl
                border border-gray-100
                hover:shadow-2xl
                transition
                relative
                overflow-hidden
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-100 blur-xl" />
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 mb-6 rounded-2xl shadow-xl flex items-center justify-center`}>
                <item.icon className="w-7 h-7 text-black" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
