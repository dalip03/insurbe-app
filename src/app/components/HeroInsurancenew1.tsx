"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Calendar,
  Mail,
  User,
  X,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

/* ---------------- Feature Item ---------------- */

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
}

function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 mt-1 text-primary" />
      <p className="text-gray-700 text-sm sm:text-base">{text}</p>
    </div>
  );
}

/* ---------------- Hero ---------------- */

export default function HeroInsurancenew1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can add API call to save appointment data
    console.log("Appointment data:", formData);

    // Show success message
    setShowSuccess(true);

    // Reset form and close modal after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
      setFormData({ name: "", email: "", date: "" });
    }, 1000);
  };

  const handleScroll = () => {
    const el = document.getElementById("choose-us");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                English-First Insurance
              </span>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Get Insured in Minutes.
                <br />
                Insurance Made Simple.
              </h1>

              {/* Features */}
              <div className="space-y-3">
                <FeatureItem
                  icon={GraduationCap}
                  text="For students, professionals & families moving to Germany"
                />
                <FeatureItem
                  icon={Briefcase}
                  text="Health • Legal • Liability • Pension coverage"
                />
                <FeatureItem
                  icon={ShieldCheck}
                  text="Tailored plans for every stage of your move"
                />
              </div>

              {/* CTAs */}
              {/* CTAs */}
              <div
                className="
    flex flex-col sm:flex-row
    gap-3 pt-4
    w-full max-w-md
  "
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="
      w-full sm:flex-1
      bg-primary text-white font-semibold
      px-5 py-3 sm:py-3.5
      rounded-full
      flex items-center justify-center gap-2
      shadow-lg hover:shadow-xl
      transition
      whitespace-nowrap cursor-pointer
    "
                >
                  <span className="text-sm sm:text-base">
                    Book an Appointment
                  </span>
                  {/* <ArrowRight className="w-4 h-4 flex-shrink-0" /> */}
                </motion.button>

                <motion.button
                  onClick={handleScroll}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="
      w-full sm:flex-1
      border border-gray-300 text-gray-800
      px-5 py-3 sm:py-3.5
      rounded-full
      hover:bg-gray-100
      transition
      whitespace-nowrap cursor-pointer
    "
                >
                  <span className="text-sm sm:text-base">Learn More</span>
                </motion.button>
              </div>

              {/* Reviews */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-4 bg-white rounded-xl px-5 py-3 shadow-sm border">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">4.5 • 2,310 reviews</p>
                  </div>

                  <img
                    src="/gifs_assets/google.png"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT SINGLE IMAGE WITH CIRCULAR BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              <div className=" aspect-[5/4] md:aspect-[7/6] rounded-3xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/hero_assets/family1.jpeg"
                  alt="Insurance made easy"
                  fill
                  priority
                  className="object-cover object-top rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* CIRCULAR TEXT BADGE */}
              <div className="absolute -top-12 -right-4 sm:-top-6 sm:-left-16 w-28 h-28 sm:w-32 sm:h-32 z-50">
                <div className="relative w-full h-full">
                  {/* Rotating SVG with inline style animation */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      animation: "spin 14s linear infinite",
                    }}
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        />
                      </defs>
                      <text
                        fill="#531d6f"
                        fontSize="12"
                        fontWeight="600"
                        letterSpacing="2.2"
                      >
                        <textPath href="#circlePath" startOffset="0">
                          INSURANCE EXPERTS • INSURANCE EXPERTS •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* CENTER ICON - Always centered */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <Image
                      src="/hero_assets/expats.png"
                      alt="Insurance Expert Badge"
                      width={64}
                      height={64}
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                      priority
                    />
                  </div>
                </div>

                <style jsx>{`
                  @keyframes spin {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                `}</style>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
            >
              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Success!
                    </h3>
                    <p className="text-gray-600 text-center px-6">
                      We will connect with you shortly
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Book an Appointment
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill in your details and we'll get back to you soon
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Date Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow-lg"
                  >
                    Submit Appointment
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
