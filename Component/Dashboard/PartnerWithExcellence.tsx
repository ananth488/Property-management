"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import CustomSelect from "../CustomSelect";

export default function PartnerWithExcellence() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    propertyType: "",
    message: "",
  });
  const [emailBlurred, setEmailBlurred] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = !!(formData.fullName.trim() && isEmailValid && formData.propertyType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert(`Inquiry sent!\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nProperty Type: ${formData.propertyType}\nMessage: ${formData.message}`);
  };

  const showEmailError = emailBlurred && !isEmailValid && formData.email.length > 0;

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* Left Side: Contact Information (Dark Column) */}
        <ScrollReveal
          animation="fade-left"
          duration={900}
          className="bg-[#121826] text-white p-8 md:p-12 md:col-span-5 flex flex-col justify-between"
        >
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
                    Burj Khalifa, Level 142<br />
                    Downtown Dubai, UAE
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
        </ScrollReveal>

        {/* Right Side: Contact Form (White Column) */}
        <ScrollReveal
          animation="fade-right"
          duration={900}
          className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center bg-white"
        >
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
              <div className="flex flex-col relative">
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
                  onBlur={() => setEmailBlurred(true)}
                  onFocus={() => setEmailBlurred(false)}
                  className={`bg-slate-50 border text-slate-900 rounded-lg p-3 text-sm focus:outline-none transition-all ${showEmailError
                      ? "!border-red-500 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:!border-red-500 dark:focus:border-red-500"
                      : "border-slate-200 focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126]"
                    }`}
                />
                {showEmailError && (
                  <span className="absolute top-full left-0 text-[11px] text-red-500 mt-1 transition-all animate-in fade-in slide-in-from-top-1 duration-150">
                    Please enter a valid email address.
                  </span>
                )}
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="flex flex-col">
              <label
                className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Property Type
              </label>
              <CustomSelect
                options={[
                  "Residential Property",
                  "Commercial Property",
                  "Investment Portfolio",
                  "Other Assets"
                ]}
                value={formData.propertyType}
                onChange={(value) => setFormData({ ...formData, propertyType: value })}
                placeholder="Select Option"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
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
              disabled={!isFormValid}
              className={`w-full py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform shadow-md ${isFormValid
                ? "bg-[#121826] text-white hover:bg-slate-800 dark:bg-white dark:text-[#121826] dark:hover:bg-slate-100 active:scale-[0.98] cursor-pointer"
                : "bg-slate-400 text-white dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed opacity-60"
                }`}
            >
              Send Inquiry
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
