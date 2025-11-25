"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InsuranceJourney() {
  const router = useRouter();

  // --- States ---
  const [step, setStep] = useState(1);

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [otherEmployment, setOtherEmployment] = useState("");

  const [incomeRange, setIncomeRange] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [popup, setPopup] = useState("");

  // Fetch countries API
interface CountryAPI {
  name: {
    common: string;
  };
}
useEffect(() => {
  async function fetchCountries() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
      const data: CountryAPI[] = await res.json();

      const list: string[] = data
        .map((c: CountryAPI) => c.name.common)
        .filter((name) => name.trim().length > 0)
        .sort((a, b) => a.localeCompare(b));

      setCountries(list);
    } catch (e) {
      console.log("Error loading countries", e);
    }
  }

  fetchCountries();
}, []);



  // =============== HANDLERS ====================

  const handleEmploymentSelect = (val: string) => {
    setEmploymentStatus(val);

    if (val === "Others") {
      setStep(99); // special step for text input
    } else {
      setStep(2);
    }
  };

  const handleIncomeSelect = (val: string) => {
    setIncomeRange(val);

    if (val === "<30000" || val === ">73800") {
      setStep(98); // email + phone
    } else {
      setStep(3);
    }
  };

  const handleOtherSubmit = () => {
    setPopup("We will connect with you shortly!");
    setTimeout(() => setPopup(""), 2000);
  };

  const handleContactSubmit = () => {
    setPopup("We will connect with you shortly!");
    setTimeout(() => setPopup(""), 2000);
  };

  const handleCountrySubmit = () => {
    const userData = {
      employmentStatus,
      incomeRange,
      selectedCountry,
    };

    console.log("Saved Data", userData);

    router.push("/calculator");
  };

  // =============== UI ====================

  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-white py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Just 2 minutes to find your best-fit insurance type.
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          No calls, no commitments — unless you want them.
        </p>
      </div>

      {/* ---------------- STEP 1 ---------------- */}
      {step === 1 && (
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">
            What&apos;s your Employment Status?
          </h3>

          {["Self-employed", "Employed", "Freelancer", "Others"].map((item) => (
            <button
              key={item}
              onClick={() => handleEmploymentSelect(item)}
              className="w-full p-4 border rounded-lg mb-3 text-left hover:border-primary transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* ---------------- IF "Others" (Text Input) ---------------- */}
      {step === 99 && (
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Please specify:</h3>

          <input
            className="w-full border p-3 rounded-lg mb-4"
            placeholder="Enter employment type"
            value={otherEmployment}
            onChange={(e) => setOtherEmployment(e.target.value)}
          />

          <button
            onClick={handleOtherSubmit}
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      )}

      {/* ---------------- STEP 2 ---------------- */}
      {step === 2 && (
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">
            How much is your yearly gross (pretax) income?
          </h3>

          <button
            onClick={() => handleIncomeSelect("<30000")}
            className="w-full p-4 border rounded-lg mb-3 text-left"
          >
            &lt; 30,000
          </button>

          <button
            onClick={() => handleIncomeSelect("30001-73800")}
            className="w-full p-4 border rounded-lg mb-3 text-left"
          >
            €30,001 – €73,800
          </button>

          <button
            onClick={() => handleIncomeSelect(">73800")}
            className="w-full p-4 border rounded-lg mb-3 text-left"
          >
            &gt; 73,800
          </button>
        </div>
      )}

      {/* ---------------- EMAIL + PHONE (for <30000 or >73800) ---------------- */}
      {step === 98 && (
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Enter your contact details
          </h3>

          <input
            className="w-full border p-3 rounded-lg mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded-lg mb-4"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={handleContactSubmit}
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      )}

      {/* ---------------- STEP 3 (COUNTRY SELECT) ---------------- */}
      {step === 3 && (
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Where are you moving from?
          </h3>

          <select
            className="w-full border p-3 rounded-lg mb-6"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            onClick={handleCountrySubmit}
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      )}

      {/* ---------------- POPUP ---------------- */}
      {popup && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
          {popup}
        </div>
      )}
    </section>
  );
}
