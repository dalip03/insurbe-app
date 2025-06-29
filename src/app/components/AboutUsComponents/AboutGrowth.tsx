"use client";
import Image from "next/image";
import React from "react";

const Growth = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#fdf3ff] py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Growth
          </span>
          <h2 className="text-3xl md:text-[64px] font-medium text-[#111827] mb-4">
            2024: Strategic <br /> Partnerships
          </h2>
          <p className="text-gray-600 text-[18px] mb-6 max-w-md mx-auto lg:mx-0">
            Continued scaling operations while forming strategic partnerships
            with leading insurance providers worldwide.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-[#6e1fc3] transition">
              Know more →
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex-1 w-full max-w-md">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden ">
            <Image
              src="/about/growth.png"
              alt="Expanding for Expats"
              width={500}
              height={500}
              className="object-cover w-full md:w-90 lg:h-[480px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
