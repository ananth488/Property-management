"use client";

import { useState } from "react";

export default function PartnerWithExcellence() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inquiry sent!\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nProperty Type: ${formData.propertyType}\nMessage: ${formData.message}`);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* Left Side: Contact Information (Dark Column) */}
        <div className="bg-[#121826] text-white p-8 md:p-12 md:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-tight mb-4">
              Partner With Excellence
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 opacity-90 font-normal">
              Ready to elevate your property management experience? Contact us for a personalized consultation and portfolio assessment.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d96126]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide text-white uppercase opacity-75">
                    Our Headquarters
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 font-normal leading-relaxed">
                    123 Luxury Lane, Elite Plaza<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d96126]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide text-white uppercase opacity-75">
                    Email Us
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 font-normal">
                    concierge@thebeststar.com
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d96126]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide text-white uppercase opacity-75">
                    Call Us
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 font-normal">
                    +1 (800) STAR-MGMT
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 mt-8 font-normal">
            Private & Confidential Consultation
          </div>
        </div>

        {/* Right Side: Contact Form (White Column) */}
        <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all"
                />
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="flex flex-col">
              <label
                htmlFor="propertyType"
                className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Property Type
              </label>
              <div className="relative">
                <select
                  id="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg p-3 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all"
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="Residential">Residential Property</option>
                  <option value="Commercial">Commercial Property</option>
                  <option value="Investment">Investment Portfolio</option>
                  <option value="Other">Other Assets</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="How can we assist you with your property?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#121826] text-white hover:bg-slate-800 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-md"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
