import React from "react";

export default function Goals() {
  return (
    <section id="goals" className="section bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">Upcoming Missions & Goals</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold">Digital Transformation of Businesses</h4>
            <p className="text-sm text-slate-600 mt-2">Develop and implement roadmaps for cloud, automation, and AI integration for SMEs and enterprises.</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold">Educational Excellence</h4>
            <p className="text-sm text-slate-600 mt-2">Expand training programs in engineering colleges and provide hands-on practical exposure.</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold">Sustainability & Social Impact</h4>
            <p className="text-sm text-slate-600 mt-2">Implement eco-friendly practices and support community initiatives.</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold">Innovation & Research</h4>
            <p className="text-sm text-slate-600 mt-2">Invest in R&D and collaborate with academic institutions for cutting-edge projects.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg">
            <h5 className="font-semibold">Short-Term (1-2 Years)</h5>
            <ul className="list-disc ml-5 mt-2 text-sm text-slate-600">
              <li>Increase client base by 20%</li>
              <li>Achieve 25% revenue growth</li>
              <li>Grow the team by 30%</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h5 className="font-semibold">Medium-Term (3-5 Years)</h5>
            <ul className="list-disc ml-5 mt-2 text-sm text-slate-600">
              <li>Market expansion and brand recognition</li>
              <li>Sustainability initiatives & employee development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
