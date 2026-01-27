"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can join statutory health insurance in Germany?",
    answer:
      "Students, employees below the income threshold, apprentices, and certain self-employed individuals can join statutory health insurance in Germany.",
  },
  {
    question: "What does the cover include, and what is not covered?",
    answer:
      "Coverage includes doctor visits, hospital treatment, basic dental care, and prescriptions. Non-essential treatments and private services are usually not covered.",
  },
  {
    question: "How much will I pay each month?",
    answer:
      "Monthly contributions depend on your income and are regulated by law. Students typically pay a fixed reduced rate.",
  },
  {
    question:
      "Are there waiting periods or exclusions for pre-existing conditions?",
    answer:
      "No. Statutory health insurance in Germany does not exclude pre-existing conditions and has no waiting periods.",
  },
  {
    question: "How do I use the insurance and make claims?",
    answer:
      "You simply present your health insurance card when visiting doctors. Claims are handled directly between the provider and insurer.",
  },
  {
    question: "Am I covered when I travel abroad?",
    answer:
      "Coverage applies within the EU and certain countries through agreements. For extended or global travel, additional insurance is recommended.",
  },
];

export default function PublicInsuranceFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              questions
            </span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Everything you need to know about statutory health insurance in Germany.
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
