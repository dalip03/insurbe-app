"use client";

import { motion } from "framer-motion";
import { Award, Monitor, Headphones } from "lucide-react";

export default function Featureshome() {
  const features = [
    {
      icon: Award,
      title: "Experience",
      description:
        "Built by expats for expats. Decades of combined insurance expertise.",
      iconColor: "text-purple-600",
      bg: "from-purple-100 to-purple-50",
      glow: "hover:shadow-purple-300/50",
    },
    {
      icon: Monitor,
      title: "Digital",
      description:
        "Seamless online platform. Paperless, instant quotes & management.",
      iconColor: "text-blue-600",
      bg: "from-blue-100 to-blue-50",
      glow: "hover:shadow-blue-300/50",
    },
    {
      icon: Headphones,
      title: "Support",
      description:
        "24/7 Multilingual Assistance. Real people, real solutions.",
      iconColor: "text-emerald-600",
      bg: "from-emerald-100 to-emerald-50",
      glow: "hover:shadow-emerald-300/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center transition-all"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${feature.bg} shadow-md ${feature.glow} hover:shadow-xl`}
              >
                <Icon
                  className={`w-12 h-12 ${feature.iconColor}`}
                  strokeWidth={1.5}
                />
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
