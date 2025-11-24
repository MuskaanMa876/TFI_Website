import React from "react";
import { motion } from "framer-motion";

export default function Button({ text, onClick, type = "primary", className = "" }) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,200,0.6)]",
    outline:
      "border border-pink-400 text-pink-300 hover:bg-pink-400/20 hover:scale-105",
    glass:
      "backdrop-blur-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105",
    success:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-110 hover:shadow-[0_0_18px_rgba(0,255,150,0.5)]",
    danger:
      "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:scale-110 hover:shadow-[0_0_18px_rgba(255,60,60,0.5)]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[type]} ${className}`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}

