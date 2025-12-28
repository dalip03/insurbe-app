"use client";

import { motion } from "framer-motion";

export default function SustainableSection() {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-64 h-64  rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-40 right-10 w-48 h-48  rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -bottom-20 right-20 w-72 h-72  rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-12"
        >
          Building a <span className="text-primary">sustainable</span> company
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6"
        >
          <p>
            Insurbe is proactively undertaking corporate social responsibility
            activities. We believe that, as a insurance company, CSR deserves
            our special attention. Protecting the health and well-being of our
            customers, employees and communities is our main mission. By
            continuing our ongoing efforts and taking more and more social,
            environmental and governance initiatives, we can achieve a positive
            impact for our people and the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
