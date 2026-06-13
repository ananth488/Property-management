import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function Expertise() {
  const expertises = [
    {
      title: "Residential Management",
      description:
        "Comprehensive care for luxury homes and multi-family complexes, ensuring tenant satisfaction and asset preservation.",
      link: "Learn More",
      // Inline House SVG
      icon: (
        <svg
          className="w-6 h-6 text-[#4a72d4]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Commercial Leasing",
      description:
        "Strategic positioning and management of commercial spaces to attract high-value tenants and long-term stability.",
      link: "Learn More",
      // Inline Building/Office SVG
      icon: (
        <svg
          className="w-6 h-6 text-[#4a72d4]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Investment Consulting",
      description:
        "Data-driven insights and market analysis to help you expand and optimize your property portfolio globally.",
      link: "Learn More",
      // Inline Line Chart SVG
      icon: (
        <svg
          className="w-6 h-6 text-[#4a72d4]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21h12a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Our Core Expertise
          </h2>
          <div className="w-16 h-[3px] bg-[#d96126] mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((item, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 150}
              className="flex"
            >
              <div
                className="bg-white border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-100">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6 flex-grow font-normal">
                  {item.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="#"
                  className="inline-flex items-center text-[#d96126] font-semibold text-sm group-hover:text-[#c2501c] transition-colors"
                >
                  {item.link}
                  <svg
                    className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
