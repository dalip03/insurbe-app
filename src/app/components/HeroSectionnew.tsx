"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSectionnew() {
  return (
    <section className="relative min-h-screen overflow-hidden border">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_assets/herosection6.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* LEFT DARK SHADOW FOR TEXT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* CENTERED CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white space-y-6 max-w-xl"
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
              Unlock the Best Insurance Solutions in Germany with Ease
            </h1>

            {/* Features */}
            <div className="space-y-2">
              {[
                "For Students, Professionals and Families moving to Germany",
                "From health and liability to legal and pension coverage",
                "Best options tailored to your unique needs",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <ArrowRight className="md:w-5 md:h-5 w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-lg text-white/90">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-primary text-white cursor-pointer font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 justify-center"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/learn-more">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-gray-400 text-white cursor-pointer font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-primary transition"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Google Reviews */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="pt-4"
            >
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-sm">Excellent</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-green-400 text-green-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-white/80">
                  4.5 out of 5 based on 2,310 reviews on{" "}
                  <span className="font-semibold">Google</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
