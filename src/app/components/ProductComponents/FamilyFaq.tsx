"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why do expats and professionals in Germany need a private pension?",
    answer:
      "The German state pension usually covers only a portion of your final income. For expats and professionals, especially high earners and freelancers, a private pension helps close the retirement gap and maintain your lifestyle after retirement.",
  },
  {
    question: "Can I keep my private pension if I leave Germany?",
    answer:
      "Yes. Private pension plans are portable and remain valid even if you move to another country. Your savings stay invested, and you can usually receive payouts abroad when you retire.",
  },
  {
    question: "What tax advantages do private pension plans offer in Germany?",
    answer:
      "Depending on the pension type, contributions and returns can benefit from significant tax advantages. In many cases, returns accrued before retirement are tax-free, and only a portion of payouts may be taxable later.",
  },
  {
    question: "When can I start receiving my pension benefits?",
    answer:
      "Most private pension plans allow flexible retirement starts, typically from age 62. You can choose between lifelong monthly payments, a one-time lump sum, or a combination of both.",
  },
  {
    question: "Is a private pension suitable for freelancers and self-employed professionals?",
    answer:
      "Yes. Since freelancers and self-employed individuals often have limited or no access to the state pension system, private pension plans are one of the most effective ways for them to build long-term retirement security.",
  },
];


export default function FamilyFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
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
