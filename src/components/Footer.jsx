import React from "react";
import { Link } from "react-router-dom";

// ✅ Correct logo import from src/assets
import LogoHorizontal from "../assets/Logo_Horizontal.png";

export default function Footer() {
  return (
    <footer className="bg-[white] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

       {/* LOGO + DESCRIPTION */}
<div>
  <img
    src={LogoHorizontal}
    alt="Techno Future India"
    className="h-24 md:h-28 lg:h-34 object-contain mb-4"
   // <- Increased from h-10 to h-16
  />
  <p className="text-sm text-slate-800 max-w-sm">
    Engineering excellence, modern development, and next-generation learning.
  </p>
</div>


        {/* COMPANY LINKS */}
<div className="flex gap-12">
  <div>
    <h4 className="text-gray-900 font-medium mb-3">Company</h4>
    <ul className="space-y-2 text-sm">
      <li><Link to="/about" className="text-gray-600 hover:text-black">About</Link></li>
      <li><Link to="/careers" className="text-gray-600 hover:text-black">Careers</Link></li>
      <li><Link to="/news" className="text-gray-600 hover:text-black">News</Link></li>
    </ul>
  </div>

  <div>
    <h4 className="text-gray-900 font-medium mb-3">Services</h4>
    <ul className="space-y-2 text-sm">
      <li><Link to="/services" className="text-gray-600 hover:text-black">Full Stack</Link></li>
      <li><Link to="/services" className="text-gray-600 hover:text-black">AI & ML</Link></li>
      <li><Link to="/services" className="text-gray-600 hover:text-black">Data Engineering</Link></li>
    </ul>
  </div>
</div>

{/* CONTACT */}
<div>
  <h4 className="text-gray-900 font-medium mb-3">Contact</h4>
  <p className="text-gray-700 text-sm">hello@technofutureindia.com</p>
  <p className="text-gray-700 text-sm mt-1">+91 98765 43210</p>
</div>
</div>

{/* COPYRIGHT */}
<div className="text-center py-4 border-t border-gray-200 text-xs text-gray-500">
  © {new Date().getFullYear()} Techno Future India. All Rights Reserved.
</div>
    </footer>
  );
}