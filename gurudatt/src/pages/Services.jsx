import React from "react";
import { FaHome, FaBuilding, FaBolt, FaBoxes, FaClipboardCheck, FaTools, FaComments, FaCheckCircle } from "react-icons/fa"; 
import w1 from "../assets/s88.jpg";
import w2 from "../assets/s10.jpg";
import w3 from "../assets/s33.jpg";
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

  const process = [
    {
      id: 1,
      title: "Consultation",
      description: "We listen to your needs, visit your site if required, and provide expert advice.",
      icon: <FaComments className="text-yellow-400 text-4xl" />,
    },
    {
      id: 2,
      title: "Planning & Quotation",
      description: "We create a clear plan, give you a transparent quotation, and timeline.",
      icon: <FaClipboardCheck className="text-blue-400 text-4xl" />,
    },
    {
      id: 3,
      title: "Installation / Service",
      description: "Our skilled technicians perform high-quality installation or service.",
      icon: <FaTools className="text-green-400 text-4xl" />,
    },
    {
      id: 4,
      title: "Quality Check & Support",
      description: "We ensure safety, test everything, and provide ongoing support if needed.",
      icon: <FaCheckCircle className="text-purple-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      {/* 🔹 Hero Section */}
      <div className="text-center mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
        Our Services
      </h1>


        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Gurudatt Electrical provides professional, reliable, and affordable electrical services
          to homes, buildings, government projects, and as a trusted material supplier.
        </p>
      </div>

      {/* 🔹 Services Grid */}
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

      {/* 🔹 Process Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">🛠️ How We Work</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Our simple 4-step process ensures smooth service, clear communication, and
          top-quality results every time.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {process.map((step) => (
            <div
              key={step.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Professional Electrical Services?
        </h2>
        <p className="text-gray-300 mb-6">
          Contact Gurudatt Electrical today for reliable, affordable, and high-quality services.
        </p>
        <a
        href="tel:+919545777339">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-md">
          📞 Get in Touch
        </button></a>
      </div>
    </div>
  );
};

export default Services;
