"use client";

import { motion } from "framer-motion";
import { PiggyBank, BedDouble, BadgePercent } from "lucide-react";

const benefits = [
  {
    title: "Premium relief in old age",
    desc: "We offer guaranteed premium relief in old age. Think of it as a savings pot where capital is set aside to reduce premiums later. Best of all, your employer contributes up to 50% of these additional savings.",
    cta: "More information about premium relief",
    icon: PiggyBank,
  },
  {
    title: "Daily sickness benefits",
    desc: "Employees are usually covered by their employer for 42 days. To secure yourself against long-term illness, daily sickness benefits step in and compensate for income loss.",
    cta: "More information on daily sickness benefits",
    icon: BedDouble,
  },
  {
    title: "No-claim bonus",
    desc: "First Class Pro+ and Business Class Pro tariffs include a no-claim bonus if no benefits are claimed (except dental cleanings, check-ups, and vaccinations) for one year.",
    cta: "More information about no-claim bonus",
    icon: BadgePercent,
  },
];

export default function PrivatePublicInsuranceBenefits() {
  return (
    <section id="learnmore" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            More control over your private<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
               health insurance
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            Personalize your coverage with smart add-ons and future-proof
            benefits.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-purple-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="w-full rounded-lg py-3 text-sm font-semibold text-purple-600 border border-purple-300 hover:bg-purple-50 transition">
                  {item.cta}
                </button>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100/40 to-pink-100/40 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
