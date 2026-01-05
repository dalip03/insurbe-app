"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ServiceModal from "./ServiceModal";

const plans = [
  {
    title: "Public Health",
    description:
      "Government-backed coverage with broad access and long-term stability.",
    tag: "Partners",
    key: "public",
  },
  {
    title: "Expat Health",
    description:
      "Tailored plans for internationals moving or working in Germany.",
    tag: "Partners",
    key: "expat",
  },
  {
    title: "Private Health",
    description:
      "Premium care with faster access and flexible coverage options.",
    tag: "Partners",
    key: "private",
  },
];

export default function WeOffers() {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-br from-[#f8f7fb] to-white py-14 sm:py-20 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block text-xs font-medium border border-gray-200 px-6 py-3 rounded-full tracking-widest text-gray-500 uppercase mb-6">
          Seamless Synergy
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1d1e25] mb-4">
          Plans We Offer
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          We partner with leading insurers in Germany to bring you trusted
          coverage options.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className="
              relative bg-white rounded-2xl border border-gray-200
              p-6 flex flex-col
              shadow-sm hover:shadow-lg transition-all duration-300
            "
          >
            {/* Tag */}
            <span className="absolute top-5 right-5 bg-[#511e6d] text-white text-xs rounded-full px-3 py-1 font-semibold">
              {plan.tag}
            </span>

            {/* Content */}
            <h3 className="text-lg font-semibold text-[#1d1e25] mb-2">
              {plan.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {plan.description}
            </p>

            {/* CTA */}
            <button
              onClick={() => router.push("/products/insuranceJourney")}
              className="
                mt-auto inline-flex items-center justify-center
                bg-[#ede9fb] text-[#511e6d]
                text-sm font-semibold
                px-5 py-2.5 rounded-full
                hover:bg-[#e0daf2]
                focus:outline-none focus:ring-2 focus:ring-[#511e6d]/30
                transition
              "
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Modal (kept for future use) */}
      <ServiceModal open={false} onClose={() => {}} />
    </section>
  );
}
