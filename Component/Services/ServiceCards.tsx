import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function ServiceCards() {
  return (
    <section className="w-full bg-white pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Row 1: Residential Management & Commercial Leasing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Residential Management (Col span 8) */}
          <ScrollReveal
            animation="fade-left"
            className="md:col-span-8 bg-[#f8fafc] border border-slate-100 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm min-h-[420px]"
          >
            {/* Left side text */}
            <div className="p-8 sm:p-10 sm:col-span-7 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
                Residential Management
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                From luxury penthouses to sprawling estates, we provide white-glove residential care. Our approach combines rigorous tenant selection with preventative maintenance strategies to preserve long-term property integrity.
              </p>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d96126]" />
                  Bespoke Concierge Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d96126]" />
                  Preventative Maintenance Protocols
                </li>
              </ul>
            </div>
            
            {/* Right side image */}
            <div className="relative h-64 sm:h-auto sm:col-span-5 bg-slate-100">
              <Image
                src="/services-residential.png"
                alt="Residential Management"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Card 2: Commercial Leasing (Col span 4) */}
          <ScrollReveal
            animation="fade-right"
            className="md:col-span-4 bg-[#121826] text-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm min-h-[420px]"
          >
            {/* Text content */}
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-tight">
                Commercial Leasing
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Strategically positioning commercial assets to attract anchor tenants and optimize lease structures for sustained cash flow.
              </p>
              <Link
                href="#"
                className="inline-block text-white font-semibold text-sm border-b border-white hover:text-[#d96126] hover:border-[#d96126] pb-0.5 transition-colors"
              >
                Explore Portfolio
              </Link>
            </div>

            {/* Bottom image */}
            <div className="relative h-48 w-full bg-slate-900 border-t border-slate-800">
              <Image
                src="/services-commercial.png"
                alt="Commercial Leasing"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover opacity-80"
              />
            </div>
          </ScrollReveal>

        </div>

        {/* Row 2: Strategic Investment Consulting (Col span 12) */}
        <ScrollReveal
          animation="fade-up"
          className="bg-[#f8fafc] border border-slate-100 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm min-h-[320px]"
        >
          {/* Left side image */}
          <div className="relative h-64 md:h-auto md:col-span-5 bg-slate-100">
            <Image
              src="/services-tablet.png"
              alt="Strategic Investment Consulting"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right side text */}
          <div className="p-8 sm:p-10 md:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <span className="inline-block self-start bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 font-sans">
              Data-Driven Insights
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Strategic Investment Consulting
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              We go beyond management. Our consultants provide deep market analysis, risk assessment, and portfolio diversification strategies to ensure your real estate investments outperform the market. Whether you are acquiring your first property or scaling a global portfolio, we provide the clarity required for complex decisions.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
