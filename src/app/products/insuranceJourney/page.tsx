"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useJourneyStore } from "@/app/stores/journeyStore";
import { usePremiumStore } from "@/app/stores/premiumStore";
import { useDocumentStore } from "@/app/stores/documentStore";

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

// Employment normalization
type NormalizedEmployment = "self-employed" | "employed" | "other";

const getNormalizedEmployment = (
  status: string | null
): NormalizedEmployment => {
  if (!status) return "other";
  const lower = status.toLowerCase();
  if (lower.includes("self")) return "self-employed";
  if (lower.includes("employ")) return "employed";
  return "other";
};

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
    actualIncome,
    setEmploymentStatus,
    setOtherEmployment,
    setIncomeRange,
    setActualIncome,
    setEmail,
    setPhone,
    setSelectedCountry,
    setDob,
  } = useJourneyStore();

  const { setTKPremium } = usePremiumStore();
  const { setHalleschePremiumDocs, setHallescheExpatDocs } = useDocumentStore();

  // Local UI States
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState<Country[]>([]);
  const [popup, setPopup] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasChildren, setHasChildren] = useState<boolean | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Calculate TK Price based on income
  const calculateTKPrice = useCallback(
    (yearlyIncome: number, hasChildrenFlag: boolean, age: number) => {
      const maxIncome = 5812.5 * 12;
      const cappedIncome = Math.min(yearlyIncome, maxIncome);

      const mainPremium = cappedIncome * 0.146;
      const zusatzbeitrag = cappedIncome * 0.0245;
      const careInsuranceRate = hasChildrenFlag || age < 23 ? 0.036 : 0.042;
      const careInsurance = cappedIncome * careInsuranceRate;
      const totalAnnual = mainPremium + zusatzbeitrag + careInsurance;
      const monthlyPremium = totalAnnual / 12;

      const employeeMainPremium = cappedIncome * 0.073;
      const employeeZusatzbeitrag = cappedIncome * 0.01225;
      const employeeCareInsurance =
        cappedIncome * (hasChildrenFlag || age < 23 ? 0.018 : 0.024);
      const employeeMonthly =
        (employeeMainPremium + employeeZusatzbeitrag + employeeCareInsurance) /
        12;

      return {
        monthly: Math.round(monthlyPremium * 100) / 100,
        employeeMonthly: Math.round(employeeMonthly * 100) / 100,
        annual: Math.round(totalAnnual * 100) / 100,
      };
    },
    []
  );

  // Fetch countries
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
          JSON.stringify({ data: list, timestamp: Date.now() })
        );
      } catch (e) {
        console.error("Error loading countries", e);
      }
    }

    fetchCountries();
  }, []);

  // Close dropdown on outside click
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

  // Popup auto hide
  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  // =============== HANDLERS ====================
  const handleEmploymentSelect = useCallback(
    (val: string) => {
      setEmploymentStatus(val);
      setStep(val === "Others" ? 99 : 2);
    },
    [setEmploymentStatus]
  );

  const handleIncomeSelect = useCallback(
    (val: string) => {
      setIncomeRange(val);

      let income = 50000;
      if (val === ">77400" || val === "30001-77400") income = 66150;
      setActualIncome(income);

      if (val === "<30000") setStep(98);
      else setStep(3);
    },
    [setIncomeRange, setActualIncome]
  );

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
    setTimeout(() => router.push("/products/privateProducts"), 2000);
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
    setTimeout(() => router.push("/products/privateProducts"), 2000);
  }, [email, phone, router]);

  const handleChildrenSelection = useCallback((hasKids: boolean) => {
    setHasChildren(hasKids);
    setStep(4);
  }, []);

  const handleDobSubmit = useCallback(() => {
    if (!dob) {
      setPopup("Please select your birth year");
      return;
    }
    setStep(5);
  }, [dob]);

  const handleCountrySelect = useCallback(
    (countryName: string) => {
      setSelectedCountry(countryName);
      setIsDropdownOpen(false);
      setSearchTerm("");
    },
    [setSelectedCountry]
  );

  const handleCountrySubmit = useCallback(async () => {
    if (!selectedCountry) {
      setPopup("Please select a country");
      return;
    }

    try {
      const store = useJourneyStore.getState();
      const currentSelectedCountry = store.selectedCountry;
      const currentIncomeRange = store.incomeRange;
      const currentDob = store.dob;
      const currentActualIncome = store.actualIncome || 50000;
      const currentEmploymentStatus = store.employmentStatus;
      const currentHasChildren = hasChildren ?? false;

      if (!currentSelectedCountry) {
        setPopup("Country not selected. Please go back.");
        return;
      }

      const EU_COUNTRIES = [
        "Austria",
        "Belgium",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Ireland",
        "Italy",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Netherlands",
        "Poland",
        "Portugal",
        "Romania",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Iceland",
        "Liechtenstein",
        "Norway",
        "Switzerland",
        "United Kingdom",
      ];

      const isEU = EU_COUNTRIES.includes(currentSelectedCountry);
      const currentYear = new Date().getFullYear();
      const age = currentDob ? currentYear - parseInt(currentDob) : 25;
      const normalizedEmployment = getNormalizedEmployment(
        currentEmploymentStatus
      );

      const tkPrice = calculateTKPrice(
        currentActualIncome,
        currentHasChildren,
        age
      );
      let adjustedTkEmployeeMonthly = tkPrice.employeeMonthly;
      if (normalizedEmployment === "self-employed")
        adjustedTkEmployeeMonthly *= 2;

      setTKPremium(adjustedTkEmployeeMonthly);

      const products: any[] = [];
      products.push({
        id: "tk",
        name: "TK Public Insurance",
        provider: "Techniker Krankenkasse",
        type: "public",
        premium: adjustedTkEmployeeMonthly,
        description: "German public health insurance",
        features: [
          "Statutory health coverage",
          "Income-based premium",
          "Family insurance available",
        ],
        loading: false,
      });

      if (currentIncomeRange === ">77400") {
        products.push({
          id: "hallesche-premium",
          name: "Hallesche Premium",
          provider: "Hallesche",
          type: "premium",
          tariffIds: ["35659", "36129", "24332", "1803"],
          premium: null,
          loading: true,
          documentCount: 0,
          description: "NK.select XL Bonus + NK.select Flex",
          features: [
            "Comprehensive private coverage",
            "Private hospital room",
            "Full dental coverage",
            "Daily hospital benefit",
            "Care insurance included",
          ],
        });

        if (!isEU) {
          products.push({
            id: "hallesche-expat",
            name: "Hallesche Expat",
            provider: "Hallesche",
            type: "expat",
            tariffIds: ["35057", "35063", "24332", "1803"],
            premium: null,
            loading: true,
            documentCount: 0,
            description: "Hi.Germany L + Hi.Dental L",
            features: [
              "Expat-specific coverage",
              "English language support",
              "Budget-friendly option",
              "Essential health protection",
              "Care insurance included",
            ],
          });
        }
      }

      useJourneyStore.setState({
        availableProducts: products,
        selectedCountry: currentSelectedCountry,
      });
      router.push("/calculator");
    } catch (error) {
      console.error("Error:", error);
      setPopup("An error occurred. Please try again.");
    }
  }, [selectedCountry, hasChildren, calculateTKPrice, setTKPremium, router]);

  const selectedCountryData = useMemo(
    () => countries.find((c) => c.name === selectedCountry),
    [countries, selectedCountry]
  );

  const filteredCountries = useMemo(
    () =>
      countries.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [countries, searchTerm]
  );

  const currentYear = new Date().getFullYear();
  const birthYears = useMemo(
    () => Array.from({ length: 100 }, (_, i) => currentYear - 18 - i),
    [currentYear]
  );

  const stepImages: Record<number, string> = useMemo(
    () => ({
      1: "/gifs_assets/step1.gif",
      99: "/gifs_assets/step2.gif",
      2: "/gifs_assets/step3.svg",
      3: "/gifs_assets/step1.gif",
      98: "/gifs_assets/step2.gif",
      4: "/gifs_assets/step2.gif",
      5: "/gifs_assets/step3.svg",
    }),
    []
  );

  // ================= UI ===================
  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-white py-16 px-4 md:px-10 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Just 2 minutes to find your best-fit insurance type.
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          No calls, no commitments — unless you want them.
        </p>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            role="alert"
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-xl z-50 max-w-md text-center"
          >
            {popup}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {/* Step 1: Employment Status */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[1]}
                  alt="Employment selection"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  priority
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-6 text-gray-700"
                >
                  What&apos;s your Employment Status?
                </motion.h2>
                {["Self-employed/Freelancer", "Employed", "Others"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEmploymentSelect(item)}
                      className="w-full p-4 cursor-pointer border-2 rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {item}
                    </motion.button>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 99: Other employment */}
        {step === 99 && (
          <motion.div
            key="step99"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[99]}
                  alt="Contact details"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-gray-700"
                >
                  Please provide your details
                </motion.h2>

                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter employment type"
                  value={otherEmployment}
                  onChange={(e) => setOtherEmployment(e.target.value)}
                />

                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOtherSubmit}
                  className="px-6 py-3 bg-primary text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Income Range */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[2]}
                  alt="Income selection"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-6 text-gray-700"
                >
                  How much is your yearly gross (pretax) income?
                </motion.h2>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleIncomeSelect("<30000")}
                  className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  &lt; €30,000
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleIncomeSelect("30001-77400")}
                  className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  €30,001 – €77,400
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleIncomeSelect(">77400")}
                  className="w-full p-4 border-2 cursor-pointer rounded-lg text-left hover:border-primary hover:bg-primary/5 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  &gt; €77,400
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Children Question */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[3]}
                  alt="Children question"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-gray-700"
                >
                  Do you have children?
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-sm text-gray-500 mb-6"
                >
                  This affects your care insurance rate
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChildrenSelection(true)}
                  className={`w-full p-4 border-2 cursor-pointer rounded-lg text-left transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    hasChildren === true
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        hasChildren === true
                          ? "border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {hasChildren === true && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2.5 h-2.5 rounded-full bg-primary"
                        />
                      )}
                    </div>
                    <span className="font-semibold">Yes, I have children</span>
                  </div>
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChildrenSelection(false)}
                  className={`w-full p-4 border-2 cursor-pointer rounded-lg text-left transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    hasChildren === false
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        hasChildren === false
                          ? "border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {hasChildren === false && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2.5 h-2.5 rounded-full bg-primary"
                        />
                      )}
                    </div>
                    <span className="font-semibold">No children</span>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 98: Contact details for <30k */}
        {step === 98 && (
          <motion.div
            key="step98"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[98]}
                  alt="Contact form"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-gray-700"
                >
                  Enter your contact details
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-sm text-gray-500 mb-4"
                >
                  We&apos;ll help you find the best option for your income range
                </motion.p>
                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  className="w-full border-2 p-3 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactSubmit}
                  className="px-6 py-3 bg-primary cursor-pointer text-white rounded-lg w-full hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Birth Year */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[4]}
                  alt="Birth year selection"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-gray-700"
                >
                  What&apos;s your Birth Year?
                </motion.h2>
                <motion.select
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
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
                </motion.select>

                <AnimatePresence>
                  {dob && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg"
                    >
                      Age:{" "}
                      <span className="font-semibold">
                        {currentYear - parseInt(dob)} years
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  variants={itemVariants}
                  whileHover={dob ? { scale: 1.02 } : {}}
                  whileTap={dob ? { scale: 0.98 } : {}}
                  onClick={handleDobSubmit}
                  disabled={!dob}
                  className={`px-6 py-3 rounded-lg w-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    dob
                      ? "bg-primary text-white cursor-pointer hover:bg-primary/90"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Country Select */}
        {step === 5 && (
          <motion.div
            key="step5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={stepImages[5]}
                  alt="Country selection"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  unoptimized
                />
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-gray-700"
                >
                  Where are you from?
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="w-full cursor-pointer border-2 p-3 rounded-lg text-left flex items-center justify-between hover:border-primary transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                    <motion.svg
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400"
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
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-30 w-full mt-2 bg-white border-2 rounded-lg shadow-lg max-h-60 overflow-hidden"
                      >
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
                              <motion.button
                                key={country.code}
                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                onClick={() =>
                                  handleCountrySelect(country.name)
                                }
                                className="w-full p-3 flex items-center cursor-pointer gap-3 transition text-left"
                              >
                                <Image
                                  src={country.flag}
                                  alt={country.name}
                                  width={24}
                                  height={16}
                                  className="rounded"
                                />
                                <span>{country.name}</span>
                              </motion.button>
                            ))
                          ) : (
                            <div className="p-4 text-center text-gray-500">
                              No countries found
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={selectedCountry ? { scale: 1.02 } : {}}
                  whileTap={selectedCountry ? { scale: 0.98 } : {}}
                  onClick={handleCountrySubmit}
                  disabled={!selectedCountry}
                  className={`px-6 py-3 rounded-lg w-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    selectedCountry
                      ? "bg-primary text-white cursor-pointer hover:bg-primary/90"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  See my recommendations
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
