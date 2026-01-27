"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle } from "lucide-react";

export default function WhyExpatInsuranceNew() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Animated Background */}
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
          className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl">
              {/* Card Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Expat health</h3>
              </div>

            {/* Image Container */}
<div className="w-full max-w-xs mx-auto mb-8  rounded-xl p-4">
  <Image
    src="/hero_assets/workin.jpeg"
    alt="Expat health insurance"
    width={320}
    height={320}
    className="object-contain"
  />
</div>


              {/* Timeline */}
              <div className="relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-green-500 via-gray-300 to-gray-300"></div>

                {/* Step 1 - Completed */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative mb-6 flex items-center gap-4"
                >
                  <div className="absolute -left-8 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-md">
                    <p className="text-sm font-semibold text-gray-900">You got paid out!</p>
                  </div>
                </motion.div>

                {/* Step 2 - Pending */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="absolute -left-8 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-md">
                    <p className="text-sm font-medium text-gray-600">Claim submitted</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-30"></div>
          </motion.div>

          {/* RIGHT - Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Why get{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                  expat health insurance?
                </span>
              </h2>
              <p className="text-base sm:text-md text-gray-600 leading-relaxed">
                Expat health insurance (sometimes called "incoming insurance") is a
                flexible solution for newcomers to Germany — whether you're self-employed,
                a student, researcher, or simply relocating for new opportunities. It's
                designed for both short-term and long-term stays.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Fast & easy digital claims
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    File and manage claims online: just take a photo of your invoice and
                    submit it through your digital account.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Shield className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Coverage tailored to your needs
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you're planning to stay for a few years and need basic
                    coverage, or long term and need comprehensive coverage. We have got
                    you covered.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-primary text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}