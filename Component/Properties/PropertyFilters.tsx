"use client";

import { useState, useEffect } from "react";
import CustomSelect from "../CustomSelect";

export default function PropertyFilters() {
  const [status, setStatus] = useState("Any Status");
  const [propertyType, setPropertyType] = useState("Residential");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("No Limit");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Applying Filters:\nStatus: ${status}\nType: ${propertyType}\nLocation: ${location}\nPrice: ${priceRange}`);
  };

  return (
    <section className="relative w-full bg-white pt-16 pb-10 px-6 z-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <h1
          className={`text-4xl font-serif font-bold text-slate-900 leading-tight transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Exclusive Listings
        </h1>

        {/* Filters Widget Panel */}
        <form
          onSubmit={handleApply}
          className={`relative z-30 bg-white border border-slate-100 rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end transition-all duration-1000 delay-200 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Status Dropdown */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Status
            </label>
            <CustomSelect
              options={["Any Status", "For Rent", "For Sale"]}
              value={status}
              onChange={setStatus}
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="lg:col-span-3 flex flex-col">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Property Type
            </label>
            <CustomSelect
              options={["Residential", "Commercial", "Investment"]}
              value={propertyType}
              onChange={setPropertyType}
            />
          </div>

          {/* Location Input */}
          <div className="lg:col-span-3 flex flex-col">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="City or Neighborhood"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96126]/20 focus:border-[#d96126] transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Price Range Dropdown */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Price Range
            </label>
            <CustomSelect
              options={["No Limit", "Under $1M", "$1M - $5M", "$5M+"]}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#121826] text-white hover:bg-slate-800 p-3 rounded-lg text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
