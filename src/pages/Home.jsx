import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="text-slate-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(18,27,48,0.55), rgba(28,14,63,0.58)), url('/images/home-bg.jpg')",
        // ↑ purple + blue tint = clean & premium
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto text-left">

          <h1 className="text-6xl font-bold text-white leading-tight">
            Engineering Solutions  
            <span className="block mt-2 bg-gradient-to-r from-[#3EA8FF] to-[#8B5CF6] text-transparent bg-clip-text">
              Built for the Next Decade
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200 max-w-3xl leading-relaxed">
            We design and engineer digital systems with clarity, precision, and
            modern development practices — creating scalable and future-ready
            solutions.
          </p>

          <div className="mt-10 flex gap-6">
            <Link
              to="/services"
              className="px-7 py-3 bg-gradient-to-r from-[#3EA8FF] to-[#8B5CF6] rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
            >
              View Services
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border border-white/40 rounded-lg text-white text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SECOND SECTION — WHAT WE DO */}
      {/* ========================= */}
      <section className="min-h-screen flex items-center px-6 bg-black/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-white">What We Deliver</h2>

          <p className="text-slate-200 mt-4 max-w-3xl">
            Engineering clarity meets strategic thinking — resulting in
            reliable, scalable, and meaningful digital solutions.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-10">

            <div className="p-6 rounded-lg border border-white/20 bg-gradient-to-br from-[#1E293B]/60 to-[#3b2863]/40">
              <h3 className="text-xl font-semibold text-white">
                Full-Stack Engineering
              </h3>
              <p className="mt-3 text-slate-200 text-sm">
                Modern architectures, smooth deployments, and scalable
                engineering practices.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-white/20 bg-gradient-to-br from-[#0f263a]/60 to-[#4f2a6d]/40">
              <h3 className="text-xl font-semibold text-white">
                AI & Data Systems
              </h3>
              <p className="mt-3 text-slate-200 text-sm">
                Intelligent systems, automation pipelines, and predictive
                engineering.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-white/20 bg-gradient-to-br from-[#112031]/60 to-[#6040a8]/40">
              <h3 className="text-xl font-semibold text-white">
                Technical Training
              </h3>
              <p className="mt-3 text-slate-200 text-sm">
                Industry-aligned training and deep engineering programs.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
