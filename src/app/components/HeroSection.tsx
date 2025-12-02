"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[650px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[850px] w-full overflow-hidden">
      {/* Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[600px] sm:max-w-[700px] md:max-w-[900px]">
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
      <div className="absolute left-6 sm:left-12 md:left-20 lg:left-72 top-[38%] sm:top-[40%] md:top-[42%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse z-10">
        <Image
          src="/hero_assets/leftstar.svg"
          alt="Star"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Star */}
      <div className="absolute right-6 sm:right-12 md:right-20 lg:right-42 top-[30%] sm:top-[32%] md:top-[34%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 animate-pulse z-10">
        <Image
          src="/hero_assets/rightstar.svg"
          alt="Star"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-[650px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[850px] flex flex-col">
        {/* Header Text */}
        <div className="text-center pt-4 sm:pt-6 md:pt-10 lg:pt-12 pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-5 max-w-5xl mx-auto">
            Unlock the Best Insurance Solutions in{" "}
            <br className="hidden sm:block" />
            Germany with Ease
          </h1>

          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">
                →
              </span>
              <p className="text-left">
                For Students, Professionals and Families moving to Germany
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">
                →
              </span>
              <p className="text-left">
                From health and liability to legal and pension coverage
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">
                →
              </span>
              <p className="text-left">
                Best options tailored to your unique needs
              </p>
            </div>
          </div>
        </div>

        {/* Images Layout - Desktop style for all screens */}
        <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 mt-2 sm:mt-4 md:mt-6">
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
            {/* Left Banner - Visible on all screens, positioned above bottom */}
            <div className="absolute left-2 sm:left-4 md:left-8 lg:left-16 xl:left-24 bottom-[180px] sm:bottom-[220px] md:bottom-[260px] lg:bottom-32 xl:bottom-36 w-32 h-20 sm:w-40 sm:h-24 md:w-44 md:h-28 lg:w-52 lg:h-32 xl:w-56 xl:h-36 z-20">
              <Image
                src="/hero_assets/herobanner.svg"
                alt="Rating Banner"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Center Girl Image - Touching bottom */}
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] lg:w-[440px] lg:h-[560px] xl:w-[500px] xl:h-[640px] z-10">
              <Image
                src="/hero_assets/herobggirl.svg"
                alt="Student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Right Banner - Visible on all screens, positioned above bottom */}
            <div className="absolute right-2 sm:right-4 md:right-8 lg:right-16 xl:right-24 bottom-[180px] sm:bottom-[220px] md:bottom-[260px] lg:bottom-40 xl:bottom-52 w-36 h-24 sm:w-44 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 xl:w-60 xl:h-40 z-20">
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
      </div>
    </section>
  );
}