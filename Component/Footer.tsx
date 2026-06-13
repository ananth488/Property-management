"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#eef2f6] text-slate-800 border-t border-slate-200">
      {/* Top Footer Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Column 1: Logo & Tagline */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
            The Best Star
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-normal">
            Redefining excellence in property management through precision, innovation, and unwavering reliability.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-500">
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
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-slate-500">
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
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
            Newsletter
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed font-normal">
            Stay updated with premium market reports.
          </p>
          <form onSubmit={handleSubscribe} className="flex max-w-sm">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white border border-slate-300 text-slate-900 rounded-l px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d96126] focus:border-[#d96126] transition-all"
            />
            <button
              type="submit"
              className="bg-[#121826] text-white hover:bg-slate-800 px-6 py-2.5 rounded-r text-sm font-semibold tracking-wide transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Copyright */}
      <div className="w-full bg-[#e2e8f0] border-t border-slate-300/60 py-6 text-center">
        <p className="text-xs text-slate-500 font-normal">
          &copy; {new Date().getFullYear()} The Best Star Property Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
