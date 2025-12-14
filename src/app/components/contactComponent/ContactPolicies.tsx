"use client";

import Image from "next/image";
import { Shield, Heart, Smartphone } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode; // Changed from string to React.ReactNode
}

const features: Feature[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Modern, flexible coverage",
    description: "When life changes, so should your insurance.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Reliable customer support",
    description: "There for you every step of the way, and when you need it the most.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Online sign-up",
    description: (
      <>
        Say <span className="italic">tschüss</span> to pesky paperwork.
      </>
    ),
  },
];

export default function ContactPolicies() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Policy Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffe8cc] rounded-3xl p-8 sm:p-10 lg:p-10 w-full max-w-md shadow-lg">
              <h3 className="text-xl sm:text-xl text-gray-900 mb-8">
                Your policies
              </h3>

              {/* Policy Items */}
              <div className="space-y-4">
                {/* Private Health */}
                <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/contact_assets/private.avif"
                      alt="Health"
                      width={32}
                      height={32}
                      className="w-12 h-12 rounded-2xl"
                    />
                  </div>
                  <span className="text-base sm:text-md  text-gray-900">
                    Private health
                  </span>
                </div>

                {/* Household */}
                <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/contact_assets/household.avif"
                      alt="Household"
                      width={32}
                      height={32}
                      className="w-12 h-12 rounded-2xl"
                    />
                  </div>
                  <span className="text-base sm:text-md  text-gray-900">
                    Household
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Features List */}
          <div className="space-y-10 lg:space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 text-gray-900 mt-1">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl sm:text-2xl  text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
