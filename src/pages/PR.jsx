import React from "react";

export default function PR(){
  return (
    <section id="pr" className="section bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">Public Relations Strategy</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Engaging Educational Institutions</h4>
            <p className="text-sm text-slate-600 mt-2">Offer tailored training programs and collaborative projects aligned with curricula.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Leverage Social Media</h4>
            <p className="text-sm text-slate-600 mt-2">Partner with college pages and create targeted content to reach students.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold">Digital Content</h4>
            <p className="text-sm text-slate-600 mt-2">Create YouTube videos, podcasts, and short reels to share industry insights and success stories.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
