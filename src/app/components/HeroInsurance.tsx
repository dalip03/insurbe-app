"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  GraduationCap,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

/* ---------------- Feature Item Component ---------------- */

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
  color: string;
}

function FeatureItem({ icon: Icon, text, color }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`w-5 h-5 mt-1 ${color}`} />
      <p className="text-white/90 text-sm sm:text-base">{text}</p>
    </div>
  );
}

/* ---------------- Hero Component ---------------- */

export default function HeroInsurance() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_assets/hero4.png"
          alt="Insurance made easy for families"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark → light overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center">
        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-white space-y-6"
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get Insured in Minutes.
              <br />
              English-First Insurance Solutions.
            </h1>

            {/* Feature bullets */}
            <div className="space-y-3">
              <FeatureItem
                icon={GraduationCap}
                text="For students, professionals & families moving to Germany"
                color="text-purple-400"
              />
              <FeatureItem
                icon={Briefcase}
                text="Health • Legal • Liability • Pension coverage"
                color="text-blue-400"
              />
              <FeatureItem
                icon={ShieldCheck}
                text="Tailored plans for every stage of your move"
                color="text-green-400"
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow-xl hover:shadow-2xl transition flex items-center gap-2"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/learn-more">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-white/60 text-white px-7 py-3 rounded-full hover:bg-white hover:text-primary transition"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Reviews */}
          <div className="pt-4">
  <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-sm text-white">Excellent</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-white/80">
        4.5 out of 5 • 2,310 reviews
      </p>
    </div>

    <img
      src="/gifs_assets/google.png"
      alt="Google"
      className="w-6 h-6"
    />
  </div>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
