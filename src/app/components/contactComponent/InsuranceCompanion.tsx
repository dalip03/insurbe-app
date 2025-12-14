"use client";

import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
  imageType: "photo" | "icon";
}

const features: Feature[] = [
  {
    title: "Adjusting to a changing lifestyle",
    description: "Our work isn't done after you purchase a policy. We're here to make sure your coverage evolves with your lifestyle, whether it's adding kids or figuring out how much coverage you need for life insurance.",
    image: "/contact_assets/lifestyle.avif",
    imageType: "photo",
  },
  {
    title: "Transparent advice",
    description: "Feather is built by expats who've navigated the insurance maze as you; that's why our goal is to simplify your decision-making, whether in our recommendation tool or the advice you get from our experts.",
    image: "/contact_assets/advice.avif",
    imageType: "photo",
  },
  {
    title: "Everything in one app",
    description: "Managing policies, submitting claims, getting advice, adding family members, all in the same account.",
    image: "/logo.svg",
    imageType: "icon",
  },
];

export default function InsuranceCompanion() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-12 sm:mb-16">
          Your insurance companion
        </h2>

        {/* Features List */}
        <div className="space-y-12 sm:space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start"
            >
              {/* Image - Always on Left */}
              <div className="flex-shrink-0">
                {feature.imageType === "photo" ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-lg w-full aspect-[4/3]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={280}
                      height={210}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffe8cc] rounded-2xl p-6 sm:p-8 flex items-center justify-center w-32 h-32 sm:w-70 sm:h-40">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Content - Always on Right */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
