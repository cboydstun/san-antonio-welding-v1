import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Welding Services San Antonio | San Antonio Welding Pros",
  description:
    "Expert welding services in San Antonio, TX. Structural welding, pipe welding, aluminum & steel welding, industrial welding, and certified welding processes.",

  keywords:
    "welding services, structural welding, pipe welding, aluminum welding, steel welding, industrial welding, certified welding, San Antonio welding, professional welders, San Antonio, New Braunfels, Cibolo, Seguin, Texas",
  openGraph: {
    title:
      "Professional Welding Services San Antonio | San Antonio Welding Pros",
    description:
      "Expert welding services in San Antonio, TX. Structural welding, pipe welding, aluminum & steel welding, and industrial welding processes.",
    url: "https://sanantonioweldingpros.com/welding-services",
    siteName: "San Antonio Welding Pros",
    images: [
      {
        url: "/hero-welding-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Welding Services San Antonio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WeldingServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-welding-image.jpg"
            alt="Professional Welding Services"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-hero font-black text-white mb-8 leading-none">
              <span className="block text-glow">PROFESSIONAL</span>
              <span className="block text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                WELDING
              </span>
              <span className="block text-white">SERVICES</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-bold text-steel-light mb-12 uppercase tracking-wide">
              STRUCTURAL • INDUSTRIAL • CERTIFIED WELDING
            </p>

            {/* Location Badge */}
            <div
              className="inline-flex items-center bg-industrial/80 backdrop-blur-sm px-6 py-3 mb-12 border border-primary/30"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <svg
                className="w-5 h-5 text-safety mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-bold uppercase tracking-wider">
                CERTIFIED PROFESSIONAL WELDERS
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:210-555-9353"
                className="btn-industrial animate-glow group"
              >
                <svg
                  className="w-6 h-6 mr-3 group-hover:animate-spark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                GET WELDING QUOTE
              </a>
              <Link href="/mobile-welding-services" className="btn-secondary">
                MOBILE SERVICES
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-steel">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  STRUCTURAL WELDING
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  PIPE WELDING
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  INDUSTRIAL GRADE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Welding Processes Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-white mb-6">
              WELDING <span className="text-industrial">PROCESSES</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
            <p className="text-xl text-steel-light max-w-3xl mx-auto font-semibold uppercase tracking-wide">
              EXPERT WELDING TECHNIQUES FOR EVERY APPLICATION
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* MIG Welding */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div
                className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto group-hover:animate-spark"
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
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase text-center mb-4">
                MIG WELDING
              </h3>
              <p className="text-steel-light text-center leading-relaxed">
                Metal Inert Gas welding for steel, aluminum, and stainless steel
                applications.
              </p>
            </div>

            {/* TIG Welding */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div
                className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto group-hover:animate-spark"
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
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase text-center mb-4">
                TIG WELDING
              </h3>
              <p className="text-steel-light text-center leading-relaxed">
                Tungsten Inert Gas welding for precision work and exotic metals.
              </p>
            </div>

            {/* Stick Welding */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div
                className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto group-hover:animate-spark"
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
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase text-center mb-4">
                STICK WELDING
              </h3>
              <p className="text-steel-light text-center leading-relaxed">
                Shielded Metal Arc welding for heavy-duty structural
                applications.
              </p>
            </div>

            {/* Flux Core */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div
                className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto group-hover:animate-spark"
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
              <h3 className="text-xl font-black uppercase text-center mb-4">
                FLUX CORE
              </h3>
              <p className="text-steel-light text-center leading-relaxed">
                Flux-cored arc welding for outdoor and windy conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-industrial py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-mega font-black text-white mb-8">
            NEED <span className="text-safety">PROFESSIONAL WELDING?</span>
          </h2>
          <p className="text-2xl text-steel-light mb-12 max-w-3xl mx-auto font-semibold uppercase tracking-wide">
            GET EXPERT WELDING SERVICES FOR YOUR PROJECT
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <a
              href="tel:210-555-9353"
              className="btn-industrial animate-glow text-2xl px-12 py-6"
            >
              <svg
                className="w-8 h-8 mr-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              CALL NOW: (210) 555-WELD
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className="bg-deep/50 p-6 backdrop-blur-sm border border-primary/20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div className="text-4xl font-black text-safety mb-2">AWS</div>
              <div className="text-white font-bold uppercase tracking-wide">
                CERTIFIED WELDERS
              </div>
            </div>
            <div
              className="bg-deep/50 p-6 backdrop-blur-sm border border-primary/20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div className="text-4xl font-black text-safety mb-2">FREE</div>
              <div className="text-white font-bold uppercase tracking-wide">
                PROJECT ESTIMATES
              </div>
            </div>
            <div
              className="bg-deep/50 p-6 backdrop-blur-sm border border-primary/20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div className="text-4xl font-black text-safety mb-2">100%</div>
              <div className="text-white font-bold uppercase tracking-wide">
                QUALITY GUARANTEED
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
