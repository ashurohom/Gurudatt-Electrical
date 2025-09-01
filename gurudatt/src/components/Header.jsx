import React, { useState } from "react";
import { Link } from "react-router-dom";
import GE2 from "../assets/GE2.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between p-4 bg-transparent fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
          <img
            src={GE2}
            alt="Gurudatt Electrical Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-6 text-white text-lg sm:text-xl">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 hover:underline transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 hover:underline transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:text-yellow-400 hover:underline transition-colors"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-yellow-400 hover:underline transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 hover:underline transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-white"
        >
          {/* Hamburger icon */}
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
                  ? "M6 18L18 6M6 6l12 12" // X icon when open
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger when closed
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black bg-opacity-90 sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 hover:underline transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 hover:underline transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 hover:underline transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 hover:underline transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
