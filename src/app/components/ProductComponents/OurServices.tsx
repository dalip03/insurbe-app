"use client";
import { motion } from "framer-motion";
import { Shield, Users, Globe, Check, Sparkles, TrendingUp, Award, SpaceIcon } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    key: "public",
    title: "Public (GKV)",
    subtitle: "Family Coverage",
    price: "€800",
    period: "/month",
    icon: Shield,
    popular: false,
    features: [
      "Covers dependents",
      "No Digital signup",
      "Accepted for visa",
      "Limited Customization",
    ],
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    key: "private",
    title: "Full Private (PKV)",
    subtitle: "Premium Care",
    price: "€400",
    period: "/month",
    icon: Award,
    popular: true,
    features: [
      "Optional Dependents Coverage",
      "Digital signup",
      "Accepted for visa",
      "Basic Analytics",
    ],
    gradient: "from-[#531D6F]/5 to-[#531D6F]/10",
    iconBg: "bg-[#531D6F]/10",
    iconColor: "text-[#531D6F]",
  },
  {
    key: "expat",
    title: "Expat Private",
    subtitle: "International",
    price: "€200",
    period: "/month",
    icon: Globe,
    popular: false,
    features: [
      "No Dependents Coverage",
      "Digital signup",
      "Accepted for visa",
      "Theme customization",
    ],
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function OurServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#531D6F]/10 to-purple-100 px-4 py-2 rounded-full mb-6"
          >
            {/* <SpaceIcon className="w-4 h-4 text-[#531D6F]" /> */}
            <span className="text-sm font-medium text-[#531D6F]">Unbreakable Quality</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Affordable <span className="text-[#531D6F]">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Comparing with the best Insurance, start experiencing our services today
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredCard === index;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.key}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#531D6F] to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full bg-gradient-to-br ${plan.gradient} backdrop-blur-sm rounded-3xl p-8 border-2 ${
                    isPopular
                      ? "border-[#531D6F]"
                      : "border-gray-200 hover:border-[#531D6F]/30"
                  } shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Decorative gradient orb */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#531D6F]/5 rounded-full blur-3xl" />

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-14 h-14 ${plan.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${plan.iconColor}`} />
                  </motion.div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-base">{plan.period}</span>
                    </div>
                    <p className="text-sm text-[#531D6F] font-medium mt-2">
                      + 100% emergency services
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-[#531D6F] text-white hover:bg-[#531D6F]/90 shadow-lg shadow-[#531D6F]/25"
                        : "bg-white text-[#531D6F] border-2 border-[#531D6F] hover:bg-[#531D6F] hover:text-white"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}