"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Peace Of Mind",
    description:
      "Rest easy with comprehensive health insurance that protects you and your family against unexpected medical and other expenses.",
    image: "/img/laptop.png",
    bg: "from-[#0F1535] to-[#1F255C]",
  },
  {
    title: "Tailored Cover",
    description:
      "Choose from a variety of customizable plans designed to fit your unique needs. With InsurBe, you get coverage that’s as individual as you are.",
    image: "/img/laptop.png",
    bg: "from-[#7847E1] to-[#9B4DDF]",
  },
  {
    title: "Set For Life",
    description:
      "Our health insurance plans provide long-term financial security, ensuring that you’re covered for any medical needs throughout your life.",
    image: "/img/laptop.png",
    bg: "from-[#6D98EB] to-[#D59EFF]",
  },
];

export default function Expectations() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-white to-[#fdf3ff]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-start text-gray-900 mb-2 px-2">
          We Actively Strive To Exceed Our <br /> Customers’{" "}
          <span className="text-purple-600">Expectations</span>
        </h2>
        <p className="text-start text-gray-600 text-sm sm:text-base mt-2 px-2">
          Best Offers at competitive prices, never seen before
        </p>

        <div className="flex items-center gap-5 flex-wrap justify-center mt-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col justify-between w-[360px] h-[396px] p-[50px_95px_40px_20px] rounded-[16px] shadow-[0.5px_2px_20px_rgba(0,0,0,0.12)] overflow-hidden"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Optional dark overlay for readability */}
              <div className="absolute inset-0 z-0 opacity-0"></div>

              <div className="relative z-10 text-white flex flex-col justify-between h-full  pr-10">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-md">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
