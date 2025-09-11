import React from "react";
import { motion } from "framer-motion";
import "../css/index.css";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";
import slider7 from "../assets/slider7.png";
import slider8 from "../assets/slider8.png";

// Worker Images
import w1 from "../assets/w1.jpg";


function Home() {
  return (
    <div className="relative w-full">
      {/* 🔹 Background Section */}
      <section className="relative flex flex-col items-center justify-center text-white py-4">
        <div className="relative z-10 text-center px-4">
          {/* Shop Name */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide text-white drop-shadow-xl"
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
                5000+ Happy Customers
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

      {/* 🔹 Trusted Brands Slider */}
      <section className="w-full pt-6 pb-12 bg-gray-900">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-8">
          We Sell Trusted Brands
        </h2>

        <div className="overflow-hidden relative w-full">
          <div className="flex animate-slide">
            {[
              slider1,
              slider2,
              slider3,
              slider4,
              slider5,
              slider6,
              slider7,
              slider8,
              slider1,
              slider2,
              slider3,
              slider4,
              slider5,
              slider6,
              slider7,
              slider8,
            ].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 flex items-center justify-center mx-4 
                border border-gray-600 rounded-full bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="max-h-12 sm:max-h-16 object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4"
        >
          Why Choose Us?
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-300 mb-12 px-4 text-sm sm:text-base">
          At Gurudatt Electrical, we provide all kinds of electrical products
          for homes, offices, and businesses. From complete home fittings to
          government contracts, our skilled technicians ensure reliable,
          high-quality service with trusted materials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <span className="text-yellow-400 text-4xl">🏠</span>
            <p className="mt-3 font-semibold text-lg text-yellow-300">
              Complete Home Electrical Fittings
            </p>
            <p className="mt-2 text-gray-300 text-sm text-justify">
              We provide end-to-end electrical solutions for homes including
              wiring, lighting, and safety systems. Our fittings are durable,
              safe, and meet all industry standards to give you peace of mind
              for years.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <span className="text-yellow-400 text-4xl">👷</span>
            <p className="mt-3 font-semibold text-lg text-yellow-300">
              Skilled Technicians for Reliable Service
            </p>
            <p className="mt-2 text-gray-300 text-sm text-justify">
              Our expert electricians bring years of hands-on experience to
              every project. They ensure professional work, accurate fittings,
              and trustworthy service so your electrical systems run smoothly
              without frequent breakdowns or safety issues.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <span className="text-yellow-400 text-4xl">📜</span>
            <p className="mt-3 font-semibold text-lg text-yellow-300">
              Government & Building Contracts Accepted
            </p>
            <p className="mt-2 text-gray-300 text-sm text-justify">
              We specialize in handling electrical contracts for government
              projects, buildings, and large establishments. From planning to
              execution, we deliver high-quality services that meet deadlines
              and maintain full compliance with regulations.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Our Workers Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4"
        >
          Our Workers at Work
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-300 mb-12 px-4 text-sm sm:text-base">
          A glimpse of our hardworking team delivering reliable electrical
          services on-site with dedication and skill.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[w1, w1, w1, w1, w1, w1].map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt={`worker-${idx}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-yellow-400 font-semibold transition duration-500">
                Worker {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
