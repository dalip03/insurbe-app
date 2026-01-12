"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Stethoscope,
  Check,
  X,
  Users,
  Languages,
  DollarSign,
  Building2,
} from "lucide-react";

const features = [
  {
    label: "Eligibility",
    icon: Users,
    public: "Most students & employees",
    private: "Limited by age & health",
    publicGood: true,
  },
  {
    label: "Family Coverage",
    icon: Users,
    public: "Included",
    private: "Optional (paid)",
    publicGood: true,
  },
  {
    label: "Doctor Access",
    icon: Building2,
    public: "Public doctors only",
    private: "Public & private doctors",
    publicGood: false,
  },
  {
    label: "Language Support",
    icon: Languages,
    public: "Mostly German",
    private: "English & German",
    publicGood: false,
  },
  {
    label: "Monthly Cost (Students)",
    icon: DollarSign,
    public: "Fixed (↑ after 30)",
    private: "Fixed (slight ↑)",
    publicGood: true,
  },
];

export default function StudentInsuranceComparisonLight() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f7f7fb] via-[#fafaff] to-white">
      {/* Soft background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6"
          >
            <Stethoscope className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Student Insurance Guide
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Public{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              vs
            </span>{" "}
            Private
            <br />
            Health Insurance
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Two systems. Very different experiences.
            <br className="hidden sm:block" />
            Understand which one fits your life in Germany.
          </p>
        </motion.div>

        {/* Desktop Cards */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {/* Public */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-cyan-200/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Public Insurance
                  </h3>
                  <p className="text-sm text-gray-500">
                    Gesetzliche Krankenversicherung
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {features.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {f.label}
                        </h4>
                        <p className="text-sm text-gray-600">{f.public}</p>
                      </div>
                      {f.publicGood ? (
                        <Check className="w-5 h-5 text-green-500 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mt-1" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Private */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-purple-200">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Private Insurance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Private Krankenversicherung
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {features.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {f.label}
                        </h4>
                        <p className="text-sm text-gray-600">{f.private}</p>
                      </div>
                      {!f.publicGood ? (
                        <Check className="w-5 h-5 text-green-500 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mt-1" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stays same logic, light colors automatically inherited */}
      </div>
    </section>
  );
}
    