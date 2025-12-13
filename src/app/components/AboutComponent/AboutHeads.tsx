"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "TOBIAS BLODAU",
    role: "Board",
    image: "/about/vorstand.webp",
    bio: [
      "Tobias Blodau has been with the company since 2012 and assumed the position of the Board in January 2022. He is the heart and soul of Berlin Direkt's innovative spirit. With a passion for creating 2022, Tobias led the company through innovation with his extensive knowledge, he has already shaped the company's strategic direction.",
      "Getting to the heart of complex issues, making sound business judgments, and keeping a cool head even in heated situations – these are just a few of the qualities we value so highly about Tobias.",
    ],
  },
  {
    name: "VERA SCHEUERMANN",
    role: "Board",
    image: "/about/vera.webp",
    bio: [
      "Vera Scheuermann joined the Board of Berlin Direkt Versicherung in October 2025. With a two years perfect fit for the role she is rapidly at home in insurance topics of future Road activity. As Regional Director for International & Online at Ergo, she managed a huge portfolio with responsibility for insurance business & strategy.",
      "With Vera on board, we are ideally positioned to further expand our other enterprises Health care and digital pay-as-you-go insurance coverage.",
    ],
  },
  {
    name: "FLORIAN MEURS",
    role: "Managing Director",
    image: "/about/florian.webp",
    bio: [
      "Florian Meurs joined Berlin Direkt Versicherung as Managing Director in July 2022. With his expertise, he is the company's further course speed and ensuring reliable operations.",
      "With countless ideas, a keen sense for market trends, and a hands-on approach, Florian is not only making Berlin Direkt have become, but past it in also readily available to all employees as a sounding board.",
    ],
  },
];

export default function AboutHeads() {
  return (
    <section className="bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-[2px] flex-1 bg-white"></div>
            <h2 className="text-white text-3xl  font-bold whitespace-nowrap">
              Our heads
            </h2>
            <div className="h-[2px] flex-1 bg-white"></div>
          </div>
        </div>

        {/* Hero Image */}
    {/* Hero Image with Decorative Border */}
<div className="mb-16 sm:mb-20 flex justify-center px-4">
  <div className="relative w-full max-w-md sm:max-w-2xl lg:max-w-3xl">
    {/* Cyan decorative border */}
    <div className="absolute top-3 -right-3 z-20 sm:top-5 sm:-right-5 lg:top-6 lg:-right-6 w-full h-full  z-10"></div>
    
    {/* Main Image */}
    <Image
      src="/about/heads.webp"
      alt="Berlin Direkt Team"
      width={800}
      height={500}
      className="w-full h-auto shadow-2xl relative z-21"
      priority
    />
  </div>
</div>


        {/* Team Members */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col ${
                 "sm:flex-row"
              } items-center gap-8 sm:gap-12 lg:gap-16`}
            >
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={224}
                    className="rounded-full object-cover w-full h-full border-4 border-gray-700"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white b-2">
                  {member.name}
                </h3>
                <p className="text-base sm:text-lg text-white font-semibold mb-6">
                  {member.role}
                </p>
                <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
