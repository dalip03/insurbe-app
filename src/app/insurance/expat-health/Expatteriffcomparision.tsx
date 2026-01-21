"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

export default function Expatteriffcomparision() {
  const [showCompare, setShowCompare] = useState(false);
  const router = useRouter();

  return (
    <section className="py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Which{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Expat tariff
            </span>{" "}
            suits you best?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            For those who make no compromises when it comes to health – with
            maximum freedom of choice and first-class medical care.
          </p>
        </motion.div>

        {/* TARIFF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <TariffCard
            title="Basic"
            price="€72.89"
            badge="Lower Cost"
            points={[
              "Multi-bed hospital room",
              "100% outpatient treatment",
              "Basic digital services",
              "Limited visual aids",
            ]}
            onSignup={() => router.push("/products/insuranceJourney")}
          />

          <TariffCard
            title="Premium"
            price="€147.88"
            badge="Best Coverage"
            highlighted
            points={[
              "Single-bed hospital room",
              "Private doctor access",
              "Extended digital services",
              "Higher visual & remedy limits",
            ]}
            onSignup={() => router.push("/products/insuranceJourney")}
          />
        </div>

        {/* COMPARE BUTTON */}
        {!showCompare && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCompare(true)}
              className="
                inline-flex items-center gap-2
                px-10 py-4 rounded-full
                bg-gradient-to-r from-primary to-purple-600
                text-white font-semibold
                shadow-lg cursor-pointer
              "
            >
              Compare tariffs
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </div>
        )}

        {/* COMPARISON TABLE */}
        <AnimatePresence>
          {showCompare && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-14"
            >
              <ComparisonTable />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TARIFF CARD                                                         */
/* ------------------------------------------------------------------ */

function TariffCard({
  title,
  price,
  badge,
  points,
  highlighted = false,
  onSignup,
}: {
  title: string;
  price: string;
  badge: string;
  points: string[];
  highlighted?: boolean;
  onSignup: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`
        relative rounded-3xl p-8 border
        ${highlighted
          ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl scale-105"
          : "bg-white border-gray-200 shadow-lg"}
      `}
    >
      {/* BADGE */}
      <div
        className={`
          absolute -top-4 left-1/2 -translate-x-1/2
          px-4 py-1.5 rounded-full text-xs font-bold
          ${highlighted ? "bg-yellow-400 text-black" : "bg-purple-100 text-purple-700"}
        `}
      >
        {badge}
      </div>

      <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>

      <p className="text-4xl font-extrabold mb-6">
        {price}
        <span className={`text-sm ml-2 ${highlighted ? "text-purple-100" : "text-gray-500"}`}>
          / month
        </span>
      </p>

      <ul className="space-y-4 mb-8">
        {points.map((p) => (
          <li key={p} className="flex gap-3 items-start">
            <span
              className={`
                w-6 h-6 rounded-full flex items-center justify-center
                ${highlighted ? "bg-white/20" : "bg-purple-100"}
              `}
            >
              <Check className={`w-4 h-4 ${highlighted ? "text-white" : "text-purple-600"}`} />
            </span>
            <span className={`${highlighted ? "text-purple-50" : "text-gray-700"}`}>
              {p}
            </span>
          </li>
        ))}
      </ul>

      {/* SIGNUP BUTTON */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onSignup}
        className={`
          w-full py-3 rounded-full font-semibold
          ${highlighted
            ? "bg-white text-purple-600 hover:bg-purple-50"
            : "bg-gradient-to-r from-primary to-purple-600 text-white "}
        `}
      >
        Sign up
      </motion.button>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* COMPARISON TABLE                                                    */
/* ------------------------------------------------------------------ */

function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <th className="p-5 text-left font-semibold">Benefits</th>
            <th className="p-5 text-center font-semibold">Basic</th>
            <th className="p-5 text-center font-semibold bg-purple-100">Premium</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          <Row label="Hospital accommodation" basic="Multi-bed room" premium="Single-bed room" />
          <Row label="Doctor choice" basic="Standard" premium="Private doctor" />
          <Row label="Digital services" basic="Up to €60 / year" premium="Up to €120 / year" />
          <Row label="Medicines & remedies" basic="100%" premium="100%" />
          <Row label="Visual aids" basic="—" premium="€250 every 2 years" />
          <Row label="Naturopathy" basic="Doctors only" premium="Doctors & practitioners" />
        </tbody>
      </table>
    </div>
  );
}

function Row({ label, basic, premium }: { label: string; basic: string; premium: string }) {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="p-5 font-medium">{label}</td>
      <td className="p-5 text-center text-gray-700">{basic}</td>
      <td className="p-5 text-center bg-purple-50 font-medium">{premium}</td>
    </tr>
  );
}
