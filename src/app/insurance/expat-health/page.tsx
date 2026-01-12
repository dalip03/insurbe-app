"use client";

import { motion } from "framer-motion";
import { Globe, Check, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExpatHealthPage() {
    const router = useRouter();
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ede9fb] text-[#511e6d] mb-4">
            <Globe className="w-4 h-4" />
            Expat Health Insurance
          </span>

          <h1 className="text-4xl font-bold mb-4">
            Health Insurance for Expats
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            Designed for internationals relocating, working, or studying in
            Germany.
          </p>

          <ul className="space-y-4">
            {[
              "Fast visa-compliant coverage",
              "Flexible duration plans",
              "English support",
              "Private-style benefits",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
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
