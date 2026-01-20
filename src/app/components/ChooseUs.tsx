"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  PiggyBank,
  Scale,
  Home,
  Gavel,
  Plane,
} from "lucide-react";

export default function ChooseUs() {
  const reasons = [
    {
      title: "Health Insurance",
      desc: "Reliable health coverage that supports you through everyday care and unexpected moments—without complexity.",
      icon: ShieldCheck,
    },
    {
      title: "Private Pension Scheme",
      desc: "A smarter way to plan ahead, helping you build long-term financial security with confidence.",
      icon: PiggyBank,
    },
    {
      title: "Liability Insurance",
      desc: "Thoughtful protection that shields you from personal liability and unexpected claims.",
      icon: Scale,
    },
    {
      title: "Household Insurance",
      desc: "Clear, dependable coverage for your home and belongings—designed for real life.",
      icon: Home,
    },
    {
      title: "Legal Insurance",
      desc: "Straightforward legal support when it matters most, with access to expert guidance and cost coverage.",
      icon: Gavel,
    },
    {
      title: "Travel Insurance",
      desc: "Protection that moves with you, ensuring peace of mind wherever your journey takes you.",
      icon: Plane,
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Explore our range of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Insurance Products
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Simple, transparent insurance solutions designed for life in Germany.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="
                  group bg-white
                  p-8 rounded-2xl
                  border border-gray-200
                  hover:border-primary/40
                  hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Gradient Icon */}
                <div className="mb-6">
                  <div className="
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br from-primary to-purple-600
                    flex items-center justify-center
                    shadow-md
                  ">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
