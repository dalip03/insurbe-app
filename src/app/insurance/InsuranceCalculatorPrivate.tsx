"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type EmploymentStatus = "Employed" | "Self Employed/Freelancer" | "Other";

const statusOptions: EmploymentStatus[] = [
  "Employed",
  "Self Employed/Freelancer",
  "Other",
];

/* -------------------------------------------------------------------------- */
/*                              CALCULATION LOGIC                             */
/* -------------------------------------------------------------------------- */

function calculateTKPremium(
  monthlyIncome: number,
  age: number,
  hasChildren: boolean,
  employmentStatus: EmploymentStatus
): number {
  const annualIncome = monthlyIncome * 12;
  const CAP_ANNUAL = 66150;
  const cappedAnnual = Math.min(annualIncome, CAP_ANNUAL);

  const isSelfEmployed = employmentStatus === "Self Employed/Freelancer";

  const healthRate = isSelfEmployed ? 0.146 : 0.073;
  const zusatzRate = isSelfEmployed ? 0.0245 : 0.01225;

  let careRate: number;
  if (hasChildren || age < 23) {
    careRate = isSelfEmployed ? 0.036 : 0.018;
  } else {
    careRate = isSelfEmployed ? 0.048 : 0.024;
  }

  const totalAnnual = cappedAnnual * (healthRate + zusatzRate + careRate);

  return Math.round((totalAnnual / 12) * 100) / 100;
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function InsuranceCalculatorPrivate() {
  const [status, setStatus] = useState<EmploymentStatus>("Employed");
  const [income, setIncome] = useState("6500");
  const [age, setAge] = useState("30");
  const [hasKids, setHasKids] = useState(false);
  const [premium, setPremium] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    const inc = parseFloat(income.replace(/[^0-9.]/g, ""));
    const ag = parseInt(age);

    if (!inc || !ag || isNaN(inc) || isNaN(ag)) {
      setPremium(null);
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for animation effect
    setTimeout(() => {
      setPremium(calculateTKPremium(inc, ag, hasKids, status));
      setIsCalculating(false);
    }, 800);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              💰 Free Calculator
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Health Insurance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              Premium Calculator
            </span>
          </h2>
          <p className="mt-3 text-gray-600">
            Estimate your monthly TK health insurance contribution
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white/20 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
        >
          {/* LEFT – FORM */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Employment */}
            <motion.div variants={itemVariants}>
              <label className="block font-semibold mb-3 text-gray-900">
                Employment Status
              </label>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((opt, index) => (
                  <motion.button
                    key={opt}
                    onClick={() => setStatus(opt)}
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all
                      ${
                        status === opt
                          ? "bg-gradient-to-r from-purple-600 to-primary text-white border-transparent shadow-lg"
                          : "bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:shadow-md"
                      }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Income */}
            <motion.div variants={itemVariants}>
              <label className="block font-semibold mb-3 text-gray-900">
                Gross Monthly Income (€)
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
              />
              <p className="text-xs text-gray-500 mt-1.5">
                Max cap: €5,512.50 / month
              </p>
            </motion.div>

            {/* Age */}
            <motion.div variants={itemVariants}>
              <label className="block font-semibold mb-3 text-gray-900">
                Age
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none transition-all"
              />
            </motion.div>

            {/* Children */}
            <motion.div variants={itemVariants}>
              <label className="block font-semibold mb-3 text-gray-900">
                Do you have children?
              </label>
              <div className="flex gap-3">
                {["Yes", "No"].map((opt) => (
                  <motion.button
                    key={opt}
                    onClick={() => setHasKids(opt === "Yes")}
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                    className={`px-8 py-2.5 rounded-full border text-sm font-medium transition-all
                      ${
                        hasKids === (opt === "Yes")
                          ? "bg-gradient-to-r from-purple-600 to-primary text-white border-transparent shadow-lg"
                          : "bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:shadow-md"
                      }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={handleCalculate}
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              disabled={isCalculating}
              className="w-full py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-purple-600 to-primary
                hover:opacity-90 transition-all shadow-lg cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden"
            >
              {isCalculating ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </motion.div>
              ) : (
                "Calculate Monthly Premium"
              )}
            </motion.button>
          </motion.div>

          {/* RIGHT – RESULT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
          >
            <p className="text-sm font-medium text-gray-600 mb-2">
              Estimated Monthly Premium
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={premium ?? "empty"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent mb-2"
              >
                € {premium ?? "--"}
              </motion.div>
            </AnimatePresence>

            <p className="text-gray-500 text-sm mb-6">
              {status === "Self Employed/Freelancer"
                ? "Full contribution"
                : "Employee portion only"}
            </p>

            <AnimatePresence>
              {premium && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-left text-sm bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                >
                  <p className="font-semibold mb-3 text-gray-900">Breakdown</p>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-2"
                  >
                    <motion.p variants={itemVariants} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      Health Insurance
                    </motion.p>
                    <motion.p variants={itemVariants} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      Zusatz Contribution
                    </motion.p>
                    <motion.p variants={itemVariants} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                      Care Insurance
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}