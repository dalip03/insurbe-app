"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Shield,
  User,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Phone,
  Building,
  AlertCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface FormData {
  // Applicant Details
  title: string;
  firstName: string;
  surname: string;
  street: string;
  postalCode: string;
  townCity: string;
  mobileNumber: string;
  email: string;
  passportId: string;
  dateOfBirth: string;

  // Period of Insurance
  startMonth: string;
  startYear: string;
  periodOfInsurance: string;

  // Study Details
  hasInsuredPartner: string;
  studyType: string;
  nameOfInstitution: string;
  beginOfStudy: string;
  endOfStudy: string;
  hadPreviousInsurance: string;

  // Health Insurance
  insuranceType: string;

  // Medical Questions
  medicalQuestion1: string;
  medicalQuestion2: string;

  // Country of Origin
  countryOfOrigin: string;

  // Declaration
  acceptTerms: boolean;
  acceptDisclosure: boolean;
  acceptMarketing: boolean;
  needsConsultation: string;
}

export default function OttonovaSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    firstName: "",
    surname: "",
    street: "",
    postalCode: "",
    townCity: "",
    mobileNumber: "",
    email: "",
    passportId: "",
    dateOfBirth: "",
    startMonth: "",
    startYear: "",
    periodOfInsurance: "",
    hasInsuredPartner: "",
    studyType: "",
    nameOfInstitution: "",
    beginOfStudy: "",
    endOfStudy: "",
    hadPreviousInsurance: "",
    insuranceType: "classic",
    medicalQuestion1: "",
    medicalQuestion2: "",
    countryOfOrigin: "Germany",
    acceptTerms: false,
    acceptDisclosure: false,
    acceptMarketing: false,
    needsConsultation: "no",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Required field validation
    if (!formData.title) newErrors.title = "Please select a title";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.street) newErrors.street = "Street address is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.townCity) newErrors.townCity = "Town/City is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.passportId) newErrors.passportId = "Passport ID is required";

    // Period of Insurance
    if (!formData.startMonth) newErrors.startMonth = "Start month is required";
    if (!formData.startYear) newErrors.startYear = "Start year is required";
    if (!formData.periodOfInsurance) newErrors.periodOfInsurance = "Period is required";

    // Study Details
    if (!formData.hasInsuredPartner) newErrors.hasInsuredPartner = "Please select an option";
    if (!formData.studyType) newErrors.studyType = "Study type is required";
    if (!formData.nameOfInstitution) newErrors.nameOfInstitution = "Institution name is required";
    if (!formData.beginOfStudy) newErrors.beginOfStudy = "Begin date is required";
    if (!formData.endOfStudy) newErrors.endOfStudy = "End date is required";
    if (!formData.hadPreviousInsurance) newErrors.hadPreviousInsurance = "Please select an option";

    // Medical Questions
    if (!formData.medicalQuestion1) newErrors.medicalQuestion1 = "Please answer this question";
    if (!formData.medicalQuestion2) newErrors.medicalQuestion2 = "Please answer this question";

    // Declaration
    if (!formData.acceptTerms) newErrors.acceptTerms = "You must accept the terms";
    if (!formData.acceptDisclosure) newErrors.acceptDisclosure = "You must accept the disclosure";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Store form data in localStorage for persistence
      localStorage.setItem("ottonovaFormData", JSON.stringify(formData));
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl shadow-2xl shadow-green-500/10 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl shadow-green-500/30 mb-8"
            >
              <CheckCircle className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Application Submitted Successfully! 🎉
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Thank you, <span className="font-bold text-green-600">{formData.firstName}</span>! Your insurance application has been received.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                What happens next?
              </h3>
              <ul className="text-left space-y-3 max-w-xl mx-auto">
                {[
                  "We'll review your application within 24-48 hours",
                  "You'll receive a confirmation email at " + formData.email,
                  "Our team will contact you if additional information is needed",
                  "Once approved, you'll receive your policy documents",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/"}
                className="px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
              >
                Return to Homepage
              </motion.button>

              <p className="text-sm text-gray-500">
                Need help? Contact us at{" "}
                <a href="mailto:info@ottonova.com" className="text-green-600 font-semibold hover:underline">
                  info@ottonova.com
                </a>{" "}
                or call{" "}
                <a href="tel:+4970244695100" className="text-green-600 font-semibold hover:underline">
                  +49 7024 469 51-0
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-4">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">OTTONOVA STUDENT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Online Application
          </h1>
          <p className="text-lg text-gray-600">
            You can only apply for this insurance, if you provide an address in Germany.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl shadow-purple-500/10 p-8 sm:p-12 space-y-10"
        >
          {/* Applicant Details */}
          <FormSection
            title="Applicant (policyholder, insured person)"
            icon={User}
            color="purple"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Title" name="title" required error={errors.title}>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                  <option value="dr">Dr.</option>
                  <option value="prof">Prof.</option>
                </select>
              </FormField>

              <FormField label="First Name" name="firstName" required error={errors.firstName}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter first name"
                />
              </FormField>

              <FormField label="Surname" name="surname" required error={errors.surname}>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter surname"
                />
              </FormField>

              <FormField label="Additional Address Information" name="additionalAddress">
                <input
                  type="text"
                  name="additionalAddress"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Apartment, suite, etc."
                />
              </FormField>

              <FormField label="Street" name="street" required error={errors.street}>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Street address"
                />
              </FormField>

              <FormField label="Postal Code" name="postalCode" required error={errors.postalCode}>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Postal code"
                />
              </FormField>

              <FormField label="Town/City" name="townCity" required error={errors.townCity}>
                <input
                  type="text"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Town or city"
                />
              </FormField>

              <FormField label="Mobile Number" name="mobileNumber">
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="+49 123 4567890"
                />
              </FormField>

              <FormField label="E-Mail" name="email" required error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </FormField>

              <FormField label="Passport ID No." name="passportId" required error={errors.passportId}>
                <input
                  type="text"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Passport number"
                />
              </FormField>

              <FormField label="Date of Birth" name="dateOfBirth" required error={errors.dateOfBirth}>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </FormField>
            </div>
          </FormSection>

          {/* Period of Insurance */}
          <FormSection title="Period of Insurance" icon={Calendar} color="pink">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField label="Start Month" name="startMonth" required error={errors.startMonth}>
                <select
                  name="startMonth"
                  value={formData.startMonth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, idx) => (
                    <option key={idx} value={month}>{month}</option>
                  ))}
                </select>
              </FormField>

              <FormField label="Start Year" name="startYear" required error={errors.startYear}>
                <select
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  {[2026, 2027, 2028].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </FormField>

              <FormField label="Period of Insurance" name="periodOfInsurance" required error={errors.periodOfInsurance}>
                <select
                  name="periodOfInsurance"
                  value={formData.periodOfInsurance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="3months">3 Months</option>
                  <option value="6months">6 Months</option>
                  <option value="12months">12 Months</option>
                  <option value="24months">24 Months</option>
                </select>
              </FormField>
            </div>
          </FormSection>

          {/* Study Details */}
          <FormSection title="Study details (insured person)" icon={GraduationCap} color="blue">
            <div className="space-y-6">
              <RadioGroup
                label="Has the insured person a limited residency permit in Germany?"
                name="hasInsuredPartner"
                value={formData.hasInsuredPartner}
                onChange={handleInputChange}
                error={errors.hasInsuredPartner}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Study Type" name="studyType" required error={errors.studyType}>
                  <select
                    name="studyType"
                    value={formData.studyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD / Doctorate</option>
                    <option value="language">Language Course</option>
                    <option value="other">Other</option>
                  </select>
                </FormField>

                <FormField label="Name of Institution" name="nameOfInstitution" required error={errors.nameOfInstitution}>
                  <input
                    type="text"
                    name="nameOfInstitution"
                    value={formData.nameOfInstitution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="University or institution name"
                  />
                </FormField>

                <FormField label="Begin of Study" name="beginOfStudy" required error={errors.beginOfStudy}>
                  <input
                    type="date"
                    name="beginOfStudy"
                    value={formData.beginOfStudy}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </FormField>

                <FormField label="End of Study" name="endOfStudy" required error={errors.endOfStudy}>
                  <input
                    type="date"
                    name="endOfStudy"
                    value={formData.endOfStudy}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </FormField>
              </div>

              <RadioGroup
                label="Has the insured person had a health insurance (still at the commencement of the new OTTONOVA Student insurance or within a period of 6 months before)?"
                name="hadPreviousInsurance"
                value={formData.hadPreviousInsurance}
                onChange={handleInputChange}
                error={errors.hadPreviousInsurance}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </div>
          </FormSection>

          {/* Health Insurance */}
          <FormSection title="Health Insurance" icon={Shield} color="emerald">
            <div className="space-y-4">
              {[
                {
                  value: "classic",
                  title: "OTTONOVA Student Classic",
                  description: "Excluding liability and accident insurance",
                },
                {
                  value: "classicPlus",
                  title: "OTTONOVA Student Classic Plus",
                  description: "Including liability and accident insurance",
                },
                {
                  value: "comfort",
                  title: "OTTONOVA Student Comfort",
                  description: "Excluding liability and accident insurance",
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.insuranceType === option.value
                      ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-lg"
                      : "border-gray-200 bg-white/50 hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="insuranceType"
                    value={option.value}
                    checked={formData.insuranceType === option.value}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{option.title}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </FormSection>

          {/* Medical Questions */}
          <FormSection title="Medical Questions" icon={FileText} color="red">
            <div className="space-y-6">
              <RadioGroup
                label="Within the last 36 months period have you been treated or have you sought medical advice for health issues (except minor acute common cold, flue, similar illness or health care that lasted no longer than 30 days without any permanent treatment or damage)?"
                name="medicalQuestion1"
                value={formData.medicalQuestion1}
                onChange={handleInputChange}
                error={errors.medicalQuestion1}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />

              <RadioGroup
                label="Are you awaiting results of tests/investigations or have at least one medical treatment planned (such as in-patient/out-patient or e.g. pending according to) but not related to hospital admission as surgery)?"
                name="medicalQuestion2"
                value={formData.medicalQuestion2}
                onChange={handleInputChange}
                error={errors.medicalQuestion2}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </div>
          </FormSection>

          {/* Country of Origin */}
          <FormSection title="Country of origin (land domicile) ℹ️" icon={MapPin} color="indigo">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
              <p className="text-sm text-blue-800">
                The country of the permanent or usual place of residence prior to start of the temporary foreign residence.
              </p>
            </div>
            <FormField label="Country of Domicile" name="countryOfOrigin">
              <select
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
              >
                <option value="Germany">Germany</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Other">Other</option>
              </select>
            </FormField>
          </FormSection>

          {/* Declaration of Agreement */}
          <FormSection title="Declaration of Agreement" icon={FileText} color="purple">
            <div className="space-y-4">
              <CheckboxField
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                error={errors.acceptTerms}
              >
                I have read and hereby accept the{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  Consumer and Product Information Sheet and the Terms and Conditions of Insurance
                </a>
                .
              </CheckboxField>

              <CheckboxField
                name="acceptDisclosure"
                checked={formData.acceptDisclosure}
                onChange={handleInputChange}
                error={errors.acceptDisclosure}
              >
                Yes, I have read the{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  notification for the disclosure obligation and the consequences of false statements
                </a>
                . My statements are in all truthfulness complete and true.
              </CheckboxField>

              <CheckboxField
                name="acceptMarketing"
                checked={formData.acceptMarketing}
                onChange={handleInputChange}
              >
                I consent to OTTONOVA GmbH sending me information and offers on other products for advertising purposes by email. I can object to the{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  use of my data
                </a>{" "}
                for advertising purposes at any time, for example by email to{" "}
                <a href="mailto:info@ottonova.com" className="text-purple-600 font-semibold hover:underline">
                  info@ottonova.com
                </a>
              </CheckboxField>

              <div className="pt-4 border-t border-gray-200">
                <RadioGroup
                  label="Consultation Preference"
                  name="needsConsultation"
                  value={formData.needsConsultation}
                  onChange={handleInputChange}
                  options={[
                    {
                      value: "no",
                      label: "Yes, I sufficiently informed myself about the product and I would like to continue without further consultation.",
                    },
                    {
                      value: "yes",
                      label: "I would like a consultation.",
                    },
                  ]}
                />

                {formData.needsConsultation === "no" && (
                  <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <p className="text-sm text-amber-800">
                      We are legally obligated to inform you that waiving the right to consultation may adversely affect the ability to assert a claim against us due to a breach of obligation of consultation.
                    </p>
                  </div>
                )}

                {formData.needsConsultation === "yes" && (
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      We would be happy to advise you by phone:{" "}
                      <a href="tel:+4970244695100" className="font-bold hover:underline">
                        +49 7024 469 51-0
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </FormSection>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-xl text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all flex items-center justify-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            Submit Application
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <p className="text-center text-sm text-gray-500">
            🔒 Your data is encrypted and secure. We respect your privacy.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

// Helper Components

interface FormSectionProps {
  title: string;
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
}

function FormSection({ title, icon: Icon, color, children }: FormSectionProps) {
  const colorMap: Record<string, string> = {
    purple: "from-purple-600 to-purple-700",
    pink: "from-pink-600 to-pink-700",
    blue: "from-blue-600 to-blue-700",
    emerald: "from-emerald-600 to-emerald-700",
    red: "from-red-600 to-red-700",
    indigo: "from-indigo-600 to-indigo-700",
  };

  return (
    <div className="space-y-6">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r ${colorMap[color]} text-white shadow-lg`}>
        <Icon className="w-6 h-6" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, name, required, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

function RadioGroup({ label, name, value, onChange, error, options }: RadioGroupProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">{label}</p>
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="w-5 h-5 text-purple-600 focus:ring-purple-500"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface CheckboxFieldProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  children: React.ReactNode;
}

function CheckboxField({ name, checked, onChange, error, children }: CheckboxFieldProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 w-5 h-5 text-purple-600 focus:ring-purple-500 rounded"
        />
        <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
          {children}
        </span>
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 ml-8 text-sm text-red-600 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
        )}
    </div>
  );
}
