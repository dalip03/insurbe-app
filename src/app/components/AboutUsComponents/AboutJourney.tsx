"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function AboutJourney() {
  return (
    <section className="relative overflow-hidden px-4 pt-12">
      <div className="bg-[#470877] text-white py-20 px-4 sm:px-10 lg:px-20 rounded-[48px] overflow-hidden relative z-10">
        {/* Left Icons */}
        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "7rem",
            left: "7rem",
            x: 0,
            y: [0, -10, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.2, ease: "easeInOut" },
            left: { duration: 1.2, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
          className="absolute w-8 h-8 lg:w-10 lg:h-10 hidden sm:block"
        >
          <Image
            src="/about/Polygon3.png"
            alt="Polygon3"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "50%",
            left: "12rem",
            x: 0,
            y: [0, -12, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.2, ease: "easeInOut" },
            left: { duration: 1.2, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
          className="absolute w-6 h-6 lg:w-10 lg:h-10 hidden sm:block"
        >
          <Image
            src="/about/Star9.png"
            alt="star9"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "80%",
            left: "6%",
            x: 0,
            y: [0, -14, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.4, ease: "easeInOut" },
            left: { duration: 1.4, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 7,
              ease: "easeInOut",
              delay: 1.4,
            },
          }}
          className="absolute w-10 h-10 hidden sm:block"
        >
          <Image
            src="/about/Ellipse0.png"
            alt="Ellipse0"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right Icons */}
        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "5rem",
            left: "calc(100% - 11.5rem)",
            x: 0,
            y: [0, -10, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.4, ease: "easeInOut" },
            left: { duration: 1.4, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5.5,
              ease: "easeInOut",
              delay: 1.4,
            },
          }}
          className="absolute w-10 h-10 hidden sm:block"
        >
          <Image
            src="/about/Star10.png"
            alt="Star10"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "45%",
            left: "calc(100% - 4.5rem)",
            x: 0,
            y: [0, -12, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.4, ease: "easeInOut" },
            left: { duration: 1.4, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6.2,
              ease: "easeInOut",
              delay: 1.4,
            },
          }}
          className="absolute w-10 h-10 hidden sm:block"
        >
          <Image
            src="/about/Rectangle1.png"
            alt="Rectangle1"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            top: "80%",
            left: "calc(100% - 10.5rem)",
            x: 0,
            y: [0, -12, 0],
          }}
          viewport={{ once: true }}
          transition={{
            top: { duration: 1.4, ease: "easeInOut" },
            left: { duration: 1.4, ease: "easeInOut" },
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6.2,
              ease: "easeInOut",
              delay: 1.4,
            },
          }}
          className="absolute w-10 h-10 hidden sm:block"
        >
          <Image
            src="/about/Polygon4.png"
            alt="Polygon4"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <Image
              src="/icons/logo_white.png"
              alt="Logo"
              width={80}
              height={20}
              className="mx-auto"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold leading-tight md:px-24">
            Ready to supercharge your Insurance Journey?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Join Insube Today and make your Germany Experience the best without
            worrying about the Insurance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-white text-primary px-6 py-3 text-sm rounded-md font-semibold hover:bg-gray-100 transition">
              Contact us →
            </button>
            <button className="bg-primary text-white px-6 py-3 text-sm rounded-md font-semibold hover:bg-primary/60 transition">
              Get Started →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutJourney;
