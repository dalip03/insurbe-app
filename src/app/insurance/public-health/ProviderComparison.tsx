"use client";

import Image from "next/image";
import { Check, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------------- */
/* DATA */
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
/* HELPERS */
/* -------------------------------------------------------------------------- */

const Stars = ({ count }: { count: number }) => (
  <div className="flex justify-center gap-1">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={i <= count ? "text-gray-900" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

const Speed = ({ count }: { count: number }) => (
  <div className="flex justify-center gap-1">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={i <= count ? "text-gray-900" : "text-gray-300"}
      >
        ⚡
      </span>
    ))}
  </div>
);

/* shared grid row structure */
const ROWS =
  "grid grid-rows-[96px_repeat(7,64px)]";

/* -------------------------------------------------------------------------- */
/* MAIN */
/* -------------------------------------------------------------------------- */

export default function ProviderComparison() {
  const router = useRouter();

  const handleSignup = (providerId: string) => {
    router.push(`/insuranceSignupFlow?provider=${providerId}`);
  };

  return (
    <section className="relative py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Compare{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              public health insurance providers
            </span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Core benefits are the same — service quality makes the difference.
          </p>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-[260px_repeat(3,1fr)] border-t border-gray-200">

          {/* LEFT LABELS */}
          <div className={`py-8 font-semibold text-gray-700 ${ROWS}`}>
            <div />
            <div>Your contribution</div>
            <div>English support</div>
            <div>Digital services</div>
            <div>Processing speed</div>
            <div>Dependents coverage</div>
            <div>Highlight</div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-purple-600" />
              Bonus program
            </div>
          </div>

          {/* PROVIDERS */}
          {providers.map((p) => (
            <div
              key={p.id}
              className={`border-l border-gray-200 py-8 px-6 ${ROWS}`}
            >
              {/* ROW 1 – HEADER */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image src={p.logo} alt={p.name} width={28} height={28} />
                  <span className="font-bold">{p.name}</span>
                </div>
                <button
                  onClick={() => handleSignup(p.id)}
                  className="mt-4 w-full rounded-xl py-2 text-sm font-bold text-white
                    bg-gradient-to-r from-purple-600 to-primary shadow"
                >
                  Sign up →
                </button>
              </div>

              {/* ROW 2 – CONTRIBUTION */}
              <div className="text-center font-semibold">
                € —
                <div>
                  <button className="text-sm underline text-gray-600">
                    Calculate
                  </button>
                </div>
              </div>

              {/* ROW 3 */}
              <Stars count={p.english} />

              {/* ROW 4 */}
              <Stars count={p.digital} />

              {/* ROW 5 */}
              <Speed count={p.speed} />

              {/* ROW 6 */}
              <div className="flex justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>

              {/* ROW 7 */}
              <p className="text-sm text-center text-gray-700">
                {p.highlight}
              </p>

              {/* ROW 8 */}
              <div className="flex justify-center">
                <div className=" px-4 py-2">
                  <p className="text-sm font-bold text-amber-700">
                    {p.bonus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE (unchanged logic) ================= */}
        <div className="grid gap-6 lg:hidden">
          {providers.map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 rounded-xl p-5 bg-white shadow"
            >
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <Image src={p.logo} alt={p.name} width={80} height={32} />
                <button
                  onClick={() => handleSignup(p.id)}
                  className="rounded-lg px-4 py-2 text-sm font-bold text-white
                    bg-gradient-to-r from-purple-600 to-primary"
                >
                  Sign up →
                </button>
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
                  <strong>Highlight</strong>
                  <p>{p.highlight}</p>
                </div>
                <div>
                  <strong>Bonus</strong>
                  <p>{p.bonus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
