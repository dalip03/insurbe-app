"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentModal from "./modals/AppointmentModal";

export default function FAQ() {
  const faqs = [
    {
      question: "Who is InsurBe and what do you do?",
      answer:
        "InsurBe is a Germany-focused insurance platform helping students, professionals, families, and expats find the right health insurance plans that meet legal and visa requirements. We simplify the entire process—from choosing a plan to getting insured.",
    },
    {
      question: "Is InsurBe a licensed insurance provider?",
      answer:
        "InsurBe works with licensed and regulated German insurance partners. All plans offered through our platform comply with German regulations and are accepted by authorities, universities, and employers.",
    },
    {
      question: "How long does it take to get insured through InsurBe?",
      answer:
        "In most cases, applications are processed within 24–48 hours after document submission. Some plans can be activated even faster, depending on eligibility and insurer approval.",
    },
    {
      question: "Can InsurBe help with visa and residence permit requirements?",
      answer:
        "Yes. We offer insurance plans that are fully compliant with German visa and residence permit requirements. Our team ensures you receive valid documentation accepted by embassies and immigration offices.",
    },
    {
      question: "Do I get support after purchasing a plan?",
      answer:
        "Absolutely. InsurBe provides ongoing support even after you are insured. From policy questions to changes in personal circumstances, our team is available to assist you whenever needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto px-10">
          <motion.div className="text-center pb-2">
            <button className="rounded-2xl bg-[rgba(130,36,227,0.10)] text-primary px-4 py-1 font-semibold">
              FAQs
            </button>
          </motion.div>

          <motion.h2 className="text-3xl sm:text-4xl font-bold text-center mt-4">
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              asked questions
            </span>
          </motion.h2>

          <div className="space-y-4 mt-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="py-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm md:text-[17px] font-semibold">
                    {faq.question}
                  </h3>
                  <Image
                    src={
                      openIndex === index
                        ? "/icons/Minus.svg"
                        : "/icons/Plus.svg"
                    }
                    alt="toggle"
                    width={24}
                    height={24}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-gray-700 mt-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center pt-14">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-primary px-6 py-3 rounded-full
                font-bold text-primary hover:bg-primary hover:text-white transition"
            >
              Book a Free call now
            </button>
          </motion.div>
        </div>
      </section>

      {/*  MODAL */}
      <AppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
