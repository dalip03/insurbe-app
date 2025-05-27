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
  { name: "Careers", href: "/contact" },
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
        <div className="hidden md:flex items-center gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative overflow-hidden h-6  ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary "
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

      {/* Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="fixed top-0 right-0 w-3/4 h-screen bg-black/90 text-white shadow-lg p-6 flex flex-col z-50"
        >
          {/* Close Button */}
          <button onClick={toggleDrawer} className="self-end mb-4">
            <X size={28} />
          </button>

          {/* Drawer Heading */}
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleDrawer}
                className={`text-lg transition duration-300 ${
                  pathname === link.href
                    ? "text-primary font-bold"
                    : "hover:text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
