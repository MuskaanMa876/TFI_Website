import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import ReactMarkdown from "react-markdown";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <main className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600">Service Not Found</h1>
        <Link to="/services" className="mt-6 inline-block underline text-blue-600">
          ← Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">

      <Link
        to="/services"
        className="inline-block mb-8 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back to Services
      </Link>

      <h1 className="text-4xl font-bold text-black mb-6">
        {service.title}
      </h1>

      <article className="prose prose-slate max-w-none">
        <ReactMarkdown>{service.long}</ReactMarkdown>
      </article>

    </main>
  );
}
