"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Star, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* HEALTH FLOW TYPES                                                   */
/* ------------------------------------------------------------------ */

interface HealthAnswer {
  doctorVisit: string | null;
  doctorPreventative: string | null;
  hospitalized: string | null;
  psychotherapy: string | null;
  chronicDiseases: string | null;
  dentalVisit: string | null;
  missingTeeth: string | null;
}

/* ------------------------------------------------------------------ */
/* COMPARISON DATA                                                     */
/* ------------------------------------------------------------------ */

const comparisonData = [
  { label: "Hospital accommodation", basic: "Multi-bed room", premium: "Single-bed room" },
  { label: "Doctor choice", basic: "Standard", premium: "Private doctor" },
  { label: "Digital services", basic: "Up to €60 / year", premium: "Up to €120 / year" },
  { label: "Medicines & remedies", basic: "100%", premium: "100%" },
  { label: "Visual aids", basic: "—", premium: "€250 every 2 years" },
  { label: "Naturopathy", basic: "Doctors only", premium: "Doctors & practitioners" },
];

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */

export default function Expatteriffcomparision() {
  const router = useRouter();
  const [showCompare, setShowCompare] = useState(false);

  // Health flow state
  const [showHealthModal, setShowHealthModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [healthAnswers, setHealthAnswers] = useState<HealthAnswer>({
    doctorVisit: null,
    doctorPreventative: null,
    hospitalized: null,
    psychotherapy: null,
    chronicDiseases: null,
    dentalVisit: null,
    missingTeeth: null,
  });

  const healthQuestions = [
    { key: "doctorVisit", label: "Have you visited a doctor in the last 3 years?" },
    { key: "doctorPreventative", label: "Was it only a preventive check-up?" },
    { key: "hospitalized", label: "Have you been hospitalized in the last 5 years?" },
    { key: "psychotherapy", label: "Any psychotherapy in the last 10 years?" },
    { key: "chronicDiseases", label: "Any chronic diseases or disabilities?" },
    { key: "dentalVisit", label: "Visited a dentist in the last 3 years?" },
    { key: "missingTeeth", label: "Any missing teeth (excluding wisdom teeth)?" },
  ];

  /* ---------------- HEALTH ANSWER HANDLER ---------------- */

  const handleHealthAnswer = (value: "yes" | "no") => {
    const key = healthQuestions[currentQuestion].key as keyof HealthAnswer;
    const updated = { ...healthAnswers, [key]: value };
    setHealthAnswers(updated);

    // branching logic
    if (currentQuestion === 0 && value === "no") {
      setCurrentQuestion(2);
      return;
    }

    if (currentQuestion < healthQuestions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      return;
    }

    evaluateHealth(updated);
  };

  /* ---------------- HEALTH EVALUATION ---------------- */

  const evaluateHealth = (answers: HealthAnswer) => {
    const doctorSafe =
      answers.doctorVisit === "no" ||
      (answers.doctorVisit === "yes" &&
        answers.doctorPreventative === "yes");

    const otherSafe =
      answers.hospitalized === "no" &&
      answers.psychotherapy === "no" &&
      answers.chronicDiseases === "no" &&
      answers.dentalVisit === "no" &&
      answers.missingTeeth === "no";

    setShowHealthModal(false);

    requestAnimationFrame(() => {
      if (doctorSafe && otherSafe) {
        router.push("/calculator/submitApplication");
      } else {
        router.push("/book-appointment");
      }

      // reset
      setCurrentQuestion(0);
      setHealthAnswers({
        doctorVisit: null,
        doctorPreventative: null,
        hospitalized: null,
        psychotherapy: null,
        chronicDiseases: null,
        dentalVisit: null,
        missingTeeth: null,
      });
    });
  };

  /* ------------------------------------------------------------------ */

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Which{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Expat tariff
            </span>{" "}
            suits you best?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Maximum freedom of choice with first-class medical care.
          </p>
        </div>

        {/* TARIFF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TariffColumn
            title="Basic"
            price="€72.89"
            badge="Lower Cost"
            points={[
              "Multi-bed hospital room",
              "100% outpatient treatment",
              "Basic digital services",
              "Limited visual aids",
            ]}
            comparisonKey="basic"
            showCompare={showCompare}
            highlighted={false}
            onSignup={() => setShowHealthModal(true)}
          />

          <TariffColumn
            title="Premium"
            price="€147.88"
            badge="Best Coverage"
            highlighted
            points={[
              "Single-bed hospital room",
              "Private doctor access",
              "Extended digital services",
              "Higher visual & remedy limits",
            ]}
            comparisonKey="premium"
            showCompare={showCompare}
            onSignup={() => setShowHealthModal(true)}
          />
        </div>

        {/* COMPARE BUTTON */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg"
          >
            {showCompare ? "Hide" : "Compare"} tariffs
            {showCompare ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>

      {/* HEALTH MODAL */}
     <AnimatePresence>
  {showHealthModal && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full mx-4 z-50
          border-4 border-purple-100"
      >
        {/* Close */}
        <button
          onClick={() => {
            setShowHealthModal(false);
            setCurrentQuestion(0);
            setHealthAnswers({
              doctorVisit: null,
              doctorPreventative: null,
              hospitalized: null,
              psychotherapy: null,
              chronicDiseases: null,
              dentalVisit: null,
              missingTeeth: null,
            });
          }}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition
            bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          {/* Back button */}
          {currentQuestion > 0 && (
            <button
              onClick={() =>
                setCurrentQuestion((q) => Math.max(0, q - 1))
              }
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600
                transition font-semibold"
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

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-purple-600 to-blue-600
            bg-clip-text text-transparent"
          >
            Quick health check
          </h2>

          {/* Question */}
          <p className="text-xl text-gray-700 font-medium">
            {healthQuestions[currentQuestion].label}
          </p>

          {/* Helper (optional style-ready) */}
          <p className="text-sm text-gray-600 bg-blue-50 border-l-4
            border-blue-500 p-4 rounded-lg"
          >
            💡 This helps us guide you to the best possible option.
          </p>

          {/* Answer buttons */}
          <div className="space-y-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.02, x: 6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleHealthAnswer("yes")}
              className="w-full p-5 border-2 cursor-pointer rounded-xl text-left
                hover:border-purple-500 hover:bg-purple-50 transition
                font-semibold text-gray-800 shadow-sm hover:shadow-md"
            >
              ✓ Yes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, x: 6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleHealthAnswer("no")}
              className="w-full p-5 border-2 cursor-pointer rounded-xl text-left
                hover:border-purple-500 hover:bg-purple-50 transition
                font-semibold text-gray-800 shadow-sm hover:shadow-md"
            >
              ✗ No
            </motion.button>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex gap-2 mb-3">
              {healthQuestions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2.5 flex-1 rounded-full transition-all ${
                    idx <= currentQuestion
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center font-medium">
              Question {currentQuestion + 1} of {healthQuestions.length}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TARIFF COLUMN                                                       */
/* ------------------------------------------------------------------ */

function TariffColumn({
  title,
  price,
  badge,
  points,
  highlighted,
  comparisonKey,
  showCompare,
  onSignup,
}: any) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative p-8 rounded-3xl ${
          highlighted
            ? "bg-gradient-to-br from-primary to-purple-600 text-white"
            : "bg-white border-2 border-gray-200"
        }`}
      >
        {highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-yellow-400 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" /> {badge}
          </div>
        )}

        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-sm ml-2">/ month</span>
        </div>

        <ul className="space-y-3 mb-8">
          {points.map((p: string) => (
            <li key={p} className="flex gap-3 text-sm">
              <Check className="w-4 h-4" /> {p}
            </li>
          ))}
        </ul>

        <button
          onClick={onSignup}
          className={`w-full py-4 rounded-full font-bold ${
            highlighted
              ? "bg-white text-purple-600"
              : "bg-gradient-to-r from-primary to-purple-600 text-white"
          }`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
