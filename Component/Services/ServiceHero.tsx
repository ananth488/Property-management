"use client";

import { useEffect, useState } from "react";

export default function ServiceHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full bg-white pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <span
          className={`text-xs font-semibold text-[#d96126] uppercase tracking-widest block mb-3 font-sans transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          OUR EXPERTISE
        </span>
        <h1
          className={`text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6 max-w-3xl transition-all duration-1000 delay-200 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Elite Management for Discerning Property Owners
        </h1>
        <p
          className={`text-slate-500 text-base md:text-lg leading-relaxed max-w-4xl font-normal transition-all duration-1000 delay-400 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We provide a comprehensive suite of management and consulting services designed to maximize asset value while providing a seamless, high-end experience for both owners and tenants.
        </p>
      </div>
    </section>
  );
}
