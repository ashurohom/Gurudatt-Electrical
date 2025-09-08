import React from "react";

function Home() {
  return (
    <div className="text-center text-white">
      <h1 className="text-6xl md:text-6xl font-rounded font-bold mb-4">
        Gurudatt Electrical
      </h1>
      <p className="text-lg md:text-2xl font-roboto mb-6">
        Powering homes & businesses with trusted solutions ⚡
      </p>
      <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition">
        Explore Products
      </button>
    </div>
  );
}

export default Home;
