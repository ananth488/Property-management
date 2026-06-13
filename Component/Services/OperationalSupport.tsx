import ScrollReveal from "../ScrollReveal";

export default function OperationalSupport() {
  const operations = [
    {
      title: "Financial Reporting",
      description:
        "Real-time access to detailed financial statements, expense tracking, and tax-ready annual reports through our secure owner portal.",
      // Custom SVG Calendar/Sheet icon
      icon: (
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Tenant Screening",
      description:
        "Our multi-stage vetting process includes global background checks, credit analysis, and comprehensive reference verification.",
      // Custom SVG User magnifying glass / check icon
      icon: (
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Lease Administration",
      description:
        "Professional lease drafting, renewal tracking, digital sign-offs, and compliance audits to safeguard landlord-tenant relations.",
      // Custom SVG Clipboard document icon
      icon: (
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Maintenance Coordination",
      description:
        "Around-the-clock repair request routing connecting pre-screened certified contractors to resolve property issues rapidly.",
      // Custom SVG Wrench/Cog icon
      icon: (
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Precision Operational Support
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Four operational services that ensure your properties run with absolute transparency and zero friction.
          </p>
        </ScrollReveal>

        {/* 2x2 Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((op, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 150}
              className="flex animate-reveal"
            >
              <div
                className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-5 w-full"
              >
                {/* Icon Holder */}
                <div className="flex-shrink-0 w-10 h-10 rounded bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {op.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {op.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                    {op.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
