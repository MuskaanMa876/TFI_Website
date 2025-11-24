import React from "react";

export default function Services() {
  const services = [
    {
      title: "Full Stack Engineering",
      desc: "Scalable web & mobile applications using modern architectures, cloud deployments, and secure development practices.",
    },
    {
      title: "AI & Data Systems",
      desc: "AI-driven tools, data pipelines, dashboards, automation systems, and predictive analytics.",
    },
    {
      title: "Technical Training",
      desc: "Industry-aligned hands-on training in engineering colleges including AI, cloud, and full-stack development.",
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD pipelines, deployments, automation and cloud optimization across major platforms.",
    },
    {
      title: "Corporate Solutions",
      desc: "Custom technology development, enterprise automation, and innovation-driven frameworks.",
    },
  ];

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

          <h1 className="text-5xl font-bold text-white">Services</h1>
          <p className="text-slate-300 text-lg max-w-3xl mt-4">
            High-quality engineering + strategic decision-making.
            We design scalable and meaningful solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-white/10 
                bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
                backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]"
              >
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
