"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useJourneyStore } from "@/app/stores/journeyStore";
import { usePremiumStore } from "@/app/stores/premiumStore";

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
    setEmail,
    setPhone,
    setSelectedCountry,
    setDob,
  } = useJourneyStore();

  const { setPremium, setDocuments } = usePremiumStore();

  // --- Local UI States ---
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState<Array<{ name: string; flag: string; code: string }>>([]);
  const [popup, setPopup] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasChildren, setHasChildren] = useState<boolean | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch countries API with flags
  interface CountryAPI {
    name: {
      common: string;
    };
    flags: {
      svg: string;
      png: string;
    };
    cca2: string;
  }

  // Calculate TK Price based on income
  const calculateTKPrice = (yearlyIncome: number, hasChildren: boolean, age: number) => {
    const maxIncome = 5812.50 * 12; // €69,750 annually (monthly cap * 12)
    const cappedIncome = Math.min(yearlyIncome, maxIncome);

    // Main premium: 14.6%
    const mainPremium = cappedIncome * 0.146;

    // TK Zusatzbeitrag: 2.45%
    const zusatzbeitrag = cappedIncome * 0.0245;

    // Care insurance: 3.6% (with children or age < 23) or 4.2% (without children and age >= 23)
    const careInsuranceRate = (hasChildren || age < 23) ? 0.036 : 0.042;
    const careInsurance = cappedIncome * careInsuranceRate;

    // Total annual premium
    const totalAnnual = mainPremium + zusatzbeitrag + careInsurance;

    // Monthly premium
    const monthlyPremium = totalAnnual / 12;

    // Employee portion (split)
    const employeeMainPremium = cappedIncome * 0.073;
    const employeeZusatzbeitrag = cappedIncome * 0.01225;
    const employeeCareInsurance = cappedIncome * ((hasChildren || age < 23) ? 0.018 : 0.024);
    const employeeMonthly = (employeeMainPremium + employeeZusatzbeitrag + employeeCareInsurance) / 12;

    return {
      monthly: Math.round(monthlyPremium * 100) / 100,
      employeeMonthly: Math.round(employeeMonthly * 100) / 100,
      annual: Math.round(totalAnnual * 100) / 100,
    };
  };

  // Get mock products for middle income range
  const getMockProducts = () => {
    // Calculate age from dob
    const currentYear = new Date().getFullYear();
    const age = dob ? currentYear - parseInt(dob) : 25;

    // Parse income range to get average
    let averageIncome = 50000; // default
    if (incomeRange === "30001-77400") {
      averageIncome = 50000; // Use middle value
    }

    // Calculate TK price
    const tkPrice = calculateTKPrice(
      averageIncome,
      hasChildren ?? false,
      age
    );

    return [
      {
        id: "tk",
        name: "TK ",
        logo: "/products/tk-logo.png",
        monthlyPrice: tkPrice.employeeMonthly,
        description: "Germany's most popular public health insurance",
        features: [
          "Comprehensive coverage",
          "Digital health services",
          "24/7 medical hotline",
          "Preventive care programs",
        ],
        type: "Public",
      },
      {
        id: "ottonova",
        name: "Ottonova",
        logo: "/products/ottonova-logo.png",
        monthlyPrice: 450,
        description: "Modern digital private health insurance",
        features: [
          "Premium private coverage",
          "Fast appointments with specialists",
          "Digital first approach",
          "Cashback on unused benefits",
        ],
        type: "Private",
      },
      {
        id: "hallesche",
        name: "Hallesche",
        logo: "/products/hallesche-logo.png",
        monthlyPrice: 520,
        description: "Traditional private health insurance provider",
        features: [
          "Full private coverage",
          "Chief physician treatment",
          "Single room hospital stays",
          "Alternative medicine coverage",
        ],
        type: "Private",
      },
    ];
  };

  useEffect(() => {
    async function fetchCountries() {
      try {
        // Check cache first
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
          .map((c: CountryAPI) => ({
            name: c.name.common,
            flag: c.flags.svg || c.flags.png,
            code: c.cca2,
          }))
          .filter((country) => country.name.trim().length > 0)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(list);

        // Cache the result
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-dismiss popup
  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  // =============== HANDLERS ====================
  const handleEmploymentSelect = (val: string) => {
    setEmploymentStatus(val);
    if (val === "Others") {
      setStep(99);
    } else {
      setStep(2);
    }
  };

  const handleIncomeSelect = (val: string) => {
    setIncomeRange(val);
    if (val === "<30000") {
      setStep(98); // Contact form
    } else if (val === ">77400") {
      setStep(4); // DOB step for API call
    } else if (val === "30001-77400") {
      setStep(3); // Product selection step
    }
  };

  const handleOtherSubmit = () => {
    // Validate fields
    if (!otherEmployment || !email || !phone) {
      setPopup("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup("Please enter a valid email address");
      return;
    }

    // Basic phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setPopup("Please enter a valid phone number");
      return;
    }

    setPopup("Thank you! We will connect with you shortly!");
    setTimeout(() => {
      router.push("/products/privateProducts");
    }, 2000);
  };

  const handleContactSubmit = () => {
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
  };

  const handleDobSubmit = () => {
    if (!dob) {
      setPopup("Please select your birth year");
      return;
    }
    setStep(5); // Move to country selection
  };

  const handleChildrenSelection = (hasKids: boolean) => {
    setHasChildren(hasKids);
    // Show products after selection
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    // Show coming soon popup for all products
    setPopup("🚀 Coming Soon! This feature is under development.");
  };

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountry(countryName);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  // API Call to get premium (for >77400 income)
  const handleCountrySubmit = async () => {
    if (!selectedCountry) {
      setPopup("Please select a country");
      return;
    }

    setLoading(true);

    // Convert birth year to full date format (YYYY-01-01)
    const fullDob = `${dob}-01-01`;

    // Get coverage start date (today)
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

      // Save to Zustand premium store
      setPremium(json.premium ?? null);
      setDocuments(json.documents ?? []);

      // Navigate to calculator/results page
      router.push("/calculator");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setPopup(`Error: ${e.message}`);
      } else {
        setPopup("Failed to calculate premium. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const stepImages: Record<number, string> = {
    1: "/gifs_assets/step1.gif",
    99: "/gifs_assets/step2.gif",
    2: "/gifs_assets/step3.svg",
    3: "/gifs_assets/step1.gif",
    98: "/gifs_assets/step2.gif",
    4: "/gifs_assets/step2.gif",
    5: "/gifs_assets/step3.svg",
  };

  // Get selected country data
  const selectedCountryData = countries.find((c) => c.name === selectedCountry);

  // Filter countries based on search
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate birth year options (from 1924 to current year - 18)
  const currentYear = new Date().getFullYear();
  const birthYears = Array.from({ length: 100 }, (_, i) => currentYear - 18 - i);

  // Get mock products
  const products = getMockProducts();

  // Calculate progress
  const getProgress = () => {
    const stepMap: Record<number, number> = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 98: 2, 99: 1 };
    return ((stepMap[step] || 0) / 5) * 100;
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

      {/* Progress Bar */}
      {/* {step !== 99 && step !== 98 && (
        <div className="w-full max-w-3xl mx-auto mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
        </div>
      )} */}

      {/* Step 1: Employment Status */}
      {step === 1 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[1]}
                alt="Employment GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">
                What&apos;s your Employment Status?
              </h3>
              {["Self-employed/Freelancer", "Employed", "Others"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleEmploymentSelect(item)}
                  className="w-full p-4 cursor-pointer border-2 rounded-lg text-left hover:border-primary hover:bg-primary/5 transition"
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
                alt="Other Employment GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Please provide your details
              </h3>

              <input
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
                className="px-6 py-3 bg-primary text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold"
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
                alt="Income GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">
                How much is your yearly gross (pretax) income?
              </h3>
              <button
                onClick={() => handleIncomeSelect("<30000")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition"
              >
                &lt; €30,000
              </button>
              <button
                onClick={() => handleIncomeSelect("30001-77400")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition"
              >
                €30,001 – €77,400
              </button>
              <button
                onClick={() => handleIncomeSelect(">77400")}
                className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition"
              >
                &gt; €77,400
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Product Selection for Middle Income (30,001 - 77,400) */}
      {step === 3 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Children Question for TK Calculation */}
            {hasChildren === null && (
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                  Do you have children?
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  This affects your care insurance rate
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleChildrenSelection(true)}
                    className="px-8 py-3 border-2 cursor-pointer rounded-lg hover:border-primary hover:bg-primary/5 transition font-semibold"
                  >
                    Yes, I have children
                  </button>
                  <button
                    onClick={() => handleChildrenSelection(false)}
                    className="px-8 py-3 border-2 cursor-pointer rounded-lg hover:border-primary hover:bg-primary/5 transition font-semibold"
                  >
                    No children
                  </button>
                </div>
              </div>
            )}

            {/* Product Cards */}
            {hasChildren !== null && (
              <>
                <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
                  Choose Your Insurance Plan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="border-2 rounded-xl p-6 transition-all hover:border-primary hover:shadow-lg bg-white"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {product.type}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h4>

                      <div className="mb-4">
                        <span className="text-3xl font-bold text-primary">
                          €{product.monthlyPrice}
                        </span>
                        <span className="text-gray-500 text-sm">/month</span>
                        {product.id === "tk" && (
                          <p className="text-xs text-gray-500 mt-1">
                            (Employee portion)
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => handleProductSelect(product.id)}
                        className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
                      >
                        Choose Plan
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
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
                alt="Contact GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Enter your contact details
              </h3>
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
                className="px-6 py-3 bg-primary cursor-pointer text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Birth Year */}
      {step === 4 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[4]}
                alt="DOB GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                What&apos;s your Birth Year?
              </h3>
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
                  Age: <span className="font-semibold">{currentYear - parseInt(dob)} years</span>
                </div>
              )}

              <button
                onClick={handleDobSubmit}
                disabled={!dob}
                className={`px-6 py-3 rounded-lg w-full font-semibold transition-all ${
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

      {/* Step 5: Country Select (for >77,400 income) */}
      {step === 5 && (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={stepImages[5]}
                alt="Country GIF"
                width={400}
                height={300}
                className="w-full max-w-md"
                unoptimized
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Where are you moving from?
              </h3>

              {/* Custom Country Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full cursor-pointer border-2 p-3 rounded-lg text-left flex items-center justify-between hover:border-primary transition focus:border-primary focus:outline-none"
                  disabled={loading}
                >
                  <div className="flex items-center gap-3">
                    {selectedCountryData ? (
                      <>
                        <Image
                          src={selectedCountryData.flag}
                          alt={selectedCountryData.name}
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
                              alt={country.name}
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
                className={`px-6 py-3 rounded-lg w-full font-semibold transition-all ${
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

      {/* POPUP - Enhanced with animation */}
      {popup && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-xl z-50 max-w-md text-center animate-bounce">
          {popup}
        </div>
      )}
    </section>
  );
}
