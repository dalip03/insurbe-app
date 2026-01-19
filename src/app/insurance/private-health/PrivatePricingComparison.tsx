"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const plans = [
  {
    id: "public",
    title: "Public insurance",
    subtitle: "Basic insurance protection",
    price: "€604",
    note: "Exemplary monthly rate",
    theme: "neutral",
  },
  {
    id: "premium",
    title: "Premium Economy",
    subtitle: "Good coverage with lowest premium",
    price: "€284",
    deductible: "€500 deductible",
    theme: "light",
  },
  {
    id: "business",
    title: "Business Class",
    badge: "Experts’ recommendation",
    subtitle: "Great performance without deductible",
    price: "€331",
    deductible: "€0 deductible",
    theme: "primary",
    featured: true,
  },
  {
    id: "first",
    title: "First Class",
    badge: "Top performance",
    subtitle: "Outstanding coverage without deductible",
    price: "€358",
    deductible: "€0 deductible",
    theme: "gold",
  },
];

export default function PrivatePricingComparison() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
            Benefits of private health insurance for employees
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            More benefits for less money.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Save up to €4,371 per year.
            </span>
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">

          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                relative rounded-2xl p-6 flex flex-col justify-between border
                ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-transparent shadow-xl scale-[1.03]"
                    : plan.theme === "gold"
                    ? "bg-[#faf6ee] border-[#e5dcc8]"
                    : plan.theme === "light"
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-gray-200"
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1
                    ${
                      plan.featured
                        ? "bg-white text-blue-600"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {plan.title}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    plan.featured ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                </div>

                {plan.deductible && (
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.deductible}
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                className={`
                  mt-8 w-full rounded-full py-3 font-semibold transition
                  ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-gradient-to-r from-purple-600 to-primary text-white hover:opacity-90"
                  }
                `}
              >
                Select plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
