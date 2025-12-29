"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Update with actual route slugs as needed:
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Insurance",
    submenu: [
      { name: "Working Professionals", href: "/products/privateProducts", icon: "💼" },
      { name: "Family", href: "/products/pensionProducts", icon: "👨‍👩‍👧‍👦" },
      { name: "Visa Seekers", href: "/products/visaSeakers", icon: "✈️" },
      { name: "Students", href: "/products/students", icon: "🎓" },
    ],
  },
  { name: "Careers", href: "/career" },
  { name: "Support", href: "/support" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setMobileProductsOpen(false);
    // Prevent body scroll when drawer is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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

  // Close drawer when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
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
           {/* Desktop Mega Menu - Grid Layout */}
<AnimatePresence>
  {showProducts && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-[72px] w-screen z-50"
    >
      <div className="w-full bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Insurance Products
          </h3>
          <div className="grid grid-cols-4 gap-6">
            {link.submenu.map((item, index) => {
              // Define flat icons for each product
              const getIcon = (name: string) => {
                switch(name) {
                  case "Working Professionals":
                    return (
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    );
                  case "Family":
                    return (
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    );
                  case "Visa Seekers":
                    return (
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    );
                  case "Students":
                    return (
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="group block p-6 rounded-lg border-2 border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                    tabIndex={showProducts ? 0 : -1}
                    onClick={() => setShowProducts(false)}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {getIcon(item.name)}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.name === "Working Professionals" && "Comprehensive health coverage"}
                      {item.name === "Family" && "Protection for your loved ones"}
                      {item.name === "Visa Seekers" && "Insurance for your visa application"}
                      {item.name === "Students" && "Affordable student plans"}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
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
          className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer"
          aria-label="Toggle menu"
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
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={toggleDrawer}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[90%] max-w-sm z-50 bg-white shadow-2xl md:hidden"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-purple-50">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="font-bold font-serif"
                  >
                    <Image src="/logo.svg" alt="Logo" width={90} height={18} />
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDrawer}
                    className="p-2 hover:bg-white/80 rounded-full transition cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-primary" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navLinks.map((link, index) =>
                      link.submenu ? (
                        <div key={link.name}>
                          <button
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-lg transition cursor-pointer ${
                              pathname.includes("/products")
                                ? "bg-primary/10 text-primary"
                                : "text-gray-800 hover:bg-gray-100"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-xl">📦</span>
                              {link.name}
                            </span>
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
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="py-2 pl-3 space-y-1">
                                  {link.submenu.map((sublink) => (
                                    <Link
                                      key={sublink.name}
                                      href={sublink.href}
                                      onClick={handleLinkClick}
                                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition group cursor-pointer ${
                                        pathname === sublink.href
                                          ? "bg-primary text-white"
                                          : "text-gray-700 hover:bg-gray-100"
                                      }`}
                                    >
                                      <span className="text-xl">{sublink.icon}</span>
                                      <span className="flex-1">{sublink.name}</span>
                                      <ChevronRight
                                        size={16}
                                        className={`transition ${
                                          pathname === sublink.href
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                        }`}
                                      />
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
                          onClick={handleLinkClick}
                          className={`flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-lg transition cursor-pointer ${
                            pathname === link.href
                              ? "bg-primary/10 text-primary"
                              : "text-gray-800 hover:bg-gray-100"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-xl">
                              {link.name === "Home" && "🏠"}
                              {link.name === "About Us" && "ℹ️"}
                              {link.name === "Careers" && "💼"}
                              {link.name === "Support" && "🆘"}
                            </span>
                            {link.name}
                          </span>
                          {pathname === link.href && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary rounded-full"
                            />
                          )}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Need help?</p>
                    <Link
                      href="/support"
                      onClick={handleLinkClick}
                      className="inline-block px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer text-sm"
                    >
                      Contact Support
                    </Link>
                  </div>
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
