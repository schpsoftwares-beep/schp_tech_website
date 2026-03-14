import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-black/20" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/schp-logo.png"
            alt="SCHP Technologies"
            className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(139,92,246,0.8))" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                location === link.path
                  ? "bg-white/10 text-white"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <Link href="/book">
              <Button variant="gradient" size="sm">Book Project</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                location === link.path
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" onClick={() => setMobileOpen(false)} className="mt-4">
            <Button variant="gradient" className="w-full">Book Project Now</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
