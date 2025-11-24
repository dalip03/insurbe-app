"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PlansCompare from "./PlanCompares";

export default function ComparePlans() {
  const [viewMode, setViewMode] = useState("default");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const plans = [
    {
      id: "barmer",
      name: "Barmer",
      price: "62",
      period: "/ Month",
      badge: { text: "Barmer", color: "bg-lime-500" },
      description: "For short term visitors with no fixed plan of stay",
      features: [
        "24/7 medical assistance/emergency call centre",
        "English support",
        "Digital services",
        "Excellent coverage for families",
      ],
      bgColor: "bg-white",
    },
    {
      id: "tk",
      name: "TK",
      price: "86",
      period: "/ Month",
      badge: { text: "TK", color: "bg-cyan-500" },
      description:
        "For Expats who are planning to stay in Germany for a longer period",
      features: [
        "24/7 medical assistance/emergency call centre",
        "English support",
        "Digital services",
        "Best digital services and best insurance for Expats",
      ],
      bgColor: "bg-purple-50",
      highlighted: true,
    },
    {
      id: "dak",
      name: "DAK",
      price: "49",
      period: "/ Month",
      badge: { text: "DAK", color: "bg-orange-500" },
      description: "Special discount for Residents of Kazakhstan",
      features: [
        "24/7 medical assistance/emergency call centre",
        "English support",
        "Digital services",
        "Excellent customer support in English",
      ],
      bgColor: "bg-pink-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Best Plans suggested
              <br />
              based on your personal
              <br />
              Profile
            </h1>

            <div className="flex gap-3">
              <button
                onClick={() => setViewMode("default")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  viewMode === "default"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Default
              </button>

              <button
                onClick={() => setViewMode("personalize")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  viewMode === "personalize"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Personalize
              </button>
            </div>
          </div>

          <div className="text-right max-w-xs">
            <p className="text-sm text-gray-600 mb-3">
              Click on the button below to modify the charges exactly to match
              your profile
            </p>
            <button className="bg-primary hover:bg-primary/10 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors">
              Personalized Calculation
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`${
                plan.bgColor
              } rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-2">From</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-500 text-xl">€</span>
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <div
                  className={`${plan.badge.color} text-white text-xs font-bold px-3 py-1 rounded`}
                >
                  {plan.badge.text}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-900 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Choose Plan */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-3 ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-primary border-2 border-primary hover:bg-gray-50"
                }`}
              >
                Choose plan
              </button>
            </motion.div>
          ))}

          {/* Show / Hide Button BELOW Cards */}
          <div className="col-span-3 flex justify-center mt-8">
            {/* ONLY TK plan has extra details */}
            {expandedCard === "tk" ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setExpandedCard(null)}
                className="px-20 py-3 rounded-lg font-semibold bg-white hover:bg-gray-50 
                 text-primary border-2 border-primary transition-all"
              >
                Hide Details
              </motion.button>
            ) : (
              <button
                onClick={() => setExpandedCard("tk")}
                className="px-20 py-3 rounded-lg font-semibold bg-white hover:bg-gray-50 
                 text-primary border-2 border-primary transition-all"
              >
                Show Details
              </button>
            )}
          </div>
        </motion.div>

        {/* Comparison Section */}
        {expandedCard === "tk" && <PlansCompare />}
      </div>
    </div>
  );
}
