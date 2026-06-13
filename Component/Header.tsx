"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
            The Best Star
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={
              isActive("/")
                ? "text-slate-900 font-semibold border-b-2 border-orange-500 pb-1 px-1 transition-colors"
                : "text-slate-600 hover:text-slate-900 font-medium pb-1 px-1 transition-colors"
            }
          >
            Home
          </Link>
          <Link
            href="/service"
            className={
              isActive("/service")
                ? "text-slate-900 font-semibold border-b-2 border-orange-500 pb-1 px-1 transition-colors"
                : "text-slate-600 hover:text-slate-900 font-medium pb-1 px-1 transition-colors"
            }
          >
            Services
          </Link>
          <Link
            href="/properties"
            className={
              isActive("/properties")
                ? "text-slate-900 font-semibold border-b-2 border-orange-500 pb-1 px-1 transition-colors"
                : "text-slate-600 hover:text-slate-900 font-medium pb-1 px-1 transition-colors"
            }
          >
            Properties
          </Link>
          <Link
            href="/blog"
            className={
              isActive("/blog")
                ? "text-slate-900 font-semibold border-b-2 border-orange-500 pb-1 px-1 transition-colors"
                : "text-slate-600 hover:text-slate-900 font-medium pb-1 px-1 transition-colors"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              isActive("/contact")
                ? "text-slate-900 font-semibold border-b-2 border-orange-500 pb-1 px-1 transition-colors"
                : "text-slate-600 hover:text-slate-900 font-medium pb-1 px-1 transition-colors"
            }
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="bg-[#121826] text-white hover:bg-slate-800 px-6 py-2.5 rounded text-sm font-medium tracking-wide transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute top-20 left-0 w-full shadow-lg z-50">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/")
                  ? "text-slate-900 font-semibold border-l-4 border-orange-500 pl-3 py-1 transition-colors"
                  : "text-slate-600 hover:text-slate-900 font-medium pl-3 py-1 transition-colors"
              }
            >
              Home
            </Link>
            <Link
              href="/service"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/service")
                  ? "text-slate-900 font-semibold border-l-4 border-orange-500 pl-3 py-1 transition-colors"
                  : "text-slate-600 hover:text-slate-900 font-medium pl-3 py-1 transition-colors"
              }
            >
              Services
            </Link>
            <Link
              href="/properties"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/properties")
                  ? "text-slate-900 font-semibold border-l-4 border-orange-500 pl-3 py-1 transition-colors"
                  : "text-slate-600 hover:text-slate-900 font-medium pl-3 py-1 transition-colors"
              }
            >
              Properties
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/blog")
                  ? "text-slate-900 font-semibold border-l-4 border-orange-500 pl-3 py-1 transition-colors"
                  : "text-slate-600 hover:text-slate-900 font-medium pl-3 py-1 transition-colors"
              }
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/contact")
                  ? "text-slate-900 font-semibold border-l-4 border-orange-500 pl-3 py-1 transition-colors"
                  : "text-slate-600 hover:text-slate-900 font-medium pl-3 py-1 transition-colors"
              }
            >
              Contact
            </Link>
            <div className="pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#121826] text-white hover:bg-slate-800 py-3 rounded text-sm font-medium tracking-wide transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

