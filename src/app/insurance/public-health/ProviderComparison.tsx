"use client";

import Image from "next/image";
import { Check, Gift, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------------- */
/* DATA */
/* -------------------------------------------------------------------------- */

const providers = [
  
  {
    id: "dak",
    name: "DAK",
    logo: "/partners_asset/DAK_logo.avif",
    english: 3,
    digital: 2,
    speed: 3,
    highlight: "Excellent coverage for families",
    bonus: "Up to €500",
  },
  {
    id: "tk",
    name: "TK",
    logo: "/partners_asset/TK_logo.avif",
    english: 3,
    digital: 3,
    speed: 3,
    highlight: "Best digital services for students",
    bonus: "Up to €400",
    featured: true,
  },
  {
    id: "aok",
    name: "AOK",
    logo: "/partners_asset/AOK_logo.avif",
    english: 2,
    digital: 1,
    speed: 2,
    highlight: "Personal support across Germany",
    bonus: "Depends on branch",
  },
];

/* -------------------------------------------------------------------------- */
/* HELPERS */
/* -------------------------------------------------------------------------- */

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={i <= count ? "text-black/70" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

const Speed = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={i <= count ? "text-purple-600" : "text-gray-300"}
      >
        ⚡
      </span>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN */
/* -------------------------------------------------------------------------- */

export default function ProviderComparison() {
  const router = useRouter();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Compare{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              public health insurance providers
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Core benefits are the same — service quality makes the difference.
          </p>
        </motion.div>

        {/* PROVIDER CARDS (SAME DESIGN AS TARIFFS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {providers.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 shadow-xl flex flex-col
                ${
                  p.featured
                    ? "bg-linear-to-br from-purple-600 to-purple-700 text-white shadow-2xl"
                    : "bg-white border-2 border-gray-200"
                }`}
            >
              {/* BADGE */}
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2
                  bg-linear-to-r from-yellow-400 to-orange-400
                  text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow">
                  ⭐ Most Popular
                </div>
              )}

              {/* HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <Image src={p.logo} alt={p.name} width={36} height={36} />
                <h3 className="text-2xl font-bold">{p.name}</h3>
              </div>

              {/* FEATURES */}
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between items-center">
                  <span>English support</span>
                  <Stars count={p.english} />
                </div>

                <div className="flex justify-between items-center">
                  <span>Digital services</span>
                  <Stars count={p.digital} />
                </div>

                <div className="flex justify-between items-center">
                  <span>Processing speed</span>
                  <Speed count={p.speed} />
                </div>

                <div className="flex justify-between items-center">
                  <span>Dependents</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              </div>

              {/* HIGHLIGHT */}
              <p className="text-sm mb-6 opacity-90">
                {p.highlight}
              </p>

              {/* BONUS */}
              <div className="flex items-center gap-2 mb-8">
                <Gift className="w-5 h-5 text-black/70" />
                <span className="font-bold text-black/70">
                  {p.bonus}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() =>
                  router.push(`/insuranceSignupFlow?provider=${p.id}`)
                }
                className={`mt-auto w-full py-4 rounded-xl font-bold transition-all
                  ${
                    p.featured
                      ? "bg-white text-purple-600 hover:bg-purple-50"
                      : "bg-gradient-to-r from-purple-600 to-primary text-white"
                  }`}
              >
                Sign up →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
