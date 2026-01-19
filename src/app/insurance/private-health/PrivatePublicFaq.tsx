"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can apply for private health insurance?",
    answer:
      "Private health insurance in Germany is available to self-employed individuals, freelancers, civil servants, and employees whose income exceeds the compulsory insurance threshold (Jahresarbeitsentgeltgrenze).",
  },
  {
    question: "What does private health insurance cover?",
    answer:
      "Coverage depends on your chosen tariff but typically includes outpatient and inpatient treatment, private doctors, shorter waiting times, enhanced dental care, and additional optional benefits.",
  },
  {
    question: "Are there waiting periods, and how do they work?",
    answer:
      "Some benefits may have waiting periods, especially for dental or elective treatments. However, waiting periods can often be waived if you switch directly from another health insurance provider.",
  },
  {
    question: "How do claims and payments work in practice?",
    answer:
      "You usually pay the medical bill upfront and submit it digitally to your insurer. Reimbursement is then paid directly to your bank account, often within a few days.",
  },
  {
    question: "Do I pay more if I get sick and claim often?",
    answer:
      "No, your premium does not increase based on individual claims. However, claiming benefits may affect eligibility for no-claim bonuses, depending on your tariff.",
  },
  {
    question: "How much does it cost, and what affects the price?",
    answer:
      "The cost depends on factors such as age, health condition, chosen tariff, and coverage options. Unlike public insurance, private premiums are not income-based.",
  },
];

export default function PrivatePublicInsuranceFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              questions
            </span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Everything you need to know about private health insurance in Germany.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-6 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
