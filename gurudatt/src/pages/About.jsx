import React from "react";
import owner from "../assets/w1.jpg"; // temporary owner/shop image
import shop1 from "../assets/w1.jpg";
import shop2 from "../assets/w1.jpg";
import shop3 from "../assets/w1.jpg";

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
          About Gurudatt Electrical
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-300">
          Your trusted partner for all electrical solutions — from residential
          to industrial needs, we deliver with quality and care.
        </p>
        <img
          src={owner}
          alt="Shop Owner / Shop Banner"
          className="mt-10 w-full max-w-4xl rounded-2xl shadow-lg"
        />
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand-primary mb-6">
          Our Story & Purpose
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Gurudatt Electrical was founded with a simple vision: to provide
          high-quality, affordable, and reliable electrical products to our
          customers. Over the years, we have grown from a small shop to a trusted
          name in the community, serving households, contractors, and industries
          alike. Our purpose is to bring safe, modern, and efficient electrical
          solutions to every customer who walks through our doors.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-800">
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand-primary text-center mb-10">
          A Glimpse of Our Shop
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[shop1, shop2, shop3].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt={`Shop view ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand-primary mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Quality Products</h3>
            <p className="text-gray-300 text-sm">
              We source only from trusted brands, ensuring durability and safety.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Affordable Pricing</h3>
            <p className="text-gray-300 text-sm">
              Competitive prices for every customer, without compromising on quality.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Expert Guidance</h3>
            <p className="text-gray-300 text-sm">
              Our staff provides personalized recommendations for your needs.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Community Trust</h3>
            <p className="text-gray-300 text-sm">
              Serving the local community for years with integrity and trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
