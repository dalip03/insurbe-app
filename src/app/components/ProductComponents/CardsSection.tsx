"use client";

import React from "react";
import { motion } from "framer-motion";

const CardsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="-mt-20 relative z-20 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md text-black text-left"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <p className="text-sm font-medium text-gray-500">Earnings</p>
          <h3 className="text-2xl font-bold">$6750 USD</h3>
          <p className="text-sm text-green-500 mt-1">+2.9%</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-md text-black text-left"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <p className="text-sm font-medium text-gray-500">Upcoming Events</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li> Bitcoin Halving – $44,000</li>
            <li> Solana Partnership – $13,200</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-md text-black text-left"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <p className="text-sm font-medium text-gray-500">Monthly Spend</p>
          <h3 className="text-2xl font-bold">$2520 USD</h3>
          <div className="flex items-end gap-2 mt-4">
            {[60, 80, 100, 50].map((height, idx) => (
              <motion.div
                key={idx}
                className="bg-primary w-4 rounded-t-md"
                style={{ height: `${height}px` }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.15, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsSection;
