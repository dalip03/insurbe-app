"use client";

import { Calendar, CheckCircle, Mail, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partners: Partner[] = [
  {
    name: "Allianz",
    logo: "/partners/allianz.png",
    width: 120,
    height: 40,
  },
  {
    name: "AOK",
    logo: "/partners/aok.png",
    width: 120,
    height: 40,
  },
  {
    name: "Barmer",
    logo: "/partners/barmer.png",
    width: 120,
    height: 40,
  },
  {
    name: "Barmenia",
    logo: "/partners/bothaer.png",
    width: 120,
    height: 40,
  },
  {
    name: "DKV",
    logo: "/partners/dkv.png",
    width: 120,
    height: 40,
  },
  {
    name: "Hallesche",
    logo: "/partners/haliesche.png",
    width: 120,
    height: 40,
  },
  {
    name: "HanseMerkur",
    logo: "/partners/hanse.png",
    width: 120,
    height: 40,
  },
  {
    name: "Signal Iduna",
    logo: "/partners/signal.png",
    width: 120,
    height: 40,
  },
];

export default function AboutPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;

          // Reset to beginning when reached end
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScrolling();

    // Pause on hover
    scrollContainer.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });

    scrollContainer.addEventListener("mouseleave", () => {
      startScrolling();
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

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
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <section className="bg-white pt-16 pb-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-black text-xl sm:text-2xl font-bold uppercase tracking-wide mb-6">
              PARTNER
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We build on trust and value cooperative partnerships. It is not
              without reason that we have built up a large network that we have
              been able to rely on for many years.
            </p>
          </div>

          {/* Auto-Scrolling Logos */}
          <div className="relative mb-12 sm:mb-16">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 py-8 min-w-max">
                {/* Duplicate logos for seamless loop */}
                {[...partners, ...partners, ...partners].map(
                  (partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="flex-shrink-0 transition-all duration-300"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        className="w-auto h-10 sm:h-12 object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Are you interested in collaborating with us?
            </p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-primary text-primary hover:bg-primary cursor-pointer hover:text-white font-semibold px-8 py-3 sm:px-10 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              Contact us
            </motion.button>
          </div>
        </div>

        {/* Animated Text Line at Bottom */}
        {/* <div className="mt-16 sm:mt-20 overflow-hidden py-2">
        <div className="animate-scroll-text whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl font-black text-primary/40 uppercase tracking-wider">
          KAMMA NICH MECKÄNI DA KAMMA NICH MECKÄNI DA KAMMA NICH MECKÄNI DA
          KAMMA NICH MECKÄNI DA
        </div>
      </div> */}

        {/* Hide Scrollbar & Add Animation CSS */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          @keyframes scroll-text {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-text {
            animation: scroll-text 20s linear infinite;
          }
        `}</style>
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
                  Get a Free Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Share your details and message. Our team will get back to you
                  shortly.
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="Tell us what you’re looking for (student, family, visa type, etc.)"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg
                 font-semibold hover:bg-primary/90 transition shadow-lg"
                  >
                    Submit Request
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
