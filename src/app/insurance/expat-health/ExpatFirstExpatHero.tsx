"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Special expat rates",
    desc: "High savings potential",
  },
  {
    title: "English-speaking support",
    desc: "To make your life easier",
  },
  {
    title: "Excellent coverage",
    desc: "With outstanding tariffs",
  },
];

export default function ExpatFirstExpatHero() {
  return (
    <section className="py-20 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            German Health Insurance{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              Made Better
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-xl text-base sm:text-lg leading-relaxed">
            With the digital private health insurance by ottonova you can skip
            all the paperwork! Manage your health in a single app, with real-time
            English-speaking support. Save money compared to public insurance
            while enjoying superior coverage.
          </p>

          {/* Benefits */}
          <ul className="mt-10 space-y-6">
            {benefits.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/products/insuranceJourney"
              className="inline-flex items-center justify-center
              px-10 py-4 rounded-full font-semibold text-white
              bg-gradient-to-r from-purple-600 to-primary
              hover:opacity-90 transition shadow-lg"
            >
              Get a free consultation
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Soft Background Glow */}
          <div className="absolute -inset-8 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-3xl blur-3xl opacity-70" />

          <Image
            src="/hero_assets/heroin.jpg"
            alt="Expat Health Insurance"
            width={520}
            height={520}
            className="relative rounded-3xl shadow-xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
