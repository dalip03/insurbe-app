"use client";

import Image from "next/image";
import { Check, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const providers = [
  {
    id: "tk",
    name: "TK",
    logo: "/partners_asset/TK_logo.avif",
    english: 3,
    digital: 3,
    speed: 3,
    highlight: "Best digital services for students",
    bonus: "Up to €400",
  },
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
/*                               UI HELPERS                                   */
/* -------------------------------------------------------------------------- */

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={`text-base ${
          i <= count ? "text-gray-900" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const Speed = ({ count }: { count: number }) => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={`text-base ${
          i <= count ? "text-gray-900" : "text-gray-300"
        }`}
      >
        ⚡
      </span>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function ProviderComparison() {
  const router = useRouter();

  /** PASS SELECTED PROVIDER */
  const handleSignup = (providerId: string) => {
    router.push(`/insuranceSignupFlow?provider=${providerId}`);
  };

  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* New Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 mb-6 shadow-lg"
          >
            
            <span className="text-sm font-bold text-purple-700 uppercase tracking-wide">
              Provider Comparison
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight sm:px-20">
            Compare{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600  to-pink-500">
              public health insurance providers
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-4xl mx-auto font-medium">
            Core benefits are the same — service quality makes the difference.
          </p>
        </motion.div>

        {/* ========================== DESKTOP VIEW ========================== */}
        <div className="hidden lg:grid grid-cols-[260px_repeat(3,1fr)] border-t border-gray-200">
          {/* LEFT LABELS */}
          <div className="py-8 space-y-10 font-semibold text-gray-700">
            <div />
            <div>Your contribution</div>
            <div>English support</div>
            <div>Digital services</div>
            <div>Processing speed</div>
            <div>Dependents coverage</div>
            <div>Highlight</div>
            {/* Updated Bonus Label */}
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-purple-600" />
              <span>Bonus program</span>
            </div>
          </div>

          {providers.map((p) => (
            <div
              key={p.id}
              className="border-l border-gray-200 py-8 px-6 space-y-10"
            >
              {/* PROVIDER HEADER */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-bold text-gray-900">{p.name}</span>
                </div>

                {/* Enhanced Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSignup(p.id)}
                  className="mt-4 w-full rounded-xl py-3 text-sm font-bold text-white
                    bg-gradient-to-r from-purple-600 via-primary to-blue-600
                    hover:from-purple-700 hover:via-primary/90 hover:to-blue-700
                    transition-all shadow-lg hover:shadow-xl shadow-purple-500/30
                    focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Sign up →
                </motion.button>
              </div>

              <div className="text-center font-semibold">
                € —
                <div>
                  <button type="button" className="text-sm underline text-gray-600 hover:text-primary transition">
                    Calculate
                  </button>
                </div>
              </div>

              <Stars count={p.english} />
              <Stars count={p.digital} />
              <Speed count={p.speed} />

              <div className="flex justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>

              <p className="text-sm text-center text-gray-700">{p.highlight}</p>
              
              {/* Enhanced Bonus Display */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-sm font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {p.bonus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================== MOBILE VIEW ========================== */}
        <div className="grid gap-6 lg:hidden">
          {providers.map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-4 pb-4 border-b">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={32}
                  className="object-contain"
                />

                {/* Enhanced Mobile Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSignup(p.id)}
                  className="rounded-xl px-5 py-2.5 text-sm font-bold text-white
                    bg-gradient-to-r from-purple-600 via-primary to-blue-600
                    hover:from-purple-700 hover:via-primary/90 hover:to-blue-700
                    transition-all shadow-lg shadow-purple-500/30
                    focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Sign up →
                </motion.button>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>English support</span>
                  <Stars count={p.english} />
                </div>

                <div className="flex justify-between">
                  <span>Digital services</span>
                  <Stars count={p.digital} />
                </div>

                <div className="flex justify-between">
                  <span>Processing speed</span>
                  <Speed count={p.speed} />
                </div>

                <div className="flex justify-between">
                  <span>Dependents</span>
                  <Check className="w-5 h-5 text-green-600" />
                </div>

                <div>
                  <span className="font-medium">Highlight</span>
                  <p className="text-gray-600">{p.highlight}</p>
                </div>

                {/* Enhanced Mobile Bonus */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-gray-900">Bonus Program</span>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg px-4 py-2.5 shadow-sm">
                    <p className="text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      {p.bonus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
