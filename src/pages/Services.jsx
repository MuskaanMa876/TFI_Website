import React from "react";
import Card from "../ui/Card";
import { services } from "../data/services";

export default function Services() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <h1 className="text-5xl font-bold text-black">Services</h1>
          <p className="text-slate-700 text-lg max-w-3xl mt-4 leading-relaxed">
            High-quality engineering + strategic decision-making. We design scalable
            and meaningful solutions.
          </p>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((s, i) => (
              <div key={i}>
                <Card title={s.title} description={<p>{s.desc}</p>} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
