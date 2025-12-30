"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";

export default function HeroSection11() {
  return (
    <section className=" bg-primary overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            {/* Kicker */}
            <span className="inline-block text-xs sm:text-sm uppercase tracking-wide text-white/70">
              Easy Insurance for Germany
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get Insured in Minutes.
              <br />
              English-First Insurance Solutions.
            </h1>

            {/* Features */}
            <div className="space-y-3">
              <FeatureItem
                icon={GraduationCap}
                text="For students, professionals & families moving to Germany"
                color="text-purple-300"
              />
              <FeatureItem
                icon={Briefcase}
                text="Health • Legal • Liability • Pension coverage"
                color="text-blue-300"
              />
              <FeatureItem
                icon={ShieldCheck}
                text="Tailored plans for every stage of your move"
                color="text-green-300"
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-row gap-4 pt-4"
            >
              <Link href="/">
                <button className="bg-white  cursor-pointer text-primary font-semibold px-7 py-3 rounded-full shadow-xl hover:scale-105 transition flex items-center justify-center gap-2">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link href="/">
                <button className="border cursor-pointer  border-white/60 text-white px-7 py-3 rounded-full hover:bg-white hover:text-primary transition">
                  Learn More
                </button>
              </Link>
            </motion.div>

            {/* Reviews */}
            <div className="pt-2">
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
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md sm:max-w-lg mx-auto"
          >
            <div className="relative w-full aspect-[4/5]  overflow-hidden ">
              <Image
                src="/hero_assets/party.png"
                alt="Real life insurance moments"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Feature item helper */
function FeatureItem({
  icon: Icon,
  text,
  color,
}: {
  icon: any;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`w-5 h-5 mt-1 ${color}`} />
      <p className="text-sm sm:text-lg text-white/90">{text}</p>
    </div>
  );
}
