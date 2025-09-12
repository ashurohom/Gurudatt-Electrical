import React from "react";
import ownerImg from "../assets/w1.jpg"; // Replace with actual owner photo

function Contact() {
  return (
<div className="min-h-screen bg-gray-900 text-white py-10 px-6 sm:px-10 lg:px-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
          Get in Touch With Us
        </h1>
        <p className="mt-3 text-gray-300 text-sm sm:text-base">
          Have questions or need assistance? Fill out the form or reach out to
          us directly.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* 🔹 Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Contact Form
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🔹 Shop Owner Profile */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
          <img
            src={ownerImg}
            alt="Shop Owner"
            className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg mb-6"
          />
          <h2 className="text-2xl font-bold text-yellow-400">Akshay Parjane</h2>
          <p className="text-gray-400 mt-1">Owner, Gurudatt Electrical</p>

          {/* Info Section */}
          <div className="mt-6 space-y-4 w-full text-left">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 text-xl">📞</span>
              <p className="text-gray-300">+91 9545777339</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 text-xl">📧</span>
              <p className="text-gray-300">gurudattele55@email.com</p>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <span className="text-yellow-400 text-xl">📍</span>
              <p className="text-gray-300">
                Gurudatt Electricals, Near Jyoti Patsanstha, Kopargaon, Maharashtra - 423601
              </p>
            </div>
          </div>

          {/* Optional: Social Media Links */}
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              🌐
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              📘
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              📷
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
