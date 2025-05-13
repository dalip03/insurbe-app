"use client";

import Image from "next/image";

const products = [
  {
    title: "Working Professionals",
    desc: "PKV or Expat Insurance if you earn above €73,800",
    icon: "/img/working.png",
  },
  {
    title: "Visa Seekers",
    desc: "Get valid insurances for your visa approval",
    icon: "/img/visa.png",
  },
  {
    title: "Students",
    desc: "Affordable, government-approved student plans",
    icon: "/img/student.png",
  },
  {
    title: "Family",
    desc: "Private or public plans that cover loved ones",
    icon: "/img/family.png",
  },
];

export default function ProductBanner() {
  return (
    <section className="bg-gradient-to-br from-[#fdf3ff] to-white py-16  text-center">
      <p className="text-sm text-purple-700 font-medium mb-2">
        When in Germany Think Insubre
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-snug">
        Our Curated Products for People <br /> Traveling to Germany
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 max-w-3xl mx-auto px-4 ">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <div className="bg-gradient-to-br from-[#0F1535] to-[#11225C] rounded-2xl text-white flex flex-col sm:flex-row items-start justify-between relative min-h-[160px]">
              <div className="text-left z-10 sm:max-w-[70%] p-5">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-white/80 mt-2">{product.desc}</p>
                <button className="mt-4 bg-white text-purple-600 font-medium text-sm px-4 py-2 rounded-md shadow-sm hover:bg-purple-100 transition">
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
          </div>
        ))}
      </div>
    </section>
  );
}
