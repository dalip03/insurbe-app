"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget";

export default function SupportPage() {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  const supportOptions = [
    {
      id: "contact",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
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
      title: "Contact us",
      description: "Send us a message or schedule a call.",
      action: () => setShowChat(true),
    },
    {
      id: "recommendation",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Use our recommendation tool",
      description:
        "Not sure what the best choice for you is? We have a tool for that.",
      action: () => router.push("/recommendation"), // ✅ Updated route
    },

    // {
    //   id: "faq",
    //   icon: (
    //     <svg
    //       className="w-8 h-8 text-primary"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    //       />
    //     </svg>
    //   ),
    //   title: "See our FAQ",
    //   description: "Comprehensive, fact-checked, and easy to understand.",
    //   action: () => router.push("/faq"),
    // },
  ];

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get help from our team
          </h1>
          <p className="text-md text-gray-600">
            You&apos;ve got questions. We have answers.
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="space-y-4">
          {supportOptions.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={option.action}
              className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-lg transition-all duration-300 text-left group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors"
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
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat Widget */}
      {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
    </section>
  );
}
