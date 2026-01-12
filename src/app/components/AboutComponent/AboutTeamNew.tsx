"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutTeamNew() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Section Label */}
            <h3 className="text-primary text-base sm:text-lg font-bold uppercase tracking-wide">
              OUR TEAM
            </h3>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Our colleagues are as diverse and surprising as this city – 13 nationalities from all corners of Berlin.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The mix is what makes it work: interpreters, lawyers, mathematicians, businesswomen and men, biologists, architects, electronics engineers, makeup artists, IT systems electronics engineers, designers, scientists and many other talents are looking every day for new solutions and improvements that suit Berliners.
            </p>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700">
                Interested in joining our team?
              </p>
              
              {/* <Link href="/jobs">
                <button className="border-2 border-primary cursor-pointer text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 sm:px-10 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base">
                  To the jobs
                </button>
              </Link> */}
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative lg:mt-0 mt-8 ">
            <div className="relative overflow-hidden shadow-xl">
              <Image
                src="/about/colorTshirt.webp"
                alt="Colorful shirts on hangers representing team diversity"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
