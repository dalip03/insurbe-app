"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  ShieldCheck,
  Clock,
  Baby,
  Layers,
  Lock,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Lifelong pension or one-time payout",
    note: "Choose monthly income or capital payment",
    icon: CalendarCheck,
  },
  {
    title: "Disability insurance",
    note: "Optional additional protection",
    icon: ShieldCheck,
  },
  {
    title: "Flexible retirement start",
    note: "Decide when your pension begins",
    icon: Clock,
  },
  {
    title: "Provision for children",
    note: "Available from €25 per month",
    icon: Baby,
  },
  {
    title: "Investment diversification",
    note: "Risk spread across multiple funds",
    icon: Layers,
  },
  {
    title: "Warranty plan",
    note: "Optional long-term security",
    icon: Lock,
  },
];

export default function FamilyPensionPlans() {
  const router = useRouter();

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]  rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">

        {/* LEFT – Filled Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
            What’s included
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Included in our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Genius Pension Plan
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mb-8">
            Build your retirement with maximum flexibility, strong tax
            advantages, and long-term security — tailored for professionals and
            expats in Germany.
          </p>

          {/* Highlight bullets (fills space naturally) */}
          <ul className="space-y-4 mb-10">
            {[
              "Flexible payouts adapted to your life goals",
              "Tax-efficient retirement planning",
              "Portable pension — even if you leave Germany",
              "Secure long-term investment strategy",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/book-appointment")}
            className="inline-flex items-center gap-3 bg-linear-to-r from-primary to-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Appointment
          </motion.button>

            <p className="text-sm text-gray-500 self-center">
              Free • No obligation • 30 minutes
            </p>
          </div>
        </motion.div>

        {/* RIGHT – Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.note}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
