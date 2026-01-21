"use client";

import { motion } from "framer-motion";
import { Sliders, Package, Globe, Headphones } from "lucide-react";

const features = [
  {
    title: "Customizable",
    desc: "Choose your country, select one of four coverage levels, and add the options you want.",
    icon: Sliders,
  },
  {
    title: "All-in-one package",
    desc: "Hospitalization, repatriation, and even routine healthcare — essential, ready-to-use benefits.",
    icon: Package,
  },
  {
    title: "100% Digital",
    desc: "Sign up, download documents, and submit your claims fully online with ease.",
    icon: Globe,
  },
  {
    title: "Available 24/7",
    desc: "Questions or emergencies? We’re here 24/7 in your preferred language.",
    icon: Headphones,
  },
];

export default function FirstExpatHero() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
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
            First’Expat: the insurance solution for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              expats who expect the best
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Flexible, legally compliant, and designed for life abroad.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 pt-10 hover:shadow-lg transition"
              >
                {/* Floating Icon (gradient bg ONLY) */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
