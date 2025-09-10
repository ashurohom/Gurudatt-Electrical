import React from "react";
import { motion } from "framer-motion";
import "../css/index.css";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

function Home() {
  return (
    <div className="relative w-full">
      {/* 🔹 Background Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <div className="relative z-10 text-center px-4">
          {/* Shop Name */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide 
                       text-white drop-shadow-xl"
          >
            Gurudatt Electrical
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-lg md:text-2xl font-light mb-10 text-gray-200"
          >
            Powering Homes & Businesses with{" "}
            <span className="text-yellow-400 font-semibold">Trust</span> &{" "}
            <span className="text-yellow-400 font-semibold">Quality</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-6 sm:px-8 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
              Our Products
            </button>
            <button className="px-6 sm:px-8 py-3 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-200"
          >
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
              <span className="text-yellow-400 text-3xl sm:text-4xl">✔️</span>
              <p className="mt-3 font-medium text-sm sm:text-base">
                1000+ Happy Customers
              </p>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
              <span className="text-yellow-400 text-3xl sm:text-4xl">⚡</span>
              <p className="mt-3 font-medium text-sm sm:text-base">
                Fast & Reliable Service
              </p>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
              <span className="text-yellow-400 text-3xl sm:text-4xl">🔧</span>
              <p className="mt-3 font-medium text-sm sm:text-base">
                Expert Electricians
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Trusted Brands Slider (OUTSIDE background) */}
      <section className="bg-white py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          We Sell Trusted Brands
        </h2>

        <div className="overflow-hidden relative w-full max-w-6xl mx-auto">
          <div className="flex animate-slide">
            {[slider1, slider2, slider3, slider4, slider1, slider2, slider3, slider4].map(
              (logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 sm:w-36 md:w-44 h-28 sm:h-32 md:h-36 flex items-center justify-center mx-4 border border-gray-800 rounded-full bg-gray-100 shadow-md"
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="max-h-14 sm:max-h-16 object-contain p-2"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
