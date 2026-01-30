"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  GraduationCap,
  Stamp,
  ArrowRight,
  Sparkles,
  Star,
  AirVent,
  PlaneLanding,
} from "lucide-react";
import { INSURANCE_LIMITS } from "../constants/insurance";

const products = [
  {
    title: "Working Professionals",
    desc: `PKV or Expat Insurance if you earn above €${INSURANCE_LIMITS.PKV_INCOME_THRESHOLD.toLocaleString()}`,
    icon: Briefcase,
    link: "/products/privateProducts",
    gradient: "from-primary to-purple-600",
    bgGradient: "from-purple-50 to-cyan-50",
    badge: "Expat choice",
  },
  {
    title: "Family",
    desc: "Private or public plans that cover loved ones",
    icon: Users,
    link: "/products/pensionProducts",
    gradient: "from-primary to-purple-600",
    bgGradient: "from-purple-50 to-pink-50",
    badge: "Popular",
  },
  {
    title: "Visa Seekers",
    desc: "Get valid insurances for your visa approval",
    icon: Stamp,
    link: "/products/visaSeakers",
    gradient: "from-primary to-purple-600",
    bgGradient: "from-green-50 to-emerald-50",
    badge: "Essential",
  },
  {
    title: "Students",
    desc: "Affordable, government-approved student plans",
    icon: GraduationCap,
    link: "/products/students",
    gradient: "from-primary to-purple-600",
    bgGradient: "from-orange-50 to-red-50",
    badge: "Affordable",
  },
];

export default function ProductBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="choose-us"
      className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        /> */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-16 relative z-10"
      >
        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-bold text-sm shadow-lg">
            <PlaneLanding className="w-4 h-4" />
            When in Germany, Think InsurBe
          </span>
        </motion.div> */}

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 px-4">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
            Our Curated Products
          </span>
          <br />
          <span className="text-gray-900">for People Traveling to Germany</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Choose the perfect insurance plan tailored to your needs
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10"
      >
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.div key={index} variants={cardVariants}>
              <Link href={product.link}>
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative h-full cursor-pointer bg-white border-2 border-transparent hover:border-purple-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute top-10 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50"
                  />

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`absolute top-4 right-4 bg-gradient-to-r ${product.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 z-10`}
                  >
                    <Star className="w-2 h-2 fill-current" />
                    {product.badge}
                  </motion.div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      {/* Icon with Animation */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        className={`relative w-15 h-15 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-30 blur-md`}
                        />
                        <Icon className="w-6 h-6 text-white relative z-10" />
                      </motion.div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-primary transition-all duration-300">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:gap-3 transition-all mt-auto">
                      Explore Plans
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-100/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Border Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${product.gradient}`}
                    style={{ filter: "blur(20px)", zIndex: -1 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
