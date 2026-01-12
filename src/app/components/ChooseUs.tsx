"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChooseUs() {
  const reasons = [
    {
      title: "Health Insurance",
      desc: "Reliable health coverage that supports you through everyday care and unexpected moments—without complexity.",
      icon: "/insurance/student.svg",
    },
    {
      title: "Private Pension Scheme",
      desc: "A smarter way to plan ahead, helping you build long-term financial security with confidence.",
      icon: "/insurance/pension1.svg",
    },
    {
      title: "Liability Insurance",
      desc: "Thoughtful protection that shields you from personal liability and unexpected claims.",
      icon: "/insurance/liability1.svg",
    },
    {
      title: "Household Insurance",
      desc: "Clear, dependable coverage for your home and belongings—designed for real life.",
      icon: "/insurance/house1.svg",
    },
    {
      title: "Legal Insurance",
      desc: "Straightforward legal support when it matters most, with access to expert guidance and cost coverage.",
      icon: "/insurance/legal1.svg",
    },
    {
      title: "Travel Insurance",
      desc: "Protection that moves with you, ensuring peace of mind wherever your journey takes you.",
      icon: "/insurance/travel1.svg",
    },
  ];

  /* Very soft reveal */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      scaleY: 0.96,
      transformOrigin: "top",
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
      },
    },
  };

  const titleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section
     
      className="py-20 px-4 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          Explore our range of Insurance Products
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{
                y: -4,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="
                bg-white/70 backdrop-blur-sm
                px-10 py-10 rounded-2xl
                text-center border border-gray-200
                transition-colors duration-300
                hover:border-primary/40
              "
            >
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-white rounded-md shadow-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </motion.div>

              <h3 className="text-xl text-black font-medium">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
