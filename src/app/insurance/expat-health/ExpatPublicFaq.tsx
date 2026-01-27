"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Am I eligible for expat health insurance?",
    answer:
      "Yes. If you’ve recently relocated to Germany and are looking for your first health insurance plan, you are eligible for expat health insurance. It is also suitable if you are not employed or are currently self-employed.",
  },
  {
    question: "What if I am self-employed or a freelancer?",
    answer:
      "Expat health insurance is available for self-employed individuals and freelancers. It offers flexible coverage options that meet visa and residence requirements.",
  },
  {
    question: "Does this policy fulfill the requirements for my visa?",
    answer:
      "Yes. Our expat health insurance policies are designed to meet German visa and residence permit requirements. Official confirmation documents are provided after signup.",
  },
  {
    question: "When will I get my documents after signing up?",
    answer:
      "You will receive your insurance confirmation and policy documents digitally, usually immediately or within a few minutes after completing your application.",
  },
  {
    question: "What is the maximum amount of time that I can be covered?",
    answer:
      "Coverage duration depends on the selected plan. Newcomer plans typically cover short-term stays, while extended expat plans offer long-term coverage options.",
  },
  {
    question: "What is the expat cancellation policy?",
    answer:
      "You can cancel your expat health insurance in accordance with the policy’s cancellation terms. Details regarding notice periods and refunds are outlined in your policy documents.",
  },
  {
    question: "Are there any waiting periods?",
    answer:
      "In most cases, there are no waiting periods for necessary medical treatment. However, specific benefits may have conditions depending on the plan.",
  },
  {
    question: "Do I have to pay medical costs myself before getting reimbursed?",
    answer:
      "In some cases, you may need to pay upfront and submit the invoice for reimbursement. Certain providers may also bill the insurer directly.",
  },
  {
    question: "Can I add dependents to my expat plan?",
    answer:
      "Yes. You can include eligible dependents such as a spouse or children, depending on the selected plan and coverage terms.",
  },
  {
    question: "Can I switch between the newcomer and extended expat policies?",
    answer:
      "Yes. You can usually switch from a newcomer plan to an extended expat policy if your stay is prolonged, subject to eligibility conditions.",
  },
  {
    question:
      "Can I upgrade from a basic or premium newcomer plan to an extended basic or premium plan?",
    answer:
      "Yes. Upgrading to an extended basic or premium expat plan is possible if you meet the plan requirements. This allows you to continue coverage without interruption.",
  },
];



export default function ExpatPublicInsuranceFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden ">
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
