"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroInsurance() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_assets/bermer.jpeg"
          alt="Insurance made easy for families"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ✅ SIMPLE DARK → LIGHT OVERLAY (RIGHT SIDE) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center">
        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-white space-y-6"
          >
            {/* Tagline */}
            <span className="inline-block text-md uppercase tracking-wide text-white/80">
              Insurance made easy
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get Insured in Minutes.
              <br />
              English-First Insurance Solutions.
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg">
              Simple, transparent insurance solutions for individuals and
              families living in Germany. No paperwork. No confusion.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/">
                <button className="bg-white text-primary font-semibold px-7 py-3 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link href="/">
                <button className="border border-white/70 text-white px-7 py-3 rounded-full hover:bg-white hover:text-primary transition">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
