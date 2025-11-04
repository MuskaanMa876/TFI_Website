import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-bg-blue-100 to-indigo-200 text-gray-800 py-24 overflow-hidden">
      {/* Optional soft overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-white-800 font-[Poppins]">
          Empowering the Future through Technology & Innovation
        </h1>

        {/* === Subtext === */}
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
          Techno Future India pioneers digital transformation — delivering
          cutting-edge solutions and next-gen learning experiences to help
          businesses and students thrive in the digital era.
        </p>

        {/* === Buttons === */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
            Explore Services
          </button>
          <button className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-full hover:bg-indigo-50 transition duration-300">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
