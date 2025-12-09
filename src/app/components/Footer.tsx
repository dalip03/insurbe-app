import Image from "next/image";
import Link from "next/link";
import ContactBanner from "./ContactBanner";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
export default function Footer() {
  return (
    <div>
      <ContactBanner />
      <footer className="bg-primary text-white py-4 px-6 pt-50 -mt-58 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* Brand Info */}
            <div className="space-y-4 max-w-md text-center md:text-left mx-auto md:mx-0">
              {/* Logo */}
              <div className="flex justify-center md:justify-start py-2">
                <Link href="/" className="font-bold font-serif">
                  <Image
                    src="/icons/logo_white.png"
                    alt="Logo"
                    width={170}
                    height={30}
                  />
                </Link>
              </div>

              {/* Subtitle */}
              <p className="md:text-xl text-2xl  text-gray-300 ">
                The only digital solution for all your insurance needs.
              </p>

              {/* GDPR Icon */}
              <div className="flex justify-center md:justify-start py-4">
                <Link href="/">
                  <Image
                    src="/icons/gdpr.svg"
                    alt="GDPR Logo"
                    width={210}
                    height={60}
                  />
                </Link>
              </div>

              {/* Register Info */}
              <p className="md:text-xl text-2xl text-gray-300 ">
                Insurbe is a registered insurance intermediary in Germany
              </p>
            </div>

            {/* Navigation + Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-center md:text-left mx-auto md:mx-0">

              {/* Navigation */}
              <div>
                <h2 className="md:text-xl text-3xl font-semibold mb-4">Navigation</h2>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Home</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Products</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Private Health</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Contact</a></li>
                </ul>
              </div>

              {/* Links */}
              <div>
                <h2 className="md:text-xl text-3xl font-semibold mb-4">Links</h2>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Imprint</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Data Privacy</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">About Us</a></li>
                  <li><a href="#" className="hover:text-purple-300 text-xl md:text-md">Careers</a></li>
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
    </div>
  );
}
