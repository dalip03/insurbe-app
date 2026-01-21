"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Heart, CheckCircle2 } from "lucide-react";

export default function PublicVsPrivateIntro() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
          >
            <Shield className="w-4 h-4" />
            Health Insurance Guide
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Public or Private,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              what's right for me?
            </span>
          </h2>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>
                In Germany, health insurance is a <strong className="text-gray-900">legal requirement</strong> for everyone.
                You must have health insurance to get your visa, enroll at a
                university, start a job, and access healthcare.
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>
                We help you find the right health insurance for your situation and
                needs — including your visa type.
              </span>
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
              <p className="text-gray-700">
                For some internationals,{" "}
                <span className="font-semibold text-purple-700">
                  public health insurance
                </span>{" "}
                is the best fit, while for others,{" "}
                <span className="font-semibold text-primary">
                  private health insurance
                </span>{" "}
                works better. No matter which option is right for you, you'll be
                covered by trusted providers and supported every step of the way.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/compare/public-vs-private"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Compare Options
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all"
            >
              Learn More
            </Link>
          </div> */}
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/hero_assets/groupStudent.jpg" 
                alt="Public vs Private Health Insurance"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Trusted by</p>
                  <p className="text-lg font-bold text-gray-900">10,000+ Users</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Coverage</p>
                  <p className="text-lg font-bold text-gray-900">100%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}