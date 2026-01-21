"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BuildPerfectPlanCTA() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-8 lg:px-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-purple-800" />

      {/* Soft Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center text-white">
        {/* LEFT – Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-72 sm:w-80 md:w-96">
            {/* Replace image path if needed */}
            <Image
              src="/gifs_assets/Last_step.svg"
              alt="Build your perfect insurance plan"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* RIGHT – Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Want us to build you the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
              perfect plan?
            </span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
            Reach out to InsurBe and we’ll craft a tailored insurance solution
            designed around your needs.
          </p>

          <Link href="/book-appointment">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
      inline-flex items-center gap-2
      px-8 py-4
      rounded-full
      bg-white
      text-primary
      font-semibold
      shadow-xl
      hover:shadow-2xl
      transition
    "
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
