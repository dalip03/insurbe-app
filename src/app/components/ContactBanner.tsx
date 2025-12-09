"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-50 py-20"
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-2xl shadow-[0_0_49.7px_0_rgba(0,0,0,0.25)] overflow-hidden flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="p-8 md:p-12 flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:pr-10">
              Let us guide you to the best insurance with{" "}
              <span className="text-primary">Insurbe</span>
            </h2>
            <p className="text-sm text-black mb-6">
              Get a quote in Less than 5 minutes
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary/95 transition">
              Send Message
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-end  md:self-stretch md:relative ">
           {/* Mobile - Full visible image */}
<div className="md:hidden relative w-full aspect-square max-w-xs ml-auto -mr-4">
  <Image
    src="/img/familyfooter.svg"
    alt="Happy family"
    fill
    className="object-contain"
    priority
  />
</div>


            {/* Desktop - Full height cover */}
            <div className="hidden md:block relative w-full h-full min-h-[300px]">
              <Image
                src="/img/familyContact.png"
                alt="Happy family"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
