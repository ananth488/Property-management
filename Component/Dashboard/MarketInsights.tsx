import Image from "next/image";
import Link from "next/link";

export default function MarketInsights() {
  const posts = [
    {
      image: "/skyscraper.png",
      tag: "MANAGEMENT",
      title: "How Technology is Changing Property Management",
      description:
        "Discover the latest digital tools that are helping owners maximize efficiency and tenant satisfaction.",
      linkText: "Read More",
    },
    {
      image: "/ocean-terrace.png",
      tag: "MARKET TRENDS",
      title: "The Rise of Sustainable Luxury Properties",
      description:
        "Eco-conscious living is the new standard in the high-end market. Here's what investors need to know.",
      linkText: "Read More",
    },
    {
      image: "/luxury-living.png",
      tag: "INVESTMENT",
      title: "Maximizing ROI on Luxury Rentals",
      description:
        "Strategies to enhance your rental yields through premium amenities and superior tenant services.",
      linkText: "Read More",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
              Market Insights
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-normal">
              Latest news from the world of luxury real estate
            </p>
          </div>
          <div>
            <Link
              href="#"
              className="inline-block text-slate-900 font-semibold text-sm border-b-2 border-slate-900 pb-0.5 hover:text-[#d96126] hover:border-[#d96126] transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container with hover zoom */}
              <div className="relative w-full h-[240px] rounded-lg overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Category Tag */}
              <span className="text-xs font-semibold text-[#d96126] tracking-wider uppercase mb-2">
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#d96126] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-2 font-normal">
                {post.description}
              </p>

              {/* Read More Link */}
              <div>
                <span className="inline-block text-slate-900 font-semibold text-sm border-b border-transparent hover:border-slate-900 pb-0.5 transition-colors">
                  {post.linkText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
