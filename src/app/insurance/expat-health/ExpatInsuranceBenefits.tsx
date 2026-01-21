"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  PiggyBank,
  Stethoscope,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Your health in the best of care",
    desc: `Public health insurance can be quite limited. With our tariffs, you can close this gap forever. Reimbursement for prescribed medication, alternative practitioners, glasses, dentist invoices and chief physician treatment are just some of the benefits of private insurance that public insurance does not cover.`,
  },
  {
    icon: PiggyBank,
    title: "Your savings potential",
    desc: `In contrast to public health insurance, your premium with ottonova is calculated independently of your income. This means that you could save up to €4,371 per year – with a higher scope of benefits at the same time.`,
  },
  {
    icon: Stethoscope,
    title: "Access to doctors and specialists",
    desc: `If you are sick, quick help is our top priority. As a privately insured person, you avoid long waiting times and referrals from general physicians. Instead, you can go directly to the specialist doctor of your choice.`,
  },
  {
    icon: Smartphone,
    title: "Digital services in one app",
    desc: `Zero paperwork guaranteed! We offer English-speaking support via phone and chat that helps you find English-speaking doctors in your area and answers all of your insurance and health-related questions, as well as easy claims and fast reimbursement via our app.`,
  },
];

export default function ExpatInsuranceBenefits() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
              Up to €4,371 annual savings potential
            </span>{" "}
            while getting much more benefits for your health
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg">
            Find out why private insurance is worthwhile for you:
          </p>
        </motion.div>

        {/* BENEFITS GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-14">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-6"
              >
                {/* ICON */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                  bg-gradient-to-br from-purple-600 to-primary text-white shadow-lg"
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
