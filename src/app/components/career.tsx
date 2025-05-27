'use client';
import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-gray-900">
          Get in touch with us. <br /> We’re here to assist you.
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">First Name</label>
                <input type="text" placeholder="Vivek" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8224E3]" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Last Name</label>
                <input type="text" placeholder="Shahi" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8224E3]" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Email</label>
              <input type="email" placeholder="hello@insurbe.com" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8224E3]" />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Message</label>
              <textarea placeholder="I am coming to Germany in June" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8224E3]" />
            </div>

            <button type="submit" className="bg-[#8224E3] hover:bg-[#6b1dc2] text-white px-6 py-2 rounded-md w-full font-semibold transition">
              Submit
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.290168182957!2d-72.58234762515691!3d42.101255951414785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e6e332f00113%3A0x48fa34cbf226ca80!2s123%20Maple%20St%2C%20Springfield%2C%20MA%2001105%2C%20USA!5e0!3m2!1sen!2sin!4v1748326693662!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 border-t pt-10">
          <div className="flex items-center gap-4">
            <div className="text-2xl">📞</div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-sm font-medium">+48 6232 1151 22</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl">✉️</div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-sm font-medium">hello@uiwiki.co</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
