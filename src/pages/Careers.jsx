import React from "react";
import { jobs } from "../data/jobs";

export default function Careers() {
  return (
    <main
      className="min-h-screen text-slate-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,15,25,0.88), rgba(20,15,35,0.88)), url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="pt-24 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-white">Careers</h1>
          <p className="text-slate-300 text-lg max-w-3xl mt-4 leading-relaxed">
            Join a visionary team shaping India’s digital future.
            We value innovation, excellence, and growth.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-xl border border-white/10 
                bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
                backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]"
              >
                <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{job.location}</p>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {job.desc}
                </p>

                <a
                  href={job.apply}
                  className="inline-block mt-5 text-indigo-300 hover:text-indigo-400 font-semibold"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
