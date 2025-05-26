'use client'
import { useState } from "react";

const jobOptions = ["Mechanical", "Technical", "Consultant"];
const steps = [
  "Select Job Industry",
  "Select Income Range",
  "When are you coming?",
  "Credit Usage",
  "Have You Already Found Insurance",
  "Estimated Monthly Spend",
];

export default function InsuranceSteps() {
  const [selectedJob, setSelectedJob] = useState("Technical");

  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-white py-20 px-4 md:px-34">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Find the Right Insurance Plan in Under 2 Minutes
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Choose the best pricing plan for you and start experiencing our services today
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Step List */}
          <div className="flex flex-col gap-5 w-full md:w-1/3 justify-center items-left ">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`text-left px-4 py-2 w-50 rounded-sm font-medium text-sm  transition-all duration-200 ${
                  index === 0
                    ? "bg-[#8224E3] text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {step}
              </button>
            ))}
          </div>

          {/* Job Selection */}
          <div className="flex-1 flex flex-col items-center gap-6 ">
            <div className="flex items-center justify-end gap-10 ">
              {jobOptions.map((job) => {
                const isSelected = selectedJob === job;
                return (
                  <button
                    key={job}
                    onClick={() => setSelectedJob(job)}
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-sm font-medium border-4 transition-all duration-300 ${
                      isSelected
                        ? "bg-[#8224E3] text-white border-[#8224E3]"
                        : "border-[#e0d4f5] text-gray-700"
                    }`}
                  >
                    {job}
                  </button>
                );
                
              })}
            </div>

            <button className="mt-4 bg-[#8224E3] hover:bg-[#6e1bd1] transition text-white px-6 py-2 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
