"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Download, Star } from "lucide-react";

const comparisonData = [
  { label: "Hospital accommodation", basic: "Multi-bed room", premium: "Single-bed room" },
  { label: "Doctor choice", basic: "Standard", premium: "Private doctor" },
  { label: "Digital services", basic: "Up to €60 / year", premium: "Up to €120 / year" },
  { label: "Medicines & remedies", basic: "100%", premium: "100%" },
  { label: "Visual aids", basic: "—", premium: "€250 every 2 years" },
  { label: "Naturopathy", basic: "Doctors only", premium: "Doctors & practitioners" },
];

export default function Expatteriffcomparision() {
  const [showCompare, setShowCompare] = useState(false);
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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

        {/* TARIFF CARDS WITH COMPARISON */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Basic Column */}
          <TariffColumn
            title="Basic"
            price="€72.89"
            badge="Lower Cost"
            points={[
              "Multi-bed hospital room",
              "100% outpatient treatment",
              "Basic digital services",
              "Limited visual aids",
            ]}
            comparisonKey="basic"
            showCompare={showCompare}
            onSignup={() => router.push("/products/insuranceJourney")}
            variants={cardVariants}
          />

          {/* Premium Column */}
          <TariffColumn
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
            comparisonKey="premium"
            showCompare={showCompare}
            onSignup={() => router.push("/products/insuranceJourney")}
            variants={cardVariants}
          />
        </motion.div>

        {/* COMPARE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            {showCompare ? "Hide" : "Compare"} tariffs
            {showCompare ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TARIFF COLUMN (CARD + COMPARISON)                                  */
/* ------------------------------------------------------------------ */

function TariffColumn({
  title,
  price,
  badge,
  points,
  highlighted = false,
  comparisonKey,
  showCompare,
  onSignup,
  variants,
}: {
  title: string;
  price: string;
  badge: string;
  points: string[];
  highlighted?: boolean;
  comparisonKey: "basic" | "premium";
  showCompare: boolean;
  onSignup: () => void;
  variants: any;
}) {
  return (
    <motion.div variants={variants} className="flex flex-col">
      {/* TARIFF CARD */}
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`relative p-8 ${
          highlighted
            ? "bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl"
            : "bg-white border-2 border-gray-200 text-gray-900 shadow-xl"
        } transition-all duration-300 ${showCompare ? 'rounded-t-3xl' : 'rounded-3xl'}`}
        style={{ minHeight: highlighted ? '450px' : '450px' }}
      >
        {/* BADGE */}
        {highlighted ? (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-bold shadow-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 inline-flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {badge}
          </div>
        ) : (
          <div className="absolute top-6 right-6">
            <span className="text-purple-600 text-xs font-bold px-4 py-1 rounded-full bg-purple-100">
              {badge}
            </span>
          </div>
        )}

        <div className="mt-4">
          <h3 className={`text-3xl font-bold mb-2 ${highlighted ? "text-white" : "text-gray-900"}`}>
            {title}
          </h3>

          <div className="mb-6">
            <span className={`text-5xl font-bold ${highlighted ? "text-white" : "text-gray-900"}`}>
              {price}
            </span>
            <span className={`text-sm ml-2 ${highlighted ? "text-purple-100" : "text-gray-500"}`}>
              / month
            </span>
          </div>

          <ul className="space-y-4 mb-8">
            {points.map((p, idx) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-3 items-start text-sm ${highlighted ? "text-purple-50" : "text-gray-700"}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    highlighted ? "bg-white/20" : "bg-purple-100"
                  }`}
                >
                  <Check className={`w-4 h-4 ${highlighted ? "text-white" : "text-purple-600"}`} />
                </div>
                {p}
              </motion.li>
            ))}
          </ul>

          {/* SIGNUP BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSignup}
            className={`w-full py-4 rounded-full font-bold transition-all ${
              highlighted
                ? "bg-white text-purple-600 hover:bg-purple-50 shadow-lg"
                : "bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90 shadow-md"
            }`}
          >
            Sign up
          </motion.button>
        </div>
      </motion.div>

      {/* COMPARISON DETAILS */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              highlighted ? "bg-purple-50" : "bg-white"
            } rounded-b-3xl shadow-xl border-t-2 border-gray-200 overflow-hidden`}
          >
            <div className="p-6 space-y-4">
              {comparisonData.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`pb-4 border-b border-gray-200 last:border-b-0 ${
                    highlighted ? "border-purple-200" : ""
                  }`}
                >
                  <p className={`text-xs font-semibold mb-2 ${highlighted ? "text-purple-700" : "text-gray-500"}`}>
                    {item.label}
                  </p>
                  <p className={`text-sm font-medium ${highlighted ? "text-purple-900" : "text-gray-900"}`}>
                    {item[comparisonKey]}
                  </p>
                </motion.div>
              ))}

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}