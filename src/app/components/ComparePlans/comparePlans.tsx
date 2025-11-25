"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlansCompare from "./PlanCompares";

export default function ComparePlans() {
  const router = useRouter();

  const [viewMode, setViewMode] = useState("default");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const plans = [
    {
      id: "barmer",
      name: "Barmer",
      price: "62",
      period: "/ Month",
      logo: "/icons/barme.svg",
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
      id: "hallesche",
      name: "Hallesche",
      price: "305",
      period: "/ Month",
      logo: "/icons/h.svg",
      description:
        "For Expats who are planning to stay in Germany for a longer period",
      features: [
        "24/7 medical assistance/emergency call centre",
        "English support",
        "Digital services",
        "Great digital services and best insurance for Expats",
      ],
      bgColor: "bg-purple-50",
      highlighted: true,
    },
    {
      id: "dak",
      name: "DAK",
      price: "49",
      period: "/ Month",
      logo: "/icons/dak.svg",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Best Plans suggested <br />
              based on your personal <br /> Profile
            </h1>

            <div className="flex gap-3 mt-4">
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

          <div className="text-left lg:text-right max-w-xs">
            <p className="text-sm text-gray-600 mb-3">
              Modify charges to match your profile
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors w-full lg:w-auto">
              Personalized Calculation
            </button>
          </div>
        </div>

        {/* Mobile Scroll Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            flex md:grid 
            md:grid-cols-3 gap-6 
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            pb-4
          "
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`
                min-w-[85%] xs:min-w-[75%] sm:min-w-[60%] md:min-w-0
                snap-center
                rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all
                ${plan.bgColor}
                ${plan.highlighted ? "ring-2 ring-primary" : ""}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-2">From</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-500 text-xl">€</span>
                    <span className="text-5xl text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>

                  <div className="mt-2 font-medium text-gray-900">
                    {plan.name}
                  </div>
                </div>

                <Image
                  src={plan.logo}
                  width={50}
                  height={50}
                  alt={`${plan.name} logo`}
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-gray-700 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-900 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/calculator/premiumEstimation")}
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
        </motion.div>

        {/* Show / Hide Details Button */}
        <div className="flex justify-center mt-8">
          {expandedCard ? (
            <button
              onClick={() => setExpandedCard(null)}
              className="px-20 py-3 rounded-lg font-semibold bg-white text-primary border-2 border-primary hover:bg-gray-50 transition-all"
            >
              Hide Details
            </button>
          ) : (
            <button
              onClick={() => setExpandedCard("tk")}
              className="px-20 py-3 rounded-lg font-semibold bg-white text-primary border-2 border-primary hover:bg-gray-50 transition-all"
            >
              Show Details
            </button>
          )}
        </div>

        {/* Comparison Table */}
        {expandedCard === "tk" && (
          <div className="mt-10">
            <PlansCompare />
          </div>
        )}
      </div>
    </div>
  );
}
