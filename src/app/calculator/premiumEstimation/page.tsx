// app/premiumEstimation/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePremiumStore } from "@/app/stores/premiumStore";
import Image from "next/image";

export default function PremiumEstimationPage() {
  const router = useRouter();
  const { form, setForm, setPremium, setDocuments } = usePremiumStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set default values on component mount if form is empty
  React.useEffect(() => {
    if (!form.firstName && !form.lastName) {
      // Get today's date in YYYY-MM-DD format for coverage start
      const today = new Date();
      const coverageStartDate = today.toISOString().split('T')[0];
      
      // Set DOB to 30 years ago as default
      const dobDate = new Date();
      dobDate.setFullYear(dobDate.getFullYear() - 30);
      const defaultDob = dobDate.toISOString().split('T')[0];

      setForm({
        title: "Mr",
        firstName: "Max",
        lastName: "Mustermann",
        dob: defaultDob,
        age: "30",
        gender: "Male",
        coverageStart: coverageStartDate,
        employmentStatus: "Student",
        planNameVersion: "MAWISTA Expat",
        hasSchengenVisa: "yes"
      });
    }
  }, [form.firstName, form.lastName, setForm]);

  // helper to call your offer API; map fields as required by your backend
  async function getOfferAndNavigate() {
    setLoading(true);
    setError(null);

    // ---- USE EXACTLY THESE 5 FIELDS ----
    const payload = {
      tarifId: "34572",
      vorname: form.firstName,
      name: form.lastName,
      geburtsdatum: form.dob,
      beginn: form.coverageStart,
    };
    // ------------------------------------

    try {
      const res = await fetch("/api/getOfferEinzel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      //   console.log("Fetch /api/getOfferEinzel response:", res);
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Server ${res.status}: ${txt}`);
      }

      const json = await res.json();

      // Save to Zustand store
      setPremium(json.premium ?? null);
      setDocuments(json.documents ?? []);

      router.push("/calculator/premiumEstimation/premiumResult");
    } catch (e: unknown) {
      if (e instanceof Error) setError(e.message);
      else setError("Failed to fetch offer");
    } finally {
      setLoading(false);
    }
  }

  function calculateAge(dateString: string) {
    if (!dateString) return "";
    const today = new Date();
    const dob = new Date(dateString);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-40 bg-primary relative flex items-center justify-center">
        {/* Left Image */}
        <div className="absolute left-0 h-full flex items-center">
          <Image
            src="/icons/leftside.svg" // replace with your left image
            alt="Left Decoration"
            width={100}
            height={100}
            className="object-cover h-full"
          />
        </div>

        {/* Center Text */}
        <div className="text-center">
          <span className="inline-block bg-white/20 rounded-full px-4 py-1 mb-2 text-sm font-medium text-white">
            Health Prioritized
          </span>
          <h1 className="text-3xl font-bold text-white">
            Get a Premium Estimation
          </h1>
          <p className="text-center text-sm text-gray-400 mb-6">
            Enter your basic details to calculate your premium for MAWISTA Expat
          </p>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 h-full flex items-center">
          <Image
            src="/icons/rightside.svg"
            alt="Right Decoration"
            width={100}
            height={100}
            className="object-cover h-full"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6 mt-4">
        <a
          className="text-sm text-gray-600 hover:underline cursor-pointer mb-4"
          onClick={() => router.back()}
        >
          ← Back to Plans
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Title */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">Title *</div>
            <select
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
          </label>

          {/* First Name */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">First Name *</div>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.firstName}
              onChange={(e) => setForm({ firstName: e.target.value })}
              placeholder="First name"
            />
          </label>

          {/* Last Name */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">Last Name *</div>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.lastName}
              onChange={(e) => setForm({ lastName: e.target.value })}
              placeholder="Last name"
            />
          </label>

          {/* DOB */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">Date of Birth *</div>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setForm({
                  dob: value,
                  age: calculateAge(value),
                });
              }}
              type="date"
              className="w-full border rounded px-3 py-2"
              value={form.dob}
              placeholder="yyyy-mm-dd"
            />
          </label>

          {/* Gender */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">Gender *</div>
            <select
              value={form.gender}
              onChange={(e) => setForm({ gender: e.target.value })}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>

          {/* Coverage Start */}
          <label className="space-y-1">
            <div className="text-sm text-gray-600">Coverage Start Date *</div>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={form.coverageStart}
              onChange={(e) => setForm({ coverageStart: e.target.value })}
              placeholder="yyyy-mm-dd"
            />
          </label>

          {/* Employment Status (full width) */}
          <div className="md:col-span-2 border border-primary/40 bg-primary/10 rounded-lg p-8">
            {/* Employment Status (full width) */}
            <div className="md:col-span-2">
              <div className="text-md text-gray-800 mb-2">
                Employment Status
              </div>

              <div className="flex gap-3">
                {["Student", "Freelancer/ Self-employed", "Insolder"].map(
                  (val) => {
                    return (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setForm({ employmentStatus: val })}
                        className={`px-3 py-1 rounded-md border transition-all ${
                          form.employmentStatus === val
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Plan Name & Version */}
          <div className="md:col-span-1">
            <div className="text-sm text-gray-600">Plan Name & Version</div>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.planNameVersion}
              onChange={(e) => setForm({ planNameVersion: e.target.value })}
              placeholder="MAWISTA Expat"
            />
          </div>

          {/* Age */}
          <div className="md:col-span-1">
            <div className="text-sm text-gray-600">Age (in years)</div>
            <input
              className="w-full border rounded px-3 py-2 bg-gray-100"
              value={form.age || "1"}
              readOnly
            />
          </div>

          {/* Schengen Visa */}
          <div className="md:col-span-2">
            <div className="text-sm text-gray-600 mb-2">
              Do you have Schengen Visa?
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setForm({ hasSchengenVisa: "yes" })}
                className={`px-3 py-1 rounded-md border ${
                  form.hasSchengenVisa === "yes" ? "bg-primary text-white" : ""
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setForm({ hasSchengenVisa: "no" })}
                className={`px-3 py-1 rounded-md border ${
                  form.hasSchengenVisa === "no" ? "bg-primary text-white" : ""
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/* Update / Get Quote button */}
        <div className="mt-6 text-center">
          {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

          <button
            onClick={getOfferAndNavigate}
            disabled={loading}
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow"
          >
            {loading ? "Calculating..." : "Update Results"}
          </button>
        </div>
      </div>
    </div>
  );
}
