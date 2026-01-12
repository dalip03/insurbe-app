"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "Working Professionals",
    desc: "PKV or Expat Insurance if you earn above €73,800",
    icon: "/img/working.png",
    link: "/products/privateProducts",
  },
  {
    title: "Family",
    desc: "Private or public plans that cover loved ones",
    icon: "/img/family.png",
    link: "/products/pensionProducts",
  },
  {
    title: "Visa Seekers",
    desc: "Get valid insurances for your visa approval",
    icon: "/img/visa.png",
    link: "/products/visaSeakers",
  },
  {
    title: "Students",
    desc: "Affordable, government-approved student plans",
    icon: "/img/student.png",
    link: "/products/students",
  },
  
];

export default function ProductBanner() {
  return (
    <section  id="choose-us" className="py-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-primary font-medium mb-2"
      >
        When in Germany Think Insubre
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-snug"
      >
        Our Curated Products for People <br /> Traveling to Germany
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 max-w-3xl mx-auto px-4">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Link href={product.link}>
              <div className="bg-gradient-to-br from-[#0F1535] to-[#11225C] rounded-2xl text-white flex flex-col sm:flex-row items-start justify-between relative min-h-[160px] cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                <div className="text-left z-10 sm:max-w-[70%] p-5">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{product.desc}</p>
                  <button className="mt-4 cursor-pointer bg-white text-primary font-medium text-sm px-4 py-2 rounded-md shadow-sm hover:bg-purple-100 transition">
                    Explore Plans
                  </button>
                </div>

                <div className="absolute bottom-0 right-0 rounded-2xl overflow-hidden">
                  <Image
                    src={product.icon}
                    alt={product.title}
                    width={160}
                    height={160}
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
