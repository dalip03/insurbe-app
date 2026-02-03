"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppointmentModal from "../components/modals/AppointmentModal";
import { useState } from "react";

const categories = [
  {
    subtitle: "Health and well-being for your",
    title: "Employees",
    image: "/gifs_assets/Doc_on_call.svg", 
    color: "purple",
    gradient: "from-purple-50 to-blue-50",
  },
  {
    subtitle: "Embedded insurance for your",
    title: "Customers",
    image: "/gifs_assets/Offer_gift.svg",
    color: "red",
    gradient: "from-pink-50 to-red-50",
  },
  {
    subtitle: "Cyber protection for your",
    title: "Business",
    image: "/gifs_assets/Recommend_plan.svg",
    color: "blue",
    gradient: "from-blue-50 to-indigo-50",
  },
];

export default function EnterpriseHeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            InsurBe for Enterprise
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            One platform to insure your employees,
            <br />
            customers, and business.
          </p>

          {/* CTA */}
        
     <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
 className="
      inline-flex items-center gap-2
      px-8 py-4
      rounded-full
      bg-white
      text-primary
      font-semibold
      shadow-xl
      hover:shadow-2xl
      transition
    "          >
                 Get in Touch
                </motion.button>

        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gradient-to-br ${category.gradient} rounded-3xl p-8 shadow-2xl border-2 border-white/50 backdrop-blur-sm overflow-hidden group cursor-pointer`}
            >
              {/* Background Image */}
              <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p
                  className={`text-sm mb-2 ${
                    category.color === "purple"
                      ? "text-purple-600"
                      : category.color === "red"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {category.subtitle}
                </p>

                <h3
                  className={`text-3xl sm:text-4xl font-bold ${
                    category.color === "purple"
                      ? "text-purple-700"
                      : category.color === "red"
                      ? "text-red-700"
                      : "text-blue-700"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Bottom Icon */}
              <div className="absolute bottom-4 right-4">
                <div className="w-18 h-18 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
         <AppointmentModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
    </section>
 
          
  );
}
