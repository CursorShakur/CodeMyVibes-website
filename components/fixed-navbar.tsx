"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const FixedNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  
  // Check if current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle theme (placeholder for now)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
            C
          </div>
          <span className="font-bold text-lg">CodeMyVibes</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${
                isActive("/projects") 
                  ? "text-purple-600" 
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") 
                  ? "text-purple-600" 
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") 
                  ? "text-purple-600" 
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Contact
            </Link>
          </nav>
          <button 
            className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  );
};
