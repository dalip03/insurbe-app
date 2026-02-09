"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, Calendar, ArrowLeft } from "lucide-react";

export default function BookAppointmentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => router.push("/"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------------- SUCCESS STATE ---------------- */
  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f5ff] to-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Appointment Request Sent 🎉
          </h2>

          <p className="text-gray-600 mb-6">
            Our insurance expert will contact you within 24 hours to confirm your
            appointment.
          </p>

          <p className="text-sm text-gray-500">
            Redirecting to homepage…
          </p>
        </motion.div>
      </section>
    );
  }

  /* ---------------- MAIN PAGE ---------------- */
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f7f5ff] to-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Free Expert Consultation
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book your insurance consultation
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get personalized advice for insurance planning in Germany — tailored
            to expats, professionals, and freelancers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <Image
              src="/gifs_assets/appointment1.png"
              alt="Expert consultation"
              width={500}
              height={350}
              className="rounded-xl mb-6"
              unoptimized
            />

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why speak with an expert?
            </h3>

            <ul className="space-y-3 text-gray-700">
              {[
                "Avoid choosing the wrong pension plan",
                "Understand tax advantages clearly",
                "Get realistic contribution & payout estimates",
                "Compare multiple pension options",
                "Free & no obligation consultation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule your appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label} *
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select</option>
                    {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map(
                      (t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional notes (optional)
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg"
              >
                {isSubmitting ? "Booking…" : "Book Free Appointment"}
              </motion.button>

              <button
                type="button"
                onClick={() => router.back()}
                className="w-full flex items-center justify-center gap-2 text-gray-600 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Go back
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
