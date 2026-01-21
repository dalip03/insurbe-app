"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Video } from "lucide-react";

const benefits = [
  {
    title: "Works for all residence permits",
    desc: "Fulfills all legal requirements for health insurance & long-term care insurance in Germany.",
    icon: FileText,
  },
  {
    title: "Comprehensive cover",
    desc: "Regardless of the provider you choose, 95% of the coverage offered by Public Health Insurance is defined by law.",
    icon: ShieldCheck,
  },
  {
    title: "Video doctor",
    desc: "Medical advice by phone or video call from English-speaking doctors based in Germany.",
    icon: Video,
  },
];

export default function PublicInsuranceBenefits() {
  return (
    <section id="learnmore" className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              public health insurance?
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Reliable, legally compliant, and trusted by millions across Germany.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Floating Icon */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="pt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100/40 to-pink-100/40 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
