import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/app.css";
import bg2 from "./assets/bg2.jpg";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="h-screen w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <Header />

        <div className="relative z-10 h-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
