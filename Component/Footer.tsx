"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailBlurred, setEmailBlurred] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showEmailError = emailBlurred && !isEmailValid && email.length > 0;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) return;
    alert(`Subscribed: ${email}`);
    setEmail("");
    setEmailBlurred(false);
  };

  return (
    <footer className="w-full bg-[#eef2f6] dark:bg-[#121826] text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Top Footer Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Column 1: Logo & Tagline */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            The Best Star Property Management
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
            Redefining excellence in property management through precision, innovation, and unwavering reliability.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-[#d96126] transition-colors font-normal">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Search Properties
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d96126] transition-colors font-normal">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
            Newsletter
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-normal">
            Stay updated with premium market reports.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col relative max-w-sm">
            <div className="flex">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailBlurred(true)}
                onFocus={() => setEmailBlurred(false)}
                className={`flex-grow bg-white dark:bg-[#0f172a] border text-slate-900 dark:text-slate-100 rounded-l px-4 py-2.5 text-sm focus:outline-none transition-all ${
                  showEmailError
                    ? "!border-red-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:!border-red-500 dark:focus:ring-red-500"
                    : "border-slate-300 dark:border-slate-700 focus:ring-1 focus:ring-[#d96126] focus:border-[#d96126]"
                }`}
              />
              <button
                type="submit"
                disabled={!isEmailValid}
                className={`px-6 py-2.5 rounded-r text-sm font-semibold tracking-wide transition-all ${
                  isEmailValid
                    ? "bg-[#121826] dark:bg-white dark:text-[#121826] text-white hover:bg-slate-800 cursor-pointer"
                    : "bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-500 cursor-not-allowed opacity-60"
                }`}
              >
                Join
              </button>
            </div>
            {showEmailError && (
              <span className="absolute top-full left-0 text-[11px] text-red-500 mt-1 transition-all animate-in fade-in slide-in-from-top-1 duration-150">
                Please enter a valid email address.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Footer Copyright */}
      <div className="w-full bg-[#e2e8f0] dark:bg-[#090d16] border-t border-slate-300/60 dark:border-slate-800 py-6 text-center transition-colors duration-300">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
          &copy; {new Date().getFullYear()} The Best Star Property Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
