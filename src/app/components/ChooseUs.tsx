"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChooseUs() {
  const reasons = [
    {
      title: "Peace Of Mind",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/student.svg",
    },
    {
      title: "Tailored Coverage",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/support.svg",
    },
    {
      title: "Affordable Options",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/job.svg",
    },
    {
      title: "Expert Support",
      desc: "Generic text to outline the benefits of Insurbe and the particular feature.",
      icon: "/icons/family.svg",
    },
  ];

  return (
    <section className="py-16 px-12 bg-gradient-to-br from-white to-[#fdf3ff]">
      <h2 className="text-3xl font-bold text-start mb-10 px-2 sm:px-6 md:px-10">
        Why Choose Us?
      </h2>
      <div className="gap-10 max-w-full mx-6 flex  ">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ borderWidth: 2, borderColor: "transparent" }}
            whileHover={{
              backgroundColor: "#ffff",
              borderColor: "#A970D7",
              transition: {
                backgroundColor: { duration: 1.7, ease: "easeInOut" },
                borderColor: { duration: 1.7, ease: "easeInOut" },
              },
            }}
            className="bg-gray-100 backdrop-blur-md cursor-pointer p-6 rounded-xl text-center border-2 transition-all ease-in-out"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white rounded-md shadow-sm ">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <p className="text-sm text-black mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
