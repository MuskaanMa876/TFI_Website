import React from "react";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">About Techno Future India</h2>
        <p className="mt-4 text-slate-700 leading-relaxed max-w-4xl">
          Founded in 2024, Techno Future India provides cutting-edge technology solutions and transformative educational experiences. We help businesses and educational institutions achieve their goals by leveraging the latest technologies and fostering a culture of continuous learning.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Vision</h4>
            <p className="text-sm text-slate-600 mt-2">To be a pioneering force in digital transformation of businesses and education, empowering clients through technology and continuous learning.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Mission</h4>
            <p className="text-sm text-slate-600 mt-2">Deliver unparalleled solutions and educational experiences focused on innovation, client empowerment, continuous learning, and exceptional support.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Core Values</h4>
            <p className="text-sm text-slate-600 mt-2">Innovation · Excellence · Passion · Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
