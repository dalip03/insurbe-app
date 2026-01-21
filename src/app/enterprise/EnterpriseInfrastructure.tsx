"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Plug,
  Sliders,
  LineChart,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Onboarding",
    desc: "Launch insurance solutions within hours to meet enterprise customer demands instantly.",
  },
  {
    icon: Plug,
    title: "Enterprise-Grade APIs",
    desc: "99.99% uptime serving millions of secure, scalable requests every day.",
  },
  {
    icon: Sliders,
    title: "Tailor-Made Solutions",
    desc: "Flexible product customization designed for your customers’ unique needs.",
  },
  {
    icon: LineChart,
    title: "Real-Time Insights",
    desc: "Live dashboards delivering actionable performance and claims insights.",
  },
];

export default function EnterpriseInfrastructure() {
  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e294e] via-primary to-purple-600" />

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold">
            ⚡ Why Businesses Choose InsurBe
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14"
        >
          Enterprise-Ready{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
            Insurance Infrastructure
          </span>
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:border-white/40 transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-purple-100 flex items-center justify-center mb-4 shadow-md">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold shadow-xl hover:scale-105 transition">
            Learn more about enterprise solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
