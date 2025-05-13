'use client'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "How do I get started with Insurbe?",
      answer: "You can get started by requesting a free quote and our team will guide you through every step."
    },
    {
      question: "How much can I save on Insurbe?",
      answer: "Savings vary by individual needs, but we offer some of the most competitive rates in the market."
    },
    {
      question: "How and when can I get my Insurance?",
      answer: "Insurance can be issued the same day once documents are verified and the application is approved."
    },
    {
      question: "Are there any fees or charges for the Services?",
      answer: "Most of our services are free, but some optional services may have minimal charges."
    },
    {
      question: "Why is it important to provide honest answers when talking to Insurbe Team?",
      answer: "Honest answers help us provide the best and most accurate insurance solutions tailored for you."
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#fdf3ff] to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start px-10 ">
        {/* Left Column */}
        <div className=''>
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-black mb-6">Everything you need to know about Insurbe</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded font-medium hover:bg-purple-700 transition">
            Get Your Free Quote
          </button>
        </div>

        {/* Right Column - FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm md:text-base">{faq.question}</h3>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
