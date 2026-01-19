"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PublicInsuranceHeroSection() {

   const scrollToNextSection = () => {
    const learnmore = document.getElementById("learnmore");
    if (learnmore) {
      learnmore.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className=" py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Public{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              Health Insurance
            </span>
            <br className="hidden sm:block" />
            in Germany
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl">
            Public health insurance is the most common and legally required
            healthcare option for students, employees, and families living in
            Germany.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✔ Accepted for residence permits</li>
            <li>✔ Family members included</li>
            <li>✔ Fixed monthly contributions</li>
            <li>✔ Access to public healthcare providers</li>
          </ul>

         <div className="mt-8 flex flex-wrap gap-4">
      {/* Get a quote */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="/products/insuranceJourney"
          className="inline-flex items-center gap-2 justify-center rounded-full px-8 py-4 font-semibold text-white
            bg-gradient-to-r from-purple-600 to-primary
            hover:opacity-90 transition shadow-md"
        >
          Get a quote
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </Link>
      </motion.div>

      {/* Learn more (scroll only) */}
      <button
        onClick={scrollToNextSection}
        className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold
          text-gray-900 border border-gray-300 hover:border-purple-400 transition"
      >
        Learn more
      </button>
    </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[280px] sm:h-[360px] lg:h-[460px]"
        >
          <Image
            src="/hero_assets/herosection7.jpeg" 
            alt="Public Health Insurance in Germany"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
