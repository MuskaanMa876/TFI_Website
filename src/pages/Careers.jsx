import { jobs } from "../data/jobs";
export default function Careers() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Job Openings</h2>
      {jobs.map((job) => (
        <div key={job.id} className="border p-4 rounded-lg mb-4 hover:shadow-md">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.location}</p>
          <p className="mt-2">{job.desc}</p>
          <a href={job.apply} className="inline-block mt-3 text-blue-600 font-semibold">Apply Now →</a>
        </div>
      ))}
    </div>
  );
}
