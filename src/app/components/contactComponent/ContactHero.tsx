"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Honest, simple<br />insurance.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700">
              All your insurance in one place, without the paperwork.
            </p>

            {/* CTA Button */}
            <div>
              <Link href="/policies">
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 sm:px-10 sm:py-5 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl">
                  See our policies
                </button>
              </Link>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-900 border-b-2 border-gray-900">
                Excellent
              </span>
              <div className="flex items-center gap-1">
                {/* 5 Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-[#00b67a]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-base text-gray-700 font-medium">Trustpilot</span>
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/contact_assets/contacthero.avif"
                alt="Person relaxing on couch with guitar"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
