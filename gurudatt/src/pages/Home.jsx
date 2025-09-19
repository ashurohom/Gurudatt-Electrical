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

import w1 from "../assets/w1.jpg";
import bgImage from "../assets/BG2.jpg"; 

import p1 from "../assets/led.jpg";
import p2 from "../assets/plate.webp";
import p3 from "../assets/MCB.jpg";
import p4 from "../assets/fan.webp";

import s1 from "../assets/s1.jpg";
import s3 from "../assets/s3.jpg";
import s5 from "../assets/s5.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import s10 from "../assets/s10.jpg";




function Home() {
  return (
    <div
      className="relative w-full text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10">
        {/* 🔹 Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-16">
          <div className="relative z-10 text-center px-4">
            {/* Shop Name */}
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide drop-shadow-xl text-white"
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
                Our Services
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


      {/* 🔹 Call-to-Action Section */}
<section className="py-16 bg-white-800 text-center px-4">
  <div className="max-w-3xl mx-auto ">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
       Looking for professional electrical solutions?
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
      Call us today and get expert service at your doorstep!
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-3">
      <a
        href="tel:+919545777339"
        className="w-full sm:w-auto px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:scale-105 transition-transform text-center"
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/919545777339"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition text-center"
      >
        💬 WhatsApp Us
      </a>
    </div>
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

        {/* 🔹 Popular Products Section */}
        <section className="py-16 bg-gray-900 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
            Shop Popular Products
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-12 px-4 text-sm sm:text-base">
            Visit our store to see our full range of high-quality electrical
            products for every need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
            {[
              { img: p1, name: "Decorative LED Panel Light", spec: "Energy Saving, Long Life" },
              { img: p3, name: "40A MCB Circuit Breaker", spec: "Durable Metal Build" },
              { img: p2, name: "5-Gang Modern Switch Plate", spec: "Easy Installation" },
              { img: p4, name: "Premium Ceiling Fan", spec: "Silent & Powerful" },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-yellow-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{product.spec}</p>
              </div>
            ))}
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
                safe, and meet all industry standards.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
              <span className="text-yellow-400 text-4xl">👷</span>
              <p className="mt-3 font-semibold text-lg text-yellow-300">
                Skilled Technicians for Reliable Service
              </p>
              <p className="mt-2 text-gray-300 text-sm text-justify">
                Our expert electricians bring years of experience, ensuring
                professional work and trustworthy service so your systems run
                smoothly without breakdowns.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
              <span className="text-yellow-400 text-4xl">📜</span>
              <p className="mt-3 font-semibold text-lg text-yellow-300">
                Government & Building Contracts Accepted
              </p>
              <p className="mt-2 text-gray-300 text-sm text-justify">
                We handle contracts for government projects, buildings, and
                establishments. From planning to execution, we deliver on time
                with full compliance.
              </p>
            </div>
          </div>
        </section>

        {/* 🔹 On-Site Highlights */}
        <section className="py-16 bg-gray-800 text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4"
          >
            On-Site Highlights
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-12 px-4 text-sm sm:text-base">
            A glimpse of our recent electrical projects and on-site work,
            showcasing the quality and dedication we bring to every task.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
            {[s8, s10, s5, s7, s1, s3].map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={`work-${idx}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-yellow-400 font-semibold transition duration-500">
                  Work {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
