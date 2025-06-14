"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2 + 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.2, type: "spring", stiffness: 120 },
  },
};

export default function HeroSection1() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-[#fdf3ff] py-20 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden"
    >
      {/* Left Content */}
      <div className="text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black font-jost"
        >
          Unlock the Best Insurance Solutions in Germany with Ease
        </motion.h1>

        <motion.ul
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-3 text-black text-base font-lexend"
        >
          {[
            "For Students, Professionals and Families moving to Germany",
            "From health and liability to legal and pension coverage",
            "Best options tailored to your unique needs",
          ].map((text, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listItemVariants}
              className="flex items-center"
            >
              <Image src="/icons/arrow.svg" alt="arrow" width={16} height={16} />
              <span className="ml-2">{text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/95 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-purple-50 transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Right Visual Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
      >
        {/* Background Vector */}
        <div>
          <Image
            src="/img/vector.png"
            alt="Decorative Background Vector"
            width={600}
            height={600}
            className="absolute inset-0 w-150 h-190 object-contain z-0 pointer-events-none"
          />
        </div>

        {/* Woman Image */}
        <Image
          src="/img/women.png"
          alt="Main Woman"
          width={400}
          height={500}
          className="relative z-10 mx-auto object-contain"
          priority
        />

        {/* Floating Card 1 */}
        <motion.img
          src="/img/label2.png"
          alt="Card 1"
          width={240}
          height={140}
          className="absolute top-6 md:left-20 left-[-30px] object-contain"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Card 2 */}
        <motion.img
          src="/img/Label1.png"
          alt="Card 2"
          width={220}
          height={140}
          className="absolute top-44 sm:right-[-40px] right-0 object-contain"
          animate={{
            y: [0, -14, 0],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Card 3 */}
        <motion.img
          src="/img/label3.png"
          alt="Card 3"
          width={280}
          height={140}
          className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-20 object-contain"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
