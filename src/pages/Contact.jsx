import React from "react";

export default function Contact() {
  return (
    <main
      className="min-h-screen text-slate-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,15,25,0.85), rgba(20,15,35,0.85)), url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="pt-24 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h1 className="text-5xl font-bold text-white">Get in Touch</h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 leading-relaxed">
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
                p-8 rounded-xl border border-white/10
                bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
                backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

              <label className="block text-sm mb-1">Name</label>
              <input
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-[#3EA8FF] transition
                "
              />

              <label className="block text-sm mt-4 mb-1">Email</label>
              <input
                type="email"
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-[#3EA8FF] transition
                "
              />

              <label className="block text-sm mt-4 mb-1">Message</label>
              <textarea
                rows="5"
                required
                className="
                  w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100
                  focus:outline-none focus:border-[#3EA8FF] transition
                "
              ></textarea>

              <button
                className="
                  mt-6 w-full py-3 rounded-lg font-semibold
                  bg-gradient-to-r from-[#3EA8FF] to-[#8B5CF6]
                  hover:opacity-90 transition
                "
              >
                Send Message
              </button>
            </form>

            {/* ---------- Company Info ---------- */}
            <div
              className="
                p-8 rounded-xl border border-white/10
                bg-gradient-to-br from-[#1A1D28]/60 to-[#221B35]/40
                backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.25)]
              "
            >
              <h3 className="text-2xl font-semibold text-white">Contact Details</h3>

              <div className="mt-6 space-y-6 text-slate-300 text-sm leading-relaxed">

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

                <div className="pt-4 border-t border-white/10">
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
