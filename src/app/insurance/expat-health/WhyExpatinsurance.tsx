"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Briefcase,
  FileCheck,
  GraduationCap,
  Microscope,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    title: "New arrivals",
    desc: "If you’re moving to Germany for the first time, expat health insurance is the perfect choice for you.",
    icon: Plane,
  },
  {
    title: "Freelancers & Self-employed",
    desc: "Ideal for freelancers seeking cost-effective coverage or those not eligible for public or private insurance.",
    icon: Briefcase,
  },
  {
    title: "Visa & residence permit seekers",
    desc: "Covers almost all first-time visas and renewals, including work and residence permits.",
    icon: FileCheck,
  },
  {
    title: "Students",
    desc: "For students enrolled in language schools or coding programs during their studies in Germany.",
    icon: GraduationCap,
  },
  {
    title: "Post doctorates & researchers",
    desc: "Highly trained professionals who are neither university students nor salaried employees.",
    icon: Microscope,
  },
  {
    title: "Mini-jobbers or interns",
    desc: "For those earning less than €556/month or doing short-term internships in Germany.",
    icon: Wallet,
  },
];

export default function WhyExpatinsurance() {
  return (
    <section className="py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl sm:text-4xl text-center lg:text-5xl font-bold text-gray-900 md:px-20">
            Who can benefit from{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              expat health insurance?
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Flexible insurance solutions designed for internationals,
            professionals, and students living in Germany.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="
                relative rounded-3xl p-8
                bg-white
                border border-purple-100
                shadow-lg hover:shadow-xl
                transition
              "
            >
              {/* ICON BADGE */}
              <div className="
                w-14 h-14 rounded-2xl
                bg-gradient-to-br from-primary to-purple-600
                flex items-center justify-center
                mb-6
                shadow-md
              ">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-purple-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
