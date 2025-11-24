import React from "react";

export default function About() {
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

          {/* ---------------- INTRO ---------------- */}
          <h1 className="text-5xl font-bold text-white">About Us</h1>

          <p className="text-slate-300 text-lg max-w-3xl mt-4 leading-relaxed">
            Techno Future India is committed to building technology-driven
            solutions and empowering businesses, institutions, and students
            to excel in the digital era. We combine engineering excellence,
            AI innovation, and modern skill development.
          </p>

          {/* ---------------- VISION + MISSION ---------------- */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">

            {/* Vision */}
            <div className="p-8 rounded-xl border border-white/10 
              bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
              backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                To position India as a global leader in innovation-driven
                digital transformation through world-class engineering and
                future-ready technologies.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-xl border border-white/10 
              bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
              backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                To deliver powerful technology services, future-tech education,
                and innovation-driven solutions that enable organizations and
                individuals to grow and succeed.
              </p>
            </div>

          </div>

          {/* ---------------- CORE VALUES ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-white">Core Values</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {["Innovation", "Excellence", "Integrity", "Client Success"].map(
                (value, idx) => (
                  <div
                    key={idx}
                    className="
                      p-6 rounded-xl border border-white/10
                      bg-[#1B1D29]/50 backdrop-blur-sm
                    "
                  >
                    <h4 className="text-xl font-semibold text-white">{value}</h4>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ---------------- WHY CHOOSE US ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-white">Why Choose Us</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                "Client-Centric Solutions",
                "Proven Track Record",
                "Future-Ready Innovation",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/10 bg-[#1B1D29]/50"
                >
                  <h4 className="text-xl font-semibold text-white">{item}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- MISSIONS & GOALS ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-white">Missions & Goals</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              {/* Short-Term */}
              <div className="p-6 rounded-xl bg-[#1B1D29]/50 border border-white/10">
                <h4 className="text-xl font-semibold text-white">Short-Term (1–2 Years)</h4>
                <ul className="list-disc ml-5 mt-3 text-slate-300 text-sm leading-relaxed">
                  <li>Expand training programs across major institutions</li>
                  <li>Enhance AI, cloud, and automation services</li>
                  <li>Grow strategic partnerships and collaborations</li>
                </ul>
              </div>

              {/* Long-Term */}
              <div className="p-6 rounded-xl bg-[#1B1D29]/50 border border-white/10">
                <h4 className="text-xl font-semibold text-white">Long-Term (3–5 Years)</h4>
                <ul className="list-disc ml-5 mt-3 text-slate-300 text-sm leading-relaxed">
                  <li>Establish a strong national tech ecosystem</li>
                  <li>Develop advanced AI-based automation systems</li>
                  <li>Create global innovation and R&D collaborations</li>
                </ul>
              </div>

            </div>
          </div>

          {/* ---------------- TEAM DIRECT SECTION ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-white">Our Leadership & Team</h2>

            <p className="text-slate-300 max-w-3xl mt-4 leading-relaxed">
              A team of engineers, innovators, strategists, and creators who
              lead our mission and deliver high-impact solutions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

              {[
                { name: "Narendra", role: "Founder & Visionary Leader" },
                { name: "Siva", role: "Co-Founder & Operations Director" },
                { name: "Ganesh", role: "Chief Executive Officer (CEO)" },
                { name: "Naveen", role: "Chief Technology Officer (CTO)" },
                { name: "Bhanu", role: "AI/ML Engineer" },
                { name: "Teja", role: "Networking Engineer" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="
                    p-6 rounded-xl border border-white/10
                    bg-[#1B1D29]/50 backdrop-blur-sm
                  "
                >
                  <h4 className="text-xl font-semibold text-white">
                    {member.name}
                  </h4>
                  <p className="text-slate-300 text-sm mt-1">{member.role}</p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
