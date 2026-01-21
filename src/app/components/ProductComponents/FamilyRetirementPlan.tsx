"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

const pensionPlans = [
  {
    title: "Rürup Pension (Basic Pension)",
    idealFor: "Freelancers, self-employed professionals, high earners",
    points: [
      "High tax-deductible contributions",
      "Lifelong monthly pension payout",
      "Protected from unemployment & insolvency",
    ],
    note: "Capital payout is not possible. Funds are locked until retirement.",
  },
  {
    title: "Private Pension Insurance",
    idealFor: "Employees, expats, and professionals",
    points: [
      "Flexible payout: monthly pension or lump sum",
      "Portable if you leave Germany",
      "Attractive tax advantages on returns",
    ],
    note: "Very flexible and suitable for long-term planning.",
  },
  {
    title: "Company Pension Scheme",
    idealFor: "Employees in Germany",
    points: [
      "Contributions often subsidized by employer",
      "Tax and social security advantages",
      "Automatic savings via salary conversion",
    ],
    note: "Tied to employment; flexibility depends on employer.",
  },
  {
    title: "Riester Pension",
    idealFor: "Employees with children or lower incomes",
    points: [
      "Government subsidies and bonuses",
      "Guaranteed minimum payout",
      "Tax benefits on contributions",
    ],
    note: "Limited flexibility and less attractive for expats.",
  },
];

export default function FamilyRetirementPlan() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const router = useRouter();

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Which retirement plan is right
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              for me?
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the most important pension options in Germany and find the
            plan that best matches your income, career, and long-term goals.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-5 mb-20">
          {pensionPlans.map((plan, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={plan.title}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "bg-white border-primary shadow-lg"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Ideal for: {plan.idealFor}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      <ul className="space-y-3 mb-4">
                        {plan.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-gray-700 text-sm"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-gray-500">
                        <strong>Note:</strong> {plan.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-10 text-white shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Still not sure which pension fits you?
          </h3>

          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Speak with one of our pension experts and get a personalized
            recommendation — completely free and without obligation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/book-appointment")}
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Appointment
          </motion.button>

          <p className="mt-4 text-sm text-blue-100">
            30-minute call • Free consultation • No commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
