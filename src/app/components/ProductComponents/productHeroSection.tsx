// HeroSection.tsx
import React from "react";

const ProductHeroSection = () => {
  return (
    <section className="relative bg-[#8224E3] bg-gradient-to-br from-[#8224E3] to-[#9B5CE7] text-white py-24 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,_rgba(255,255,255,0.05)_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          Insurbe
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Health Insurance for <br /> Professionals in Germany
        </h1>

        <p className="text-lg md:text-xl mb-10 px-2 text-white/90">
          If you’re working in Germany and earning above €73,800/year, you may be eligible for private or expat health insurance — with better benefits and lower costs than public insurance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#8224E3] transition font-semibold">
            Talk to an Advisor
          </button>
          <button className="bg-white text-[#8224E3] px-6 py-3 rounded-md hover:opacity-90 transition font-semibold">
            Check My Eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
