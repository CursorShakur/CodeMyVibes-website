"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const FixedNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Check if current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Handle scroll effect, client-side mounting, and initialize theme
  useEffect(() => {
    setMounted(true);
    
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
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
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Update HTML class
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Prevent hydration errors by ensuring the same render on server and client
  const themeIcon = mounted ? (
    isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
  ) : null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3 dark:bg-background/90" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
            C
          </div>
          <span className="font-bold text-lg text-foreground">CodeMyVibes</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${
                isActive("/projects") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-foreground hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-foreground hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-foreground hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-foreground hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              Home
            </Link>
          </nav>
          <button 
            className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {themeIcon}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  );
};
