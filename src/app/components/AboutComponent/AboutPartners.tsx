"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Tchibo", logo: "/partners/tchibo.svg" },
  { name: "Fluege.de", logo: "/partners/fluege.svg" },
  { name: "Ab in den Urlaub", logo: "/partners/abindenurlaub.svg" },
  { name: "EU Flight", logo: "/partners/euflight.svg" },
  { name: "Aerticket", logo: "/partners/aerticket.svg" },
];

export default function AboutPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-6">
          <h3 className="text-[#0891B2] text-base sm:text-lg font-bold uppercase tracking-wide">
            PARTNER
          </h3>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We build on trust and value cooperative partnerships. It is not without reason that we have built up a large network that we have been able to rely on for many years.
          </p>
        </div>

        {/* Auto-scrolling Logo Container */}
        <div className="relative mb-12 sm:mb-16">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden whitespace-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set of logos */}
            <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-scroll">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-scroll">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <p className="text-base sm:text-lg text-gray-700">
            Are you interested in collaborating with us?
          </p>
          
          <Link href="/contact">
            <button className="border-2 border-[#0891B2] text-[#0891B2] hover:bg-[#0891B2] hover:text-white font-semibold px-10 py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Animated Running Text at Bottom */}
      <div className="relative mt-16 sm:mt-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-100 uppercase tracking-wider">
            DA KAMMA NICH MECKARN! DA KAMMA NICH MECKARN! DA KAMMA NICH MECKARN!
          </span>
        </div>
      </div>

      {/* Hide Scrollbar & Add Animations */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee span {
          padding-right: 4rem;
        }
      `}</style>
    </section>
  );
}
