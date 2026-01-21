"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Globe, GraduationCap, Briefcase } from "lucide-react";

const plans = [
  {
    title: "Insurbe World Education",
    subtitle: "For students & educational stays abroad",
    icon: GraduationCap,
    points: [
      "For travelers under 30 years of age",
      "Must be taken out before departure",
      "Ideal for studies, au pair & internships",
    ],
    image: "/hero_assets/groupStudent.jpg",
  },
  {
    title: "Insurbe German Traveler",
    subtitle: "For residents of Germany",
    icon: Briefcase,
    points: [
      "Worldwide trips up to 5 years",
      "Must be taken out before departure",
      "Ideal for Work & Travel and long-term stays",
    ],
    image: "/hero_assets/travel4.jpg",
  },
  {
    title: "Insurbe World Traveler",
    subtitle: "For travelers worldwide",
    icon: Globe,
    points: [
      "Can be taken out even after the trip has started",
      "12-month term, renewable",
      "Ideal for backpackers & digital nomads",
    ],
    image: "/hero_assets/travel2.jpg",
  },
];

export default function VisaSeekersInsurance() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Whatever trip you are planning,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Insurbe has you covered
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Whether you are planning your journey or already abroad, Insurbe
            provides the right travel health insurance for every kind of stay.
          </p>
        </motion.div>

        {/* Chancenkarte Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-10 text-white text-center shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Insurbe Chancenkarte 🇩🇪
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Specially designed insurance solution for Chancenkarte applicants
            planning to live, work, and search for opportunities in Germany.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            <Clock className="w-4 h-4" />
            Coming soon
          </div>
        </motion.div>

        {/* Insurance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    {plan.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-3">
                    <div className="w-full py-3 rounded-full bg-gray-100 text-gray-500 text-center font-semibold cursor-not-allowed">
                      Coming soon
                    </div>

                    <div className="w-full py-3 rounded-full border border-primary text-primary text-center font-semibold">
                      Learn more
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 mt-16 max-w-2xl mx-auto">
          Not sure which travel health insurance fits your journey?
          Our upcoming overview will help you choose the right coverage —
          wherever life takes you.
        </p>
      </div>
    </section>
  );
}
