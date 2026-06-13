export default function ContactMap() {
  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      
      {/* Schematic Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-slate-900 opacity-90 transition-transform duration-700 hover:scale-[1.02]"
        style={{ backgroundImage: "url('/contact-map.png')" }}
      />
      <div className="absolute inset-0 bg-slate-950/20" />

      {/* Floating HQ Marker Pin */}
      <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer group">
        {/* Tooltip badge */}
        <div className="bg-slate-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-md shadow-lg leading-none whitespace-nowrap mb-2 relative group-hover:scale-105 transition-transform">
          The Best Star HQ
          <div className="w-1.5 h-1.5 bg-slate-950 rotate-45 absolute left-1/2 -translate-x-1/2 bottom-[-3px]" />
        </div>
        {/* Target Map Pin icon */}
        <div className="w-10 h-10 rounded-full bg-[#d96126] hover:bg-[#c2501c] text-white flex items-center justify-center shadow-lg transition-all border-2 border-white animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
        </div>
      </div>

      {/* Visit Us Floating Card Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="bg-white border border-slate-100 rounded-xl shadow-2xl p-8 max-w-sm w-full space-y-4">
          <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">
            Visit Us
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            Located in the heart of the Financial District, easily accessible via major transit lines. Valet parking available for all clients.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-900 font-bold text-sm hover:text-[#d96126] transition-colors gap-1.5"
          >
            Get Directions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
