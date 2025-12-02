import React from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import WorkspaceCarousel from "../components/WorkspaceCarousel";

export default function Home() {
  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="min-h-screen px-6 flex items-center py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-6xl font-bold text-black leading-tight">
              TechnoFutureIndia
              <span className="block mt-2 bg-gradient-to-r from-black via-red-600 to-black text-transparent bg-clip-text">
                {/* TechnoFutureIndia */}
              </span>
            </h1>
            <h1 className="text-3xl font-bold text-black leading-tight">
              Engineering Solutions
              <span className="block mt-2 bg-gradient-to-r from-black via-red-600 to-black text-transparent bg-clip-text">
                Built for the Next Decade
              </span>
            </h1>

            <p className="mt-6 text-1xl text-black max-w-3xl leading-relaxed">
              We design and engineer digital systems with clarity, precision, and
              modern development practices — creating scalable and future-ready
              solutions.
            </p>

            <div className="mt-10 flex gap-6">
              <Link
                to="/services"
                className="px-7 py-3 bg-gradient-to-r from-black via-red-600 to-black rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
              >
                View Services
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3 border border-black rounded-lg text-black text-sm font-semibold hover:bg-black hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
  <WorkspaceCarousel />
</div>

          </div>

        </div>
      </section>

      {/* ---------------- WHAT WE DELIVER ---------------- */}
      <section className="px-6 mt-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black">What We Deliver</h2>

          <p className="mt-4 max-w-3xl text-slate-700">
            Engineering clarity meets strategic thinking — resulting in reliable,
            scalable, and meaningful digital solutions.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-10">

            <Card
              title="Full-Stack Engineering"
              description={
                <p>Modern architectures, smooth deployments, and scalable practices.</p>
              }
            />


            <Card
              title="AI & Data Systems"
              description={
                <p>Intelligent systems, automation pipelines, and predictive models.</p>
              }
            />


            <Card
              title="Technical Training"
              description={
                <p>Deep engineering programs aligned with modern industry needs.</p>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
