import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import ReactMarkdown from "react-markdown";

export default function JobApplication() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <main className="px-6 py-20">
        <h1 className="text-3xl font-bold text-red-600">Job not found</h1>
        <Link to="/careers" className="text-blue-600 underline mt-4 block">
          Go Back
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          to="/careers"
          className="inline-block mb-6 px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition"
        >
          ← Back to Careers
        </Link>

        {/* JOB TITLE */}
        <h1 className="text-4xl font-bold text-black">{job.title}</h1>
        <p className="text-slate-700 mt-2 text-lg">{job.location}</p>

        {/* JOB DESCRIPTION (MARKDOWN RENDERED) */}
        <div className="mt-10 prose prose-slate max-w-none">
          <ReactMarkdown>{job.long}</ReactMarkdown>
        </div>

        {/* APPLY FORM */}
        <div className="mt-16 p-8 border border-gray-300 rounded-xl shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-6">Apply for this Job</h2>

          <form className="grid gap-6">

            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border rounded-lg"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Contact Number</label>
              <input
                type="tel"
                className="w-full mt-1 p-3 border rounded-lg"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Upload Resume</label>
              <input
                type="file"
                className="w-full mt-1 p-3 border rounded-lg bg-white"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-black via-red-600 to-black text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit Application →
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
