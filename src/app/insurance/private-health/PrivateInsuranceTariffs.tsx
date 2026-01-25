"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Sparkles, Download, ChevronDown, ChevronUp } from "lucide-react";

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
      {/* Background Decoration */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div> */}

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

        {/* Tariff Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {/* Standard */}
          <TariffCard
            title="Standard"
            price="€331.73"
            period="per month"
            badge="Essential"
            points={[
              "Shared or double room",
              "Up to 80% medicines & remedies",
              "Basic dental coverage",
            ]}
            variants={cardVariants}
          />

          {/* Plus */}
          <TariffCard
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
            variants={cardVariants}
          />

          {/* Premium */}
          <TariffCard
            title="Premium"
            price="€636.00"
            period="per month"
            badge="Ultimate"
            points={[
              "Single room & private doctor",
              "100% coverage for treatments",
              "Top dental & visual benefits",
            ]}
            variants={cardVariants}
          />
        </motion.div>

        {/* Compare Button */}
       {!showCompare && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="text-center mb-4"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowCompare(true)}
      className="
        px-10 py-4 rounded-full
        bg-gradient-to-r from-primary to-purple-600
        text-white font-semibold
        shadow-lg hover:shadow-xl
        transition inline-flex items-center gap-2
      "
    >
      Compare tariffs
      <ChevronDown className="w-5 h-5" />
    </motion.button>
  </motion.div>
)}


        {/* Comparison Table */}
        <AnimatePresence>
          {showCompare && (
            <motion.div
              initial={{ opacity: 0, y: 40, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 40, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ComparisonTable />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}

/* ---------------- Tariff Card ---------------- */

function TariffCard({
  title,
  price,
  period,
  badge,
  points,
  highlighted = false,
  variants,
}: {
  title: string;
  price: string;
  period: string;
  badge: string;
  points: string[];
  highlighted?: boolean;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`
        relative rounded-2xl p-8 border
        ${highlighted
          ? "border-transparent bg-gradient-to-br from-purple-600 to-primary text-white shadow-2xl scale-105 md:scale-110"
          : "border-gray-200 shadow-lg bg-white hover:shadow-xl"}
        transition-all duration-300
      `}
    >
      {/* Badge */}
      <div
        className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold shadow-md inline-flex items-center gap-1
          ${highlighted
            ? "bg-yellow-400 text-yellow-900"
            : "bg-purple-100 text-purple-700"}
        `}
      >
        {highlighted && <Star className="w-3 h-3 fill-current" />}
        {badge}
      </div>

      <div className="mt-4">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>
        
        <div className="mb-6">
          <span className={`text-4xl font-bold ${highlighted ? "text-white" : "text-gray-900"}`}>
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
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                ${highlighted ? "bg-white/20" : "bg-purple-100"}`}>
                <Check className={`w-4 h-4 ${highlighted ? "text-white" : "text-purple-600"}`} />
              </div>
              {p}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-full font-semibold transition-all 
            ${highlighted
              ? "bg-white text-purple-600 hover:bg-purple-50 shadow-lg"
              : "bg-gradient-to-r from-purple-600 to-primary text-white hover:opacity-90 shadow-md"}
          `}
        >
          Select Plan
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ---------------- Comparison Table ---------------- */

function ComparisonTable() {
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={tableVariants}
      initial="hidden"
      animate="visible"
      className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gradient-to-r from-purple-50 to-blue-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-4 font-bold text-gray-900">Benefit</th>
              <th className="p-4 font-bold text-gray-900 text-center">Standard</th>
              <th className="p-4 font-bold text-gray-900 text-center bg-purple-100">Plus</th>
              <th className="p-4 font-bold text-gray-900 text-center">Premium</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <Row
              label="Hospital accommodation"
              s="Shared room"
              l="2-bed room"
              xl="Single room"
              variants={rowVariants}
            />

            <Row
              label="Doctor choice"
              s="Attending physician"
              l="Private doctor"
              xl="Private doctor"
              variants={rowVariants}
            />

            <Row
              label="Medicines & remedies"
              s="80% up to €4,000"
              l="80% up to €2,000"
              xl="100%"
              variants={rowVariants}
            />

            <Row
              label="Alternative medicine"
              s="–"
              l="€1,200 / year"
              xl="€2,400 / year"
              variants={rowVariants}
            />

            <Row
              label="Visual aids"
              s="€150 / 2 years"
              l="€300 / 2 years"
              xl="€450 / 2 years"
              variants={rowVariants}
            />

            <Row
              label="Dental treatment"
              s="100% (1 cleaning)"
              l="100% (2 cleanings)"
              xl="100%"
              variants={rowVariants}
            />

            <Row
              label="Dentures & orthodontics"
              s="70%"
              l="80%"
              xl="90%"
              variants={rowVariants}
            />

            <Row
              label="Deductible"
              s="€600 – €3,000"
              l="€600 – €3,000"
              xl="€600 – €3,000"
              variants={rowVariants}
            />

            <Row
              label="Health bonus"
              s="€100 / month"
              l="€100 / month"
              xl="€100 / month"
              variants={rowVariants}
            />

            <motion.tr variants={rowVariants} className="bg-gray-50">
              <td className="p-4 font-semibold text-gray-900">PDF documents</td>
              <td className="p-4 text-center">
                <button className="text-primary hover:text-purple-700 underline inline-flex items-center gap-2 font-medium transition">
                  <Download className="w-4 h-4" />
                  Brochure
                </button>
              </td>
              <td className="p-4 text-center bg-purple-50">
                <button className="text-primary hover:text-purple-700 underline inline-flex items-center gap-2 font-medium transition">
                  <Download className="w-4 h-4" />
                  Brochure
                </button>
              </td>
              <td className="p-4 text-center">
                <button className="text-primary hover:text-purple-700 underline inline-flex items-center gap-2 font-medium transition">
                  <Download className="w-4 h-4" />
                  Brochure
                </button>
              </td>
            </motion.tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function Row({
  label,
  s,
  l,
  xl,
  variants,
}: {
  label: string;
  s: string;
  l: string;
  xl: string;
  variants: any;
}) {
  return (
    <motion.tr variants={variants} className="hover:bg-gray-50 transition-colors">
      <td className="p-4 font-medium text-gray-900">{label}</td>
      <td className="p-4 text-gray-700 text-center">{s}</td>
      <td className="p-4 text-gray-700 text-center bg-purple-50 font-medium">{l}</td>
      <td className="p-4 text-gray-700 text-center">{xl}</td>
    </motion.tr>
  );
}