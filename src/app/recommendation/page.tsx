"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Answer {
  question: string;
  answer: string;
}

export default function RecommendationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your current residency status in Germany?",
      image: "/gifs_assets/step1.gif",
      options: [
        { value: "new", label: "Just arrived / Planning to move", icon: "✈️" },
        { value: "resident", label: "Already living in Germany", icon: "🏠" },
        { value: "student", label: "Student", icon: "🎓" },
        { value: "expat", label: "Expat professional", icon: "💼" },
      ],
    },
    {
      id: 2,
      question: "What's your employment situation?",
      image: "/gifs_assets/step2.gif",
      options: [
        { value: "employed", label: "Employed full-time", icon: "💼" },
        { value: "self-employed", label: "Self-employed / Freelancer", icon: "👨‍💻" },
        { value: "student", label: "Student", icon: "📚" },
        { value: "unemployed", label: "Currently unemployed", icon: "🔍" },
      ],
    },
    {
      id: 3,
      question: "What's your annual gross income?",
      image: "/gifs_assets/step3.svg",
      options: [
        { value: "below30k", label: "Below €30,000", icon: "💶" },
        { value: "30k-77k", label: "€30,000 - €77,400", icon: "💰" },
        { value: "above77k", label: "Above €77,400", icon: "💎" },
        { value: "no-income", label: "No income / Student", icon: "🎓" },
      ],
    },
    {
      id: 4,
      question: "What type of insurance are you looking for?",
      image: "/gifs_assets/health1.gif",
      options: [
        { value: "health", label: "Health Insurance", icon: "🏥" },
        { value: "dental", label: "Dental Insurance", icon: "🦷" },
        { value: "liability", label: "Personal Liability", icon: "🛡️" },
        { value: "legal", label: "Legal Insurance", icon: "⚖️" },
        { value: "life", label: "Life Insurance", icon: "❤️" },
        { value: "all", label: "Multiple / Not sure", icon: "🤔" },
      ],
    },
    {
      id: 5,
      question: "Do you have any specific health concerns?",
      image: "/gifs_assets/health2.gif",
      options: [
        { value: "none", label: "No specific concerns", icon: "✅" },
        { value: "chronic", label: "Chronic condition", icon: "💊" },
        { value: "dental", label: "Dental care needed", icon: "🦷" },
        { value: "family", label: "Family coverage needed", icon: "👨‍👩‍👧‍👦" },
      ],
    },
  ];

  const handleAnswer = (value: string, label: string) => {
    const newAnswer: Answer = {
      question: questions[currentStep].question,
      answer: label,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      // Show thank you message
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  // Thank You Screen
  if (showThankYou) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#f5f0ff] to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Thank you! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            We&apos;ve received your information. Our team will connect with you shortly to help you find the perfect insurance plan.
          </motion.p>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8 text-left"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Answers Summary</h3>
            <div className="space-y-3">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{answer.question}</p>
                    <p className="font-semibold text-gray-800">{answer.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl mb-2">⏱️</div>
              <p className="text-sm font-semibold text-gray-800">Response Time</p>
              <p className="text-xs text-gray-600">Within 24 hours</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-3xl mb-2">💬</div>
              <p className="text-sm font-semibold text-gray-800">Expert Support</p>
              <p className="text-xs text-gray-600">Personalized guidance</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm font-semibold text-gray-800">Best Match</p>
              <p className="text-xs text-gray-600">Tailored for you</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold cursor-pointer"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push("/support")}
              className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition font-semibold cursor-pointer"
            >
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // Question Flow
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f5f0ff] to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-600">
              Question {currentStep + 1} of {questions.length}
            </h2>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-primary h-2 rounded-full"
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <Image
                src={questions[currentStep].image}
                alt={questions[currentStep].question}
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </motion.div>

            {/* Question & Options */}
            <div className="space-y-6">
              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition cursor-pointer mb-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {questions[currentStep].question}
              </h1>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option.value, option.label)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center gap-4 group cursor-pointer"
                  >
                    <span className="text-3xl">{option.icon}</span>
                    <span className="flex-1 font-semibold text-gray-800 group-hover:text-primary transition">
                      {option.label}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary transition"
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
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
