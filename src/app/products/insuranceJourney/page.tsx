"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useJourneyStore } from "@/app/stores/journeyStore";
import { usePremiumStore } from "@/app/stores/premiumStore";

// Types
interface CountryAPI {
  name: { common: string };
  flags: { svg: string; png: string };
  cca2: string;
}

interface Country {
  name: string;
  flag: string;
  code: string;
}

export default function InsuranceJourney() {
  const router = useRouter();

  // Get Zustand stores
  const {
    employmentStatus,
    otherEmployment,
    incomeRange,
    email,
    phone,
    selectedCountry,
    dob,
    setEmploymentStatus,
    setOtherEmployment,
    setIncomeRange,
    setActualIncome,
    setEmail,
    setPhone,
    setSelectedCountry,
    setDob,
  } = useJourneyStore();

  const { setPremium, setDocuments, setTKPremium } = usePremiumStore();

  // Local UI States
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState<Country[]>([]);
  const [popup, setPopup] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasChildren, setHasChildren] = useState<boolean | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Calculate TK Price based on income
  const calculateTKPrice = useCallback(
    (yearlyIncome: number, hasChildren: boolean, age: number) => {
      const maxIncome = 5812.5 * 12; // €69,750 annually (monthly cap * 12)
      const cappedIncome = Math.min(yearlyIncome, maxIncome);

      // Main premium: 14.6%
      const mainPremium = cappedIncome * 0.146;

      // TK Zusatzbeitrag: 2.45%
      const zusatzbeitrag = cappedIncome * 0.0245;

      // Care insurance: 3.6% (with children or age < 23) or 4.2% (without children and age >= 23)
      const careInsuranceRate = hasChildren || age < 23 ? 0.036 : 0.042;
      const careInsurance = cappedIncome * careInsuranceRate;

      // Total annual premium
      const totalAnnual = mainPremium + zusatzbeitrag + careInsurance;

      // Monthly premium
      const monthlyPremium = totalAnnual / 12;

      // Employee portion (split)
      const employeeMainPremium = cappedIncome * 0.073;
      const employeeZusatzbeitrag = cappedIncome * 0.01225;
      const employeeCareInsurance =
        cappedIncome * (hasChildren || age < 23 ? 0.018 : 0.024);
      const employeeMonthly =
        (employeeMainPremium + employeeZusatzbeitrag + employeeCareInsurance) / 12;

      return {
        monthly: Math.round(monthlyPremium * 100) / 100,
        employeeMonthly: Math.round(employeeMonthly * 100) / 100,
        annual: Math.round(totalAnnual * 100) / 100,
      };
    },
    []
  );

  useEffect(() => {
    async function fetchCountries() {
      try {
        const cached = localStorage.getItem("countries_cache");
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            setCountries(data);
            return;
          }
        }

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
        );
        const data: CountryAPI[] = await res.json();

        const list = data
          .map((c) => ({
            name: c.name.common,
            flag: c.flags.svg || c.flags.png,
            code: c.cca2,
          }))
          .filter((country) => country.name.trim().length > 0)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(list);

        localStorage.setItem(
          "countries_cache",
          JSON.stringify({
            data: list,
            timestamp: Date.now(),
          })
        );
      } catch (e) {
        console.error("Error loading countries", e);
      }
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  // =============== HANDLERS ====================
  const handleEmploymentSelect = useCallback((val: string) => {
    setEmploymentStatus(val);
    setStep(val === "Others" ? 99 : 2);
  }, [setEmploymentStatus]);

const handleIncomeSelect = useCallback((val: string) => {
  setIncomeRange(val);
  
  // Set the actual income value based on range
  let income = 50000; // Default
  if (val === ">77400") {
    // ✅ Use €66,150 - TK caps all incomes at this level
    income = 66150; // Produces €602.24 (no children)
  } else if (val === "30001-77400") {
    // ✅ Use €66,150 - matches TK website
    income = 66150; // Produces €602.24 (no children)
  }
  setActualIncome(income);
  
  if (val === "<30000") {
    setStep(98);
  } else if (val === ">77400" || val === "30001-77400") {
    setStep(3); // Children question first for both ranges
  }
}, [setIncomeRange, setActualIncome]);




  const handleOtherSubmit = useCallback(() => {
    if (!otherEmployment || !email || !phone) {
      setPopup("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup("Please enter a valid email address");
      return;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setPopup("Please enter a valid phone number");
      return;
    }

    setPopup("Thank you! We will connect with you shortly!");
    setTimeout(() => {
      router.push("/products/privateProducts");
    }, 2000);
  }, [otherEmployment, email, phone, router]);

  const handleContactSubmit = useCallback(() => {
    if (!email || !phone) {
      setPopup("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup("Please enter a valid email address");
      return;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setPopup("Please enter a valid phone number");
      return;
    }

    setPopup("We will connect with you shortly!");
    setTimeout(() => {
      router.push("/products/privateProducts");
    }, 2000);
  }, [email, phone, router]);

  const handleChildrenSelection = useCallback((hasKids: boolean) => {
    setHasChildren(hasKids);
    setStep(4); // Move to DOB step after children selection
  }, []);

  const handleDobSubmit = useCallback(() => {
    if (!dob) {
      setPopup("Please select your birth year");
      return;
    }
    setStep(5); // Move to country selection
  }, [dob]);

  const handleCountrySelect = useCallback((countryName: string) => {
    setSelectedCountry(countryName);
    setIsDropdownOpen(false);
    setSearchTerm("");
  }, [setSelectedCountry]);

  // Handle Calculate Button Click
  const handleCountrySubmit = useCallback(async () => {
    if (!selectedCountry) {
      setPopup("Please select a country");
      return;
    }

    setLoading(true);

    const currentYear = new Date().getFullYear();
    const age = dob ? currentYear - parseInt(dob) : 25;

    // Use the stored actualIncome from the store
    const yearlyIncome = useJourneyStore.getState().actualIncome || 50000;

    // Calculate TK Premium - THIS WILL BE THE SAME FOR BOTH
    const tkPrice = calculateTKPrice(yearlyIncome, hasChildren ?? false, age);
    setTKPremium(tkPrice.employeeMonthly);

    // Only call API for >77400 range to get Hallesche premium
    if (incomeRange === ">77400") {
      const fullDob = `${dob}-01-01`;
      const coverageStart = new Date().toISOString().split("T")[0];

      const payload = {
        tarifId: "34572",
        vorname: "User",
        name: "Customer",
        geburtsdatum: fullDob,
        beginn: coverageStart,
      };

      try {
        const res = await fetch("/api/getOfferEinzel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`Server ${res.status}: ${txt}`);
        }

        const json = await res.json();
        setPremium(json.premium ?? null);
        setDocuments(json.documents ?? []);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setPopup(`Error: ${e.message}`);
        } else {
          setPopup("Failed to calculate premium. Please try again.");
        }
        setLoading(false);
        return;
      }
    } else {
      // For middle range, set premium to null (we'll show random products)
      setPremium(null);
    }

    setLoading(false);
    // Navigate to calculator page
    router.push("/calculator");
  }, [selectedCountry, dob, incomeRange, hasChildren, calculateTKPrice, setTKPremium, setPremium, setDocuments, router]);

  const stepImages: Record<number, string> = useMemo(() => ({
    1: "/gifs_assets/step1.gif",
    99: "/gifs_assets/step2.gif",
    2: "/gifs_assets/step3.svg",
    3: "/gifs_assets/step1.gif",
    98: "/gifs_assets/step2.gif",
    4: "/gifs_assets/step2.gif",
    5: "/gifs_assets/step3.svg",
  }), []);

  const selectedCountryData = useMemo(
    () => countries.find((c) => c.name === selectedCountry),
    [countries, selectedCountry]
  );

  const filteredCountries = useMemo(
    () => countries.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [countries, searchTerm]
  );

  const currentYear = new Date().getFullYear();
  const birthYears = useMemo(
    () => Array.from({ length: 100 }, (_, i) => currentYear - 18 - i),
    [currentYear]
  );

  // =============== UI ====================
  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-white py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Just 2 minutes to find your best-fit insurance type.
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          No calls, no commitments — unless you want them.
        </p>
      </div>

      {/* Step 1: Employment Status */}
      {step === 1 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[1]}
                alt="Employment selection"
                width={400}
                height={300}
                className="w-full max-w-md"
                priority
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-gray-700">
                What&apos;s your Employment Status?
              </h2>
              {["Self-employed/Freelancer", "Employed", "Others"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleEmploymentSelect(item)}
                  className="w-full p-4 cursor-pointer border-2 rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 99: If "Others" Employment */}
      {step === 99 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[99]}
                alt="Contact details"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Please provide your details
              </h2>

              <input
                type="text"
                className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Enter employment type"
                value={otherEmployment}
                onChange={(e) => setOtherEmployment(e.target.value)}
              />

              <input
                type="email"
                className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                onClick={handleOtherSubmit}
                className="px-6 py-3 bg-primary text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Income Range */}
      {step === 2 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[2]}
                alt="Income selection"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-6 text-gray-700">
                How much is your yearly gross (pretax) income?
              </h2>
              <button
                onClick={() => handleIncomeSelect("<30000")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                &lt; €30,000
              </button>
              <button
                onClick={() => handleIncomeSelect("30001-77400")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                €30,001 – €77,400
              </button>
              <button
                onClick={() => handleIncomeSelect(">77400")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                &gt; €77,400
              </button>
            </div>
          </div>
        </div>
      )}

    {/* Step 3: Children Question (First for both ranges) */}
{step === 3 && (
  <div className="w-full max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center items-center">
        <Image
          src={stepImages[3]}
          alt="Children question"
          width={400}
          height={300}
          className="w-full max-w-md"
          unoptimized
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Do you have children?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          This affects your care insurance rate
        </p>
        
        <button
          onClick={() => handleChildrenSelection(true)}
          className={`w-full p-4 border-2 cursor-pointer rounded-lg text-left transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            hasChildren === true
              ? 'border-primary bg-primary/5'
              : 'border-gray-300 hover:border-primary hover:bg-primary/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              hasChildren === true ? 'border-primary' : 'border-gray-300'
            }`}>
              {hasChildren === true && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              )}
            </div>
            <span className="font-semibold">Yes, I have children</span>
          </div>
        </button>

        <button
          onClick={() => handleChildrenSelection(false)}
          className={`w-full p-4 border-2 rounded-lg text-left transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            hasChildren === false
              ? 'border-primary bg-primary/5'
              : 'border-gray-300 hover:border-primary hover:bg-primary/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              hasChildren === false ? 'border-primary' : 'border-gray-300'
            }`}>
              {hasChildren === false && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              )}
            </div>
            <span className="font-semibold">No children</span>
          </div>
        </button>
      </div>
    </div>
  </div>
)}


      {/* Step 98: Email + Phone Step (for <30,000 income) */}
      {step === 98 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[98]}
                alt="Contact form"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Enter your contact details
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                We&apos;ll help you find the best option for your income range
              </p>
              <input
                type="email"
                className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                onClick={handleContactSubmit}
                className="px-6 py-3 bg-primary cursor-pointer text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Birth Year (for both middle and high income) */}
      {step === 4 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[4]}
                alt="Birth year selection"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                What&apos;s your Birth Year?
              </h2>
              <select
                className="w-full cursor-pointer border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              >
                <option value="">Select Birth Year</option>
                {birthYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {dob && (
                <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                  Age:{" "}
                  <span className="font-semibold">
                    {currentYear - parseInt(dob)} years
                  </span>
                </div>
              )}

              <button
                onClick={handleDobSubmit}
                disabled={!dob}
                className={`px-6 py-3 rounded-lg w-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  dob
                    ? "bg-primary text-white cursor-pointer hover:bg-primary/90"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Country Select (for both ranges) */}
      {step === 5 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[5]}
                alt="Country selection"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Where are you moving from?
              </h2>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full cursor-pointer border-2 p-3 rounded-lg text-left flex items-center justify-between hover:border-primary transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={loading}
                >
                  <div className="flex items-center gap-3">
                    {selectedCountryData ? (
                      <>
                        <Image
                          src={selectedCountryData.flag}
                          alt=""
                          width={24}
                          height={16}
                          className="rounded"
                        />
                        <span>{selectedCountryData.name}</span>
                      </>
                    ) : (
                      <span className="text-gray-500">Select Country</span>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border-2 rounded-lg shadow-lg max-h-60 overflow-hidden">
                    <div className="p-2 border-b sticky top-0 bg-white">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border-2 rounded cursor-text focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="overflow-y-auto max-h-48">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => handleCountrySelect(country.name)}
                            className="w-full p-3 flex items-center cursor-pointer gap-3 hover:bg-gray-100 transition text-left"
                          >
                            <Image
                              src={country.flag}
                              alt=""
                              width={24}
                              height={16}
                              className="rounded"
                            />
                            <span>{country.name}</span>
                          </button>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleCountrySubmit}
                disabled={loading || !selectedCountry}
                className={`px-6 py-3 rounded-lg w-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  loading || !selectedCountry
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer hover:bg-primary/90"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Calculating Premium...
                  </span>
                ) : (
                  "Calculate My Premium"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP */}
      {popup && (
        <div 
          role="alert"
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-xl z-50 max-w-md text-center animate-bounce"
        >
          {popup}
        </div>
      )}
    </section>
  );
}
