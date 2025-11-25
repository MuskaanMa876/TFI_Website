import React from "react";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/Logo_Horizontal.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

        {/* LOGO + DESCRIPTION */}
        <div className="flex flex-col">
          <img
            src={LogoHorizontal}
            alt="Techno Future India"
            className="h-20 md:h-24 lg:h-28 object-contain mb-4"
          />
          <p className="text-sm md:text-base text-gray-600 max-w-sm">
            Engineering excellence, modern development, and next-generation learning.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/about" className="hover:text-gray-900 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-900 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-900 transition-colors">News</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors">Full Stack</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors">AI & ML</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-900 transition-colors">Data Engineering</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
          <p className="text-gray-600 text-sm md:text-base">hello@technofutureindia.com</p>
          <p className="text-gray-600 text-sm md:text-base mt-1">+91 98765 43210</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-4 border-t border-gray-200 text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} Techno Future India. All Rights Reserved.
      </div>
    </footer>
  );
}
