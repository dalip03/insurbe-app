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

/* ---------------- Feature Item ---------------- */

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
}

function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 mt-1 text-primary" />
      <p className="text-gray-700 text-sm sm:text-base">{text}</p>
    </div>
  );
}

/* ---------------- Hero ---------------- */

export default function HeroInsurancenew() {
  return (
    <section className="relative bg-[#f6f5fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              English-First Insurance
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Get Insured in Minutes.
              <br />
              Insurance Made Simple.
            </h1>

            {/* Features */}
            <div className="space-y-3">
              <FeatureItem
                icon={GraduationCap}
                text="For students, professionals & families moving to Germany"
              />
              <FeatureItem
                icon={Briefcase}
                text="Health • Legal • Liability • Pension coverage"
              />
              <FeatureItem
                icon={ShieldCheck}
                text="Tailored plans for every stage of your move"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-3 pt-4 max-w-md">
              <Link href="/get-started" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full bg-primary text-white font-semibold
                    px-5 py-3 rounded-full
                    flex items-center justify-center gap-2
                    shadow-lg hover:shadow-xl transition
                  "
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link href="/learn-more" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full border border-gray-300 text-gray-800
                    px-5 py-3 rounded-full
                    hover:bg-gray-100 transition
                  "
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            {/* Reviews */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-4 bg-white rounded-xl px-5 py-3 shadow-sm border">
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">4.5 • 2,310 reviews</p>
                </div>

                <img
                  src="/gifs_assets/google.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE PATTERN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
                <Image
                  src="/hero_assets/hero4.png"
                  alt="Insurance family"
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 45vw, 22vw "
                />
              </div>

              {/* Image 2 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
                <Image
                  src="/hero_assets/family1.jpeg"
                  alt="Insurance consultation"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>

              {/* Image 3 (Wide) */}
              <div className="relative aspect-[16/9] col-span-2 rounded-2xl overflow-hidden ">
                <Image
                  src="/hero_assets/heroin.jpg"
                  alt="Insurance support"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
