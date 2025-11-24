"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type EmploymentStatus = "Salaried" | "Freelancer" | "Self Employed" | "Other";

const statusOptions: EmploymentStatus[] = [
  "Salaried",
  "Freelancer",
  "Self Employed",
  "Other",
];

export default function InsuranceCalculator() {
  const [status, setStatus] = useState<EmploymentStatus>("Salaried");
  const [income, setIncome] = useState<string>("€ 6,500");
  const [age, setAge] = useState<string>("30");
  const [hasKids, setHasKids] = useState<boolean>(false);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center content-center gap-4">
      <motion.div
        className="w-full  rounded-2xl bg-white shadow-lg flex flex-col md:flex-row p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Form Section */}
        <div className="flex-1 space-y-6 mr-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Get a Premium Estimation
          </h2>
          <p className="mb-5 text-gray-500">By filling basic information</p>

          {/* Employment Status */}
          <div>
            <label className="font-semibold block mb-2">
              Employment Status
            </label>
            <div className="flex space-x-2">
              {statusOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStatus(option)}
                  className={`px-5 py-2 rounded-md border transition-colors duration-150 ${
                    status === option
                      ? "bg-primary text-white border-transparent"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Gross Monthly Income */}
          <div>
            <label className="font-semibold block mb-2">
              Gross Monthly Income
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-200 outline-none"
              placeholder="€ 0"
            />
          </div>

          {/* Age */}
          <div>
            <label className="font-semibold block mb-2">Age in years</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-200 outline-none"
              placeholder="Age"
              min={0}
              max={120}
            />
          </div>

          {/* Kids */}
          <div>
            <label className="font-semibold block mb-2">
              Do you have kids?
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setHasKids(true)}
                className={`px-6 py-2 rounded-md border ${
                  hasKids
                    ? "bg-purple-100 border-purple-700 text-purple-900"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setHasKids(false)}
                className={`px-6 py-2 rounded-md border ${
                  !hasKids
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Calculate Button */}
          <button className="mt-4 w-full py-3 bg-primary text-white font-semibold rounded-md transition-colors hover:bg-purple-900">
            Calculate
          </button>
        </div>

        {/* Result Section */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 w-full md:w-72 mt-10 md:mt-0">
          <div className="text-lg font-semibold mb-2">Starting from</div>
          <div className="flex items-center text-3xl font-bold text-gray-700 mb-2">
            <span>~ €</span>
            <span className="ml-2 text-gray-400">_____</span>
          </div>
          <div className="mb-6 text-gray-600">Per Month</div>
          <button className="px-6 py-2 bg-primary text-white rounded-md mt-2 hover:bg-primary transition-colors">
            Compare Available Plans
          </button>
        </div>
      </motion.div>
      <motion.div
        className="w-full  mx-auto  rounded-2xl bg-white shadow-lg flex px-8 py-4 items-center justify-between content-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/calculator_assets/Calculator.svg"
          alt="logo"
          width={60}
          height={60}
          className="w-[60px] max-w-full h-auto"
          draggable={false}
          priority
        />
        <div className="px-10 md:pr-65 ">
          <h1 className="text-sm font-bold">
            You are eligible for private health insurance
          </h1>
          <p className="text-gray-400 text-sm">
            If you are in good health and have no dependents, private health
            insurance might be a cheaper option for you. Get a quote to compare
            the prices.
          </p>
        </div>

        <Image
          src="/icons/arrow.svg"
          alt="icon"
          width={20}
          height={20}
          className="w-[20px] max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
