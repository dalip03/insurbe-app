"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, UploadCloud, ArrowLeft, Shield } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

type Step = 1 | 2 | 3 | 4;

const PROVIDERS: Record<string, { name: string; desc: string }> = {
  tk: { name: "TK", desc: "Best digital services for students" },
  dak: { name: "DAK", desc: "Excellent coverage for families" },
  aok: { name: "AOK", desc: "Personal support across Germany" },
};

export default function InsuranceSignupFlow() {
  const router = useRouter();
  const [providerFromUrl, setProviderFromUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProviderFromUrl(params.get("provider"));
  }, []);

  const [step, setStep] = useState<Step>(1);

  const [selectPlan, setSelectPlan] = useState({
    reason: "",
    dob: "",
    provider: "",
    insuredBefore: "",
  });

  const [documents, setDocuments] = useState({
    passport: false,
    contract: false,
    photo: false,
  });

  const [personal, setPersonal] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (providerFromUrl && PROVIDERS[providerFromUrl]) {
      setSelectPlan((prev) => ({
        ...prev,
        provider: PROVIDERS[providerFromUrl].name,
      }));
    }
  }, [providerFromUrl]);

  const canProceedPlan =
    selectPlan.reason &&
    selectPlan.dob &&
    selectPlan.provider &&
    documents.passport &&
    documents.contract &&
    documents.photo;

  const canProceedPersonal = personal.name && personal.email;

  const next = () => setStep((s) => (s + 1) as Step);
  const back = () => setStep((s) => (s - 1) as Step);

  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ========== SUBTLE HEADER ========== */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Insurance Signup
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Public{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Insurance Journey
            </span>
          </h1>
        </motion.div>

        {/* ========== MAIN CARD WITH SUBTLE BORDER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border rounded-2xl shadow-lg p-6 sm:p-10"
        >
          {/* STEPPER */}
          <div className="flex items-center justify-between mb-10">
            {["Select Plan", "Personal Info", "Review"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${
                      step > i + 1
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : step === i + 1
                          ? "border-2 border-purple-600 text-purple-600 bg-purple-50"
                          : "bg-gray-200 text-gray-400"
                    }`}
                >
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className="hidden sm:block text-sm text-gray-600">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Select plan</h2>

                {/* Reason */}
                <div className="mb-6">
                  <p className="font-medium mb-2">What is the reason for your stay in Germany?</p>
                  <div className="flex gap-3">
                    {["Student", "Employee", "Trainee"].map((r) => (
                      <button
                        key={r}
                        onClick={() =>
                          setSelectPlan({ ...selectPlan, reason: r })
                        }
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all
                          ${
                            selectPlan.reason === r
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-md"
                              : "border-gray-300 hover:border-purple-300 hover:shadow-sm"
                          }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DOB */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">Birth date</label>
                  <input
                    type="date"
                    value={selectPlan.dob}
                    onChange={(e) =>
                      setSelectPlan({ ...selectPlan, dob: e.target.value })
                    }
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* SELECTED PROVIDER */}
                <div className="mb-6">
                  <p className="font-medium mb-2">Selected provider</p>
                  <div className="p-4 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
                    <p className="font-semibold text-purple-700">
                      {selectPlan.provider}
                    </p>
                    <p className="text-sm text-gray-600">Public health insurance</p>
                  </div>
                </div>

                {/* Previous Insurance */}
                <div className="mb-6">
                  <p className="font-medium mb-2">Where were you insured before?</p>
                  <div className="flex gap-3">
                    {["Abroad", "Germany"].map((v) => (
                      <button
                        key={v}
                        onClick={() =>
                          setSelectPlan({
                            ...selectPlan,
                            insuredBefore: v,
                          })
                        }
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all
                          ${
                            selectPlan.insuredBefore === v
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-md"
                              : "border-gray-300 hover:border-purple-300 hover:shadow-sm"
                          }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload documents */}
                <div className="mb-8">
                  <p className="font-medium mb-3">Upload documents</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { key: "passport", label: "Passport *" },
                      { key: "contract", label: "Employment contract *" },
                      { key: "photo", label: "Portrait photo *" },
                    ].map((d) => (
                      <div
                        key={d.key}
                        onClick={() =>
                          setDocuments({
                            ...documents,
                            [d.key]: true,
                          })
                        }
                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-sm
                          ${
                            documents[d.key as keyof typeof documents]
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-300 hover:border-purple-300"
                          }`}
                      >
                        <UploadCloud className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                        <p className="text-sm font-medium">{d.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!canProceedPlan}
                  onClick={next}
                  className={`w-full py-3 rounded-lg font-semibold transition-all
                    ${
                      canProceedPlan
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  Further →
                </button>
              </motion.div>
            )}

            {/* STEP 2, 3, 4 remain exactly the same */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Personal information</h2>
                <div className="space-y-5">
                  <input
                    placeholder="Full name"
                    value={personal.name}
                    onChange={(e) =>
                      setPersonal({ ...personal, name: e.target.value })
                    }
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                  <input
                    placeholder="Email address"
                    type="email"
                    value={personal.email}
                    onChange={(e) =>
                      setPersonal({ ...personal, email: e.target.value })
                    }
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={back}
                    className="flex-1 border-2 border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 font-medium hover:border-purple-400 hover:bg-purple-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    disabled={!canProceedPersonal}
                    onClick={next}
                    className={`flex-1 py-3 rounded-lg font-semibold shadow-md
                      ${
                        canProceedPersonal
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    Review →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Review</h2>
                <div className="space-y-3 text-sm bg-gray-50 p-6 rounded-xl border">
                  <Review label="Name" value={personal.name} />
                  <Review label="Email" value={personal.email} />
                  <Review label="Reason" value={selectPlan.reason} />
                  <Review label="Provider" value={selectPlan.provider} />
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={back}
                    className="flex-1 border-2 border-gray-300 rounded-lg py-3 font-medium hover:border-purple-400 hover:bg-purple-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg py-3 font-semibold shadow-md hover:shadow-lg"
                  >
                    Submit ✓
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-center py-6 sm:py-10"
              >
                <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-lg border px-6 sm:px-8 py-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                      <img
                        src="/gifs_assets/clap.png"
                        alt="Booking successful"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Thank you for choosing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                      InsurBe
                    </span>
                    !
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    Your booking was successful. You will receive an email with
                    your <strong>order ID</strong>. Please use this ID when
                    contacting us via email, chat, or any other channel.
                    <br />
                    <br />
                    It may take up to <strong>24 hours</strong> for us to provide
                    all the necessary documents.
                  </p>
                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transition-all shadow-md"
                  >
                    Back Home
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Review({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
