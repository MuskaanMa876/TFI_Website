import React from "react";

export default function Hero() {
  return<section
  className="text-white py-28 bg-cover bg-center relative overflow-hidden"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* GEN Z GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-pink-500/30 to-transparent backdrop-blur-[2px]"></div>

  {/* GEN Z BLURRY SHAPES */}
  <div className="absolute top-10 left-10 w-48 h-48 bg-pink-500/40 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[3px_3px_8px_rgba(0,0,0,0.5)]"
    >
      Empowering the Future with{" "}
      <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
        Gen-Z Technology
      </span>
    </motion.h1>

    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mt-6 text-lg max-w-2xl mx-auto text-blue-100"
    >
      Modern, bold, and future-ready digital solutions crafted with a Gen-Z
      mindset.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-10 flex justify-center gap-6"
    >
      <Link
        to="/services"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-110 transition-all"
      >
        Explore Services
      </Link>

      <Link
        to="/careers"
        className="px-6 py-3 rounded-full border border-white/40 backdrop-blur-xl font-semibold hover:shadow-[0_0_20px_rgba(255,0,200,0.7)] hover:scale-105 transition-all"
      >
        Join Our Team
      </Link>
    </motion.div>
  </div>
</section>
}
