import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why" className="section bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">Why Choose Us</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Client-Centric Solutions</h4>
            <p className="text-sm text-slate-600 mt-2">Tailored solutions aligned to your unique goals.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Proven Success</h4>
            <p className="text-sm text-slate-600 mt-2">A track record of tangible results for our clients.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Cutting-Edge Innovation</h4>
            <p className="text-sm text-slate-600 mt-2">Leverage the latest technologies for future-proof solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
