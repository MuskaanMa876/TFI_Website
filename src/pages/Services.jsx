import React from "react";
import { services } from "../data/services";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

export default function Services() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-black">Our Services</h1>
          <p className="text-slate-700 text-lg max-w-3xl mt-4 leading-relaxed">
            We build scalable digital solutions using modern engineering, automation, and cloud technologies.
          </p>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {services.map((s) => (
              <Link key={s.id} to={`/service/${s.id}`} className="block hover:scale-105 transition">
                <Card title={s.title} description={<p>{s.short}</p>} />
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
