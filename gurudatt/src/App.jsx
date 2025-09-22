import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";      
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./css/app.css";
import bgImage from "./assets/BG2.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* App Content */}
      <div className="relative z-10 min-h-screen">
        <Router>
          <ScrollToTop />
          <Navbar />

          {/* Add padding-top so content doesn’t hide behind Navbar */}
          <div className="relative z-10 pt-12"> 
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
