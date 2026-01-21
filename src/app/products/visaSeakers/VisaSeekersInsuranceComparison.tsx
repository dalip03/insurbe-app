"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";

const tabs = [
  "From Germany before departure",
  "For international travelers",
  "For international educational trips",
];

const plans = [
  {
    title: "Insurbe World Education",
    description:
      "Travel health insurance for studies, language courses, and school years abroad.",
    features: [
      "For educational travelers up to 29 years old",
      "Contract must be taken out before departure",
      "Maximum term: 12 months (extension possible)",
      "Deductible applies",
      "Special deductible for emergencies in the USA",
      "Optional add-ons: Standard & Complete",
    ],
  },
];

export default function VisaSeekersInsuranceComparison() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Which international travel health insurance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              is right for you?
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Find the best travel health insurance for your trip at a glance.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition
                ${
                  activeTab === index
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-primary"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10"
        >
          {plans.map((plan) => (
            <div key={plan.title}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.title}
              </h3>

              <p className="text-gray-600 mb-8 max-w-2xl">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-100 text-gray-500 font-semibold cursor-not-allowed">
                  <Clock className="w-5 h-5" />
                  Coming soon
                </div>

                <button className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <p className="text-center text-gray-500 mt-14 max-w-3xl mx-auto">
          Not sure which international travel health insurance fits your plans?
          Our upcoming comparison will help you find the right coverage —
          no matter where your journey takes you.
        </p>
      </div>
    </section>
  );
}
