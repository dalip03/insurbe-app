"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* TYPES                                                               */
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
/* DATA                                                                */
/* ------------------------------------------------------------------ */
type ComparisonKey = "standard" | "plus" | "premium";

const comparisonData: Array<
  { label: string } & Record<ComparisonKey, string>
> = [
  { label: "Hospital accommodation", standard: "Shared room", plus: "2-bed room", premium: "Single room" },
  { label: "Doctor choice", standard: "Attending physician", plus: "Private doctor", premium: "Private doctor" },
  { label: "Medicines & remedies", standard: "80% up to €4,000", plus: "80% up to €2,000", premium: "100%" },
  { label: "Alternative medicine", standard: "–", plus: "€1,200 / year", premium: "€2,400 / year" },
  { label: "Visual aids", standard: "€150 / 2 years", plus: "€300 / 2 years", premium: "€450 / 2 years" },
  { label: "Dental treatment", standard: "100% (1 cleaning)", plus: "100% (2 cleanings)", premium: "100%" },
  { label: "Dentures & orthodontics", standard: "70%", plus: "80%", premium: "90%" },
  { label: "Deductible", standard: "€600 – €3,000", plus: "€600 – €3,000", premium: "€600 – €3,000" },
  { label: "Health bonus", standard: "€100 / month", plus: "€100 / month", premium: "€100 / month" },
];

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                       */
/* ------------------------------------------------------------------ */

export default function PrivateInsuranceTariffs() {
  const router = useRouter();
  const [showCompare, setShowCompare] = useState(false);

  // Health modal state
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
    { key: "doctorVisit", label: "Have you visited a doctor in the past 3 years?" },
    { key: "doctorPreventative", label: "Was the visit only for preventive checkups?" },
    { key: "hospitalized", label: "Have you been hospitalized in the past 5 years?" },
    { key: "psychotherapy", label: "Any psychotherapy in the past 10 years?" },
    { key: "chronicDiseases", label: "Any chronic diseases or disabilities?" },
    { key: "dentalVisit", label: "Visited a dentist in the past 3 years?" },
    { key: "missingTeeth", label: "Any missing teeth (excluding wisdom teeth)?" },
  ];

  /* ---------------- Health Logic ---------------- */

  const handleHealthAnswer = (value: "yes" | "no") => {
    const key = healthQuestions[currentQuestion].key as keyof HealthAnswer;
    const updated = { ...healthAnswers, [key]: value };
    setHealthAnswers(updated);

    // branching
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
        router.push("/products/insuranceJourney");
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
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Choose Your Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Which{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              tariff suits
            </span>{" "}
            you best
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Maximum freedom of choice with first-class medical care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(["standard", "plus", "premium"] as const).map((key, idx) => (
            <TariffColumn
              key={key}
              title={key === "standard" ? "Standard" : key === "plus" ? "Plus" : "Premium"}
              price={key === "standard" ? "€331.73" : key === "plus" ? "€526.57" : "€636.00"}
              period="per month"
              badge={key === "plus" ? "Most Popular" : key === "premium" ? "Ultimate" : "Essential"}
              highlighted={key === "plus"}
              points={[
                "Private or shared room",
                "Comprehensive outpatient care",
                "Strong dental benefits",
              ]}
              comparisonKey={key}
              showCompare={showCompare}
              onSelect={() => setShowHealthModal(true)}
            />
          ))}
        </div>

        {/* Compare Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-primary text-white font-semibold shadow-lg inline-flex items-center gap-2"
          >
            {showCompare ? "Hide" : "Compare"} tariffs
            {showCompare ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>

      {/* ---------------- HEALTH MODAL ---------------- */}

      <AnimatePresence>
        {showHealthModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full mx-4 z-50
                border-4 border-purple-100"
            >
              <button
                onClick={() => setShowHealthModal(false)}
                className="absolute top-6 right-6 bg-gray-100 p-2 rounded-full"
              >
                <X />
              </button>

              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
                Quick health check
              </h2>

              <p className="text-xl text-gray-700 mt-6">
                {healthQuestions[currentQuestion].label}
              </p>

              <div className="mt-8 space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02, x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleHealthAnswer("yes")}
                  className="w-full p-5 border-2 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-50"
                >
                  ✓ Yes
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleHealthAnswer("no")}
                  className="w-full p-5 border-2 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-50"
                >
                  ✗ No
                </motion.button>
              </div>

              <div className="mt-8">
                <div className="flex gap-2 mb-2">
                  {healthQuestions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-full ${
                        idx <= currentQuestion
                          ? "bg-gradient-to-r from-purple-600 to-primary"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Question {currentQuestion + 1} of {healthQuestions.length}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TARIFF COLUMN                                                        */
/* ------------------------------------------------------------------ */

function TariffColumn({
  title,
  price,
  period,
  badge,
  points,
  highlighted,
  comparisonKey,
  showCompare,
  onSelect,
}: {
  title: string;
  price: string;
  period: string;
  badge: string;
  points: string[];
  highlighted?: boolean;
  comparisonKey: ComparisonKey;
  showCompare: boolean;
  onSelect: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative p-8 rounded-3xl ${
          highlighted
            ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl"
            : "bg-white shadow-xl"
        }`}
      >
        {highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {badge}
          </div>
        )}

        <h3 className="text-3xl font-bold mb-4">{title}</h3>

        <div className="mb-6">
          <span className="text-5xl font-bold">{price}</span>
          <span className="ml-2 text-sm">{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {points.map((p: string) => (
            <li key={p} className="flex gap-3">
              <Check className="w-4 h-4" />
              {p}
            </li>
          ))}
        </ul>

        <button
          onClick={onSelect}
          className={`w-full py-4 rounded-full font-bold ${
            highlighted
              ? "bg-white text-purple-600"
              : "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
          }`}
        >
          Select Plan
        </button>
      </div>

      {/* Comparison */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-b-3xl shadow-xl border-t mt-2 p-6"
          >
            {comparisonData.map((item) => (
              <div key={item.label} className="mb-3">
                <p className="text-xs font-semibold text-gray-500">{item.label}</p>
                <p className="text-sm font-medium text-gray-900">
                {item[comparisonKey]}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
