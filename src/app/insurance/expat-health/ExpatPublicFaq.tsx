"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: 'What is "For You"?',
    answer:
      "For You is where insurance meets real life. It’s a collection of everyday situations — like your first job, moving in with someone, or getting a pet — that help you understand which protection truly matters.",
  },
  {
    question: "Why should I care?",
    answer:
      "Because insurance can feel complex and abstract. For You breaks it down into real-life moments, helping you clearly see which coverage is relevant for your current situation and what you may need in the future.",
  },
  {
    question: "Where do these Life Moments come from?",
    answer:
      "Life Moments are based on common real-life experiences and situations that many people face. They are designed to reflect practical needs rather than abstract insurance terms.",
  },
  {
    question: "Do I need to be a Getsafe customer?",
    answer:
      "No. You don’t need to be a Getsafe customer to explore For You. It’s available to everyone who wants to better understand insurance and coverage options.",
  },
];


export default function ExpatPublicInsuranceFAQ() {
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
