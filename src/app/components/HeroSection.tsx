"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[650px] md:min-h-[750px] lg:min-h-[850px] w-full overflow-hidden">
      {/* Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[900px] max-h-[900px]">
          <Image
            src="/images/circle-bg.png"
            alt="Background Circle"
            fill
            className="object-contain opacity-10"
            priority
          />
        </div>
      </div>

      {/* Left Star */}
      <div className="absolute left-8 md:left-72 top-[45%] md:top-[40%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse z-10">
        <Image
          src="/hero_assets/leftstar.svg"
          alt="Star"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Star */}
      <div className="absolute right-8 md:right-42  top-[42%] md:top-[32%] w-12 h-12 md:w-14 md:h-14 animate-pulse z-10">
        <Image
          src="/hero_assets/rightstar.svg"
          alt="Star"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-[650px] md:min-h-[750px] lg:min-h-[850px] flex flex-col">
        {/* Header Text */}
        <div className="text-center pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6 max-w-5xl mx-auto">
            Unlock the Best Insurance Solutions in{" "}
            <br className="hidden sm:block" />
            Germany with Ease
          </h1>

          <div className="space-y-1.5 md:space-y-2 text-white max-w-4xl mx-auto">
  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
    <span className="text-base md:text-lg lg:text-xl flex-shrink-0">
      →
    </span>
    <p className="text-left">For Students, Professionals and Families moving to Germany</p>
  </div>
  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
    <span className="text-base md:text-lg lg:text-xl flex-shrink-0">
      →
    </span>
    <p className="text-left">From health and liability to legal and pension coverage</p>
  </div>
  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
    <span className="text-base md:text-lg lg:text-xl flex-shrink-0">
      →
    </span>
    <p className="text-left">Best options tailored to your unique needs</p>
  </div>
</div>
        </div>

        {/* Images Layout - Absolutely positioned at bottom */}
        <div className="relative flex-1 w-full max-w-7xl mx-auto">
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-4 md:gap-8 lg:gap-16 px-4">
            {/* Left Banner - Positioned above bottom */}
            <div className="hidden md:block absolute left-4 lg:left-16 xl:left-24 bottom-24 lg:bottom-32 xl:bottom-36 w-44 h-28 lg:w-52 lg:h-32 xl:w-56 xl:h-36 z-20">
              <Image
                src="/hero_assets/herobanner.svg"
                alt="Rating Banner"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Center Girl Image - Touching bottom */}
            <div className="relative w-[70vw] max-w-[280px] h-[350px] sm:max-w-[340px] sm:h-[420px] md:max-w-[380px] md:h-[480px] lg:max-w-[440px] lg:h-[560px] xl:max-w-[500px] xl:h-[640px] z-10">
              <Image
                src="/hero_assets/herobggirl.svg"
                alt="Student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Right Banner - Positioned above bottom */}
            <div className="hidden md:block absolute right-4 md:right-24  bottom-24 md:bottom-52 w-48 h-32 lg:w-56 lg:h-36 xl:w-60 xl:h-40 z-20">
              <Image
                src="/hero_assets/herobanner1.svg"
                alt="Expert Agents"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Banners - Below the section */}
        <div className="md:hidden flex flex-col gap-4 items-center px-4 pb-8 pt-4 z-20 bg-primary">
          <div className="relative w-full max-w-[280px] h-28 bg-white/95 rounded-2xl shadow-xl">
            <Image
              src="/hero_assets/herobanner.svg"
              alt="Rating Banner"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
          <div className="relative w-full max-w-[280px] h-32 bg-white/95 rounded-2xl shadow-xl">
            <Image
              src="/hero_assets/herobanner1.svg"
              alt="Expert Agents"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}