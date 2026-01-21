"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  FileCheck,
  Users,
  Settings,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Employee Health Insurance",
    subtitle:
      "Take care of your employees while they take care of your business",
    image: "/gifs_assets/employee-team.jpg",
    features: [
      {
        icon: HeartPulse,
        title: "Comprehensive Coverage",
        desc: "Hospitalization, OPD, diagnostics & mental wellness",
      },
      {
        icon: Users,
        title: "Family Protection",
        desc: "Extended benefits for complete peace of mind",
      },
      {
        icon: FileCheck,
        title: "Hassle-Free Claims",
        desc: "Fast, paperless & digital-first experience",
      },
    ],
  },
  {
    title: "Field Partner Protection",
    subtitle: "Health benefits & security for partners on the move",
    image: "/gifs_assets/field-partner.jpg",
    features: [
      {
        icon: ShieldCheck,
        title: "Comprehensive Benefits",
        desc: "Accidental cover, hospitalization, OPD & more",
      },
      {
        icon: Settings,
        title: "Customizable Coverage",
        desc: "Choose plans and coverage value that fits your workforce",
      },
      {
        icon: Clock,
        title: "On-Demand Coverage",
        desc: "Activate coverage for specific days or duration",
      },
    ],
  },
];

export default function EnterpriseEmployeesInsurance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-18 overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Enterprise Solutions
            </span>
          </motion.div>

          {/* Gradient Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-primary to-primary">
              For Your Employees
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
          >
            Health and well-being solutions designed for modern workforces
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 blur-xl opacity-30"></div>
              </div>

              {/* Image with Overlay */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
                >
                  <span className="text-[10px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                    Premium
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-white to-purple-50/30">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed"
                >
                  {card.subtitle}
                </motion.p>

                {/* Features */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
                >
                  {card.features.map((f, fIdx) => (
                    <motion.div
                      key={f.title}
                      variants={featureVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-primary shadow-lg flex items-center justify-center flex-shrink-0"
                      >
                        <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>

                      <div>
                        <p className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5 sm:mb-1">
                          {f.title}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-purple-100 to-transparent rounded-tl-full opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}