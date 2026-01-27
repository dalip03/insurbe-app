"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Sparkles, Download, ChevronDown, ChevronUp } from "lucide-react";

const comparisonData = [
  { label: "Hospital accommodation", standard: "Shared room", plus: "2-bed room", premium: "Single room" },
  { label: "Doctor choice", standard: "Attending physician", plus: "Private doctor", premium: "Private doctor" },
  { label: "Medicines & remedies", standard: "80% up to €4,000", plus: "80% up to €2,000", premium: "100%" },
  { label: "Alternative medicine", standard: "–", plus: "€1,200 / year", premium: "€2,400 / year" },
  { label: "Visual aids", standard: "€150 / 2 years", plus: "€300 / 2 years", premium: "€450 / 2 years" },
  { label: "Dental treatment", standard: "100% (1 cleaning)", plus: "100% (2 cleanings)", premium: "100%" },
  { label: "Dentures & orthodontics", standard: "70%", plus: "80%", premium: "90%" },
  { label: "Deductible", standard: "€600 – €3,000", plus: "€600 – €3,000", premium: "€600 – €3,000" },
  { label: "Health bonus", standard: "€100 / month", plus: "€100 / month", premium: "€100 / month" },
];

export default function PrivateInsuranceTariffs() {
  const [showCompare, setShowCompare] = useState(false);

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
    <section id="teriffs" className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Choose Your Coverage
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Which{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              tariff suits
            </span>{" "}
            you best
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            For those who make no compromises when it comes to health – with
            maximum freedom of choice and first-class medical care.
          </p>
        </motion.div>

        {/* Tariff Cards with Comparison */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Standard Column */}
          <TariffColumn
            title="Standard"
            price="€331.73"
            period="per month"
            badge="Essential"
            points={[
              "Shared or double room",
              "Up to 80% medicines & remedies",
              "Basic dental coverage",
            ]}
            comparisonKey="standard"
            showCompare={showCompare}
            variants={cardVariants}
          />

          {/* Plus Column */}
          <TariffColumn
            title="Plus"
            price="€526.57"
            period="per month"
            badge="Most Popular"
            highlighted
            points={[
              "2-bed room & private doctor",
              "Higher limits for medicines",
              "Better dental benefits",
            ]}
            comparisonKey="plus"
            showCompare={showCompare}
            variants={cardVariants}
          />

          {/* Premium Column */}
          <TariffColumn
            title="Premium"
            price="€636.00"
            period="per month"
            badge="Ultimate"
            points={[
              "Single room & private doctor",
              "100% coverage for treatments",
              "Top dental & visual benefits",
            ]}
            comparisonKey="premium"
            showCompare={showCompare}
            variants={cardVariants}
          />
        </motion.div>

        {/* Compare Button */}
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
            className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition inline-flex items-center gap-2"
          >
            {showCompare ? "Hide" : "Compare"} tariffs
            {showCompare ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Tariff Column (Card + Comparison) ---------------- */

function TariffColumn({
  title,
  price,
  period,
  badge,
  points,
  highlighted = false,
  comparisonKey,
  showCompare,
  variants,
}: {
  title: string;
  price: string;
  period: string;
  badge: string;
  points: string[];
  highlighted?: boolean;
  comparisonKey: "standard" | "plus" | "premium";
  showCompare: boolean;
  variants: any;
}) {
  return (
    <motion.div variants={variants} className="flex flex-col">
      {/* Tariff Card */}
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`relative rounded-t-3xl p-8 ${
          highlighted
            ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl"
            : "bg-white text-gray-900 shadow-xl"
        } transition-all duration-300 ${showCompare ? 'rounded-b-none' : 'rounded-b-3xl'}`}
        style={{ minHeight: highlighted ? '450px' : '450px' }}
      >
        {/* Badge */}
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
              {period}
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
                className={`flex items-start gap-3 text-sm ${highlighted ? "text-purple-50" : "text-gray-700"}`}
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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-full font-bold transition-all ${
              highlighted
                ? "bg-white text-purple-600 hover:bg-purple-50 shadow-lg"
                : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:opacity-90 shadow-md"
            }`}
          >
            Select Plan
          </motion.button>
        </div>
      </motion.div>

      {/* Comparison Details */}
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

              {/* Download Brochure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: comparisonData.length * 0.05 }}
                className="pt-4"
              >
                <button className="w-full py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}