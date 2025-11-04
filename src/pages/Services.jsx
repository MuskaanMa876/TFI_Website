import React from "react";

const services = [
  {
    title: "Full Stack Development",
    text: "Web apps, mobile apps, SaaS platforms, and CMS solutions built with modern stacks — scalable, robust and user-friendly."
  },
  {
    title: "Data Analytics",
    text: "Transform raw data into actionable insights: visualization, predictive analytics, and business intelligence to drive smarter decisions."
  },
  {
    title: "E-Commerce Solutions",
    text: "Scalable and secure online stores, multi-vendor marketplaces, and integrated payment gateways for superior customer experiences."
  },
  {
    title: "AI-Powered Solutions",
    text: "Chatbots, predictive analytics, and personalized experiences to automate processes and enhance efficiency."
  },
  {
    title: "Company-Specific Trainings",
    text: "Hands-on training programs for engineering colleges in Full Stack, Generative AI and industry-relevant skills for student employability."
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">Our Services</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">We combine domain expertise with modern technologies to deliver practical and scalable solutions.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
