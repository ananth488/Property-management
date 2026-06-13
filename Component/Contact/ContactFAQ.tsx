import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function ContactFAQ() {
  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6 text-center border-t border-slate-100">
      <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
          Have Quick Questions?
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
          Browse our comprehensive list of frequently asked questions for immediate answers.
        </p>
        <div className="pt-2">
          <Link
            href="#"
            className="inline-block bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold text-sm py-3 px-8 rounded-lg transition-colors cursor-pointer"
          >
            View FAQ
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
