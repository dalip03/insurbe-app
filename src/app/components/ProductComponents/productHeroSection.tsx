"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProductHeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative bg-primary text-white py-14 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Image Behind Everything */}
      <div className="absolute inset-0 bg-[url('/img/productbg.png')] bg-cover bg-no-repeat bg-center opacity-80 z-0"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
        >
          Insurbe
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          You work hard. Your health insurance should too.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg mb-10 text-white/90"
        >
          Don’t settle - we help professionals unlock better care, smarter
          coverage, and bigger savings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <div>
            <motion.button
              whileHover={{
                scale: 1.07,
                y: -4,
                boxShadow: "0px 8px 20px rgba(255,255,255,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 12 }}
              onClick={() => router.push("/products/insuranceJourney")}
              className="bg-white text-primary px-6 py-3 rounded-md font-semibold cursor-pointer relative z-20"
            >
              Take the Questionnaire
            </motion.button>

            <p className="mt-2 text-[#FFFFFF99]/60 italic">
              takes less than a minute
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
