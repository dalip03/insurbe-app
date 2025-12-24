"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePremiumStore } from "@/app/stores/premiumStore";
import { useJourneyStore } from "@/app/stores/journeyStore";

/* ---------------- Helpers ---------------- */

function getTwoDaysFromNow() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().split("T")[0];
}

function normalizePhone(phone: string) {
  return phone.startsWith("+49") ? phone : "+49" + phone.replace(/\D/g, "");
}

/* ---------------- Component ---------------- */

export default function SubmitApplication() {
  const router = useRouter();
  const { form: premiumForm } = usePremiumStore();
  const journeyStore = useJourneyStore();

  const selectedPlan = journeyStore.selectedPlan;

  /* ---------- Form state ---------- */

  const [salutation, setSalutation] = useState("Mr");
  const [firstName, setFirstName] = useState(premiumForm.firstName || "");
  const [lastName, setLastName] = useState(premiumForm.lastName || "");
  const [dob, setDob] = useState(premiumForm.dob || "");
  const [gender, setGender] = useState(premiumForm.gender || "Male");
  const [coverageStart] = useState(calculateCoverageStartDate());
  const [email, setEmail] = useState(journeyStore.email || "");
  const [phone, setPhone] = useState(journeyStore.phone || "");
  const [address, setAddress] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  /* ---------- UI state ---------- */

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const birthYear = journeyStore.dob ? journeyStore.dob.split("-")[0] : "";

  /* ---------- Guard ---------- */

  useEffect(() => {
    if (!selectedPlan) {
      router.push("/calculator");
    }
  }, [selectedPlan, router]);

  /* ---------- Submit ---------- */

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🟡 Submit clicked");

    if (!firstName || !lastName || !dob || !email || !phone) {
      setError("Please fill all required fields");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms and Conditions");
      return;
    }

    setLoading(true);
    setError(null);

    const genderMap: Record<string, string> = {
      Male: "Item1",
      Female: "Item2",
      Other: "Item1",
    };

    const salutationMap: Record<string, string> = {
      Mr: "Item1",
      Mrs: "Item2",
      Ms: "Item2",
      Dr: "Item1",
    };

    /* ✅ DUMMY TARIFF ID (TEMPORARY) */
    const DUMMY_TARIFF_ID = "35659";

    /* ---------- FINAL PAYLOAD ---------- */

    const payload = {
      tariffId: DUMMY_TARIFF_ID,

      vorname: firstName,
      name: lastName,
      geburtsdatum: dob,
      anrede: salutationMap[salutation],
      geschlecht: genderMap[gender],
      beginn: coverageStart,

      email,
      telefon: normalizePhone(phone),

      strasse: address || "Teststrasse",
      hausnummer: "1",
      plz: "10115",
      ort: "Berlin",
      land: "DE",

      /* ✅ ONLY BANK DATA IS DUMMY */
      bank: {
        iban: "DE44500105175407324931",
        bic: "INGDDEFFXXX",
        kontoinhaber: `${firstName} ${lastName}`,
        zahlungsart: "SEPA",
        sepaMandat: true,
      },
    };

    console.log("📦 SUBMIT APPLICATION PAYLOAD");
    console.log(payload);

    try {
      const res = await fetch("/api/getorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text();

      console.log("⬅️ RESPONSE STATUS:", res.status);
      console.log("📄 RAW SOAP RESPONSE:", responseText || "(empty)");

      if (!res.ok) {
        setError("Application submission failed");
        return;
      }

      sessionStorage.setItem(
        "applicationDetails",
        JSON.stringify({
          name: `${salutation} ${firstName} ${lastName}`,
          email,
          phone,
          dob,
          coverageStart,
          tariffId: DUMMY_TARIFF_ID,
          soapResponse: responseText,
        })
      );

      router.push("/calculator/submitApplication/success");
    } catch (err) {
      console.error("❌ Submit error:", err);
      setError("Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (date: string) => {
    if (!date) return "";
    const today = new Date();
    const birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  function calculateCoverageStartDate() {
    const today = new Date();
    const month = today.getMonth(); // 0 = Jan, 11 = Dec
    const year = today.getFullYear();

    // December → 01.04 next year
    if (month === 11) {
      return `01.04.${year + 1}`;
    }

    // January → 01.05 same year
    if (month === 0) {
      return `01.05.${year}`;
    }

    // ✅ Fallback → 2 days after today
    const fallbackDate = new Date();
    fallbackDate.setDate(fallbackDate.getDate() + 2);

    return fallbackDate.toISOString().split("T")[0];
  }

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* HEADER */}
      <motion.div className="w-full h-40 bg-primary flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Complete Your Application
        </h1>
      </motion.div>

      {/* FORM */}
      <motion.div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-6">
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Salutation */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salutation *
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                value={salutation}
                onChange={(e) => setSalutation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
              </motion.select>
            </motion.div>

            {/* Name Fields */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Max"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Mustermann"
                  required
                />
              </div>
            </motion.div>

            {/* DOB and Gender */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <AnimatePresence>
                  {dob && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-gray-500 mt-1"
                    >
                      Age: {calculateAge(dob)} years
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </motion.select>
              </div>
            </motion.div>

            {/* Coverage Start */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coverage Start Date (Auto-calculated)
              </label>

              <motion.input
                type="text"
                value={coverageStart}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 cursor-not-allowed"
              />

              <p className="text-xs text-gray-500 mt-1">
                Based on your cancellation month or default 2-day rule.
              </p>
            </motion.div>

            {/* Email Address */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="max.mustermann@example.com"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                We&apos;ll send your policy documents to this email
              </p>
            </motion.div>

            {/* Mobile Number */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+49 123 456 7890"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                For important updates about your policy
              </p>
            </motion.div>

            {/* Address (Optional) */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address (Optional)
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full address"
              />
              <p className="text-xs text-gray-500 mt-1">
                This helps us process your application faster
              </p>
            </motion.div>

            {/* ✅ Important Information + Note about documents */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-purple-50 border border-purple-200 rounded-lg p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-3">
                Important Information
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Your application will be processed within 24-48 hours",
                  "You'll receive a confirmation email with your policy number",
                  "Coverage begins on your selected start date",
                  "You can cancel within 14 days for a full refund",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* ✅ Note about documents */}
              <div className="mt-4 pt-4 border-t border-purple-300">
                <p className="text-sm text-gray-600 italic">
                  <strong>Note:</strong> Some documents may not be automatically
                  generated because multiple tariff IDs are being processed. Our
                  team is working on this, and we'll share any missing documents
                  with you as soon as they're available.
                </p>
              </div>
            </motion.div>

            {/* Terms and Conditions */}
            <motion.div variants={itemVariants} className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </label>
            </motion.div>

            {/* Error Display */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
