import React from "react";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/Logo_Horizontal.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-50 text-gray-700 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* === Column 1: Brand === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={LogoHorizontal}
            alt="Techno Future India Logo"
            className="w-80 h-auto mb-4 drop-shadow-md"
          />
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            Empowering the future through technology and innovation.
          </p>
        </div>

        {/* === Column 2: Quick Links === */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-red-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-indigo-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-indigo-600 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === Column 3: Contact === */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-red-800 mb-3">
            Contact Us
          </h3>
          <p className="hover:text-sm text-indigo-600">📧 info@technofutureindia.com</p>
          <p className="text-sm text-indigo-600">📞 +91 98765 43210</p>
          <p className="text-sm text-indigo-600">📍 Hyderabad, India</p>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Techno Future India. All rights reserved.
      </div>
    </footer>
  );
}
