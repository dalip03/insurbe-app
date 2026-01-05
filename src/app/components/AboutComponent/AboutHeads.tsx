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
    name: "Marvin F",
    role: "Founder & CEO",
    image: "/about/marvin.jpeg",
    bio: [
    "Bussiness + IT - HWR Berlin CFEP - Frankfurt school of finance & management 34d Versicherungsfachmann 34f Finanzanlagenfachmann ",
    "12+ year experience in insurance + investment consulting and Teamlead",
    ],
  },
  {
    name: "Manjunathan B",
    role: "CEO/Co-Founder",
    image: "/about/ceo1.JPG",
    bio: [
      "Seasoned entrepreneur with over 24 years of experience in IT consultancy and business leadership. Skilled at driving strategic growth, fostering strong customer relationships, and managing key accounts to deliver sustained value and client satisfaction.",
      // "At Insurbe, Abi leads the technology vision and strategy, driving innovation and excellence in our AI-powered insurance solutions.",
    ],
  },
  {
    name: "Abinandhanan S",
    role: "CTO/Co-Founder",
    image: "/about/Abhinandan.JPG",
    bio: [
      "Over a decade of experience in research and building scalable AI solutions for enterprises. Proven track record of defining technology vision and strategy, driving innovation and excellence in AI-powered insurance solutions.",
      // "At Insurbe, Abi leads the technology vision and strategy, driving innovation and excellence in our AI-powered insurance solutions.",
    ],
  },
  {
    name: "Safiya R",
    role: "Chief of staff",
    image: "/about/safiya.JPG",
    bio: [
      "Experienced in operations, strategy, and collaboration with a proven ability to streamline processes, align priorities, and ensure smooth, efficient execution.",
      // "With her exceptional organizational skills, strategic mindset, and collaborative approach, Safiya plays a pivotal role in ensuring our company's operations run smoothly and efficiently.",
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
              Our Team
            </h2>
            <div className="h-[2px] flex-1 bg-white"></div>
          </div>
        </div>

        {/* Hero Image */}
    {/* Hero Image with Decorative Border */}
{/* <div className="mb-16 sm:mb-20 flex justify-center px-4">
  <div className="relative w-full max-w-md sm:max-w-2xl lg:max-w-3xl">
  
    <div className="absolute top-3 -right-3 z-20 sm:top-5 sm:-right-5 lg:top-6 lg:-right-6 w-full h-full  z-10"></div>
    
    <Image
      src="/about/heads.webp"
      alt="Berlin Direkt Team"
      width={800}
      height={500}
      className="w-full h-auto shadow-2xl relative z-21"
      priority
    />
  </div>
</div> */}


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
