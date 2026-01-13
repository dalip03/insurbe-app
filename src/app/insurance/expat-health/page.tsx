"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  FileCheck,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExpatHealthPage() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-[#faf9ff]">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Globe className="w-4 h-4" />
              Expat Health Insurance
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Safe & Visa-Compliant
              <br />
              Health Insurance for Expats
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Get health insurance accepted by German authorities — ideal for
              students, job seekers, and professionals moving to Germany.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push("/products/insuranceJourney")}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-2"
            >
              Take the Questionnaire
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/insurance/expat-health.jpg"
                alt="Expat Health Insurance in Germany"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: FileCheck,
              title: "Visa-Accepted Coverage",
              desc: "Recognized by German embassies & immigration offices.",
            },
            {
              icon: Clock,
              title: "Fast Policy Issuance",
              desc: "Get insured quickly — often within 24 hours.",
            },
            {
              icon: Globe,
              title: "English Documentation",
              desc: "All policies & support available in English.",
            },
            {
              icon: ShieldCheck,
              title: "Flexible Duration",
              desc: "Short-term or long-term plans that fit your stay.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* WHO IT’S FOR */}
        <div className="bg-white rounded-3xl border border-gray-200 p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who Is Expat Health Insurance For?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Students & language course participants</li>
              <li>• Job seekers relocating to Germany</li>
              <li>• Newly arrived professionals</li>
              <li>• Short-term & temporary residents</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Insurbe?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• English-first consultation</li>
              <li>• Trusted German insurance partners</li>
              <li>• Visa-safe recommendations</li>
              <li>• End-to-end support for expats</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
