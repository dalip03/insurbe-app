"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* LEFT SIDE - Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 md:pl-32">
            {/* Logo */}
            {/* <Link
              href="/"
              className="font-bold font-serif flex items-center gap-2"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={20}
                priority
              />
            </Link> */}

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              BERLIN IS
              <br />
              DIFFERENT.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-800">
              Just like <span className="font-bold">Berlin Direkt</span>.
            </p>

            {/* Description Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              <p>
                We are the{" "}
                <span className="font-semibold">
                  digital insurance manufacturer
                </span>{" "}
                in the startup hub of Berlin – agile, flexible, approachable,
                open to new ideas, and masters at developing specific solutions
                for our partners. We understand "manufacture" to mean
                handcrafted, creative, with attention to detail, tailor-made,
                and precisely according to our partners' wishes. This is what
                distinguishes our products.
              </p>

              <p>
                With our{" "}
                <span className="font-semibold">hands-on mentality</span>, we
                like to think outside the box and find creative solutions that
                create added value for partners and customers.
              </p>

              <p>
                As a well-coordinated team, we pull{" "}
                <span className="font-semibold">together</span> in everything we
                do and achieve success through cohesion and collaboration. We
                cultivate a modern, trust-based corporate culture: agile like an
                InsurTech company, but also{" "}
                <span className="font-semibold">experienced</span>
              </p>

              <p>
                like a seasoned veteran thanks to our parent company with over
                150 years of history. This combination makes us unique.
                Intrigued? Learn more about us.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/">
                <button className="bg-primary cursor-pointer  text-white font-semibold px-8 py-3.5 sm:px-10 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Our vision and our values
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            {/* Decorative cyan border effect */}
            <div className="relative">
              <div className="absolute -right-3 -bottom-3 w-full h-full  bg-primary "></div>

              {/* Main Image Container */}
              <div className="relative  overflow-hidden shadow-2xl h-[500px] sm:h-[800px] lg:h-[900px]">
                <Image
                  src="/about/abouth.webp"
                  alt="Berlin Skyline at Sunset"
                  width={800}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
