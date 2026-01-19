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

export default function StudentInsuranceComparisonLight1() {
  return (
    <section className="relative py-12 sm:py-16 md:py-4 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      {/* Soft background accents */}
      <div className="absolute inset-0 overflo  w-hidden">
        <div className="absolute top-1/4 -left-24 sm:-left-48 w-48 sm:w-96 h-48 sm:h-96 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 sm:-right-48 w-48 sm:w-96 h-48 sm:h-96 bg-blue-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-100 border border-purple-200 mb-4 sm:mb-6"
          >
            <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
            <span className="text-xs sm:text-sm font-medium text-purple-700">
              Student Insurance Guide
            </span>
          </motion.div>

         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2 mb-4 sm:mb-6">
  <span className="text-gray-900">Public</span>{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
    vs Private Health
  </span>
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
    Insurance
  </span>
</h2>


          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Two systems. Very different experiences.
          
            Understand which one fits your life in Germany.
          </p>
        </motion.div>

        {/* Mobile & Tablet View - Stacked Cards */}
        <div className="lg:hidden space-y-6 sm:space-y-8 mb-12">
          {/* Public Insurance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-cyan-200/40 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                    Public Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    Gesetzliche Krankenversicherung
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {features.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                          {f.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {f.public}
                        </p>
                      </div>
                      {f.publicGood ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 shrink-0" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Private Insurance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-purple-200">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-purple-200">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                    Private Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    Private Krankenversicherung
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {features.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-purple-50"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                          {f.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {f.private}
                        </p>
                      </div>
                      {!f.publicGood ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 shrink-0" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
}
