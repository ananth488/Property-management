"use client";

import { useState } from "react";
import ActiveBlogShowcase from "./ActiveBlogShowcase";
import BlogSidebar from "./BlogSidebar";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/skyscraper.png",
      tag: "MANAGEMENT",
      title: "How Technology is Changing Property Management",
      date: "June 12, 2026",
      author: "Robert Vance",
      readTime: "5 min read",
      content: [
        "In the contemporary real estate landscape, technology has evolved from a convenience to a cornerstone of effective property management. Smart home integrations, cloud-based tenant portals, and automated maintenance workflows are redefining what it means to preserve and optimize luxury assets.",
        "For the modern owner, real-time data access offers unmatched transparency. Traditional monthly statements are being replaced by interactive dashboards that track expenses, rental yields, and occupancy rates. By implementing these digital frameworks, property managers can preemptively address vacancy risks and streamline cash flows.",
        "Tenants also expect seamless digital experiences. From contactless keyless entry to online lease signing and automated rent payments, technology minimizes operational friction. Ultimately, firms that leverage predictive analytics and artificial intelligence to schedule preventative maintenance will lead the high-end market by preserving property value before costly repairs arise."
      ]
    },
    {
      id: 2,
      image: "/ocean-terrace.png",
      tag: "MARKET TRENDS",
      title: "The Rise of Sustainable Luxury Properties",
      date: "May 28, 2026",
      author: "Clara Bennett",
      readTime: "6 min read",
      content: [
        "Eco-conscious living is no longer a niche preference; it is the new standard in the luxury real estate market. Discerning buyers and renters are seeking out homes that balance high-end design with minimal environmental impact.",
        "Sustainable properties utilize advanced green technologies such as solar roofs, geothermal HVAC systems, rainwater harvesting, and smart energy grids. These integrations not only lower utility overheads but also significantly elevate the long-term appraisal value of the estate. Incorporating natural, locally-sourced building materials adds a tactile, authentic dimension to modern architecture.",
        "As regulatory standards align with climate goals, properties built with green certifications (like LEED or WELL) enjoy high-profile demand and faster occupancy cycles. Investing in sustainability today ensures that luxury portfolios remain robust and legally compliant in the decades to come."
      ]
    },
    {
      id: 3,
      image: "/luxury-living.png",
      tag: "INVESTMENT",
      title: "Maximizing ROI on Luxury Rentals",
      date: "April 15, 2026",
      author: "Marcus Sterling",
      readTime: "7 min read",
      content: [
        "Sustaining high yields on high-end residential properties requires more than simply listing them on premium platforms. It demands strategic positioning, outstanding presentation, and specialized tenant relation models.",
        "First, aesthetics and interior finishes dictate rental premium capacity. Installing designer lighting, custom kitchens, and smart security systems immediately differentiates your listing. Second, marketing should emphasize lifestyle. Professional photography, virtual video tours, and selective private viewings help target corporate executives and high-net-worth clients.",
        "Lastly, landlord success relies heavily on retention. Offering white-glove concierge services, prompt maintenance execution, and flexible leasing terms encourages stable, long-term occupancies. Minimizing tenant turnover remains the most effective strategy for compounding rental profits."
      ]
    },
    {
      id: 4,
      image: "/properties-glass-pavilion.png",
      tag: "MANAGEMENT",
      title: "Premium Concierge Services for Modern Tenants",
      date: "March 10, 2026",
      author: "Samantha Cross",
      readTime: "4 min read",
      content: [
        "White-glove concierge services have become a major differentiator in attracting premium tenants. Today's renters are willing to pay a premium for convenience, security, and a lifestyle that mimics luxury hotels.",
        "Services such as private chefs, housekeepers, dog walking, and package handling are standard amenities in elite properties. Integrating a concierge app allows tenants to book services instantly, raising overall satisfaction and brand loyalty.",
        "For property managers, this service-oriented approach builds a stronger relationship with tenants. When tenants feel cared for, they are much more likely to treat the property with respect, resulting in lower maintenance costs and longer retention rates."
      ]
    },
    {
      id: 5,
      image: "/services-residential.png",
      tag: "MARKET INSIGHTS",
      title: "Beverly Hills Real Estate Market Analysis",
      date: "Feb 22, 2026",
      author: "David L. Vance",
      readTime: "8 min read",
      content: [
        "The Beverly Hills luxury real estate market remains one of the most resilient sectors globally. Despite fluctuating interest rates and macroeconomic shifts, demand for high-end residential estates has remained robust.",
        "Our latest analytics show a 4.2% year-over-year increase in median luxury home prices, driven by domestic wealth expansion and foreign investment. Inventory remains low, making off-market listings and private listings the primary avenue for successful acquisitions.",
        "Looking forward to the latter half of 2026, we predict a steady surge in transaction volume. Investors are advised to target premium residential lots that offer security, privacy, and proximity to cultural epicenters like Rodeo Drive."
      ]
    }
  ];

  const [activePostId, setActivePostId] = useState(1);

  const activePost = blogPosts.find((post) => post.id === activePostId) || blogPosts[0];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title Block */}
        <div>
          <span className="text-xs font-semibold text-[#d96126] uppercase tracking-widest block mb-2">
            Stay Informed
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Market Insights & Articles
          </h2>
        </div>

        {/* Two Column Layout (Active post on left, Sidebar list on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Active Blog Reader (Col span 8) */}
          <div className="lg:col-span-8">
            <ActiveBlogShowcase post={activePost} />
          </div>

          {/* Recent Articles list (Col span 4) */}
          <div className="lg:col-span-4">
            <BlogSidebar
              posts={blogPosts}
              activeId={activePostId}
              onSelect={(id) => {
                setActivePostId(id);
                // Scroll smoothly to top of section on click
                window.scrollTo({ top: 180, behavior: "smooth" });
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}