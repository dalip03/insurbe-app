"use client";

import { motion } from "framer-motion";
import {
  Settings,
  LayoutDashboard,
  Smartphone,
  Headset,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Effortless HRMS Integration",
    desc: "Automate employee onboarding and offboarding to prevent delays and benefit leakages.",
    icon: Settings,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "One Dashboard for Everything",
    desc: "Plan, manage, and track your group insurance seamlessly in a single unified view.",
    icon: LayoutDashboard,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Employee Self-Service App",
    desc: "File claims, access e-cards, find network hospitals, and view coverage details — all from one app.",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Dedicated Support & Claims Assistance",
    desc: "Relationship manager, guided claims experience, and smooth cashless claim support.",
    icon: Headset,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function WhyChooseInsurBe() {

  const MotionLink = motion(Link);

  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-primary">
            ❤️ Why Companies Choose InsurBe
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-14"
        >
          Seamless, Smart & Affordable{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Benefits
          </span>
        </motion.h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-lg
                  border border-gray-100
                  hover:shadow-2xl
                  transition
                "
              >
                {/* Icon */}
                <div
                  className={`
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br ${item.gradient}
                    flex items-center justify-center
                    mb-5
                    shadow-md
                    group-hover:scale-110
                    transition
                  `}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
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
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-14"
        >
        <MotionLink
  href="/book-appointment"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    inline-flex items-center gap-2
    px-8 py-4
    rounded-full
    bg-primary
    text-white
    font-semibold
    shadow-xl
    hover:shadow-2xl
    transition
  "
>
  Get in touch
  <ArrowRight className="w-5 h-5" />
</MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
