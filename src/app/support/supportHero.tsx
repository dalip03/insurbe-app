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
      enabled: true,
      icon: (
        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "recommendation",
      title: "Use our recommendation tool",
      description: "Answer a few questions and get the best insurance option for you.",
      action: () => router.push("/recommendation"),
      enabled: true,
      icon: (
        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          />
        </svg>
      ),
    },
    {
      id: "documents-claims",
      title: "Access policy documents & claims",
      description: "Download documents, view claim status, and manage reimbursements.",
      enabled: false,
      icon: (
        <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "appointment",
      title: "Book medical appointments",
      description: "Find English-speaking doctors and book appointments in Germany.",
      enabled: false,
      icon: (
        <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Clear answers, reliable guidance, and expert support — all in one place.
          </p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {supportOptions.map((option, index) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                onClick={option.enabled ? option.action : undefined}
                className={`relative rounded-2xl border p-6 transition-all
                  ${
                    option.enabled
                      ? "cursor-pointer border-purple-300 bg-purple-50/50 hover:shadow-xl"
                      : "cursor-not-allowed border-gray-200 bg-gray-50 opacity-60"
                  }
                `}
              >
                {!option.enabled && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                    Coming soon
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    {option.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            return <div key={option.id}>{Card}</div>;
          })}
        </div>
      </div>

      {/* Chat Widget */}
      {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
    </section>
  );
}
