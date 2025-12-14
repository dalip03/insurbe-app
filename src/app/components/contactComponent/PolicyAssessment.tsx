"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Home } from "lucide-react";

export default function PolicyAssessment() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-32">
      <div className="bg-[#eeeefe] rounded-2xl px-2 py-8  lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT SIDE - Content */}
            <div className="space-y-6 lg:space-y-4">
              <h2 className="text-2xl  font-bold text-gray-900 leading-tight">
                Not sure? See what you really need
              </h2>

              <p className="text-base sm:text-lg text-gray-700 ">
                Try our free recommendation tool to check which policies are
                worth considering and which are not.
              </p>

              <div>
                <Link href="/assessment">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3  rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl">
                    Start assessment
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - Preview Cards */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-[#c5c0f0] rounded-xl pt-8 md:pr-14 md:pl-14 pr-10 pl-10  shadow-xl w-full max-w-sm">
                {/* Needed Card */}
                <div className="bg-white rounded-xl p-4 mb-4 shadow-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Needed
                  </h3>

                  <div className="space-y-3">
                    {/* Health */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#e3f2fd] to-[#d1e9f6] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-[#1976d2]" />
                      </div>
                      <span className="text-sm font-medium  text-gray-900">
                        Health
                      </span>
                    </div>

                    {/* Household */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#fff3e6] to-[#ffe8d6] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Home className="w-5 h-5 text-[#f57c00]" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        Household
                      </span>
                    </div>
                  </div>
                </div>

                {/* Worth Considering Card */}
                <div className="bg-white rounded-t-2xl pt-6 pr-6 pl-6 shadow-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Worth considering
                  </h3>

                  <div className="flex items-center gap-3 opacity-40">
                    <div className="w-10 h-6 bg-gradient-to-br from-[#fff3e6] to-[#ffe8d6] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-4 text-[#f57c00]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
