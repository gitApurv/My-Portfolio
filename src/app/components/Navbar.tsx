"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Socials", href: "#socials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-xl border-b border-white/10 z-50 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0">
              <Link
                href="#hero"
                onClick={(e) => handleScroll(e, "#hero")}
                className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300 inline-block"
              >
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
                  Apurv
                </span>{" "}
                Maurya
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none transition-all duration-300 hover:scale-110"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block px-3 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all duration-300 hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-linear-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Navbar;
