import ScrollReveal from "../ScrollReveal";

export default function ServiceCTA() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 px-6 text-center">
      <ScrollReveal animation="fade-up" className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
          Experience the Difference of <br className="hidden sm:inline" />
          Elite Management
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal">
          Schedule a private consultation with one of our property specialists to discuss your portfolio's needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#121826] text-white hover:bg-slate-800 px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 shadow-md">
            Book a Consultation
          </button>
          <button className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-400 text-slate-950 px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-300">
            View Service Guide
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
