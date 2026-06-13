import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollections() {
  return (
    <section className="w-full bg-white pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header with Carousel Arrows */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold text-[#d96126] uppercase tracking-widest block mb-2">
              Selected For You
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              Featured Collections
            </h2>
          </div>
          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Block: Flex/Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Glass Pavilion Card (Col span 8) */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden shadow-md min-h-[460px] flex flex-col justify-between p-8 group">
            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/properties-glass-pavilion.png')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

            {/* Top Right: Price tag */}
            <div className="relative z-10 self-end">
              <span className="bg-slate-900/60 backdrop-blur-md text-white text-lg font-serif font-bold py-1.5 px-4 rounded-lg">
                $14,500,000
              </span>
            </div>

            {/* Bottom details */}
            <div className="relative z-10 space-y-4">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded">
                Premium Managed
              </span>
              <h3 className="text-3xl font-serif font-bold text-white tracking-tight">
                The Glass Pavilion
              </h3>
              <div className="flex flex-wrap items-center gap-6 text-slate-200 text-sm">
                {/* Location */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#d96126]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Beverly Hills, CA
                </div>
                {/* Beds */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  6 Beds
                </div>
                {/* Baths */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  8 Baths
                </div>
                {/* Area */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  12,400 sqft
                </div>
              </div>
            </div>
          </div>

          {/* Right Luxury Portfolio Info Card (Col span 4) */}
          <div className="lg:col-span-4 bg-[#121826] text-white rounded-2xl p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                Luxury Portfolio
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal opacity-95">
                Explore our hand-picked selection of architectural masterpieces. Our concierge team is ready to facilitate private viewings for qualified candidates.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 text-sm font-medium text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d96126]/20 flex items-center justify-center text-[#d96126] flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Verified Ownership
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d96126]/20 flex items-center justify-center text-[#d96126] flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d96126]/20 flex items-center justify-center text-[#d96126] flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Smart Home Integrated
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link href="#" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-center text-sm py-3 px-6 rounded-lg block transition-colors">
                View All Premium Properties
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
