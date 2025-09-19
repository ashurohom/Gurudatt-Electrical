// src/pages/Services.jsx
import React from "react";
import { FaHome, FaBuilding, FaBolt, FaBoxes } from "react-icons/fa"; 
import w1 from "../assets/s88.jpg";
import w2 from "../assets/s10.jpg";
import w3 from "../assets/s3.jpg";
import w4 from "../assets/led.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Home Fitting",
      description:
        "We provide expert electrical solutions for homes including wiring, lighting installation, maintenance, and safety checks. Our experienced technicians ensure reliable service with top-quality materials.",
      icon: <FaHome className="text-yellow-400 text-5xl" />,
      image: w1,
    },
    {
      id: 2,
      title: "Building Fitting",
      description:
        "Professional electrical fitting and wiring services for commercial buildings, offices, and apartments. We ensure long-lasting, efficient, and safe setups with modern electrical standards.",
      icon: <FaBuilding className="text-blue-400 text-5xl" />,
      image: w2,
    },
    {
      id: 3,
      title: "Government Contract",
      description:
        "Trusted partner for government projects – from large-scale electrical infrastructure to maintenance contracts. We follow strict guidelines, safety protocols, and deliver projects on time.",
      icon: <FaBolt className="text-green-400 text-5xl" />,
      image: w3,
    },
    {
      id: 4,
      title: "Material Supplier",
      description:
        "We supply high-quality electrical materials including cables, switches, distribution boards, lights, and more at affordable prices. Wholesale and retail both available.",
      icon: <FaBoxes className="text-purple-400 text-5xl" />,
      image: w4,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">⚡ Our Services ⚡</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Gurudatt Electrical provides professional, reliable, and affordable
          electrical services to homes, buildings, government projects, and as a
          trusted material supplier.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col md:flex-row items-center"
          >
            {/* Icon + Text */}
            <div className="flex-1">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>

            {/* Image */}
            <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/3">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-md hover:scale-105 transition"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Electrical Services?
        </h2>
        <p className="text-gray-300 mb-6">
          Contact Gurudatt Electrical today for reliable, affordable, and
          high-quality services.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold">
          📞 Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Services;
