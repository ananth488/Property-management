"use client";

import { useEffect, useState } from "react";

export default function ContactHeader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full bg-white pt-20 pb-10 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1
          className={`text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Connect With Excellence
        </h1>
        <p
          className={`text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal transition-all duration-1000 delay-200 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Your property is an asset that deserves premium care. Whether you're an owner or a prospective tenant, our team is here to assist with quiet confidence and professional authority.
        </p>
      </div>
    </section>
  );
}
