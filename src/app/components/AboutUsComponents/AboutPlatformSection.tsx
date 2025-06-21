"use client";
import Image from "next/image";

export default function AboutPlatformSection() {
  return (
   <section className="px-2">
   <div className="bg-[#470877] text-white py-20 px-4 sm:px-10 lg:px-20 rounded-[48px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Side Layout */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* Image 1 */}
          <div className=" h-70">
            <Image
              src="/about/image1.png"
              alt="Image 1"
              width={600}
              height={400}
            />
          </div>

          {/* Image 2 */}
          <div className=" h-72">
            <Image
              src="/about/image2.png"
              alt="Image 2"
              width={400}
              height={300}
            />
          </div>

          {/* Image 3 */}
          <div className=" h-60">
            <Image
              src="/about/image3.png"
              alt="Image 3"
              width={400}
              height={300}
            />
          </div>

          {/* Image 4 */}
          <div className="">
            <Image
              src="/about/image4.png"
              alt="Image 4"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <span className="inline-block bg-white/10 text-xs px-3 py-1 rounded-full font-medium">
            First Launch
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            2021: Platform Launch
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-md">
            Introduced the first iteration of our platform, enabling easier
            comparisons of health, life, and property insurance.
          </p>
          <button className="bg-white text-[#8224E3] hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-semibold transition">
            Get Started →
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
