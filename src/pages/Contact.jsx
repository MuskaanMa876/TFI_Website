import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600">Contact Us</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="p-6 bg-white rounded-lg shadow-sm" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! we will get back to you.')}}>
            <label className="block text-sm">Name</label>
            <input className="w-full border p-2 rounded mt-1" required />
            <label className="block text-sm mt-3">Email</label>
            <input className="w-full border p-2 rounded mt-1" type="email" required />
            <label className="block text-sm mt-3">Message</label>
            <textarea className="w-full border p-2 rounded mt-1" rows={5} required />
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md">Send</button>
          </form>

          <div className="p-6 bg-white rounded-lg">
            <h4 className="font-semibold">Head Office</h4>
            <p className="text-sm text-slate-600 mt-2">Email: hello@technofutureindia.com</p>
            <p className="text-sm text-slate-600">Phone: +91 98765 43210</p>

            <div className="mt-4">
              <h5 className="font-semibold text-sm">Follow Us</h5>
              <div className="flex gap-3 mt-2 text-sm">
                <a href="#" className="text-indigo-600">Twitter</a>
                <a href="#" className="text-indigo-600">LinkedIn</a>
                <a href="#" className="text-indigo-600">YouTube</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
