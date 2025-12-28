"use client";

import { motion } from "framer-motion";
import { Award, Monitor, Headphones } from "lucide-react";

export default function Featureshome() {
  const features = [
    {
      icon: Award,
      title: "Experience",
      description: "Built by expats for expats. Decades of combined insurance expertise.",
    },
    {
      icon: Monitor,
      title: "Digital",
      description: "Seamless online platform. Paperless, instant quotes & management.",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "24/7 Multilingual Assistance. Real people, real solutions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 p-4 rounded-full bg-gray-50"
              >
                <Icon className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
