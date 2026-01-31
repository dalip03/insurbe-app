"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget";

export default function SupportHeroPage() {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  const supportOptions = [
    {
      id: "contact",
      title: "Contact our support team",
      description: "Chat with us or schedule a call with our experts.",
      action: () => setShowChat(true),
      icon: (
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      primary: true,
    },
    {
      id: "recommendation",
      title: "Use our recommendation tool",
      description:
        "Answer a few questions and get the best insurance option for you.",
      action: () => router.push("/recommendation"),
      icon: (
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          />
        </svg>
      ),
      primary: true,
    },
    {
      id: "documents-claims",
      title: "Access policy documents & claims",
      description:
        "Download your Versicherungsschein, view claims status, and submit reimbursements.",
      action: () => router.push("/my-documents"),
      icon: (
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      primary: true,
    },
    {
      id: "appointment",
      title: "Book Medical Appointments",
      description:
        "Find English-speaking doctors and book medical appointments anywhere in Germany.",
      action: () => router.push("/book-appointment"),
      icon: (
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      primary: true,
    },
  ];

  return (
    <section className="min-h-screen  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get help from{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              our team
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            You’ve got questions. We have answers — fast, clear, and reliable.
          </p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={option.action}
              className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300
                ${
                  option.primary
                    ? "border-purple-300 bg-purple-50/50 hover:shadow-xl"
                    : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-lg"
                }
              `}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition">
                  {option.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {option.description}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Widget */}
      {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
    </section>
  );
}
