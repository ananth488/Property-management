"use client";

import { useState, useEffect, useRef } from "react";

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select Option",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white dark:bg-[#121826] border text-slate-800 dark:text-slate-200 rounded-xl p-3 pr-10 text-left text-sm font-medium focus:outline-none transition-all duration-200 flex items-center justify-between cursor-pointer hover:shadow-sm ${
          isOpen
            ? "border-[#d96126] ring-4 ring-[#d96126]/15 shadow-sm"
            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`w-4.5 h-4.5 text-slate-400 dark:text-slate-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180 text-[#d96126] dark:text-[#d96126]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 bg-white/95 dark:bg-[#121826]/95 backdrop-blur-md border border-slate-100 dark:border-slate-800/80 rounded-xl shadow-2xl z-50 p-1.5 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 ease-out">
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 text-sm transition-all duration-150 flex items-center justify-between cursor-pointer rounded-lg mb-0.5 last:mb-0 active:scale-[0.99] ${
                  isSelected
                    ? "bg-[#d96126]/10 dark:bg-[#d96126]/20 text-[#d96126] font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="truncate">{option}</span>
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-[#d96126]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

