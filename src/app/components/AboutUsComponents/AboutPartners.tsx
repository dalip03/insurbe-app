"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partners: Partner[] = [
  {
    name: "Allianz",
    logo: "/partners/allianz.png",
    width: 120,
    height: 40,
  },
  {
    name: "AOK",
    logo: "/partners/aok.png",
    width: 120,
    height: 40,
  },
  {
    name: "Barmer",
    logo: "/partners/barmer.png",
    width: 120,
    height: 40,
  },
  {
    name: "Barmenia",
    logo: "/partners/bothaer.png",
    width: 120,
    height: 40,
  },
  {
    name: "DKV",
    logo: "/partners/dkv.png",
    width: 120,
    height: 40,
  },
  {
    name: "Hallesche",
    logo: "/partners/haliesche.png",
    width: 120,
    height: 40,
  },
  {
    name: "HanseMerkur",
    logo: "/partners/hanse.png",
    width: 120,
    height: 40,
  },
  {
    name: "Signal Iduna",
    logo: "/partners/signal.png",
    width: 120,
    height: 40,
  },
];

export default function AboutPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;

          // Reset to beginning when reached end
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScrolling();

    // Pause on hover
    scrollContainer.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });

    scrollContainer.addEventListener("mouseleave", () => {
      startScrolling();
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="bg-white pt-16 pb-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-black text-xl sm:text-2xl font-bold uppercase tracking-wide mb-6">
            PARTNER
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We build on trust and value cooperative partnerships. It is not
            without reason that we have built up a large network that we have
            been able to rely on for many years.
          </p>
        </div>

        {/* Auto-Scrolling Logos */}
        <div className="relative mb-12 sm:mb-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 py-8 min-w-max">
              {/* Duplicate logos for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="w-auto h-10 sm:h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Are you interested in collaborating with us?
          </p>
          <Link href="/contact">
            <button className="border-2 border-primary text-primary hover:bg-primary cursor-pointer hover:text-white font-semibold px-8 py-3 sm:px-10 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Animated Text Line at Bottom */}
      {/* <div className="mt-16 sm:mt-20 overflow-hidden py-2">
        <div className="animate-scroll-text whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl font-black text-primary/40 uppercase tracking-wider">
          KAMMA NICH MECKÄNI DA KAMMA NICH MECKÄNI DA KAMMA NICH MECKÄNI DA
          KAMMA NICH MECKÄNI DA
        </div>
      </div> */}

      {/* Hide Scrollbar & Add Animation CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes scroll-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-text {
          animation: scroll-text 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
