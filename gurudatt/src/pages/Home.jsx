import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Shop Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wider 
                     text-[#00BFFF] drop-shadow-lg"
        >
          Gurudatt Electrical
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl font-light mb-10 text-gray-200"
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
          <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform">
            Our Products
          </button>
          <button className="px-8 py-3 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-transform">
            Contact Us
          </button>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-200"
        >
          <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition">
            <span className="text-yellow-400 text-3xl">✔️</span>
            <p className="mt-2 font-medium">1000+ Happy Customers</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition">
            <span className="text-yellow-400 text-3xl">⚡</span>
            <p className="mt-2 font-medium">Fast & Reliable Service</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition">
            <span className="text-yellow-400 text-3xl">🔧</span>
            <p className="mt-2 font-medium">Expert Electricians</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
