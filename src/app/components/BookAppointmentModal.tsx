// app/components/BookAppointment.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BookAppointmentProps {
  onBooking: () => void;
  onBack: () => void;
}

const BookAppointment: React.FC<BookAppointmentProps> = ({
  onBooking,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/gifs/assets/appointment.gif"
            alt="Book appointment"
            width={400}
            height={300}
            className="w-full max-w-md"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Let's do this the right way
          </h2>

          <p className="text-gray-700">
            Based on your recent health history, the best plans and pricing
            will need a quick expert review.
          </p>

          {/* Benefits */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-4">
            {[
              "Avoid incorrect plan selection",
              "Get accurate premium expectations",
              "Faster insurer acceptance",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={onBooking}
              className="w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book an appointment
            </button>

            <button
              onClick={onBack}
              className="w-full px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:bg-primary/5 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Back
            </button>
          </div>

          {/* Help Link */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition mx-auto">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Why is this needed?
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
