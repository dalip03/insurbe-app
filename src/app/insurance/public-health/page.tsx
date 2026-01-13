"use client";

import { motion } from "framer-motion";
import {
  Check,
  Landmark,
  Users,
  ShieldCheck,
  ArrowRight,
  Euro,
  Building2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PublicHealthPage() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* ================= TOP SECTION (UNCHANGED) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ede9fb] text-[#511e6d] text-sm font-medium mb-4">
            <Landmark className="w-4 h-4" />
            Public Health Insurance
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Public Health Insurance in Germany
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            Government-backed health insurance offering comprehensive and
            reliable coverage for students and employees in Germany.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Mandatory for most students & employees",
            "Family members covered at no extra cost",
            "Fixed monthly contributions",
            "Access to public healthcare providers",
            "Highly regulated & stable system",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bg-white border rounded-xl p-5"
            >
              <Check className="w-5 h-5 text-green-500 mt-1" />
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/products/insuranceJourney")}
            className="flex-1 bg-primary text-white font-semibold cursor-pointer text-sm px-6 py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            Take the Questionnaire
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* ============================================================
           ADDITIONAL INFO (NEW – LIKE EXPAT & PRIVATE)
           ============================================================ */}

        {/* WHO IT’S FOR */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Who Is Public Health Insurance Best For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Students enrolled in German universities",
              "Employees below the income threshold",
              "Families planning long-term residence",
              "Individuals seeking stable, regulated healthcare",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-5"
              >
                <Users className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How Public Health Insurance Works in Germany
          </h2>

          <div className="space-y-4">
            {[
              {
                icon: Euro,
                text: "Monthly contributions are calculated based on your income",
              },
              {
                icon: ShieldCheck,
                text: "Employers usually pay about half of the contribution",
              },
              {
                icon: Building2,
                text: "Accepted by almost all doctors and hospitals nationwide",
              },
              {
                icon: Users,
                text: "Coverage continues even during job changes or unemployment",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border rounded-xl p-5"
                >
                  <Icon className="w-6 h-6 text-primary mt-1" />
                  <p className="text-gray-700">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY INSURBE */}
        <div className="mt-24 bg-[#ede9fb] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Insurbe for Public Health Insurance?
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            The German public health system can be complex—especially for
            internationals. Insurbe simplifies the process with clear,
            English-first guidance and trusted insurer partnerships.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/products/insuranceJourney")}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg inline-flex items-center gap-2"
          >
            Get Started with Insurbe
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
