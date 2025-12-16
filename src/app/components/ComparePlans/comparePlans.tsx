"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlansCompare from "./PlanCompares";
import InsuranceCalculator from "../CalculatorComponents/InsuranceCalculator";
import { usePremiumStore } from "@/app/stores/premiumStore";
import { useJourneyStore } from "@/app/stores/journeyStore";


export default function ComparePlans() {
  const router = useRouter();
  const { premium, tkPremium } = usePremiumStore();
  const { incomeRange } = useJourneyStore();

  const [viewMode, setViewMode] = useState("default");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // ✅ Get products from Zustand store
  const availableProducts = useJourneyStore((state) => state.availableProducts);

  // ✅ Transform store products to display format
 // In ComparePlans component
const plans = useMemo(() => {
  if (!availableProducts || availableProducts.length === 0) {
    return [];
  }

  return availableProducts.map((product) => {
    let logo = "/icons/default.svg";
    let bgColor = "bg-white";
    let available = false;

    if (product.id === "tk") {
      logo = "/icons/tk.svg";
      bgColor = "bg-white";
      available = false;
    } else if (product.id === "hallesche-premium") {
      logo = "/icons/H.svg";
      bgColor = "bg-purple-50";
      available = true;
    } else if (product.id === "hallesche-expat") {
      logo = "/icons/H.svg";
      bgColor = "bg-pink-50";
      available = true;
    }

    return {
      id: product.id,
      name: product.name,
      price: typeof product.premium === 'number' 
        ? Math.round(product.premium).toString() 
        : product.premium?.toString() || "N/A",
      period: "/ Month",
      logo,
      description: product.description,
      features: product.features,
      bgColor,
      available,
      recommended: product.type === "premium",
      tariffIds: product.tariffIds,
      documentCount: product.documentCount || 0, // ✅ Use count
      provider: product.provider,
    };
  });
}, [availableProducts]);


  // Determine which card should be highlighted initially
  const getRecommendedPlanId = () => {
    // For high income, recommend Hallesche Premium
    if (incomeRange === ">77400") {
      return "hallesche-premium";
    }
    // For medium income, recommend TK
    return "tk";
  };

  const recommendedPlanId = getRecommendedPlanId();

  // Set initial hover state to recommended plan
  useEffect(() => {
    setHoveredCard(recommendedPlanId);
  }, [recommendedPlanId]);

  const handlePersonalizeClick = () => {
    setViewMode("personalize");
    setShowCalculator(true);
  };

  const handleDefaultClick = () => {
    setViewMode("default");
    setShowCalculator(false);
  };

  const handlePersonalizedCalculationClick = () => {
    setViewMode("personalize");
    setShowCalculator(true);
  };

  const handleChoosePlan = (plan: typeof plans[0]) => {
    if (plan.available) {
      // Store selected plan details for next page
      useJourneyStore.setState({
        selectedPlan: plan.id,
      });
      router.push("/calculator/submitApplication");
    } else {
      setSelectedPlanName(plan.name);
      setShowComingSoonModal(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // ✅ Show loading state if no products yet
  if (plans.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized plans...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-10 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Best Plans suggested <br />
              based on your personal <br /> Profile
            </h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDefaultClick}
                className={`px-6 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  viewMode === "default"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Default
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePersonalizeClick}
                className={`px-6 py-3 rounded-full cursor-pointer font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  viewMode === "personalize"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Personalize
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left lg:text-right max-w-xs"
          >
            <p className="text-sm text-gray-600 mb-3">
              Modify charges to match your profile
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePersonalizedCalculationClick}
              className="bg-primary cursor-pointer hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Personalized Calculation
            </motion.button>
          </motion.div>
        </div>

        {/* Insurance Calculator */}
        <AnimatePresence>
          {showCalculator && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 40 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <InsuranceCalculator />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Product Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            {plans.length} Plans Available for You
          </span>
        </motion.div>

        {/* Cards with Equal Heights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`
            flex md:grid gap-6 
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            pb-4
            scrollbar-hide
            ${plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}
          `}
        >
          {plans.map((plan, index) => {
            const isRecommended = plan.id === recommendedPlanId;
            const isHovered = hoveredCard === plan.id;

            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(recommendedPlanId)}
                className={`
                  min-w-[85%] xs:min-w-[75%] sm:min-w-[60%] md:min-w-0
                  snap-center
                  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all
                  flex flex-col relative
                  ${plan.bgColor}
                  ${
                    isHovered
                      ? "ring-2 ring-primary"
                      : "ring-2 ring-transparent"
                  }
                `}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
                  >
                    ⭐ Recommended
                  </motion.div>
                )}

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex justify-between items-start mb-4"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                      className="flex items-baseline gap-1"
                    >
                      <span className="text-gray-800 text-4xl sm:text-5xl font-bold">
                        €
                      </span>
                      <span className="text-4xl sm:text-5xl text-gray-900 font-bold">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {plan.period}
                      </span>
                    </motion.div>

                    <div className="mt-2 font-semibold text-gray-900 text-lg">
                      {plan.name}
                    </div>

                    {plan.id === "tk" && (
                      <p className="text-xs text-gray-500 mt-1">
                        (Employee portion)
                      </p>
                    )}
                  </div>

                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <Image
                      src={plan.logo}
                      width={50}
                      height={50}
                      alt={`${plan.name} logo`}
                      className="object-contain"
                    />
                  </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="text-sm text-gray-700 mb-6 leading-relaxed"
                >
                  {plan.description}
                </motion.p>

                {/* Features - Flex grow to push button down */}
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="space-y-3 mb-6 flex-grow"
                  role="list"
                >
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.7 + i * 0.05,
                      }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Button - Stays at bottom */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-3 rounded-lg font-semibold cursor-pointer transition-all mt-auto shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isHovered
                      ? "bg-primary text-white"
                      : "bg-white text-primary border-2 border-primary"
                  }`}
                >
                  {plan.available ? "Choose plan" : "Coming Soon"}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Show / Hide Details Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          {expandedCard ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedCard(null)}
              className="px-20 py-3 rounded-lg font-semibold bg-white text-primary border-2 border-primary hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Hide Details
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedCard("compare")}
              className="px-20 py-3 rounded-lg font-semibold bg-white text-primary border-2 border-primary hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Show Details
            </motion.button>
          )}
        </motion.div>

        {/* Comparison Table */}
        <AnimatePresence>
          {expandedCard === "compare" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-10"
            >
              <PlansCompare plans={plans} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoonModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoonModal(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-50"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowComingSoonModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                </div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  Coming Soon!
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-6"
                >
                  <span className="font-semibold">{selectedPlanName}</span>{" "}
                  integration is currently under development. We&apos;ll notify
                  you once it&apos;s available.
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowComingSoonModal(false)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Got it
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
}
