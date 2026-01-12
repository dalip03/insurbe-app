"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductHeroSectionnew() {
  const router = useRouter();

   const handleScroll = () => {
    const el = document.getElementById("insurance");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-900" />
        <div className="absolute inset-0 bg-[url('/img/productbg.png')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-green-300" />
              Trusted Insurance Partner
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              You work hard.
              <br />
              <span className="text-purple-200">
                Your health insurance should too.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl mb-8">
              We help professionals unlock better care, smarter coverage, and
              real savings — without paperwork or confusion.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Takes less time</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartPulse className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Personalized coverage</span>
              </div>
            </div>

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

            <p className="mt-3 text-xs text-white/60">
              No paperwork • No obligations
            </p>
          </motion.div>

          {/* RIGHT IMAGE – Gradient Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-primary/40 via-purple-400/30 to-transparent shadow-xl">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-[26px] overflow-hidden bg-white">
                <Image
                  src="/hero_assets/workin.jpeg"
                  alt="Insurance coverage illustration"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
