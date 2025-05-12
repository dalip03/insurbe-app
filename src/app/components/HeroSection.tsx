'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-[#fdf3ff] py-20 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* Left Content */}
      <div className="text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black font-jost"
        >   
          Unlock the Best Insurance Solutions in Germany with Ease
        </motion.h1>

        <ul className="mt-6 space-y-3 text-black text-base  font-lexend">
          <li className="flex items-center ">
            <Image src="/icons/arrow.svg" alt='arrow' width={16} height={16}/>
            For Students, Professionals and Families moving to Germany
          </li>
          <li className="flex items-center">
            <Image src="/icons/arrow.svg" alt='arrow' width={16} height={16}/>
            From health and liability to legal and pension coverage
          </li>
          <li className="flex items-center">
            <Image src="/icons/arrow.svg" alt='arrow' width={16} height={16}/>
            Best options tailored to your unique needs
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <Image
          src="/img/hero-bg.png"
          alt="Dashboard Illustration"
          width={700}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
