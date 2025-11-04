import React from "react";

const rules = [
  { title: "Attendance & Punctuality", text: "Arrive on time and adhere to the work schedule to keep projects on track." },
  { title: "Professional Conduct", text: "Maintain respectful communication, appropriate dress, and follow company policies." },
  { title: "Workplace Safety", text: "Follow safety protocols and report hazards immediately." },
  { title: "Confidentiality", text: "Protect company and client sensitive information." },
  { title: "Use of Company Resources", text: "Use equipment and software responsibly for business purposes." },
  { title: "Communication", text: "Keep communication clear and use appropriate channels for different needs." }
];

export default function Rules(){
  return (
    <section id="rules" className="section bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">General Workplace Rules</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {rules.map((r, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-semibold">{r.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
