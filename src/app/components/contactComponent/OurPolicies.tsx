"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronRight, Umbrella, Shield } from "lucide-react";

interface Policy {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const healthPolicies: Policy[] = [
  {
    title: "Public health",
    description: "Choose from one of the four biggest public health providers",
    image: "/contact_assets/public.avif",
    bgColor: "from-[#fff3e6] to-[#ffe8d6]",
  },
  {
    title: "Private health",
    description: "Comprehensive coverage for those who want a little extra",
    image: "/contact_assets/private.avif",
    bgColor: "from-[#e3f2fd] to-[#d1e9f6]",
  },
  {
    title: "Expat health",
    description: "Health insurance when moving to a new country",
    image: "/contact_assets/expat.avif",
    bgColor: "from-[#e0f2f1] to-[#d1e9e8]",
  },
  {
    title: "Dental",
    description: "Comprehensive care and cleanings to fill the gaps in public health insurance.",
    image: "/contact_assets/dental.avif",
    bgColor: "from-[#e0f2f1] to-[#d1e9e8]",
  },
];

const lifePolicies: Policy[] = [
  {
    title: "Life",
    description: "Support for your loved ones in the event of your passing",
    image: "/contact_assets/life.avif",
    bgColor: "from-[#fff3e6] to-[#ffe8d6]",
  },
  {
    title: "Disability",
    description: "Replaces lost income if you're unable to work",
    image: "/contact_assets/disability.avif",
    bgColor: "from-[#fff3e6] to-[#ffe8d6]",
  },
  {
    title: "Legal",
    description: "Covers the cost of disputes over employment, contracts, and more.",
    image: "/contact_assets/legal.avif",
    bgColor: "from-[#f5f5f0] to-[#ebe9e0]",
  },
  {
    title: "Pension",
    description: "Personal pension plan for a secured retirement",
    image: "/contact_assets/pension.avif",
    bgColor: "from-[#e8f5e9] to-[#d8ead9]",
  },
];

const basicsPolicies: Policy[] = [
  {
    title: "Personal liability",
    description: "Protection for damage you cause to people or their belongings",
    image: "/contact_assets/liability.avif",
    bgColor: "from-[#fff3e6] to-[#ffe8d6]",
  },
  {
    title: "Household",
    description: "Protection for your home and your belongings",
    image: "/contact_assets/household.avif",
    bgColor: "from-[#fff3e6] to-[#ffe8d6]",
  },
  {
    title: "Bike",
    description: "Coverage for bikes in the case of theft, damages, and more",
    image: "/contact_assets/bike.avif",
    bgColor: "from-[#e0f2f1] to-[#d1e9e8]",
  },
  {
    title: "Dog liability",
    description: "Covers damage caused by dogs to others or their belongings",
    image: "/contact_assets/dog.avif",
    bgColor: "from-[#e0f2f1] to-[#d1e9e8]",
  },
  {
    title: "Pet health",
    description: "Coverage for vet appointments and treatments for pets",
    image: "/contact_assets/pet.avif",
    bgColor: "from-[#fce4ec] to-[#f8d7e6]",
  },
  {
    title: "Travel",
    description: "Health and trip cancellation coverage while travelling abroad",
    image: "/contact_assets/travel.avif",
    bgColor: "from-[#e3f2fd] to-[#d1e9f6]",
  },
];

export default function OurPolicies() {
  return (
    <section className="bg-[#f5f5f0] py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">
          Our policies
        </h2>

        {/* HEALTH CATEGORY */}
        <div className="mb-16">
          {/* Category Title */}
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-700">Health</h3>
          </div>

          {/* Policy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
            {healthPolicies.map((policy, index) => (
              <Link
                key={index}
                href={`/policies/${policy.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  {/* Image */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${policy.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                    <Image
                      src={policy.image}
                      alt={policy.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {policy.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Compare CTA */}
          <Link href="/">
            <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffe8cc] rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 cursor-pointer group max-w-2xl">
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Compare health insurances
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  See what's different between public, private, and expat
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-900 flex-shrink-0 group-hover:translate-x-1 transition-transform ml-4" />
            </div>
          </Link>
        </div>

        {/* LIFE CATEGORY */}
        <div className="mb-16">
          {/* Category Title */}
          <div className="flex items-center gap-2 mb-6">
            <Umbrella className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-700">Life</h3>
          </div>

          {/* Policy Grid - NO BORDERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {lifePolicies.map((policy, index) => (
              <Link
                key={index}
                href={`/policies/${policy.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  {/* Image */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${policy.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                    <Image
                      src={policy.image}
                      alt={policy.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {policy.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* BASICS CATEGORY */}
        <div>
          {/* Category Title */}
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-700">Basics</h3>
          </div>

          {/* Policy Grid - NO BORDERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {basicsPolicies.map((policy, index) => (
              <Link
                key={index}
                href={`/policies/${policy.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  {/* Image */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${policy.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                    <Image
                      src={policy.image}
                      alt={policy.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {policy.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
