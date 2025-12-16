// app/components/HealthQuestionnaire.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HealthAnswer {
  hospitalized: string | null;
  dentalVisit: string | null;
  dentalPreventative: string | null;
  missingTeeth: string | null;
  chronicDiseases: string | null;
  psychotherapy: string | null;
  doctorVisit: string | null;
  doctorPreventative: string | null;
}

interface HealthQuestionnaireProps {
  onComplete: (needsAppointment: boolean, answers: HealthAnswer) => void;
  onBack: () => void;
}

const HealthQuestionnaire: React.FC<HealthQuestionnaireProps> = ({
  onComplete,
  onBack,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<HealthAnswer>({
    hospitalized: null,
    dentalVisit: null,
    dentalPreventative: null,
    missingTeeth: null,
    chronicDiseases: null,
    psychotherapy: null,
    doctorVisit: null,
    doctorPreventative: null,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Handle answer selection
  const handleAnswer = (key: keyof HealthAnswer, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));

    // Auto-advance logic
    if (currentQuestion === 0) {
      // Question 1: Hospitalized
      setCurrentQuestion(1);
    } else if (currentQuestion === 1) {
      // Question 2: Dental visit
      if (value === "yes") {
        // Show follow-up
        setCurrentQuestion(2);
      } else {
        // Skip to next
        setCurrentQuestion(3);
      }
    } else if (currentQuestion === 2) {
      // Question 2b: Dental preventative
      setCurrentQuestion(3);
    } else if (currentQuestion === 3) {
      // Question 3: Missing teeth
      setCurrentQuestion(4);
    } else if (currentQuestion === 4) {
      // Question 4: Chronic diseases
      setCurrentQuestion(5);
    } else if (currentQuestion === 5) {
      // Question 5: Psychotherapy
      setCurrentQuestion(6);
    } else if (currentQuestion === 6) {
      // Question 6: Doctor visit
      if (value === "yes") {
        setCurrentQuestion(7);
      } else {
        // Last question, evaluate
        evaluateAnswers({ ...answers, doctorVisit: value });
      }
    } else if (currentQuestion === 7) {
      // Question 7: Doctor preventative
      evaluateAnswers({ ...answers, doctorPreventative: value });
    }
  };

  // Evaluate if user needs appointment
  const evaluateAnswers = (finalAnswers: HealthAnswer) => {
    const needsAppointment =
      finalAnswers.hospitalized === "yes" ||
      (finalAnswers.dentalVisit === "yes" &&
        finalAnswers.dentalPreventative === "no") ||
      finalAnswers.missingTeeth === "yes" ||
      finalAnswers.chronicDiseases === "yes" ||
      finalAnswers.psychotherapy === "yes" ||
      (finalAnswers.doctorVisit === "yes" &&
        finalAnswers.doctorPreventative === "no");

    onComplete(needsAppointment, finalAnswers);
  };

  // Questions configuration
  const questions = [
    {
      id: 0,
      title: "Almost there",
      subtitle: "Have you been hospitalized in the past five years?",
      key: "hospitalized" as keyof HealthAnswer,
      image: "/gifs/assets/health1.gif",
    },
    {
      id: 1,
      title: "Dental care",
      subtitle: "Have you been to the dentist in the past 3 years?",
      key: "dentalVisit" as keyof HealthAnswer,
      image: "/gifs/assets/health2.gif",
    },
    {
      id: 2,
      title: "Dental care",
      subtitle: "Was it only preventative or teeth cleaning?",
      helper: "Preventative = routine checkup and cleaning without treatment.",
      key: "dentalPreventative" as keyof HealthAnswer,
      image: "/gifs/assets/health2.gif",
    },
    {
      id: 3,
      title: "Dental health",
      subtitle: "Do you have any missing teeth?",
      helper: "Excluding wisdom teeth.",
      key: "missingTeeth" as keyof HealthAnswer,
      image: "/gifs/assets/health3.gif",
    },
    {
      id: 4,
      title: "Health status",
      subtitle: "Do you have disabilities or chronic diseases?",
      key: "chronicDiseases" as keyof HealthAnswer,
      image: "/gifs/assets/health4.gif",
    },
    {
      id: 5,
      title: "Mental health matters",
      subtitle: "Have you had psychotherapy in the past 10 years?",
      key: "psychotherapy" as keyof HealthAnswer,
      image: "/gifs/assets/health5.gif",
    },
    {
      id: 6,
      title: "Quick health check",
      subtitle: "Have you visited a doctor in the past 3 years?",
      helper: "This helps us recommend the right path for you.",
      key: "doctorVisit" as keyof HealthAnswer,
      image: "/gifs/assets/health6.gif",
    },
    {
      id: 7,
      title: "Quick health check",
      subtitle: "Was the visit for a preventive health checkup?",
      helper: "Preventive = routine check-up without symptoms.",
      key: "doctorPreventative" as keyof HealthAnswer,
      image: "/gifs/assets/health6.gif",
    },
  ];

  const currentQ = questions[currentQuestion];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`health-q-${currentQuestion}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center items-center"
          >
            <Image
              src={currentQ.image}
              alt={currentQ.title}
              width={400}
              height={300}
              className="w-full max-w-md"
              unoptimized
            />
          </motion.div>

          {/* Right: Question */}
          <motion.div variants={containerVariants} className="space-y-4">
            {/* Back Button */}
            {currentQuestion === 0 && (
              <motion.button
                variants={itemVariants}
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition mb-4"
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
              </motion.button>
            )}

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-gray-800"
            >
              {currentQ.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700"
            >
              {currentQ.subtitle}
            </motion.p>

            {/* Helper Text */}
            {currentQ.helper && (
              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-500"
              >
                {currentQ.helper}
              </motion.p>
            )}

            {/* Answer Buttons */}
            <div className="space-y-3 mt-6">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(currentQ.key, "yes")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Yes
              </motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(currentQ.key, "no")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                No
              </motion.button>
            </div>

            {/* Progress Indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2"
            >
              {questions.slice(0, 8).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    idx <= currentQuestion
                      ? "bg-primary"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HealthQuestionnaire;
