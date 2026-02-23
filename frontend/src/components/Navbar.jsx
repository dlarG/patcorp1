import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Ship } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Background change on scroll
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "Contact", path: "/contact" },
    { name: "Booking", path: "/booking" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with hover animation */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/images/logos/logo_car_nobg.png"
              alt="PATCORP logo"
              className="h-12 w-15 transition-all duration-300"
            />
            <div>
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-blue-700" : "text-white"
                }`}
              >
                PATCORP
              </span>
              <span
                className={`block text-xs transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                Pacific Eight Transport Corp.
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                } group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-blue-600" : "bg-white"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                isOpen
                  ? "bg-blue-600 scale-110"
                  : isScrolled
                  ? "bg-gray-100"
                  : "bg-white/20"
              }`}
            ></div>
            {isOpen ? (
              <X
                className={`h-6 w-6 relative z-10 transition-transform duration-300 rotate-90 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 relative z-10 transition-transform duration-300 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:translate-x-2 border-b border-gray-100 last:border-0"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                  transform: "translateX(-10px)",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
