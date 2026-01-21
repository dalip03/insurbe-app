"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  FileCheck,
  Users,
  Settings,
  Clock,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Employee Health Insurance",
    subtitle:
      "Comprehensive health coverage that helps your employees stay healthy and productive.",
    image: "/gifs_assets/employee-team.jpg",
    features: [
      {
        icon: HeartPulse,
        title: "Comprehensive Coverage",
        desc: "Hospitalization, OPD, diagnostics & mental wellness",
      },
      {
        icon: Users,
        title: "Family Protection",
        desc: "Extend benefits to dependents for peace of mind",
      },
      {
        icon: FileCheck,
        title: "Hassle-Free Claims",
        desc: "Fast, paperless & digital-first claims experience",
      },
    ],
  },
  {
    title: "Field Partner Protection",
    subtitle:
      "Flexible insurance solutions for partners working on the ground.",
    image: "/gifs_assets/field-partner.jpg",
    features: [
      {
        icon: ShieldCheck,
        title: "Accident & Medical Cover",
        desc: "Protection against accidents, OPD & hospitalization",
      },
      {
        icon: Settings,
        title: "Customizable Coverage",
        desc: "Plans that adapt to workforce size and needs",
      },
      {
        icon: Clock,
        title: "On-Demand Coverage",
        desc: "Activate insurance for specific days or duration",
      },
    ],
  },
];

export default function EnterpriseEmployeesInsurance() {
  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-primary">
            Enterprise Insurance Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
            Health & Protection Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Modern Workforces
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            InsurBe helps organizations protect employees and partners with
            flexible, compliant and easy-to-manage insurance plans.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {card.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {card.features.map((f) => (
                    <div
                      key={f.title}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <f.icon className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {f.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="
                    w-full
                    py-3.5
                    rounded-full
                    font-semibold
                    text-white
                    bg-gradient-to-r from-primary to-purple-600
                    hover:opacity-95
                    transition
                    flex items-center justify-center gap-2
                  "
                >
                  Learn more
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
