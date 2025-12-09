"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePremiumStore } from "@/app/stores/premiumStore";
import { useJourneyStore } from "@/app/stores/journeyStore";
import Image from "next/image";

// Helper function to get date 2 days from now
function getTwoDaysFromNow() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().split("T")[0];
}

export default function SubmitApplication() {
  const router = useRouter();
  const { form: premiumForm } = usePremiumStore();
  const journeyData = useJourneyStore();

  // Form states
  const [salutation, setSalutation] = useState("Mr");
  const [firstName, setFirstName] = useState(premiumForm.firstName || "");
  const [lastName, setLastName] = useState(premiumForm.lastName || "");
  const [dob, setDob] = useState(premiumForm.dob || "");
  const [gender, setGender] = useState(premiumForm.gender || "Male");
  const [coverageStart, setCoverageStart] = useState(getTwoDaysFromNow());
  const [email, setEmail] = useState(journeyData.email || "");
  const [phone, setPhone] = useState(journeyData.phone || "");
  const [address, setAddress] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  // Set default coverage start date on mount
  useEffect(() => {
    if (!coverageStart) {
      setCoverageStart(getTwoDaysFromNow());
    }
  }, [coverageStart]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!firstName || !lastName || !dob || !email || !phone) {
      setError("Please fill in all required fields");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms and Conditions");
      return;
    }

    setLoading(true);
    setError(null);

    // Map gender to API format (Item1 = Male, Item2 = Female)
    const genderMap: Record<string, string> = {
      Male: "Item1",
      Female: "Item2",
      Other: "Item1",
    };

    // Map salutation to API format
    const salutationMap: Record<string, string> = {
      Mr: "Item1",
      Mrs: "Item2",
      Ms: "Item2",
      Dr: "Item1",
    };

    // Format date from YYYY-MM-DD to DD.MM.YYYY for API
    const formatDateForAPI = (dateStr: string) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split("-");
      return `${day}.${month}.${year}`;
    };

    const payload = {
      tarifId: "34572",
      vorname: firstName,
      name: lastName,
      geburtsdatum: dob,
      beginn: formatDateForAPI(coverageStart),
      anrede: salutationMap[salutation] || "Item1",
      geschlecht: genderMap[gender] || "Item1",
    };

    console.log("Submitting application:", payload);

    try {
      const res = await fetch("/api/getOrderEinzel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server returned ${res.status}: ${text}`);
      }

      const contentType = res.headers.get("Content-Type") || "";

      // Check if response is PDF
      if (contentType.includes("application/pdf")) {
        const arrayBuffer = await res.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });

        // Convert to base64 for storage
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;

          // Get filename
          const disposition = res.headers.get("Content-Disposition") || "";
          let filename = "application.pdf";
          const match = /filename="?([^"]+)"?/.exec(disposition);
          if (match && match[1]) filename = match[1];

          // Store as base64 in sessionStorage
          sessionStorage.setItem("applicationPdfBase64", base64String);
          sessionStorage.setItem("applicationPdfFilename", filename);

          // Store application details
          sessionStorage.setItem(
            "applicationDetails",
            JSON.stringify({
              name: `${salutation} ${firstName} ${lastName}`,
              email,
              phone,
              dob,
              coverageStart,
            })
          );

          // Navigate to success page
          router.push("/calculator/submitApplication/success");
        };
        reader.readAsDataURL(blob);
        return;
      }

      // Handle JSON response
      const json = await res.json();

      if (json?.status?.meldung) {
        setError(json.status.meldung);
        return;
      }

      // Handle documents array
      if (
        json?.documents &&
        Array.isArray(json.documents) &&
        json.documents.length > 0
      ) {
        const firstDoc = json.documents[0];
        if (firstDoc.base64) {
          const base64Data = firstDoc.base64;
          const filename =
            firstDoc.fileName || firstDoc.kurz || "application.pdf";

          // Store base64 directly
          sessionStorage.setItem("applicationPdfBase64", base64Data);
          sessionStorage.setItem("applicationPdfFilename", filename);

          // Store application details
          sessionStorage.setItem(
            "applicationDetails",
            JSON.stringify({
              name: `${salutation} ${firstName} ${lastName}`,
              email,
              phone,
              dob,
              coverageStart,
            })
          );

          // Navigate to success
          router.push("/calculator/submitApplication/success");
          return;
        }
      }

      // If we get here, navigate to success anyway
      sessionStorage.setItem(
        "applicationDetails",
        JSON.stringify({
          name: `${salutation} ${firstName} ${lastName}`,
          email,
          phone,
          dob,
          coverageStart,
        })
      );
      router.push("/application/success");
    } catch (err) {
      console.error("Submit error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (dateString: string) => {
    if (!dateString) return "";
    const today = new Date();
    const birthDate = new Date(dateString);
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

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-40 bg-primary relative flex items-center justify-center"
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 h-full flex items-center"
        >
          <Image
            src="/icons/leftside.svg"
            alt="Left Decoration"
            width={100}
            height={100}
            className="object-cover h-full"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bg-white/20 rounded-full px-4 py-1 mb-2 text-sm font-medium text-white"
          >
            Health Prioritized
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Complete Your Application
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-sm text-gray-400 mb-6"
          >
            We need a few more details to process your application for Hallesche
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 h-full flex items-center"
        >
          <Image
            src="/icons/rightside.svg"
            alt="Right Decoration"
            width={100}
            height={100}
            className="object-cover h-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-6"
      >
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
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
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Coverage Start Date *
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="date"
              value={coverageStart}
              onChange={(e) => setCoverageStart(e.target.value)}
              min={getTwoDaysFromNow()}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Default set to 2 days from today. You can change if needed.
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

          {/* Important Information */}
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

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            type="submit"
            disabled={loading}
            className={`w-full py-4 cursor-pointer rounded-lg font-semibold text-white text-lg transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90"
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
                Submitting Application...
              </span>
            ) : (
              "Submit Application"
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
