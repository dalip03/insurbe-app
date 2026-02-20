"use client";

import { motion } from "framer-motion";

export default function MawistaBookingIframe() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
            Official Partner
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            Apply for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Mawista Student Insurance
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete your insurance application securely through our official
            partner booking system.
          </p>
        </motion.div>

        {/* Iframe Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-white">

          {/* Gradient top border effect */}
          <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />

          <iframe
            src="https://www2.elviab2b.de/mawista-booking/index.faces?SPRACHE=EN&PT=STU&UVM=IB25"
            className="w-full h-[1000px]"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}
