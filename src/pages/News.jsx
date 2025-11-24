import React from "react";

const news = [
  { title: "AI Bootcamp 2025 Announced", date: "Aug 02, 2025", excerpt: "TFI launches an advanced AI program aimed at bridging the skill gap in colleges." },
  { title: "New University Partnership", date: "Jul 12, 2025", excerpt: "Collaboration for hands-on software training and industry-aligned learning." },
];

export default function News() {
  return (
    <main className="bg-[#0D0D0D] text-slate-100 min-h-screen">

      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-white">News & Updates</h1>
          <p className="text-slate-300 mt-3">Announcements & insights.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {news.map((n, i) => (
              <article key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{n.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{n.date}</p>
                <p className="mt-3 text-slate-300">{n.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-[#2D8EFF]">Read more →</a>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
