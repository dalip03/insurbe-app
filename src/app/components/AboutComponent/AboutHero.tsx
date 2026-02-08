"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative py-16 sm:py-10 px-4 sm:px-8 lg:px-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* LEFT SIDE - Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 md:pl-32">
            

             <h1 className="text-4xl sm:text-5xl  md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              InsurBe – Your Tech- <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Powered Insurance Partner</span> </h1>

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
              We deliver seamless protection and peace of mind through advanced technology, intelligent systems, exceptional value, and uncompromising security.
                
              </p>

              <p>
                Powered by the latest technology, we&apos;re making insurance simpler and more accessible for expats. Join thousands who&apos;ve embraced smarter, modern protection.
              </p>
              <p>Get started today – protect what matters most.</p>
            </div>

           
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            {/* Decorative cyan border effect */}
            <div className="relative">
              <div className="absolute -right-3 -bottom-3 w-full h-full  bg-primary "></div>

              {/* Main Image Container */}
              <div className="relative  overflow-hidden shadow-2xl h-[500px] sm:h-[800px] lg:h-[900px]">
                <Image
                  src="/hero_assets/berlin.png"
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
