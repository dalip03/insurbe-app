"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    submenu: [
      { name: "Private", href: "/products/privateProducts" },
      { name: "Pension", href: "/products/pensionProducts" },
    ],
  },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setShowProducts(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowProducts(false);
    }, 150); // slight delay
  };

  return (
    <header className="sticky top-0 w-full z-60 bg-white">
      <nav className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 w-full">
        {/* Logo */}
        <Link href="/" className="font-bold font-serif">
          <Image src="/logo.svg" alt="Logo" width={100} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`cursor-pointer h-7 px-1 ${
                    pathname.includes("/products")
                      ? "text-primary border-b-2 border-primary font-semibold pb-1"
                      : "text-black"
                  }`}
                >
                  {link.name}
                </span>

                {/* Dropdown */}
                {showProducts && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 px-3 z-50 min-w-[140px]">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 hover:text-primary whitespace-nowrap"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`relative overflow-hidden h-7 px-1 ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary font-semibold pb-1"
                    : "text-black"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-black">
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex"
        >
          {/* Overlay */}
          <div className="w-1/5 bg-black/80 backdrop-blur-sm" onClick={toggleDrawer} />
          {/* Drawer */}
          <div className="w-4/5 h-full bg-white text-black p-6 flex flex-col">
            <button onClick={toggleDrawer} className="self-end mb-8">
              <X size={28} className="text-primary font-bold" />
            </button>

            <div className="flex flex-col space-y-6 mt-20">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name} className="flex flex-col gap-2">
                    <span className="text-lg font-medium">{link.name}</span>
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={toggleDrawer}
                        className="pl-4 text-base text-gray-700 hover:text-primary"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleDrawer}
                    className={`text-lg ${
                      pathname === link.href
                        ? "text-primary underline underline-offset-4"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
