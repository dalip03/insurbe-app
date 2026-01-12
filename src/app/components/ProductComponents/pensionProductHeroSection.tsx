"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PensionProductHeroSection = () => {
  const scrollToForm = () => {
    const section = document.getElementById("questionnaire-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = useRouter();
   const handleScroll = () => {
    const el = document.getElementById("family");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <span className="inline-flex items-center bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur">
              Insurbe • Pension Solutions
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Pension Plans for Expats & Professionals in Germany
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/85 max-w-xl">
              Secure your future and build a reliable retirement plan with
              expert guidance in English — tailored for life in Germany.
            </p>

          
           {/* CTA */}
            <div className="flex flex-row gap-4 max-w-md">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/products/insuranceJourney")}
                className="flex-1 bg-white text-primary font-semibold cursor-pointer text-sm px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                Take the Questionnaire
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                 onClick={handleScroll}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 border border-white/40  cursor-pointer text-white px-4 py-3 rounded-full"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full"
          >
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[7/6] rounded-3xl overflow-hidden  ">
              <Image
                src="/hero_assets/party.png"
                alt="Pension planning for professionals"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PensionProductHeroSection;
