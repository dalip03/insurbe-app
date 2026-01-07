"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Students() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-[#3b1a52]" />
        <div className="absolute inset-0 bg-[url('/img/productbg.png')] bg-cover bg-center opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.span
              variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="inline-flex items-center bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur"
            >
              Insurbe • Student Insurance
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={{ hidden: { y: 14, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            >
              Health Insurance for Students in Germany
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{ hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-base sm:text-lg text-white/85 max-w-xl"
            >
              Starting your studies in Germany? We help international students
              choose the right health insurance — fast, affordable, and explained
              clearly in English.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex gap-4 pt-4 max-w-md"
            >
              {/* Secondary */}
              <Link
                href="/"
                className="
                  flex-1 cursor-pointer
                  border border-white/40 text-white text-center
                  px-5 py-3 rounded-full font-semibold
                  hover:bg-white/10 hover:shadow-md
                  transition-all duration-300
                "
              >
                Talk to an Advisor
              </Link>

              {/* Primary */}
              <Link
                href="/"
                className="
                  flex-1 cursor-pointer
                  bg-white text-primary text-center
                  px-5 py-3 rounded-full font-semibold
                  hover:shadow-xl hover:-translate-y-[1px]
                  transition-all duration-300
                "
              >
                Get Student Insurance
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative w-full"
          >
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[7/6] rounded-3xl bg-white/10 backdrop-blur shadow-2xl flex items-center justify-center p-4">
              <Image
                src="/hero_assets/heroin.jpg"
                alt="Student insurance in Germany"
                fill
                priority
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
