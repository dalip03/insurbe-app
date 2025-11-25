"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CalculatorHeroSection: FC = () => (
  <div className="
      flex flex-col md:flex-row 
      items-center justify-between
      min-h-[80vh] md:min-h-screen
      bg-gradient-to-r from-[#f5f2fa] to-[#fafbff]
      px-4 sm:px-8 md:px-16 lg:px-24
      py-12 sm:py-16
    "
  >
    {/* LEFT SIDE */}
    <motion.div
      className="w-full max-w-xl text-center md:text-left"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="
          text-2xl sm:text-3xl md:text-4xl 
          font-bold text-gray-900 
          mb-4 leading-snug
        "
      >
        Find the perfect insurance plan based on your profile <br />
        with Insubre
      </h1>

      <button
        className="
          mt-6 sm:mt-8 
          px-5 sm:px-6 py-3 
          bg-primary text-white 
          rounded-md font-medium
          hover:bg-purple-700 
          transition-colors duration-200
        "
      >
        Start Calculating
      </button>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      className="mt-10 md:mt-0 md:ml-8 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Image
        src="/calculator_assets/Calculator.svg"
        alt="Calculator Illustration"
        width={360}
        height={360}
        className="
          w-[260px] sm:w-[300px] md:w-[360px] 
          max-w-full h-auto 
        "
        draggable={false}
        priority
      />
    </motion.div>
  </div>
);

export default CalculatorHeroSection;
