"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type EmploymentStatus = "Employed" | "Self Employed/Freelancer" | "Other";

const statusOptions: EmploymentStatus[] = [
  "Employed",
  "Self Employed/Freelancer",
  "Other",
];

// ✅ PROPER TK Premium Calculation based on German insurance rates
function calculateTKPremium(
  monthlyIncome: number,
  age: number,
  hasChildren: boolean,
  employmentStatus: EmploymentStatus
): number {
  // Convert to annual income
  const annualIncome = monthlyIncome * 12;
  
  // Apply contribution cap (2024 cap to match TK website)
  const CAP_ANNUAL = 66150; // €5,512.50 × 12
  const cappedAnnual = Math.min(annualIncome, CAP_ANNUAL);
  
  // For Self-employed/Freelancer: They pay FULL rate (no employer split)
  // For Employed: They pay HALF rate (employer pays other half)
  const isSelfEmployed = employmentStatus === "Self Employed/Freelancer";
  
  // Contribution rates
  let healthRate: number;
  let zusatzRate: number;
  
  if (isSelfEmployed) {
    // Self-employed pay FULL rate
    healthRate = 0.146;      // 14.6% (full)
    zusatzRate = 0.0245;     // 2.45% (full)
  } else {
    // Employed pay HALF (employer pays other half)
    healthRate = 0.073;      // 7.3% (employee portion)
    zusatzRate = 0.01225;    // 1.225% (employee portion)
  }
  
  // Care insurance rate depends on children and age
  let careRate: number;
  if (hasChildren || age < 23) {
    careRate = isSelfEmployed ? 0.036 : 0.018;  // Full vs half
  } else {
    // No children surcharge: childless people pay more
    careRate = isSelfEmployed ? 0.048 : 0.024;  // Full vs half
  }
  
  // Calculate annual employee contributions
  const healthAnnual = cappedAnnual * healthRate;
  const zusatzAnnual = cappedAnnual * zusatzRate;
  const careAnnual = cappedAnnual * careRate;
  
  const totalAnnual = healthAnnual + zusatzAnnual + careAnnual;
  
  // Convert to monthly
  const monthly = totalAnnual / 12;
  
  return Math.round(monthly * 100) / 100; // Round to 2 decimals
}

export default function InsuranceCalculator() {
  const [status, setStatus] = useState<EmploymentStatus>("Employed");
  const [income, setIncome] = useState<string>("6500");
  const [age, setAge] = useState<string>("30");
  const [hasKids, setHasKids] = useState<boolean>(false);

  const [premium, setPremium] = useState<number | null>(null);

  function handleCalculate() {
    const inc = parseFloat(income.replace(/[^0-9.]/g, ""));
    const ag = parseInt(age);

    if (!inc || !ag || isNaN(inc) || isNaN(ag)) {
      setPremium(null);
      return;
    }

    // ✅ Use proper TK calculation with employment status
    const result = calculateTKPremium(inc, ag, hasKids, status);
    setPremium(result);
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 px-4">
      
      {/* MAIN CONTAINER */}
      <motion.div
        className="w-full rounded-2xl bg-white shadow-lg flex flex-col md:flex-row p-6 md:p-10 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT - FORM */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Calculate Your TK Premium
          </h2>
          <p className="text-gray-500">Based on official German insurance rates</p>

          {/* Employment Status */}
          <div>
            <label className="font-semibold block mb-2">
              Employment Status
            </label>

            <div className="flex flex-wrap gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStatus(option)}
                  className={`px-5 py-2 rounded-md border cursor-pointer transition-colors duration-150 ${
                    status === option
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {status === "Self Employed/Freelancer" 
                ? "⚠️ Self-employed pay full rate (no employer contribution)"
                : "✓ Employed: Employer pays half"}
            </p>
          </div>

          {/* Income */}
          <div>
            <label className="font-semibold block mb-2">
              Gross Monthly Income
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none cursor-text"
              placeholder="€ 6500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Maximum contribution cap: €5,512.50/month (€66,150/year)
            </p>
          </div>

          {/* Age */}
          <div>
            <label className="font-semibold block mb-2">Age in years</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none cursor-text"
              min={18}
              max={120}
            />
            <p className="text-xs text-gray-500 mt-1">
              Under 23? Lower care insurance rate applies
            </p>
          </div>

          {/* Kids */}
          <div>
            <label className="font-semibold block mb-2">
              Do you have children?
            </label>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setHasKids(true)}
                className={`px-6 py-2 rounded-md border cursor-pointer transition-colors ${
                  hasKids
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary/50"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => setHasKids(false)}
                className={`px-6 py-2 rounded-md border cursor-pointer transition-colors ${
                  !hasKids
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary/50"
                }`}
              >
                No
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              With children: 1.8% care insurance | Without: 2.4% (surcharge)
            </p>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="mt-2 w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition cursor-pointer"
          >
            Calculate TK Premium
          </button>
        </div>

        {/* RIGHT - RESULT */}
        <div className="w-full md:w-72 flex flex-col items-center text-center">
          <p className="text-lg font-semibold mb-2">Your TK Premium</p>

          <div className="flex items-center text-3xl font-bold text-gray-700 mb-2">
            € <span className="ml-2">{premium ?? "____"}</span>
          </div>

          <p className="text-gray-600 mb-2">Per Month</p>
          <p className="text-xs text-gray-500 mb-4">
            {status === "Self Employed/Freelancer" 
              ? "(Full contribution)" 
              : "(Employee portion only)"}
          </p>

          <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer">
            Compare Available Plans
          </button>

          {premium && (
            <div className="mt-6 text-xs text-left text-gray-500 space-y-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold mb-2">Breakdown:</p>
              <p>• Health: {status === "Self Employed/Freelancer" ? "14.6%" : "7.3%"}</p>
              <p>• TK Zusatz: {status === "Self Employed/Freelancer" ? "2.45%" : "1.225%"}</p>
              <p>• Care: {hasKids || parseInt(age) < 23 
                ? (status === "Self Employed/Freelancer" ? "3.6%" : "1.8%")
                : (status === "Self Employed/Freelancer" ? "4.8%" : "2.4%")}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* BOTTOM BOX */}
      <motion.div
        className="w-full rounded-2xl bg-white shadow-lg flex flex-row gap-6 items-center p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/calculator_assets/Calculator.svg"
          alt="calculator"
          width={60}
          height={60}
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-sm font-bold">
            {status === "Self Employed/Freelancer" 
              ? "Self-employed pay full TK contributions"
              : "You are eligible for private health insurance"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {status === "Self Employed/Freelancer"
              ? "Self-employed individuals pay both employer and employee portions (full 14.6% + 2.45% + care insurance)."
              : "If you are in good health and have no dependents, private health insurance might be a cheaper option for you."}
          </p>
        </div>

        <Image src="/icons/arrow.svg" alt="arrow" width={20} height={20} />
      </motion.div>
    </div>
  );
}
