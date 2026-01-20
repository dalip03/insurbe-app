"use client";

import { motion } from "framer-motion";
import { Star, Check, X } from "lucide-react";

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
    badge: "Experts' recommendation",
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

const features = [
  {
    category: "Outpatient services",
    items: [
      {
        label: "Appointment booking through concierge",
        values: [false, true, true, true],
      },
      {
        label: "Direct access to specialists",
        values: [false, "Via concierge", true, true],
      },
      {
        label: "Corrective lenses & glasses",
        values: [false, "Up to €150", "Up to €300", "Up to €500"],
      },
      {
        label: "Vision correction surgery (LASIK)",
        values: [false, "Up to €1,000", "Up to €2,000", "Up to €5,000"],
      },
    ],
  },
  {
    category: "Inpatient services",
    items: [
      {
        label: "Free choice of doctor",
        values: [false, true, true, true],
      },
      {
        label: "Accommodation",
        values: ["Multi-bed", "Double room", "Double room", "Private room"],
      },
      {
        label: "Private clinic treatment",
        values: [false, true, true, true],
      },
    ],
  },
  {
    category: "Dental services",
    items: [
      {
        label: "Dental treatments",
        values: ["0–100%", "100%", "100%", "100%"],
      },
      {
        label: "Dental prostheses",
        values: ["10–65%", "60%", "80%", "90%"],
      },
      {
        label: "Professional cleaning",
        values: ["Limited", "1× / year", "2× / year", "Unlimited"],
      },
    ],
  },
];

export default function PrivatePricingComparison() {
  const renderValue = (value: any, isFeatured: boolean) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-600 mx-auto" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-red-400 mx-auto" />;
    }
    return (
      <span className={`text-xs sm:text-sm font-medium text-center ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </span>
    );
  };

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

        {/* Pricing Cards */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-start mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                relative rounded-2xl p-6 border
                ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-transparent shadow-xl lg:scale-105"
                    : plan.theme === "gold"
                      ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200"
                      : plan.theme === "light"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white border-gray-200"
                }
              `}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1
                    ${
                      plan.featured
                        ? "bg-white text-blue-600"
                        : "bg-yellow-400 text-yellow-900"
                    }
                  `}
                >
                  <Star className="w-3 h-3 fill-current" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.featured ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <p className={`text-sm ${plan.featured ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.deductible || plan.note}
                </p>
              </div>

              <button
                className={`
                  mt-6 w-full rounded-full py-3 font-semibold transition
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          {features.map((section, sectionIdx) => (
            <div key={section.category}>
              {/* Category Header */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
              </div>

              {/* Feature Rows */}
              {section.items.map((item, itemIdx) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-5 gap-4 px-6 py-4 items-center ${
                    itemIdx < section.items.length - 1 ? "border-b border-gray-100" : ""
                  } ${itemIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  {/* Feature Label */}
                  <div className="col-span-1 text-sm font-medium text-gray-700">
                    {item.label}
                  </div>

                  {/* Plan Values */}
                  {item.values.map((value, planIdx) => (
                    <div
                      key={planIdx}
                      className={`col-span-1 flex justify-center ${
                        plans[planIdx].featured === true ? "bg-blue-600 -my-4 py-4" : ""
                      }`}
                    >
                      {renderValue(value, plans[planIdx].featured === true)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Mobile View */}
        <div className="lg:hidden mt-8 space-y-6">
          {plans.map((plan, planIdx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              
              {features.map((section) => (
                <div key={section.category} className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{section.category}</h4>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <div className="ml-4">
                          {renderValue(item.values[planIdx], false)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}