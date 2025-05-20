"use client";
import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Can I switch back to public insurance later?",
      answer:
        "Yes, you can switch to any other policy at any time after informing your POC and completing the due diligence.",
    },
    {
      question: "What if my income changes?",
      answer:
        "Savings vary by individual needs, but we offer some of the most competitive rates in the market.",
    },
    {
      question: "What if I bring my family later?",
      answer:
        "Insurance can be issued the same day once documents are verified and the application is approved.",
    },
    {
      question: "What’s the difference between Expat and PKV?",
      answer:
        "Most of our services are free, but some optional services may have minimal charges.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-16 px-4 md:px-10 lg:px-20  bg-gradient-to-br from-[#fdf3ff] to-white">
      <div className="max-w-7xl mx-auto grid items-start px-10 ">
        <div className="text-center pb-2">
          <button className="rounded-2xl bg-[rgba(130,36,227,0.10)] text-primary px-4 py-1 font-semibold">
            FAQs
          </button>
        </div>
        {/* Left Column */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 py-2">
            Frequently Asked Questions
          </h2>
          {/* <p className="text-black mb-6">
            Everything you need to know about Insurbe
          </p> */}
        </div>

        {/* Right Column - FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-4 cursor-pointer bg-[#FFFFFF33] "
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center ">
                <h3 className=" text-sm md:text-base font-semibold">
                  {faq.question}
                </h3>
                <span className="w-6 h-6 block relative">
                  <Image
                    src={
                      openIndex === index
                        ? "/icons/Minus.svg"
                        : "/icons/Plus.svg"
                    }
                    alt={openIndex === index ? "Collapse" : "Expand"}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </span>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="bg-purple-600 text-white px-6 py-2 rounded font-medium hover:bg-purple-700 transition">
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
}
