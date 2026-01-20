"use client"; 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { User, Mail, ArrowRight } from "lucide-react";

interface UserInfo {
  name: string;
  email: string;
}

interface Answer {
  question: string;
  answer: string;
}

export default function RecommendationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "" });
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

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

  // Step 0: Name and Email collection
  const handleUserInfoSubmit = () => {
    if (!userInfo.name.trim()) {
      setErrors({ name: "Please enter your name" });
      return;
    }
    if (!userInfo.email.trim()) {
      setErrors({ email: "Please enter your email" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    setErrors({});
    setTimeout(() => {
      setCurrentStep(1);
    }, 300);
  };

  const handleAnswer = (value: string, label: string) => {
    const newAnswer: Answer = {
      question: questions[currentStep - 1].question,
      answer: label,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const progress = currentStep === 0 ? 0 : ((currentStep) / (questions.length + 1)) * 100;

  // Name & Email Step (Step 0)
  if (currentStep === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#f5f0ff] to-white flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto w-full"
        >
          <div className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-center space-y-8">
            {/* Welcome Header */}
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-primary rounded-2xl flex items-center justify-center mx-auto">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Let's get started!
                </h1>
                <p className="text-lg text-gray-600">
                  Please tell us your name and email so we can send you personalized recommendations.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${
                      errors.name 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${
                      errors.email 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Progress Preview */}
              <div className="text-xs text-gray-500 text-center">
                Step 1 of 6 • We'll ask 5 quick questions next
              </div>

              {/* Continue Button */}
              <motion.button
                onClick={handleUserInfoSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!userInfo.name.trim() || !userInfo.email.trim()}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  userInfo.name.trim() && userInfo.email.trim()
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-xs text-gray-500">
              🔒 Your information is secure and will only be used for personalized recommendations.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  // Thank You Screen
  if (showThankYou) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#f5f0ff] to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center py-12"
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

          {/* Personalized Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Thank you, {userInfo.name}! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-2"
          >
            We&apos;ll send your personalized insurance recommendations to
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-semibold text-primary mb-8"
          >
            {userInfo.email}
          </motion.p>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8 text-left"
          >
            <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{userInfo.name}</h3>
                <p className="text-sm text-gray-600">{userInfo.email}</p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Answers Summary</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 truncate">{answer.question}</p>
                    <p className="font-semibold text-gray-800 truncate">{answer.answer}</p>
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
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push("/support")}
              className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition font-semibold"
            >
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // Question Flow (Steps 1+)
  return (
    <section className="h-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-600">
              {currentStep === 0 ? "Step 1 of 6" : `Question ${currentStep} of ${questions.length + 1}`}
            </h2>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 h-2 rounded-full"
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
                src={questions[currentStep - 1].image}
                alt={questions[currentStep - 1].question}
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
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
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

              {/* User Info Display */}
              {currentStep > 0 && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl mb-6">
                  <p className="text-sm text-gray-600 mb-1">For:</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{userInfo.name}</span>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                      {userInfo.email}
                    </span>
                  </div>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {questions[currentStep - 1].question}
              </h1>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep - 1].options.map((option, index) => (
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
