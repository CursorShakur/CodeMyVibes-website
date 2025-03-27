"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const FixedNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  // After mounting, we can safely show the UI that depends on client-side theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
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

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
            C
          </div>
          <span className="font-bold text-lg dark:text-white">CodeMyVibes</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${
                isActive("/projects") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              }`}
            >
              Home
            </Link>
          </nav>
          <button 
            className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5" />
              )
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
