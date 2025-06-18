"use client";
import Image from "next/image";
import React from "react";

const ExpansionSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#fdf3ff] py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Expansion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            2022: Expanding <br /> for Expats
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Expanded services to provide tailored insurance solutions for
            expats, addressing unique cross-border challenges.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-[#8224E3] text-white px-6 py-2 rounded-md font-medium hover:bg-[#6e1fc3] transition">
              Contact us →
            </button>
            <button className="border border-gray-300/20 text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Get Started →
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex-1 w-full max-w-md">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden ">
            <Image
              src="/about/expension.png"
              alt="Expanding for Expats"
              width={500}
              height={500}
              className="object-cover w-full md:w-90 lg:h-[480px] rounded-xl"
            />
          </div>

          {/* Overlay Card (Single Image) */}
          <div className="absolute -top-8 md:-top-6 md:-left-10 ">
            <Image
              src="/about/expensiongraph.png"
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
};

export default ExpansionSection;
