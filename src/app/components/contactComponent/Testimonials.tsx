"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Very transparent and quick",
    text: "More importantly, support is very responsive and will reach you at the earliest.",
    author: "Masood",
  },
  {
    quote: "Everything was so smooth and stress free",
    text: "They were always very helpful, always easy to reach and they gladly answered questions whenever I had them.",
    author: "Amanda",
  },
  {
    quote: "Knowledgeable, helpful, and friendly",
    text: "I am impressed with their level of service and professionalism.",
    author: "Shyam",
  },
  {
    quote: "They make dealing with insurance a breeze",
    text: "Relevant documents are easy to find, submitting claims/cost plans is straightforward.",
    author: "Ardi",
  },
  {
    quote: "Reliable and efficient support",
    text: "Swiftly took action, accelerating the process and resolving my issue in no time.",
    author: "Agrebi",
  },
  {
    quote: "Kind, prompt, and efficient",
    text: "I had an excellent experience thanks to Justina! Her professionalism and attentiveness made the entire process smooth and stress-free.",
    author: "Julio",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? testimonials.length - 3 : prev - 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-12 sm:mb-16">
          Don't take our word for it
        </h2>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-8 h-8 rounded-full border-2 border-[#a594f9] text-[#a594f9] hover:bg-[#a594f9] hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-8 h-8 rounded-full border-2 border-[#a594f9] text-[#a594f9] hover:bg-[#a594f9] hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Image
                    src="/contact_assets/quote.svg"
                    alt="Quote"
                    width={48}
                    height={48}
                    className="w-8 h-8 opacity-60"
                  />
                </div>

                {/* Quote Title */}
                <h3 className="text-md font-medium text-gray-900 mb-3">
                  {testimonial.quote}
                </h3>

                {/* Quote Text */}
                <p className="text-sm  text-gray-600 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <p className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Section */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {/* Google Rating */}
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-xl font-medium text-gray-900">4.8</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/contact_assets/googlestar.svg"
                  alt="Star"
                  width={24}
                  height={24}
                  className="w-4 h-4 "
                />
              ))}
            </div>
            <Image
              src="/contact_assets/google.svg"
              alt="Google"
              width={60}
              height={28}
              className="h-5  w-auto"
            />
          </div>

          

          {/* Review Count */}
          <div className="text-sm sm:text-base text-gray-600">
            Based on <span className="font-semibold">1,700+</span> reviews
          </div>
        </div>

      </div>
    </section>
  );
}
