"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[620px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2500ms] ease-out ${
          isMounted ? "scale-100 opacity-100" : "scale-110 opacity-0"
        } hover:scale-105`}
        style={{ backgroundImage: "url('/hero-villa.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <div className="max-w-3xl">
          {/* Subtitle Badge */}
          <span
            className={`inline-block bg-[#d96126] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 shadow-sm transition-all duration-1000 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Premium Experience
          </span>

          {/* Title */}
          <h1
            className={`text-4xl md:text-6xl font-serif font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-sm transition-all duration-1000 delay-300 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Premier Property Management <br className="hidden md:inline" />
            for the Modern Owner
          </h1>

          {/* Subtitle Paragraph */}
          <p
            className={`text-base md:text-lg text-slate-200 leading-relaxed max-w-xl mb-10 font-normal opacity-90 transition-all duration-1000 delay-500 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Maximize your investment's potential with our sophisticated, full-service management approach tailored for high-end residential and commercial assets.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 transition-all duration-1000 delay-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="w-full sm:w-auto bg-[#d96126] text-white hover:bg-[#c2501c] px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 shadow-md">
              Get Started
            </button>
            <button className="w-full sm:w-auto border border-white/60 text-white hover:bg-white hover:text-slate-950 hover:border-white px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-300">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
