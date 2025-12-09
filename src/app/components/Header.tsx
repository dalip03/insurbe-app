"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Update with actual route slugs as needed:
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    submenu: [
      { name: "Working Professionals", href: "/products/privateProducts" },
      { name: "Family", href: "/products/pensionProducts" },
      { name: "Visa Seekers", href: "/products/visaSeakers" },
      { name: "Students", href: "/products/students" },
    ],
  },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile drawer
  const [showProducts, setShowProducts] = useState(false); // desktop dropdown
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false); // mobile products accordion
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setMobileProductsOpen(false); // Reset accordion when closing drawer
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setShowProducts(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowProducts(false);
    }, 120);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 w-full">
        {/* Logo */}
        <Link href="/" className="font-bold font-serif flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={100} height={20} priority />
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
                  className={`cursor-pointer h-7 px-1 flex items-center gap-1 ${
                    pathname.includes("/products")
                      ? "text-primary border-b-2 border-primary font-semibold pb-1"
                      : "text-black hover:text-primary transition"
                  }`}
                >
                  {link.name}
                  <ChevronDown size={16} />
                </span>
                
                {/* Desktop Mega Menu */}
                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 top-[72px] w-screen z-50"
                    >
                      <div className="flex w-full bg-[#FCEAF8] min-h-[320px] py-8 px-0">
                        {/* Left: Centered image */}
                        <div className="flex flex-1 items-center justify-center">
                          <div className="rounded-md overflow-hidden p-2 relative w-[610px] h-[280px]">
                            <Image
                              src="/img/menuFamily.png"
                              alt="Mega Menu Promo"
                              fill
                              className="object-cover rounded-md"
                              style={{ objectPosition: "center" }}
                            />
                          </div>
                        </div>
                        
                        {/* Right: Centered vertical menu */}
                        <div className="flex flex-1 items-center justify-center">
                          <ul className="flex flex-col gap-8 w-full max-w-[230px] pr-10">
                            {link.submenu.map((item) => (
                              <motion.li
                                key={item.name}
                                whileHover={{ x: -5 }}
                                className="text-right"
                              >
                                <Link
                                  href={item.href}
                                  className="block text-black text-lg font-normal hover:text-primary transition"
                                  tabIndex={showProducts ? 0 : -1}
                                  onClick={() => setShowProducts(false)}
                                >
                                  {item.name}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`relative overflow-hidden h-7 px-1 ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary font-semibold pb-1"
                    : "text-black hover:text-primary transition"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleDrawer}
          className="md:hidden text-black"
        >
          <Menu size={28} />
        </motion.button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={toggleDrawer}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-50 bg-white shadow-2xl md:hidden"
            >
              <div className="h-full flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <Link
                    href="/"
                    onClick={toggleDrawer}
                    className="font-bold font-serif"
                  >
                    <Image src="/logo.svg" alt="Logo" width={100} height={20} />
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDrawer}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <X size={24} className="text-primary" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6 space-y-2">
                  {navLinks.map((link) =>
                    link.submenu ? (
                      <div key={link.name} className="border-b pb-2">
                        <button
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="w-full flex items-center justify-between py-3 text-lg font-semibold text-gray-800"
                        >
                          <span>{link.name}</span>
                          <motion.div
                            animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-2 space-y-3 border-l-2 border-primary/20">
                                {link.submenu.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    onClick={toggleDrawer}
                                    className={`block py-2 text-base transition ${
                                      pathname === sublink.href
                                        ? "text-primary font-semibold"
                                        : "text-gray-600 hover:text-primary"
                                    }`}
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={toggleDrawer}
                        className={`block py-3 text-lg font-medium transition border-b ${
                          pathname === link.href
                            ? "text-primary font-semibold"
                            : "text-gray-800 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
