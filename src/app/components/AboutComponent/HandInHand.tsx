"use client";

import Image from "next/image";

export default function HandInHand() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - Logo (Centered on all screens) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/about/hansemerkur.webp"
                alt="HanseMerkur Logo"
                width={400}
                height={300}
                className="w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE - Content (Centered on mobile, left on desktop) */}
          <div className="space-y-6 text-center md::text-left md:pr-16">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-black uppercase ">
              HAND IN HAND
            </h2>

            {/* First Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
              The stability and security so essential in the insurance business
              is also guaranteed by our parent company, HanseMerkur.
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
              For more than 150 years, the Hamburg-based company has been one of
              Germany's leading insurers. This security helps us focus on what
              truly matters – you – our customer. Your needs, your life
              circumstances, your security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
