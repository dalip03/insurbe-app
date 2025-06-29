"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-[#f5ebff] to-white py-20 px-4 lg:px-20">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
        Insurbe’s Journey
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
           <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
            The Birth
          </span>
          <h3 className="text-3xl md:text-[64px] font-medium text-gray-900 ">
            2020: Foundation and Vision
          </h3>
          <p className="text-gray-600 text-lg pr-10">
            Insurbe was founded with a vision to simplify the insurance process
            for individuals and families.
          </p>

          <div className="flex space-x-4">
            <button className="bg-primary hover:bg-primary/60 text-white px-6 py-3 rounded-md text-sm font-medium shadow transition">
              Contact us →
            </button>
            <button className="border border-gray-200 text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Get Started →
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden ">
            <Image
              src="/about/aboutHero.png"
              alt="Expanding for Expats"
              width={500}
              height={500}
              className="object-cover w-full md:w-90 lg:h-[480px] rounded-xl"
            />
          </div>
          {/* Overlay Card (Single Image) */}
          <div className="absolute -bottom-8 md:-bottom-8 md:right-4 ">
            <Image
              src="/about/HeroOverlay.png"
              alt="Expats Stats"
              width={260}
              height={160}
              className="rounded-xl shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
