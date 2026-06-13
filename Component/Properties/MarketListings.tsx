"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomSelect from "../CustomSelect";

export default function MarketListings() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Newest First");

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const listings = [
    {
      id: 1,
      image: "/properties-skyview.png",
      tag: "RESIDENTIAL",
      title: "Skyview Apartment",
      price: "$1.2M",
      location: "Downtown Financial District",
      stats: [
        { label: "BEDS", value: "2" },
        { label: "BATHS", value: "2.5" },
        { label: "AREA", value: "1,850 sqft" },
      ],
    },
    {
      id: 2,
      image: "/properties-avenue.png",
      tag: "COMMERCIAL",
      title: "Avenue Corporate HQ",
      price: "$4.8M",
      location: "Midtown Plaza, Suite 400",
      stats: [
        { label: "CAPACITY", value: "120 Staff" },
        { label: "TOTAL SPACE", value: "8,200 sqft" },
      ],
    },
    {
      id: 3,
      image: "/properties-cedar.png",
      tag: "RESIDENTIAL",
      title: "The Cedar Residence",
      price: "$3.1M",
      location: "Oakwood Estates",
      stats: [
        { label: "BEDS", value: "4" },
        { label: "BATHS", value: "3.5" },
        { label: "AREA", value: "4,200 sqft" },
      ],
    },
    {
      id: 4,
      image: "/properties-retail.png",
      tag: "COMMERCIAL",
      title: "Gallery Retail Space",
      price: "$18k/mo",
      location: "Fashion Avenue, Shop 12",
      stats: [
        { label: "FLOOR", value: "Main Level" },
        { label: "AREA", value: "2,400 sqft" },
      ],
    },
    {
      id: 5,
      image: "/properties-azure.png",
      tag: "RESIDENTIAL",
      title: "Azure Bay Villa",
      price: "$8.9M",
      location: "Coral Reef Point",
      stats: [
        { label: "BEDS", value: "5" },
        { label: "BATHS", value: "6" },
        { label: "AREA", value: "6,800 sqft" },
      ],
    },
    {
      id: 6,
      image: "/properties-townhome.png",
      tag: "RESIDENTIAL",
      title: "Terrace Townhome",
      price: "$1.9M",
      location: "Lincoln Park West",
      stats: [
        { label: "BEDS", value: "3" },
        { label: "BATHS", value: "3" },
        { label: "AREA", value: "3,100 sqft" },
      ],
    },
  ];

  return (
    <section className="w-full bg-white pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Block: Title & Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
            Market Listings
          </h2>
          {/* Sort selection */}
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Sort by:</span>
            <CustomSelect
              options={["Newest First", "Price: Low to High", "Price: High to Low"]}
              value={sortBy}
              onChange={setSortBy}
              className="w-48"
            />
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image panel */}
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 bg-[#121826]/75 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                  
                  {/* Heart wishlist overlay */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm text-slate-600 transition-colors focus:outline-none"
                    aria-label="Add to Wishlist"
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        isFav ? "fill-red-500 stroke-red-500" : "stroke-current"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Card details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  {/* Title & Price */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#d96126] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-lg font-serif font-bold text-slate-900 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-normal">
                      <svg className="w-3.5 h-3.5 text-[#d96126] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </div>
                  </div>

                  {/* Stats list with thin borders */}
                  <div className={`grid ${item.stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 border-t border-b border-slate-100/60 py-3 text-center`}>
                    {item.stats.map((stat, sIndex) => (
                      <div key={sIndex} className={sIndex > 0 ? "border-l border-slate-100" : ""}>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                          {stat.label}
                        </div>
                        <div className="text-sm font-bold text-slate-800 mt-0.5">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action link */}
                  <div>
                    <Link
                      href="#"
                      className="w-full border border-slate-200 hover:border-slate-800 hover:bg-slate-800 hover:text-white text-slate-800 font-semibold text-center text-sm py-2.5 rounded-lg block transition-all cursor-pointer"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {/* Prev button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-md border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-600 transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page blocks */}
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-9 h-9 rounded-md flex items-center justify-center font-semibold text-sm transition-colors cursor-pointer ${
              currentPage === 1
                ? "bg-[#121826] text-white"
                : "border border-slate-200 hover:border-slate-400 text-slate-700"
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`w-9 h-9 rounded-md flex items-center justify-center font-semibold text-sm transition-colors cursor-pointer ${
              currentPage === 2
                ? "bg-[#121826] text-white"
                : "border border-slate-200 hover:border-slate-400 text-slate-700"
            }`}
          >
            2
          </button>
          <button
            onClick={() => setCurrentPage(3)}
            className={`w-9 h-9 rounded-md flex items-center justify-center font-semibold text-sm transition-colors cursor-pointer ${
              currentPage === 3
                ? "bg-[#121826] text-white"
                : "border border-slate-200 hover:border-slate-400 text-slate-700"
            }`}
          >
            3
          </button>
          
          <span className="text-slate-400 px-1 font-semibold">...</span>
          
          <button
            onClick={() => setCurrentPage(12)}
            className={`w-9 h-9 rounded-md flex items-center justify-center font-semibold text-sm transition-colors cursor-pointer ${
              currentPage === 12
                ? "bg-[#121826] text-white"
                : "border border-slate-200 hover:border-slate-400 text-slate-700"
            }`}
          >
            12
          </button>

          {/* Next button */}
          <button
            onClick={() => setCurrentPage(Math.min(12, currentPage + 1))}
            disabled={currentPage === 12}
            className="w-9 h-9 rounded-md border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-600 transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
