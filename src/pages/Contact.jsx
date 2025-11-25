import React from "react";

export default function Contact() {
  return (
    <main>
      <section className="pt-24 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h1 className="text-5xl font-bold text-black">
            Get in Touch
          </h1>
          <p className="text-slate-700 text-lg max-w-2xl mt-4 leading-relaxed">
            Have a project in mind? Want to collaborate?  
            We’d love to hear from you. Send us a message and our team will get back to you soon.
          </p>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">

            {/* ---------- Contact Form ---------- */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We will get back to you.");
              }}
              className="
                p-8 rounded-xl border border-white/20
                bg-gradient-to-br from-black/70 to-red-600/40
                backdrop-blur-sm shadow-md
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

              <label className="block text-sm mb-1 text-white/80">Name</label>
              <input
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-red-500 transition-all duration-300 ease-in-out
                "
              />

              <label className="block text-sm mt-4 mb-1 text-white/80">Email</label>
              <input
                type="email"
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-red-500 transition-all duration-300 ease-in-out
                "
              />

              <label className="block text-sm mt-4 mb-1 text-white/80">Message</label>
              <textarea
                rows="5"
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-red-500 transition-all duration-300 ease-in-out
                "
              ></textarea>

              {/* Updated Button Gradient */}
              <button
                className="
                  mt-6 px-7 py-3 rounded-lg font-semibold
                  bg-gradient-to-r from-black via-red-600 to-black
                  text-white text-sm
                  hover:opacity-90 transition-all duration-300 ease-in-out
                "
              >
                Send Message
              </button>
            </form>

            {/* ---------- Company Info ---------- */}
            <div
              className="
                p-8 rounded-xl border border-white/20
                bg-gradient-to-br from-black/70 to-red-600/40
                backdrop-blur-sm shadow-md
              "
            >
              <h3 className="text-2xl font-semibold text-white">Contact Details</h3>

              <div className="mt-6 space-y-6 text-slate-100 text-sm leading-relaxed">

                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="mt-1">hello@technofutureindia.com</p>
                </div>

                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="mt-1">+91 98765 43210</p>
                </div>

                <div>
                  <h4 className="text-white font-medium">Office Address</h4>
                  <p className="mt-1">Hyderabad, Telangana, India</p>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <h4 className="text-white font-medium">Working Hours</h4>
                  <p className="mt-1">Mon – Sat: 9:30 AM – 6:30 PM</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
