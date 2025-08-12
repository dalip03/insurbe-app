"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Step labels
const stepLabels = [
  "Select Income Range",
  "What's your plan to stay?",
  "Mode of communication",
  "What's your Email?",
  "Select Marital Status"
];

// Option sets
const incomeOptions = [
  "Below €30,000",
  "€30,000 - €50,000",
  "Above €50,000"
];

const stayPlans = ["Short term", "Permanent", "Undecided"];
const modes = ["Email", "Call"];
const maritalOptions = ["Yes", "No"];

// --- Types ---
type FormData = {
  incomeRange?: string;
  plan?: string;
  mode?: string;
  email?: string;
  marital?: string;
};

type RightContentProps = {
  step: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

// --- Dynamic Right Panel Content ---
function RightContent({ step, formData, setFormData }: RightContentProps) {
  switch (step) {
    case 0:
      // Income Range dropdown
      return (
        <>
          <label className="block mb-2 font-medium text-gray-700">Income Range</label>
          <select
            className="w-full rounded-md py-2 px-4 border border-gray-300"
            value={formData.incomeRange ?? ""}
            onChange={e =>
              setFormData(f => ({ ...f, incomeRange: e.target.value }))
            }
          >
            <option value="" disabled>Select An Option</option>
            {incomeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </>
      );
    case 1:
      // Plan to Stay
      return (
        <>
          <label className="block mb-4 font-medium text-gray-700">What&apos;s your plan to stay?</label>
          <div className="flex gap-4">
            {stayPlans.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormData(f => ({ ...f, plan: opt }))}
                className={`px-4 py-2 rounded-xl border transition ${
                  formData.plan === opt
                    ? "bg-[#511E6D] text-white border-[#511E6D]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      );
    case 2:
      // Mode of Communication radio
      return (
        <>
          <label className="block mb-4 font-medium text-gray-700">Mode of communication</label>
          <div className="flex gap-10 mt-4 mb-2">
            {modes.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormData(f => ({ ...f, mode: opt }))}
                className={`w-24 h-24 flex items-center justify-center rounded-full border-2 transition-all text-lg font-medium ${
                  formData.mode === opt
                    ? "bg-[#511E6D] text-white border-[#511E6D]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      );
    case 3:
      // Email input
      return (
        <>
          <label className="block mb-2 font-medium text-gray-700">What&apos;s your Email?</label>
          <input
            type="email"
            className="w-full rounded-md py-2 px-4 border border-gray-300"
            placeholder="Please Enter your Email"
            value={formData.email ?? ""}
            onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
          />
        </>
      );
    case 4:
      // Marital Status radio
      return (
        <>
          <h2 className="text-2xl font-bold mb-4">Are you married?</h2>
          <div className="flex gap-8">
            {maritalOptions.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormData(f => ({ ...f, marital: opt }))}
                className={`px-8 py-3 rounded-lg font-semibold border ${
                  formData.marital === opt
                    ? "bg-[#511E6D] text-white border-[#511E6D]"
                    : "bg-white text-[#511E6D] border-gray-200"
                }`}
              >
                {opt.toUpperCase()}
              </button>
            ))}
          </div>
        </>
      );
    default:
      return <div />;
  }
}

// ---- Main Form Component ----
export default function InsuranceSteps() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});

  // Step button appearance
  const stepButton = (step: string, idx: number) => (
    <button
      key={idx}
      type="button"
      className={`w-full text-left px-5 py-3 rounded-md font-semibold text-base tracking-tight 
        ${currentStep === idx
          ? "bg-[#511E6D] text-white shadow"
          : "bg-transparent text-gray-900 hover:bg-gray-100"
        }`}
      onClick={() => setCurrentStep(idx)}
    >
      {step}
    </button>
  );

  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Just 2 minutes to find your best-fit insurance type.</h2>
          <p className="text-gray-500 text-base md:text-lg">No calls, no commitments — unless you want them.</p>
        </div>
        <div className="flex gap-10 md:gap-0 items-start justify-between">
          {/* Left Steps List */}
          <div className="w-1/3 min-w-[210px] flex flex-col gap-2">
            {stepLabels.map((step, idx) => stepButton(step, idx))}
          </div>
          {/* Right Panel */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg p-8 flex flex-col items-start"
          >
            <RightContent step={currentStep} formData={formData} setFormData={setFormData} />
            <div className="flex gap-3 mt-8 self-end">
              <button
                type="button"
                className={`px-4 py-2 rounded border font-medium ${
                  currentStep === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#e0daf2] text-[#511E6D] hover:bg-[#d9c9ef]"
                }`}
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(curr => Math.max(0, curr - 1))}
              >
                Back
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded bg-[#511E6D] text-white font-medium"
                onClick={() => setCurrentStep(curr => Math.min(stepLabels.length - 1, curr + 1))}
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
