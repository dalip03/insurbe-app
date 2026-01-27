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
  Clock,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/* ---------------- Feature Item ---------------- */

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
}

function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-primary" />
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{text}</p>
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
    time: "",
    comment: "",
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment data:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
      setFormData({ name: "", email: "", date: "", time: "", comment: "" });
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 shadow-lg mx-auto lg:mx-0 w-fit"
              >
                <Star className="w-3 h-3 text-purple-600" />
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">
                  Instant Coverage
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-extrabold text-gray-900 leading-tight px-2 sm:px-4">
                Get Insured in{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-blue-600">
                  Minutes
                </span>
              </h1>

              {/* Sub text */}
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-4">
                Insurance Made Simple for You, Fully digital and compliant.
              </p>

              {/* CTAs */}
              <div className="flex flex-col xs:flex-row gap-3 pt-2 max-w-md mx-auto lg:mx-0 px-2 sm:px-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full xs:flex-1 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white text-sm sm:text-base font-bold py-3 sm:py-4 px-6 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                >
                  Take the questionnaire
                </motion.button>

                <motion.button
                  onClick={handleScroll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full xs:flex-1 rounded-2xl lg:rounded-3xl border-2 border-gray-300 hover:border-gray-400 px-6 py-3 sm:py-4 text-gray-800 font-semibold text-sm sm:text-base hover:bg-gray-50 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 inline-block ml-1 -mt-0.5" />
                </motion.button>
              </div>

              {/* Reviews */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4 sm:pt-6 flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:inline">
                    Rated Excellent
                  </span>
                  <img
                    src="/gifs_assets/google.png"
                    alt="Google"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE - FIXED FOR DESKTOP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[500px] xl:h-[600px] order-1 lg:order-2"
            >
              <div className="absolute inset-0 w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/hero_assets/phero8.avif"
                  alt="Insurance made easy"
                  fill
                  priority
                  className="object-contain sm:object-cover object-center hover:object-[center_top] transition-all duration-500 rounded-2xl lg:rounded-3xl w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Decorative Badge */}
             
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Appointment Modal - UNCHANGED */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4"
            >
              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 z-10 flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 rounded-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-500 mb-4 sm:mb-6" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 text-center px-4">
                      Success!
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center px-4 sm:px-6 leading-relaxed">
                      We will connect with you shortly
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Modal Content */}
              <div className="relative z-10 p-5 sm:p-6 md:p-8 lg:p-10 max-h-[90vh] overflow-y-auto">
                <div className="mb-6 sm:mb-8 md:mb-10 pr-12 sm:pr-14">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    Book an Appointment
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    Fill in your details and we'll get back to you soon
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 sm:pl-12 md:pl-14 pr-4 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 sm:pl-12 md:pl-14 pr-4 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Date and Time Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-11 sm:pl-12 md:pl-14 pr-4 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-11 sm:pl-12 md:pl-14 pr-4 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                        >
                          <option value="">Select a time</option>
                          <option value="09:00 - 10:00">09:00 – 10:00</option>
                          <option value="10:00 - 11:00">10:00 – 11:00</option>
                          <option value="11:00 - 12:00">11:00 – 12:00</option>
                          <option value="14:00 - 15:00">14:00 – 15:00</option>
                          <option value="15:00 - 16:00">16:00 – 16:00</option>
                          <option value="16:00 - 17:00">16:00 – 17:00</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                      Additional Comments (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Tell us anything important before the call..."
                      className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-200 rounded-xl resize-vertical focus:ring-3 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm min-h-[100px]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 cursor-pointer text-white py-3.5 sm:py-4 md:py-4.5 rounded-2xl text-sm sm:text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                  >
                    Submit Appointment →
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
