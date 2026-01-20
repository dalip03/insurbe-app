"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, UploadCloud, ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

/* ------------------------------------------------------------------ */
/* TYPES                                                              */
/* ------------------------------------------------------------------ */

type Step = 1 | 2 | 3 | 4;

/* ------------------------------------------------------------------ */
/* PROVIDER MAP                                                       */
/* ------------------------------------------------------------------ */

const PROVIDERS: Record<string, { name: string; desc: string }> = {
  tk: { name: "TK", desc: "Best digital services for students" },
  dak: { name: "DAK", desc: "Excellent coverage for families" },
  aok: { name: "AOK", desc: "Personal support across Germany" },
};

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

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

  /* ------------------------------------------------------------------ */
  /* AUTO SELECT PROVIDER FROM PREVIOUS PAGE                            */
  /* ------------------------------------------------------------------ */

  useEffect(() => {
    if (providerFromUrl && PROVIDERS[providerFromUrl]) {
      setSelectPlan((prev) => ({
        ...prev,
        provider: PROVIDERS[providerFromUrl].name,
      }));
    }
  }, [providerFromUrl]);

  /* ------------------------------------------------------------------ */
  /* VALIDATIONS                                                       */
  /* ------------------------------------------------------------------ */

  const canProceedPlan =
    selectPlan.reason &&
    selectPlan.dob &&
    selectPlan.provider &&
    documents.passport &&
    documents.contract &&
    documents.photo;

  const canProceedPersonal = personal.name && personal.email;

  /* ------------------------------------------------------------------ */
  /* HELPERS                                                           */
  /* ------------------------------------------------------------------ */

  const next = () => setStep((s) => (s + 1) as Step);
  const back = () => setStep((s) => (s - 1) as Step);

  /* ------------------------------------------------------------------ */
  /* RENDER                                                            */
  /* ------------------------------------------------------------------ */

  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto bg-white border rounded-2xl shadow-sm p-6 sm:p-10">
        {/* STEPPER */}
        <div className="flex items-center justify-between mb-10">
          {["Select Plan", "Personal Info", "Review"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    step > i + 1
                      ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                      : step === i + 1
                        ? "border-2 border-primary text-primary"
                        : "bg-gray-200 text-gray-400"
                  }`}
              >
                {i + 1}
              </div>
              <span className="hidden sm:block text-sm text-gray-600">
                {label}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ============================================================= */}
          {/* STEP 1 — SELECT PLAN                                          */}
          {/* ============================================================= */}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6">Select plan</h2>

              {/* Reason */}
              <div className="mb-6">
                <p className="font-medium mb-2">
                  What is the reason for your stay in Germany?
                </p>
                <div className="flex gap-3">
                  {["Student", "Employee", "Trainee"].map((r) => (
                    <button
                      key={r}
                      onClick={() =>
                        setSelectPlan({ ...selectPlan, reason: r })
                      }
                      className={`px-4 py-2 rounded-lg border text-sm
                        ${
                          selectPlan.reason === r
                            ? "bg-primary text-white border-primary"
                            : "border-gray-300"
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
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              {/* SELECTED PROVIDER (LOCKED) */}
              <div className="mb-6">
                <p className="font-medium mb-2">Selected provider</p>
                <div className="p-4 rounded-xl border border-primary bg-primary/5">
                  <p className="font-semibold text-primary">
                    {selectPlan.provider}
                  </p>
                  <p className="text-sm text-gray-600">
                    Public health insurance
                  </p>
                </div>
              </div>

              {/* Previous Insurance */}
              <div className="mb-6">
                <p className="font-medium mb-2">
                  Where were you insured before?
                </p>
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
                      className={`px-4 py-2 rounded-lg border text-sm
                        ${
                          selectPlan.insuredBefore === v
                            ? "bg-primary text-white border-primary"
                            : "border-gray-300"
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
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
                        ${
                          documents[d.key as keyof typeof documents]
                            ? "border-primary bg-primary/5"
                            : "border-gray-300"
                        }`}
                    >
                      <UploadCloud className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                      <p className="text-sm">{d.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                disabled={!canProceedPlan}
                onClick={next}
                className={`w-full py-3 rounded-lg font-semibold
                  ${
                    canProceedPlan
                      ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Further
              </button>
            </motion.div>
          )}

          {/* ============================================================= */}
          {/* STEP 2 — PERSONAL INFO                                       */}
          {/* ============================================================= */}

          {step === 2 && (
            <motion.div key="step2">
              <h2 className="text-2xl font-bold mb-6">Personal information</h2>

              <div className="space-y-5">
                <input
                  placeholder="Full name"
                  value={personal.name}
                  onChange={(e) =>
                    setPersonal({ ...personal, name: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  placeholder="Email address"
                  type="email"
                  value={personal.email}
                  onChange={(e) =>
                    setPersonal({ ...personal, email: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={back}
                  className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  disabled={!canProceedPersonal}
                  onClick={next}
                  className={`flex-1 py-3 rounded-lg font-semibold
                    ${
                      canProceedPersonal
                        ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                >
                  Review
                </button>
              </div>
            </motion.div>
          )}

          {/* ============================================================= */}
          {/* STEP 3 — REVIEW                                              */}
          {/* ============================================================= */}

          {step === 3 && (
            <motion.div key="step3">
              <h2 className="text-2xl font-bold mb-6">Review</h2>

              <div className="space-y-3 text-sm">
                <Review label="Name" value={personal.name} />
                <Review label="Email" value={personal.email} />
                <Review label="Reason" value={selectPlan.reason} />
                <Review label="Provider" value={selectPlan.provider} />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={back}
                  className="flex-1 border rounded-lg py-3"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  className="flex-1 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg py-3 font-semibold"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          )}

          {/* ============================================================= */}
          {/* STEP 4 — SUCCESS (EDUBAO STYLE)                               */}
          {/* ============================================================= */}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center py-6 sm:py-10"
            >
              <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-lg border px-6 sm:px-8 py-8 text-center">
                {/* Illustration */}
                <div className="flex justify-center mb-6">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                    <img
                      src="/gifs_assets/clap.png"
                      alt="Booking successful"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thank you for choosing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                    Insurbe
                  </span>
                  !
                </h2>

                {/* Message */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Your booking was successful. You will receive an email with
                  your <strong>order ID</strong>. Please use this ID when
                  contacting us via email, chat, or any other channel.
                  <br />
                  <br />
                  It may take up to <strong>24 hours</strong> for us to provide
                  all the necessary documents.
                </p>

                {/* CTA */}
                <button
                  onClick={() => router.push("/")}
                  className="
          w-full
          py-3 sm:py-3.5
          rounded-lg
          text-sm sm:text-base
          font-semibold
          text-white
          bg-gradient-to-r from-primary to-purple-600
          hover:opacity-95
          transition
          shadow-md
        "
                >
                  Back Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* REVIEW ITEM                                                        */
/* ------------------------------------------------------------------ */

function Review({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
