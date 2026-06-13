import ScrollReveal from "../ScrollReveal";

export default function ContactMap() {
  return (
    <section className="relative w-full h-[480px] overflow-hidden">

      {/* Interactive Dubai Google Map iframe */}
      <ScrollReveal
        animation="fade-in"
        duration={1200}
        className="absolute inset-0 w-full h-full bg-slate-900"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178590024222!2d55.27218777610665!3d25.197196977712165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6d4e85%3A0x88f9b7c129c50400!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(120%) opacity(80%)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full pointer-events-none"
        />
      </ScrollReveal>
      <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

      {/* Floating HQ Marker Pin */}
      <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer group">
        {/* Tooltip badge */}
        <div className="bg-slate-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-md shadow-lg leading-none whitespace-nowrap mb-2 relative group-hover:scale-105 transition-transform">
          The Best Star Property Management Dubai HQ
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
        <ScrollReveal
          animation="fade-right"
          delay={400}
          className="w-full max-w-sm"
        >
          <div className="bg-white border border-slate-100 rounded-xl shadow-2xl p-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">
              Visit Us
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Located on the high levels of Burj Khalifa, Downtown Dubai. Accessible via the main corporate and residential entrance. Valet parking available.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Burj+Khalifa+Dubai"
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
        </ScrollReveal>
      </div>

    </section>
  );
}
