"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className={`nav-industrial fixed w-full top-0 z-50 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                <span className="text-2xl font-black uppercase tracking-tight">
                  SAN ANTONIO
                </span>
              </div>
              <div className="text-white font-black text-xl uppercase tracking-wide -mt-1">
                WELDING PROS
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-safety transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/mobile-welding-services"
              className="nav-link group relative"
            >
              <span className="text-white font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300">
                MOBILE WELDING
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
            <Link href="/welding-services" className="nav-link group relative">
              <span className="text-white font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300">
                WELDING SERVICES
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/custom-fabrication"
              className="nav-link group relative"
            >
              <span className="text-white font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300">
                CUSTOM FABRICATION
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
            <Link href="/faq" className="nav-link group relative">
              <span className="text-white font-bold uppercase tracking-wide hover:text-primary transition-colors duration-300">
                FAQ
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Emergency Call Button */}
            <a
              href="tel:210-555-9353"
              className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary-light text-white px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-glow"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>EMERGENCY</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-12 h-12 bg-industrial hover:bg-primary text-white transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 6px) 0, 100% calc(100% - 6px), 6px 100%, 0 100%)",
              }}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="hidden md:flex items-center justify-center py-3 border-t border-primary/20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-steel">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-semibold uppercase tracking-wide">
                24/7 Emergency:
              </span>
              <a
                href="tel:210-555-9353"
                className="text-safety font-bold hover:text-safety-light transition-colors"
              >
                (210) 555-WELD
              </a>
            </div>
            <div className="w-px h-4 bg-steel"></div>
            <div className="text-steel font-semibold uppercase tracking-wide text-sm">
              SERVING SAN ANTONIO & SURROUNDING AREAS
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-deep/98 backdrop-blur-md border-t border-primary/20 transform transition-all duration-300 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/mobile-welding-services"
              className="block py-3 px-4 bg-industrial hover:bg-primary text-white font-bold uppercase tracking-wide transition-all duration-300 transform hover:translate-x-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MOBILE WELDING
            </Link>
            <Link
              href="/welding-services"
              className="block py-3 px-4 bg-industrial hover:bg-primary text-white font-bold uppercase tracking-wide transition-all duration-300 transform hover:translate-x-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WELDING SERVICES
            </Link>
            <Link
              href="/custom-fabrication"
              className="block py-3 px-4 bg-industrial hover:bg-primary text-white font-bold uppercase tracking-wide transition-all duration-300 transform hover:translate-x-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CUSTOM FABRICATION
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-4 bg-industrial hover:bg-primary text-white font-bold uppercase tracking-wide transition-all duration-300 transform hover:translate-x-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            {/* Mobile Contact */}
            <div className="pt-4 border-t border-primary/20">
              <a
                href="tel:210-555-9353"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white py-4 px-6 font-bold uppercase tracking-wide transition-all duration-300 animate-glow"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>CALL NOW: (210) 555-WELD</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
