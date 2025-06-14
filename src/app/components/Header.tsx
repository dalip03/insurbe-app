"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full z-60 bg-white font">
      <nav className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 w-full">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="font-bold font-serif">
            <Image src="/logo.svg" alt="Logo" width={100} height={20} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative overflow-hidden h-7 px-1  ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary font-semibold pb-1 "
                  : "text-black"
              }`}
            >
              <span className="block">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-black">
          <Menu size={28} />
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex"
        >
          {/* Transparent Black Overlay (20%) */}
          <div
            className="w-1/5 bg-black/80 backdrop-blur-xs"
            onClick={toggleDrawer} // Close drawer when clicking on overlay
          />

          {/* White Drawer (80%) */}
          <div className="w-4/5 h-full bg-white text-black p-6 flex flex-col">
            {/* Close Button */}
            <button onClick={toggleDrawer} className="self-end mb-8">
              <X size={28} className="text-primary font-bold" />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 pl-2 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleDrawer}
                  className={`text-lg leading-14 ${
                    pathname === link.href
                      ? "text-primary underline underline-offset-4"
                      : "text-black hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
