'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="bg-gradient-to-r from-white via-white to-pink-100 py-20 px-6 sm:px-10 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-14 leading-tight">
        Get in touch with us. <br /> We’re here to assist you.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="FIRST NAME"
              className="flex-1 border border-gray-300 rounded-md p-3 text-sm"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="LAST NAME"
              className="flex-1 border border-gray-300 rounded-md p-3 text-sm"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="w-full border border-gray-300 rounded-md p-3 text-sm"
            required
          />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-3 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#6F3FF5] hover:bg-[#5e33d6] text-white font-semibold py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>

        {/* Right Map + Info */}
        <div className="w-full space-y-6">
          <div className="rounded-xl overflow-hidden relative">
            <Image
              src="/map-placeholder.png" // Replace with actual map or embed
              alt="Map"
              width={800}
              height={500}
              className="rounded-xl w-full h-[280px] object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-white p-4 rounded-xl shadow-md">
              <p className="text-sm font-medium">Visit us</p>
              <p className="text-xs text-gray-600">Office : 123 Maple Street, Springfield</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">📞</span>
              <div>
                <p className="text-gray-700 font-medium">Phone</p>
                <p className="text-gray-600 text-xs">Office : +48 6232 1151 22</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">✉️</span>
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <p className="text-gray-600 text-xs">Office : hello@uiwiki.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
