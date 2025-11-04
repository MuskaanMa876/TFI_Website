import React from "react";

const news = [
  { id: 1, title: "Techno Future India launches AI Bootcamp 2025", date: "2025-08-02", excerpt: "An intensive hands-on AI program for college students to bridge the industry skill gap." },
  { id: 2, title: "Partnership with XYZ University announced", date: "2025-07-12", excerpt: "Collaborative projects and training programs aimed at practical exposure." }
];

export default function News(){
  return (
    <section id="news" className="section bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">News & Articles</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {news.map(n => (
            <article key={n.id} className="p-4 bg-white rounded-lg border">
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-xs text-slate-500">{n.date}</p>
              <p className="mt-2 text-sm text-slate-600">{n.excerpt}</p>
              <a className="mt-3 inline-block text-indigo-600 text-sm" href="#">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
