"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Marvin Fürst",
    role: "Founder & CEO",
    image: "/about/marvin.jpeg",
    bio: [
      "Founded by an industry expert with over a decade of experience, our company was created to simplify insurance through transparency, trust, and smart digital solutions designed for modern life.",
    ],
  },
  {
    name: "Manjunathan B",
    role: "Director",
    image: "/about/ceo1.JPG",
    bio: [
      "Seasoned entrepreneur with over 24 years of experience in IT consultancy and business leadership. Skilled at driving strategic growth, fostering strong customer relationships, and managing key accounts to deliver sustained value and client satisfaction.",
    ],
  },
  {
    name: "Abinandhanan S",
    role: "Head of Technology",
    image: "/about/Abhinandan.JPG",
    bio: [
      "Over a decade of experience in research and building scalable AI solutions for enterprises. Proven track record of defining technology vision and strategy, driving innovation and excellence in AI-powered insurance solutions.",
    ],
  },
  {
    name: "Safiya R",
    role: "Chief of Staff",
    image: "/about/safiya.JPG",
    bio: [
      "Experienced in operations, strategy, and collaboration with a proven ability to streamline processes, align priorities, and ensure smooth, efficient execution.",
    ],
  },
];

export default function AboutHeads() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-18 bg-linear-to-br from-slate-50 via-purple-50/40 to-blue-50/40 overflow-hidden">
     
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Meet the people
            </span>{" "}
            behind InsurBe
          </motion.h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A team combining insurance expertise, technology leadership, and
            operational excellence to deliver secure and reliable solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16 sm:space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14"
            >
              {/* Profile Image */}
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-1 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-primary font-semibold text-base sm:text-lg mb-4">
                  {member.role}
                </p>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
