// src/pages/Products.jsx
import React from "react";
import { FaPlug, FaLightbulb, FaBolt, FaShieldAlt, FaHome, FaCogs } from "react-icons/fa";

const Product = () => {
  const categories = [
    {
      icon: <FaPlug className="text-yellow-400 text-5xl mb-4" />,
      title: "Switches & Sockets",
      description:
        "Durable, modern, and safe switches & sockets for homes, offices, and industries.",
      features: ["ISI Certified", "Modern Designs", "Safe & Long-lasting"],
    },
    {
      icon: <FaLightbulb className="text-yellow-400 text-5xl mb-4" />,
      title: "Lighting Solutions",
      description:
        "Energy-efficient LED bulbs, tube lights, and decorative panel lights.",
      features: ["Energy Saving", "Bright Illumination", "Long Life Span"],
    },
    {
      icon: <FaBolt className="text-yellow-400 text-5xl mb-4" />,
      title: "Wires & Cables",
      description:
        "ISI-marked wires and cables to ensure complete electrical safety.",
      features: ["High Quality Copper", "ISI Certified", "Safe & Reliable"],
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "Circuit Protection",
      description:
        "MCBs, RCCBs, and DB boards for residential, commercial, and industrial safety.",
      features: ["Shock Proof", "Durable Metal Build", "Trusted Brands"],
    },
    {
      icon: <FaHome className="text-yellow-400 text-5xl mb-4" />,
      title: "Home Automation",
      description:
        "Smart switches, sensors, and automation solutions for a modern lifestyle.",
      features: ["Remote Control", "Smart & Stylish", "Easy Installation"],
    },
    {
      icon: <FaCogs className="text-yellow-400 text-5xl mb-4" />,
      title: "Accessories",
      description:
        "Fans, regulators, extension boards, and all electrical accessories.",
      features: ["Affordable", "Reliable Quality", "Wide Range"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
          Our Products
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Explore our wide range of high-quality, reliable, and affordable
          electrical products. Perfect for homes, offices, and industries.
        </p>
      </div>

      {/* Product Categories */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {cat.icon}
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-300 mb-4">{cat.description}</p>
              <ul className="text-sm text-gray-400 space-y-2">
                {cat.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offer Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
          This Month’s Bestsellers
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Check out our most popular and high-demand electrical products. Visit
          our store today to grab yours before stock runs out!
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
          Contact Us for Orders
        </button>
      </div>
    </div>
  );
};

export default Product;
