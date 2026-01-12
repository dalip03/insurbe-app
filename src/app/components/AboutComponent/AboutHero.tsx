"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* LEFT SIDE - Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 md:pl-32">
            {/* Logo */}
            {/* <Link
              href="/"
              className="font-bold font-serif flex items-center gap-2"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={20}
                priority
              />
            </Link> */}

            {/* Main Heading */}
            {/* <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              BERLIN IS
              <br />
              DIFFERENT.
            </h1> */}

             <h1 className="text-4xl sm:text-5xl  md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              InsurBe – Your Tech-Powered Insurance Partner</h1>

            {/* Subheading */}
            {/* <p className="text-base sm:text-lg text-gray-800">
              Just like <span className="font-bold">Berlin Direkt</span>.
            </p> */}

            {/* Description Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              <p>
                {/* We are the{" "}
                <span className="font-semibold">
                  digital insurance manufacturer
                </span>{" "} */}
                Nestled in Berlin&apos;s vibrant startup ecosystem, InsurBe is redefining digital insurance – building innovative, partner-focused products from the ground up.
              </p>

              <p>
                {/* With our{" "}
                <span className="font-semibold">hands-on mentality</span> */}
                At InsurBe, we&apos;re revolutionizing insurance with cutting-edge technology. Our AI-driven platform makes it effortless to discover, customize, and secure personalized coverage directly tailored to your needs.
              </p>

              <p>
               Our mission isTo deliver seamless protection and peace of mind through advanced tech, smart algorithms, and unbeatable value.
                
              </p>

              <p>
                Powered by the latest technology, we&apos;re making insurance simpler and more accessible for everyone. Join thousands who&apos;ve embraced smarter, modern protection.
              </p>
              <p>Get started today – protect what matters most.</p>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4">
              <Link href="/">
                <button className="hover:bg-primary border-2 border-primary text-primary cursor-pointer  hover:text-white font-semibold px-8 py-3.5 sm:px-10 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Our vision and our values
                </button>
              </Link>
            </div> */}
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            {/* Decorative cyan border effect */}
            <div className="relative">
              <div className="absolute -right-3 -bottom-3 w-full h-full  bg-primary "></div>

              {/* Main Image Container */}
              <div className="relative  overflow-hidden shadow-2xl h-[500px] sm:h-[800px] lg:h-[900px]">
                <Image
                  src="/about/aboutn.jpeg"
                  alt="Berlin Skyline at Sunset"
                  width={800}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
