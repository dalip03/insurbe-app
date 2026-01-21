"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FamilyInsuranceTax() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-primary/10" />
          <Image
            src="/hero_assets/pension.jpg"
            alt="Family insurance tax benefits"
            width={520}
            height={400}
            className="relative rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Brilliant tax advantages
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefit from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              tax advantages
            </span>
          </h2>

          <div className="space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              When the pension is paid out, the returns accrued up to the start
              of the pension are <strong className="text-gray-900">tax-free</strong>.
              During the pension payout phase, a large portion of these returns
              also remains tax-free.
            </p>

            <p>
              If the pensioner has reached the age of{" "}
              <strong className="text-gray-900">62</strong> and the contract has
              been in effect for at least{" "}
              <strong className="text-gray-900">12 years</strong>, up to{" "}
              <strong className="text-gray-900">50%</strong> of the returns are
              <strong className="text-gray-900"> tax-exempt</strong>.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <p className="text-2xl font-bold text-primary">50%</p>
              <p className="text-sm text-gray-600">Tax-exempt returns</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <p className="text-2xl font-bold text-primary">12+</p>
              <p className="text-sm text-gray-600">Years contract duration</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <p className="text-2xl font-bold text-primary">62+</p>
              <p className="text-sm text-gray-600">Eligible age</p>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
            Check your tax benefit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
