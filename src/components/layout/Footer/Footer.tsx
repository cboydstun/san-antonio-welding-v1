"use client";

import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`section-dark py-16 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                <span className="text-3xl font-black uppercase tracking-tight">
                  SAN ANTONIO
                </span>
              </div>
              <div className="text-white font-black text-2xl uppercase tracking-wide -mt-1">
                WELDING PROS
              </div>
            </div>

            <p className="text-steel-light text-lg mb-6 leading-relaxed max-w-md">
              Professional mobile welding services and custom fabrication. We
              bring industrial-grade welding solutions directly to your
              location.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 bg-primary flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 4px) 0, 100% calc(100% - 4px), 4px 100%, 0 100%)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-safety font-bold uppercase tracking-wide text-sm">
                    24/7 Emergency
                  </div>
                  <a
                    href="tel:210-555-9353"
                    className="text-white font-black text-xl hover:text-primary transition-colors"
                  >
                    (210) 555-WELD
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 bg-primary flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 4px) 0, 100% calc(100% - 4px), 4px 100%, 0 100%)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-safety font-bold uppercase tracking-wide text-sm">
                    Service Area
                  </div>
                  <div className="text-white font-semibold">
                    San Antonio & Surrounding Areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-black text-white uppercase mb-6 border-b-2 border-primary pb-2">
              SERVICES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mobile-welding-services"
                  className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-primary mr-3 transform group-hover:scale-125 transition-transform"></div>
                  MOBILE WELDING
                </Link>
              </li>
              <li>
                <Link
                  href="/welding-services"
                  className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-primary mr-3 transform group-hover:scale-125 transition-transform"></div>
                  STRUCTURAL WELDING
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-fabrication"
                  className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-primary mr-3 transform group-hover:scale-125 transition-transform"></div>
                  CUSTOM FABRICATION
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-primary mr-3 transform group-hover:scale-125 transition-transform"></div>
                  EMERGENCY REPAIRS
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-2xl font-black text-white uppercase mb-6 border-b-2 border-primary pb-2">
              SERVICE AREAS
            </h3>
            <ul className="space-y-3">
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                San Antonio, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                New Braunfels, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                Cibolo, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                Seguin, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                Boerne, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>
                Helotes, TX
              </li>
              <li className="text-steel-light font-semibold flex items-center">
                <div className="w-2 h-2 bg-safety mr-3"></div>& Surrounding
                Areas
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency CTA Bar */}
        <div
          className="bg-primary/20 border border-primary/30 p-6 mb-12 backdrop-blur-sm"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 16px) 0, 100% calc(100% - 16px), 16px 100%, 0 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-2xl font-black text-white uppercase mb-2">
                NEED <span className="text-safety">EMERGENCY WELDING?</span>
              </h4>
              <p className="text-steel-light font-semibold uppercase tracking-wide">
                24/7 MOBILE WELDING SERVICES AVAILABLE
              </p>
            </div>
            <a
              href="tel:210-555-9353"
              className="btn-industrial animate-glow flex items-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              CALL NOW
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            className="bg-industrial/50 p-6 text-center border border-steel/30"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
            }}
          >
            <div
              className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center animate-spark"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="text-white font-black uppercase text-lg mb-2">
              CERTIFIED WELDERS
            </h4>
            <p className="text-steel-light font-semibold text-sm uppercase tracking-wide">
              Professional Expertise
            </p>
          </div>

          <div
            className="bg-industrial/50 p-6 text-center border border-steel/30"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
            }}
          >
            <div
              className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center animate-spark"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11.207 8.5a1 1 0 00-1.414-1.414L6.586 10.293a.5.5 0 00-.146.353V13a1 1 0 001 1h2.354a.5.5 0 00.353-.146l3.207-3.207z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="text-white font-black uppercase text-lg mb-2">
              FULLY INSURED
            </h4>
            <p className="text-steel-light font-semibold text-sm uppercase tracking-wide">
              Complete Protection
            </p>
          </div>

          <div
            className="bg-industrial/50 p-6 text-center border border-steel/30"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
            }}
          >
            <div
              className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center animate-spark"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="text-white font-black uppercase text-lg mb-2">
              24/7 AVAILABLE
            </h4>
            <p className="text-steel-light font-semibold text-sm uppercase tracking-wide">
              Emergency Response
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-steel-light font-semibold">
                &copy; {currentYear}{" "}
                <span className="text-white font-bold">
                  San Antonio Welding Pros
                </span>
                . All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/faq"
                className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-steel-light hover:text-safety font-semibold uppercase tracking-wide transition-colors"
              >
                CONTACT
              </Link>
              <div className="text-safety font-bold uppercase tracking-wide text-sm">
                LICENSED & BONDED
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
