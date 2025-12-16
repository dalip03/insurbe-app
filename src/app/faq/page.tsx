"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqCategories = [
  {
    id: "general",
    title: "General Insurance Information",
    icon: "🛡️",
    description: "Tips, tricks and other useful information for insurance in Germany",
    articleCount: 5,
  },
  {
    id: "newcomers",
    title: "Information for Newcomers",
    icon: "🌍",
    description: "The info you need to get settled in Germany.",
    articleCount: 14,
  },
  {
    id: "account",
    title: "Your Feather Account",
    icon: "👤",
    description: "Learn how to update your mailing address, billing information, and more.",
    articleCount: 5,
  },
  {
    id: "expat-health",
    title: "Expat Health",
    icon: "📋",
    description: "What is expat health insurance? How can I sign up?",
    articleCount: 48,
  },
  {
    id: "private-health",
    title: "Private Health Insurance",
    icon: "🏥",
    description: "We answer your questions about private health insurance.",
    articleCount: 43,
  },
  {
    id: "public-health",
    title: "Public Health Insurance",
    icon: "❤️",
    description: "Answers to your questions about public health insurance in Germany.",
    articleCount: 40,
  },
  {
    id: "student",
    title: "Student Health Insurance",
    icon: "📚",
    description: "Coming to Germany to study? Find out how to get healthcare.",
    articleCount: 12,
  },
  {
    id: "freelancers",
    title: "Tips for Freelancers",
    icon: "💼",
    description: "Working freelance or self-employed? This section is for you.",
    articleCount: 4,
  },
  {
    id: "dental",
    title: "Dental Insurance",
    icon: "🦷",
    description: "Everything you need to know about supplemental dental insurance.",
    articleCount: 20,
  },
  {
    id: "legal",
    title: "Legal Insurance",
    icon: "⚖️",
    description: "How can legal insurance help you? Who is it for?",
    articleCount: 25,
  },
  {
    id: "liability",
    title: "Personal Liability Insurance",
    icon: "📷",
    description: "We answer questions about personal liability insurance.",
    articleCount: 27,
  },
  {
    id: "life",
    title: "Life Insurance",
    icon: "🌟",
    description: "Key information on life insurance.",
    articleCount: 15,
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = faqCategories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hi there. Welcome to the Feather help center Germany
          </h1>

          {/* Search */}
          <div className="relative max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none cursor-text"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{category.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{category.articleCount} articles</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No results found for &quot;{searchTerm}&quot;</p>
          </div>
        )}
      </div>
    </section>
  );
}
