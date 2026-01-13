"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Clock,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivateHealthPage() {
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
              <HeartPulse className="w-4 h-4" />
              Private Health Insurance
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Get Safe & Premium
              <br />
              Private Health Insurance
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Enjoy faster access to doctors, private clinics, and customized
              coverage designed around your lifestyle in Germany.
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
                src="/insurance/private-health.jpg"
                alt="Private Health Insurance"
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
              icon: Clock,
              title: "Shorter Waiting Times",
              desc: "Get appointments faster without long queues.",
            },
            {
              icon: Stethoscope,
              title: "Private Doctors & Clinics",
              desc: "Access top specialists and private hospitals.",
            },
            {
              icon: ShieldCheck,
              title: "Custom Coverage",
              desc: "Choose benefits that fit your needs and budget.",
            },
            {
              icon: HeartPulse,
              title: "Premium Comfort",
              desc: "Better hospital rooms and treatment options.",
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
              Who Should Choose Private Health Insurance?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• High-income professionals</li>
              <li>• Self-employed & freelancers</li>
              <li>• Young professionals seeking premium care</li>
              <li>• Expats planning long-term stay in Germany</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Insurbe?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• English-first consultation</li>
              <li>• Trusted German insurance partners</li>
              <li>• Transparent guidance, no hidden costs</li>
              <li>• Support throughout your insurance journey</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
