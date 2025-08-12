"use client";

import React from "react";
import { motion } from "framer-motion";

// Replace with an actual image path or prop
const middleCardImage =
  "https://via.placeholder.com/150x100.png?text=Insurance";

const CardsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      title: "Specialized for Expats & Professionals",
      description:
        "Whether you’re on a Blue Card, freelancing, or salaried, we’ve got you covered.",
    },
    {
      title: "Compare Trusted Insurers",
      description:
        "DKV, Ottonova, Allianz, Signal Iduna, ARAG, Hallesche, Hanse Merkur, and more.",
      image: middleCardImage, // We only want an image in the middle card
    },
    {
      title: "Human Help When You Need It",
      description:
        "Book a free call with a licensed advisor after the assessment.",
    },
  ];

  return (
    <div className="-mt-20 relative z-20 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {cards.map(({ title, description, image }, i) => {
          // Conditional col-span classes
          const colSpanClass = i === 1 ? "md:col-span-2" : "md:col-span-1";

          // If middle card, use a flex row to align text left and image right
          if (i === 1) {
            return (
              <motion.div
                key={i}
                className={`bg-white rounded p-6 shadow-md text-[#511E6D] text-left flex flex-col md:flex-row items-center justify-between ${colSpanClass}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="md:w-2/3 w-full">
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h3>
                  <p className="text-black text-sm text-center md:text-left">{description}</p>
                </div>
                <div className="md:w-1/3 w-full flex justify-center mt-4 md:mt-0">
                  <img
                    src={image}
                    alt="Insurance Illustration"
                    className="max-h-28 md:max-h-32 w-auto object-contain"
                  />
                </div>
              </motion.div>
            );
          }

          // Left and right cards stay unchanged
          return (
            <motion.div
              key={i}
              className={`bg-white rounded p-6 shadow-md text-[#511E6D] text-left ${colSpanClass}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
              <p className="text-black text-sm text-center">{description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsSection;
