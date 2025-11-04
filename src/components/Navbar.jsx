import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";


import LogoHorizontal from "../assets/Logo_Horizontal.png";
import LogoSquare from "../assets/LOGO_Square.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/team", label: "Team" },
  { to: "/rules", label: "Rules" },
  { to: "/goals", label: "Missions" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/90 backdrop-blur-md shadow-md border-b py-1.5"
      : "bg-white/70 backdrop-blur-md border-b py-3"
  }`}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 transition-all duration-300">
    {/* === Brand Logo === */}
    <Link to="/" className="flex items-center gap-3">
      <picture>
        <source srcSet={LogoSquare} media="(max-width: 1200px)" />
        <img
          src={LogoHorizontal}
          alt="Techno Future India Logo"
          className={`transition-all duration-300 ${
            scrolled ? "w-40" : "w-40"
          } h-auto object-contain`}
        />
      </picture>
    </Link>

        {/* === Desktop Menu === */}
        <nav className="hidden lg:flex gap-6 items-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative font-medium transition ${
                location.pathname === l.to
                  ? "text-indigo-00"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600 rounded"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* === Mobile Drawer === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t shadow-inner"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block px-6 py-3 border-b text-sm ${
                  location.pathname === l.to
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                } hover:bg-slate-50 transition`}
              >
                {l.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
