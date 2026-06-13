"use client";

import { useState } from "react";
import Link from "next/link";
import CustomSelect from "../CustomSelect";
import ScrollReveal from "../ScrollReveal";

export default function ContactFormAndDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "Property Management Services",
    message: "",
  });
  const [emailBlurred, setEmailBlurred] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = !!(
    formData.fullName.trim() &&
    isEmailValid &&
    formData.phoneNumber.trim()
  );

  const showEmailError = emailBlurred && !isEmailValid && formData.email.length > 0;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, "");
    setFormData({ ...formData, phoneNumber: cleanValue });
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace", "Delete", "Tab", "Escape", "Enter",
      "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
      "Home", "End"
    ];
    if (allowedKeys.includes(e.key) || (e.ctrlKey || e.metaKey)) {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert(`Inquiry Dispatched:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "Property Management Services",
      message: "",
    });
    setEmailBlurred(false);
  };

  return (
    <section className="w-full bg-white pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Column: Contact Form (Col span 7) */}
        <ScrollReveal
          animation="fade-left"
          className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
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
                <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  id="phoneNumber"
                  required
                  maxLength={15}
                  placeholder="0000000000"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  className="bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <CustomSelect
                  options={["Property Management Services", "Tenancy Inquiry", "General Inquiry"]}
                  value={formData.subject}
                  onChange={(val) => setFormData({ ...formData, subject: val })}
                />
              </div>
            </div>

            {/* Message area */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you today?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all resize-none"
              />
            </div>

            {/* Action button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3.5 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-300 transform shadow-md ${isFormValid
                ? "bg-[#121826] text-white hover:bg-slate-800 dark:bg-white dark:text-[#121826] dark:hover:bg-slate-100 active:scale-[0.98] cursor-pointer"
                : "bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-500 cursor-not-allowed opacity-60"
                }`}
            >
              Dispatch Inquiry
            </button>
          </form>
        </ScrollReveal>

        {/* Right Column: Details Cards Stack (Col span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">

          {/* Card 1: Headquarters */}
          <ScrollReveal
            animation="fade-right"
            delay={100}
            className="flex flex-grow"
          >
            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 shadow-sm flex-grow w-full">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-6 tracking-tight">
                Headquarters
              </h3>
              <div className="space-y-6 text-slate-800">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white flex items-center justify-center text-[#d96126] border border-slate-100 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      Office Address
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed font-sans">
                      Burj Khalifa, Level 142<br />
                      Downtown Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white flex items-center justify-center text-[#d96126] border border-slate-100 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      Phone
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 font-sans">
                      +1 (212) 555-STAR
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white flex items-center justify-center text-[#d96126] border border-slate-100 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      Email
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 font-sans">
                      concierge@thebeststar.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Availability */}
          <ScrollReveal
            animation="fade-right"
            delay={200}
            className="flex flex-grow"
          >
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex-grow flex flex-col justify-center w-full">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 tracking-tight">
                Availability
              </h3>
              <div className="divide-y divide-slate-100 text-sm">
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 font-medium font-sans">Monday - Friday</span>
                  <span className="text-slate-800 font-bold font-sans">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 font-medium font-sans">Saturday</span>
                  <span className="text-slate-800 font-bold font-sans">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 font-medium font-sans">Sunday</span>
                  <span className="text-[#d96126] font-bold font-sans">By Appointment</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Follow Our Journey */}
          <ScrollReveal
            animation="fade-right"
            delay={300}
            className="flex"
          >
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center justify-between w-full">
              <h3 className="text-sm font-bold text-slate-800 tracking-tight uppercase">
                Follow Our Journey
              </h3>
              {/* Social Icons row */}
              <div className="flex gap-2">
                <Link href="#" className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#d96126] hover:text-[#d96126] flex items-center justify-center text-slate-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                  </svg>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#d96126] hover:text-[#d96126] flex items-center justify-center text-slate-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#d96126] hover:text-[#d96126] flex items-center justify-center text-slate-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l5.474-3.42M8.684 13.258l5.474 3.42M21 8a3 3 0 11-6 0 3 3 0 016 0zM6 15a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
