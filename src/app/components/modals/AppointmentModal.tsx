"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, User, CheckCircle, Clock } from "lucide-react";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentModal({
  open,
  onClose,
}: AppointmentModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Appointment data:", formData);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        comment: "",
      });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              {/* Success */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center"
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold">Success!</h3>
                    <p className="text-gray-600">
                      We will connect with you shortly
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Book{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                    an Appointment{" "}
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill in your details and we’ll get back to you soon
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 py-3 border rounded-lg"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email *
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
                        className="w-full pl-10 py-3 border rounded-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Date + Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full pl-10 py-3 border rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="w-full pl-10 py-3 border rounded-lg"
                        >
                          <option value="">Select time</option>
                          <option>09:00 – 10:00</option>
                          <option>10:00 – 11:00</option>
                          <option>11:00 – 12:00</option>
                          <option>14:00 – 15:00</option>
                          <option>15:00 – 16:00</option>
                          <option>16:00 – 17:00</option>
                          <option>17:00 – 18:00</option>
                          <option>18:00 – 19:00</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Comment (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write text here..."
                      value={formData.comment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          comment: e.target.value,
                        })
                      }
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full  bg-linear-to-r from-primary to-purple-600 text-white text-sm sm:text-base font-bold py-3 sm:py-4 px-6 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                  >
                    Submit Appointment
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
