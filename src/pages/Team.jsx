import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaRobot, FaLaptopCode, FaNetworkWired, FaMicrochip } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Team() {
  const team = [
    {
      name: "Narendra",
      role: "Founder & Visionary Leader",
      icon: <FaLaptopCode className="text-blue-600" size={26} />,
      bio: "Guides the company’s mission and vision. Leads strategic partnerships and oversees digital transformation initiatives.",
      linkedin: "#",
    },
    {
      name: "Siva",
      role: "Co-Founder & Operations Director",
      icon: <FaNetworkWired className="text-sky-600" size={26} />,
      bio: "Manages business operations, expansion, and resource optimization while ensuring innovation remains at the core of growth.",
      linkedin: "#",
    },
    {
      name: "Ganesh",
      role: "Chief Executive Officer (CEO)",
      icon: <FaLaptopCode className="text-indigo-600" size={26} />,
      bio: "Drives business strategy and execution. Focuses on scaling solutions and nurturing high-performance teams.",
      linkedin: "#",
    },
    {
      name: "Naveen",
      role: "Chief Technology Officer (CTO)",
      icon: <GiArtificialIntelligence className="text-purple-600" size={26} />,
      bio: "Oversees technical innovation, architecture, and R&D. Leads AI, Data Analytics, and Full Stack development initiatives.",
      linkedin: "#",
    },
    {
      name: "Bhanu",
      role: "AI/ML Engineer",
      icon: <GiArtificialIntelligence className="text-blue-600" size={26} />,
      bio: "Develops and trains advanced AI models, focusing on predictive analytics and generative AI research.",
      linkedin: "#",
    },
    {
      name: "Bhanu B",
      role: "Full Stack Engineer",
      icon: <FaLaptopCode className="text-green-600" size={26} />,
      bio: "Designs robust web applications using modern tech stacks. Ensures UI/UX harmony with backend performance.",
      linkedin: "#",
    },
    {
      name: "Teja",
      role: "Networking Engineer",
      icon: <FaNetworkWired className="text-teal-600" size={26} />,
      bio: "Maintains network infrastructure, implements security protocols, and ensures system reliability across deployments.",
      linkedin: "#",
    },
    {
      name: "Purna (VLSI)",
      role: "VLSI Engineer",
      icon: <FaMicrochip className="text-orange-600" size={26} />,
      bio: "Specializes in chip design, semiconductor development, and performance optimization for embedded systems.",
      linkedin: "#",
    },
    {
      name: "Purna (Robotics)",
      role: "Robotics Engineer",
      icon: <FaRobot className="text-pink-600" size={26} />,
      bio: "Builds autonomous systems integrating AI, mechanical design, and IoT — shaping the future of automation.",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== PAGE HEADER ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-blue-900"
        >
          Meet Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-4 text-gray-600 max-w-3xl mx-auto"
        >
          The heart of Techno Future India — a team of engineers, innovators, and creators committed to building a smarter, tech-driven tomorrow.
        </motion.p>

        {/* ===== TEAM GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="flex justify-center mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-center text-blue-900">{member.name}</h3>
                <p className="text-sm text-center text-blue-600 mt-1 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mt-3 text-center leading-relaxed">
                  {member.bio}
                </p>

                {member.linkedin && (
                  <div className="flex justify-center mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 hover:text-blue-900 transition"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Want to be part of this visionary team?
          </h2>
          <p className="mt-2 text-gray-600">
            Join us in transforming India’s digital landscape.
          </p>
          <a
            href="/careers"
            className="inline-block mt-5 bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition"
          >
            View Careers
          </a>
        </motion.div>
      </div>
    </div>
  );
}
