"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  year: string;
  description: string;
  isActive: boolean;
}

const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    description: "Strengthening existing partnerships and gaining new cooperation partners – that's our goal for 2024. Together with our partner Invia, we'll successfully launch our innovative travel insurance with immediate benefits. Customers to be compensated in real time for flight and baggage delays thanks to parametric benefits.",
    isActive: true,
  },
  {
    year: "2023",
    description: "The new products are designed to further strengthen our core competency: the cooperative business model. To focus even more on meeting the specific requirements of our partners, particularly regarding marketing, sales processes, and customer communication. We are creating a modern infrastructure for our core business of embedded insurance.",
    isActive: true,
  },
  {
    year: "2022",
    description: "2022 is a year full of new developments. We're expanding our product range to include additional pet products as well as tire and rim insurance. The management team is also undergoing a restructuring: Tobias Blodau will join the board, succeeding Dr. Mirko Kühne. Florian Meurs will further strengthen the management team, heading up operations. And there's another reason to celebrate: Berlin Direkt Versicherung is turning 10! Happy Birthday! 🎉",
    isActive: true,
  },
  {
    year: "2021",
    description: "Just in time for the start of the new business year, our website has been given a fresh look and we have many new products on our digital shelves: a dental insurance policy that has been awarded \"VERY GOOD\" by Stiftung Warentest, as well as our cat surgery and cat health insurance policies.",
    isActive: false,
  },
  {
    year: "2020",
    description: "With Kai-Uwe Blum, we are bringing a very experienced sales director on board. In addition, we have developed a number of products such as bicycle and e-bike insurance, cyber insurance, and personal liability insurance.",
    isActive: true,
  },
  {
    year: "2019",
    description: "Together with Swiss Re and EUflight, we are launching a parametric flight delay insurance policy. We are also venturing into the cyber insurance market and starting a cooperation with Computer Bild.",
    isActive: true,
  },
  {
    year: "2018",
    description: "Dr. Mirko Kühne is appointed to the board, and the team makes a name for itself in the market with new digital services such as a chatbot and a digital insurance policy for Google Pay and Apple Wallet. The team also wins the Market Readiness Award at the InsurLab Hackathon organized by InsureLab Germany in Cologne.",
    isActive: true,
  },
  {
    year: "2016",
    description: "The team is leaving Potsdamer Platz and moving into new office space in the true heart of Berlin: Kreuzberg.",
    isActive: false,
  },
  {
    year: "2014",
    description: "We are expanding into international markets such as Austria, France, Italy, and the Netherlands. Furthermore, we have surpassed the €30 million mark in premium income, thus doubling last year's result.",
    isActive: true,
  },
  {
    year: "2013",
    description: "The branch office will become an independent company, BD24 Berlin Direkt Versicherung AG. The founding team will move into the premises at Potsdamer Platz.",
    isActive: true,
  },
  {
    year: "2012",
    description: "Establishment of the branch \"Berlin Direkt Versicherung\"",
    isActive: true,
  },
];

export default function AboutHistory() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex items-center justify-start gap-8 mb-12 md:px-32">
          <h2 className="text-2xl  font-bold text-primary uppercase tracking-wide">
            OUR STORY
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border-2 transition-all duration-300 ${
                canScrollLeft
                  ? "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border-2 transition-all duration-300 ${
                canScrollRight
                  ? "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Timeline Container */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto overflow-y-hidden scrollbar-hide pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Timeline Track */}
          <div className="relative flex items-start min-w-max gap-0">
            {timelineData.map((event, index) => (
              <div
                key={event.year}
                className="relative flex flex-col items-start"
                style={{ width: "350px" }}
              >
                {/* Year */}
                <h3
                  className={`text-3xl sm:text-4xl font-bold mb-8 ${
                    event.isActive ? "text-primary" : "text-primary"
                  }`}
                >
                  {event.year}
                </h3>

                {/* Timeline Node and Line */}
                <div className="relative flex items-center w-full">
                  {/* Circle Node */}
                  <div
                    className={`w-6 h-6 rounded-full border-4 z-10 flex-shrink-0 ${
                      event.isActive
                        ? "bg-white border-primary"
                        : "bg-[#d4e9f0] border-primary"
                    }`}
                  ></div>

                  {/* Horizontal Line */}
                  {index < timelineData.length - 1 && (
                    <div
                      className={`h-1 flex-1 ${
                        event.isActive ? "bg-primary" : "bg-primary"
                      }`}
                      style={{ width: "324px" }}
                    ></div>
                  )}
                </div>

                {/* Description */}
                <div className="mt-8 pr-8">
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      event.isActive ? "text-primary" : "text-primary"
                    }`}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
