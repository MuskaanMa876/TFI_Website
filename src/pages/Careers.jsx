import React from "react";
import { jobs } from "../data/jobs";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


export default function Careers() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <h1 className="text-5xl font-bold text-black">Careers</h1>
          <p className="text-slate-700 text-lg max-w-3xl mt-4 leading-relaxed">
            Join a visionary team shaping India’s digital future.
            We value innovation, excellence, and growth.
          </p>

          {/* JOB CARDS */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <Card
                key={job.id}
                title={job.title}
                description={
                  <>
                    <p className="text-sm mt-1">{job.location}</p>
                    <p className="text-sm mt-2 leading-relaxed">{job.short}</p>

                    <div className="mt-5">
                      {/* APPLY NOW ONLY */}
                      <Link
                        to={`/apply/${job.id}`}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-black via-red-600 to-black text-white text-sm font-semibold hover:opacity-90 transition-all"
                      >
                        Apply Now →
                      </Link>
                    </div>
                  </>
                }
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
