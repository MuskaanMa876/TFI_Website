import React from "react";
import Card from "../ui/Card";
import { team } from "../data/team";

export default function About() {
  return (
    <main>
      <section className="pt-28 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* ---------------- INTRO ---------------- */}
          <h1 className="text-5xl font-bold text-black leading-tight">
            About Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-red-600 to-black mt-2">
              Who We Are
            </span>
          </h1>

          <p className="text-slate-700 text-lg max-w-3xl mt-6 leading-relaxed">
            Techno Future India is committed to building technology-driven
            solutions and empowering businesses, institutions, and students
            to excel in the digital era. We combine engineering excellence,
            AI innovation, and modern skill development.
          </p>

          {/* ---------------- VISION + MISSION ---------------- */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <Card
              title="Our Vision"
              description="To position India as a global leader in innovation-driven digital transformation through world-class engineering and future-ready technologies."
            />
            <Card
              title="Our Mission"
              description="To deliver powerful technology services, future-tech education, and innovation-driven solutions that enable organizations and individuals to grow and succeed."
            />
          </div>

          {/* ---------------- CORE VALUES ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-black">Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {["Innovation", "Excellence", "Integrity", "Client Success"].map(
                (value, idx) => (
                  <Card key={idx} title={value} />
                )
              )}
            </div>
          </div>

          {/* ---------------- WHY CHOOSE US ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-black">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {["Client-Centric Solutions", "Proven Track Record", "Future-Ready Innovation"].map(
                (item, idx) => <Card key={idx} title={item} />
              )}
            </div>
          </div>

          {/* ---------------- MISSIONS & GOALS ---------------- */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-black">Missions & Goals</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card
                title="Short-Term (1–2 Years)"
                description={
                  <p>Expand training programs across major institutions, Enhance AI, cloud, and automation services, Grow strategic partnerships and collaborations.</p>
                }
              />
              <Card
                title="Long-Term (3–5 Years)"
                description={
                  <p>Establish a strong national tech ecosystem, Develop advanced AI-based automation systems, Create global innovation and R&D collaborations.</p>
                  
                }
              />
            </div>
          </div>

          {/* ---------------- TEAM SECTION ---------------- */}
          <div className="mt-20 pb-10">
            <h2 className="text-3xl font-semibold text-black">Our Leadership & Team</h2>
            <p className="text-slate-700 max-w-3xl mt-4 leading-relaxed">
              A team of engineers, innovators, strategists, and creators who lead our mission and deliver high-impact solutions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {team.map((member, idx) => (
                <Card
                  key={idx}
                  title={member.name}
                  description={
                    <>
                      <p className="text-sm font-medium">{member.role}</p>
                      <p className="text-sm mt-1">{member.responsibility}</p>
                    </>
                  }
                  img={member.img}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
