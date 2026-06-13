import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function GoldStandard() {
  const standards = [
    {
      title: "Proactive Maintenance",
      description:
        "We don't wait for things to break. Our team conducts quarterly inspections and preventative audits to protect your asset's structural health.",
    },
    {
      title: "24/7 Concierge Support",
      description:
        "A dedicated support line for both owners and tenants, ensuring emergencies are handled instantly by qualified professionals.",
    },
    {
      title: "Expert Legal Compliance",
      description:
        "Our legal experts ensure all contracts and procedures strictly adhere to evolving local and international housing laws.",
    },
  ];

  return (
    <section className="w-full bg-[#121826] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Content */}
        <ScrollReveal
          animation="fade-left"
          className="lg:col-span-6 space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white leading-tight">
            Setting the Gold Standard in Property Care
          </h2>

          <div className="space-y-8">
            {standards.map((standard, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {standard.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal opacity-90">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: Mockup/Image */}
        <ScrollReveal
          animation="fade-right"
          className="lg:col-span-6 flex justify-center w-full"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
            <Image
              src="/services-gold-standard.png"
              alt="Elite Estate Property"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
