"use client";

import { motion } from "framer-motion";
import { Check, Landmark, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PublicHealthPage() {
    const router = useRouter();
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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

        {/* Features */}
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

        {/* CTA */}
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
      </div>
    </section>
  );
}
