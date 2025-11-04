import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaShoppingCart, FaRobot, FaUserGraduate } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Full Stack Development",
      icon: <FaLaptopCode size={32} />,
      desc: "Build scalable web, mobile, and SaaS platforms with modern frameworks like React, Node.js, and Next.js.",
    },
    {
      title: "Data Analytics",
      icon: <FaDatabase size={32} />,
      desc: "Turn raw data into actionable insights using BI dashboards, predictive analytics, and cloud data pipelines.",
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart size={32} />,
      desc: "Launch secure, high-converting online stores with integrated payments, inventory management, and automation.",
    },
    {
      title: "AI-Powered Solutions",
      icon: <FaRobot size={32} />,
      desc: "Integrate chatbots, AI-driven forecasting, and custom ML models to automate and scale intelligently.",
    },
    {
      title: "Company-Specific Training",
      icon: <FaUserGraduate size={32} />,
      desc: "Deliver hands-on tech training in colleges on Full Stack Development and Generative AI for industry readiness.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-24 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Empowering the Future through{" "}
            <span className="text-sky-300">Technology & Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg max-w-2xl mx-auto text-blue-100"
          >
            Techno Future India pioneers digital transformation — delivering
            cutting-edge solutions and next-gen learning experiences to help
            businesses and students thrive in the digital era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="/services"
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-sky-100 transition"
            >
              Explore Services
            </Link>
            <Link
              to="/careers"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              Join Our Team
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-cover opacity-10"
        />
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Core Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
              >
                <div className="text-blue-700 mb-4">{srv.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
                <p className="text-gray-600 text-sm">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-20 bg-gradient-to-br from-sky-700 to-blue-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Transform Your Vision into Reality?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-blue-100 mb-8"
        >
          Partner with Techno Future India to innovate, automate, and scale your
          business with future-ready technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/contact"
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-sky-100 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
