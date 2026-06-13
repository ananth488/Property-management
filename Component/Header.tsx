"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const activeTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  // Helper function to check if active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
            <Image src="/logo.png" alt="logo" width={100} height={100} className="dark:invert transition-all duration-200" />
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

        {/* Theme Toggle & Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-400 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button className={`${theme === "dark" ? "bg-[#ffffff] text-[#0f172a] hover:bg-slate-100" : "bg-black text-white hover:bg-slate-800"} px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer`}>
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
            <div className="flex items-center justify-between py-2 border-t border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-600">Theme</span>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className={`w-full py-3 rounded text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${theme === "dark"
                  ? "bg-[#ffffff] text-[#0f172a] hover:bg-slate-100"
                  : "bg-[#121826] text-white hover:bg-slate-800"
                  }`}
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

