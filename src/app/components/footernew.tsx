import Image from "next/image";
import Link from "next/link";
import ContactBanner from "./ContactBanner";
import { Lock, Server, Shield } from "lucide-react";

export default function Footernew() {
  return (
 
      <footer className="bg-primary text-white py-20 px-6 ">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            
            {/* Brand Info */}
            <div className="space-y-4 max-w-md text-center md:text-left mx-auto md:mx-0">
              {/* Logo */}
              <div className="flex justify-center md:justify-start py-2">
                <Link href="/" className="font-bold font-serif">
                  <Image
                    src="/icons/logo_white.png"
                    alt="Logo"
                    width={120}
                    height={30}
                  />
                </Link>
              </div>

              {/* Subtitle */}
              <p className="md:text-lg text-2xl  text-gray-300 ">
                The only digital solution for all your insurance needs.
              </p>

              {/* GDPR Icon */}
              <div className="flex justify-center md:justify-start">
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 py-4">
                  {/* GDPR Compliant */}
                  <div className="flex items-center gap-2 border border-gray-400/20 rounded-xl p-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/gifs_assets/gdprlogo.svg"
                        alt="Germany Flag"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      GDPR Compliant
                    </span>
                  </div>

                  {/* Data Centre in EU */}
                  <div className="flex items-center gap-2 border border-gray-400/20 rounded-xl p-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                      <Image
                        src="/gifs_assets/germany2.png"
                        alt="Germany Flag"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      Data Centre in Germany
                    </span>
                  </div>

                  {/* Data Security */}
                  <div className="flex items-center gap-2 border border-gray-400/20 rounded-xl p-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/gifs_assets/lock.png"
                        alt="Germany Flag"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      Let's Encrypt 
                    </span>
                  </div>
                </div>
              </div>

              {/* Register Info */}
              <p className="md:text-lg text-2xl text-gray-300 ">
                Insurbe is a registered insurance intermediary in Germany
              </p>
            </div>

            {/* Navigation + Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left mx-auto md:mx-0">
              {/* Navigation */}
              <div>
                <h2 className="md:text-lg text-3xl font-semibold mb-4">
                  Navigation
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      About
                    </a>
                  </li>
                 
                  <li>
                    <a
                      href="/support"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Contact
                    </a>
                  </li>

                </ul>
              </div>

              {/* Links */}
              <div>
                <h2 className="md:text-lg text-3xl font-semibold mb-4">
                  Gernal
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/privacypolicy"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Imprint
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Data Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/termscondition"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                 
                  <li>
                    <a
                      href="/career"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

                {/* Insurance */}
              <div className="pl-6">
                <h2 className="md:text-lg text-3xl font-semibold mb-4">
                  Insurance
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Private 
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Public 
                    </a>
                  </li>
                 
                  <li>
                    <a
                      href="/support"
                      className="hover:text-purple-300 text-xl md:text-[18px]"
                    >
                      Expat 
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-400 mt-10 pt-6 text-center md:text-left text-md md:text-sm text-white/90">
            Copyright © 2025 Insure.
            <br className="md:hidden" />
            All rights reserved.
          </div>

        </div>
      </footer>
    
  );
}
