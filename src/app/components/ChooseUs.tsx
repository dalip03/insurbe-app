"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChooseUs() {
  const reasons = [
    {
      title: "Health Insurance",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/student.svg",
    },
    {
      title: "Private Pension Scheme",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/support.svg",
    },
    {
      title: "Liability Insurance",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/job.svg",
    },
    {
      title: "Household Insurance",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/family.svg",
    },
    {
      title: "Legal Insurance",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/family.svg",
    },
    {
      title: "Travel Insurance",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/family.svg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-white to-[#fdf3ff] overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore our range of Insurance Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ borderWidth: 2, borderColor: "transparent" }}
            whileHover={{
              backgroundColor: "#ffffff",
              borderColor: "#A970D7",
              transition: {
                backgroundColor: { duration: 1.7, ease: "easeInOut" },
                borderColor: { duration: 1.7, ease: "easeInOut" },
              },
            }}
            className="bg-gray-100/60 px-10 lg:px-16 py-8 backdrop-blur-md cursor-pointer rounded-xl text-center border-2 transition-all ease-in-out"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white rounded-md shadow-sm">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl text-black">{item.title}</h3>
            <p className="text-lg text-black mt-4 leading-6">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
