import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GE2 from "../assets/GE2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // for active link

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
            <img
              src={GE2}
              alt="Gurudatt Electrical Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Desktop Links */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-10 pr-8 text-white text-lg font-roboto tracking-wide">
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className={`relative inline-block transition-all duration-300 
                      ${isActive ? "text-brand.primary" : "text-white"}
                      hover:text-brand.primary hover:-translate-y-1 hover:scale-105
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
                      after:bg-brand.primary after:transition-all after:duration-300 
                      ${isActive ? "after:w-full" : "after:w-0"} 
                      hover:after:w-full`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="sm:hidden bg-black w-full absolute top-full left-0 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-white text-lg font-rounded">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="relative transition-all duration-300 hover:text-brand.primary hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
