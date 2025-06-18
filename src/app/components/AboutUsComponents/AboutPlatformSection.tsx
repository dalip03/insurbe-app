"use client";
import Image from "next/image";

export default function AboutPlatformSection() {
  return (
    <section className="bg-[#470877] text-white py-20 px-4 lg:px-20 rounded-tl-[48px] rounded-br-[48px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left: 2x2 Grid of Image Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 - Top Left with overlay */}
          <div className="relative col-span-2 h-48 sm:h-52 md:h-56 rounded-xl overflow-hidden">
            <Image
              src="/about/image1.png"
              alt="Dashboard Overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end rounded-xl">
              <p className="text-xs sm:text-sm text-white max-w-sm">
                Track insurances, view reports and monitor analytics — all in
                one smart dashboard built for fast, clear, and efficient access.
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-36 rounded-xl overflow-hidden">
            <Image
              src="/about/image2.png"
              alt="Shipment Statistics"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-36 rounded-xl overflow-hidden">
            <Image
              src="/about/image3.png"
              alt="Analytical View"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="relative col-span-2 h-40 rounded-xl overflow-hidden">
            <Image
              src="/about/image4.png"
              alt="Custom Reports"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <span className="inline-block bg-white/10 text-xs px-3 py-1 rounded-full text-white font-medium">
            First Launch
          </span>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            2021: Platform Launch
          </h3>
          <p className="text-white/80 text-lg max-w-md">
            Introduced the first iteration of our platform, enabling easier
            comparisons of health, life, and property insurance.
          </p>
          <button className="bg-white text-[#8224E3] hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-semibold transition">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
