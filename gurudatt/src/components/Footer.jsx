import React from "react";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Address */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Address</h2>
          <p className="text-sm leading-relaxed">
            Gurudatt Electrical, <br />
            Near Jyoti Patsanstha, <br />
            Opp. Annabhau Sathe Putala, <br /> 
            Kopargaon (423 601), <br />
            Maharashtra
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>🏠 Home Fetting</li>
            <li>🏢 Building Fetting</li>
            <li>⚡ Government Contract</li>
            <li>📦 Material Supplier</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Working Hours</h2>
          <p className="text-sm">Mon - Sat: 09 AM - 07 PM</p>
          <p className="text-sm">Sunday: 09 AM - 01 PM</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-yellow-400" />
            <span>+91 95457 77339</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-yellow-400" />
            <span>gurudattele55@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Instagram size={18} className="text-pink-500" />
            <a
              href="https://instagram.com/parjane_akshay_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              parjane_akshay_
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Facebook size={18} className="text-blue-500" />
            <a
              href="https://facebook.com/akshayparjanepatil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Akshay Parjane Patil
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
  <p>
    © {new Date().getFullYear()} Gurudatt Electrical. All Rights Reserved By{" "}
    <span className="text-white-400">Ashitosh Rohom</span>.
  </p>
  <p className="mt-2 text-gray-300">
    GST No : <span className="font-semibold text-yellow-400">27DMLPP8140L1ZD</span>
  </p>
</div>

    </footer>
  );
}

export default Footer;
