import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Fabrication Services San Antonio | San Antonio Welding Pros",
  description:
    "Custom metal fabrication in San Antonio, TX. Gates, railings, brackets, architectural metalwork, and specialized components. From design to installation.",

  keywords:
    "custom fabrication, metal fabrication, custom metalwork, gates, railings, brackets, architectural metalwork, custom welding, San Antonio fabrication, custom steel work, San Antonio, New Braunfels, Cibolo, Seguin, Texas",
  openGraph: {
    title: "Custom Fabrication Services San Antonio | San Antonio Welding Pros",
    description:
      "Custom metal fabrication in San Antonio, TX. Gates, railings, brackets, architectural metalwork, and specialized components.",
    url: "https://sanantonioweldingpros.com/custom-fabrication",
    siteName: "San Antonio Welding Pros",
    images: [
      {
        url: "/hero-welding-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Fabrication Services San Antonio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CustomFabrication() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-welding-image.jpg"
            alt="Custom Fabrication Services"
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
              <span className="block text-glow">CUSTOM</span>
              <span className="block text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                FABRICATION
              </span>
              <span className="block text-white">SERVICES</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-bold text-steel-light mb-12 uppercase tracking-wide">
              FROM CONCEPT TO COMPLETION
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
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-bold uppercase tracking-wider">
                CUSTOM METALWORK SPECIALISTS
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
                GET CUSTOM QUOTE
              </a>
              <Link href="/welding-services" className="btn-secondary">
                WELDING SERVICES
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-steel">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  CUSTOM DESIGN
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  PRECISION FABRICATION
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  PROFESSIONAL INSTALLATION
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

      {/* What We Fabricate Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-white mb-6">
              WHAT WE <span className="text-industrial">FABRICATE</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
            <p className="text-xl text-steel-light max-w-3xl mx-auto font-semibold uppercase tracking-wide">
              CUSTOM METALWORK FOR EVERY APPLICATION
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gates & Railings */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 bg-primary flex items-center justify-center mr-4 group-hover:animate-spark"
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
                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  GATES & RAILINGS
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                Custom security gates, decorative railings, stair railings, and
                perimeter fencing designed to your specifications.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Security Gates
                <br />
                • Decorative Railings
                <br />
                • Stair Railings
                <br />• Perimeter Fencing
              </div>
            </div>

            {/* Brackets & Supports */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 bg-primary flex items-center justify-center mr-4 group-hover:animate-spark"
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
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  BRACKETS & SUPPORTS
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                Heavy-duty brackets, structural supports, mounting hardware, and
                specialized components for industrial applications.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Heavy-Duty Brackets
                <br />
                • Structural Supports
                <br />
                • Mounting Hardware
                <br />• Load-Bearing Components
              </div>
            </div>

            {/* Architectural Elements */}
            <div className="card-industrial p-8 text-white group hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 bg-primary flex items-center justify-center mr-4 group-hover:animate-spark"
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
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  ARCHITECTURAL ELEMENTS
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                Decorative metalwork, artistic features, building accents, and
                custom architectural components.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Decorative Metalwork
                <br />
                • Building Accents
                <br />
                • Artistic Features
                <br />• Custom Signage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-deep mb-6">
              OUR <span className="text-industrial">FABRICATION PROCESS</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
            <p className="text-xl text-steel max-w-3xl mx-auto font-semibold uppercase tracking-wide">
              FROM INITIAL CONCEPT TO FINAL INSTALLATION
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Step 1: Design */}
            <div className="text-center">
              <div
                className="w-24 h-24 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
                }}
              >
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-black text-deep uppercase mb-4">
                DESIGN
              </h3>
              <p className="text-steel text-lg leading-relaxed">
                Consultation, measurements, and custom design creation based on
                your specifications and requirements.
              </p>
            </div>

            {/* Step 2: Engineering */}
            <div className="text-center">
              <div
                className="w-24 h-24 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
                }}
              >
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-black text-deep uppercase mb-4">
                ENGINEERING
              </h3>
              <p className="text-steel text-lg leading-relaxed">
                Structural analysis, material selection, and detailed
                fabrication drawings for precision manufacturing.
              </p>
            </div>

            {/* Step 3: Fabrication */}
            <div className="text-center">
              <div
                className="w-24 h-24 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
                }}
              >
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-black text-deep uppercase mb-4">
                FABRICATION
              </h3>
              <p className="text-steel text-lg leading-relaxed">
                Precision cutting, welding, and assembly using
                professional-grade equipment and certified techniques.
              </p>
            </div>

            {/* Step 4: Installation */}
            <div className="text-center">
              <div
                className="w-24 h-24 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
                }}
              >
                <span className="text-3xl font-black text-white">4</span>
              </div>
              <h3 className="text-2xl font-black text-deep uppercase mb-4">
                INSTALLATION
              </h3>
              <p className="text-steel text-lg leading-relaxed">
                Professional installation, finishing, and quality inspection to
                ensure perfect fit and function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Capabilities */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-mega font-black text-white mb-8">
                MATERIALS &{" "}
                <span className="text-industrial">CAPABILITIES</span>
              </h2>
              <div className="divider-industrial w-32 mb-8"></div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 animate-spark"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% calc(100% - 6px), 6px 100%, 0 100%)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase mb-2">
                      STEEL & STAINLESS STEEL
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Carbon steel, stainless steel, and specialty alloys for
                      durability and corrosion resistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 animate-spark"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% calc(100% - 6px), 6px 100%, 0 100%)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase mb-2">
                      ALUMINUM & EXOTIC METALS
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Lightweight aluminum and specialized metals for unique
                      applications and environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 animate-spark"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% calc(100% - 6px), 6px 100%, 0 100%)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase mb-2">
                      FINISHING OPTIONS
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Powder coating, galvanizing, painting, and specialty
                      finishes for protection and aesthetics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-industrial-gradient p-8 text-white"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% calc(100% - 20px), 20px 100%, 0 100%)",
                }}
              >
                <h3 className="text-2xl font-black uppercase mb-6 text-safety">
                  CUSTOM PROJECT QUOTE
                </h3>
                <p className="text-steel-light mb-6 text-lg">
                  Every custom fabrication project is unique. Tell us about your
                  vision and we'll provide a detailed quote.
                </p>
                <div className="space-y-4">
                  <div className="form-industrial">
                    <input
                      type="text"
                      placeholder="PROJECT TYPE"
                      className="w-full"
                    />
                  </div>
                  <div className="form-industrial">
                    <input
                      type="text"
                      placeholder="MATERIALS PREFERRED"
                      className="w-full"
                    />
                  </div>
                  <div className="form-industrial">
                    <textarea
                      placeholder="PROJECT DESCRIPTION"
                      rows={4}
                      className="w-full resize-none"
                    ></textarea>
                  </div>
                  <button className="btn-industrial w-full">
                    GET CUSTOM QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-industrial py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-mega font-black text-white mb-8">
            READY FOR <span className="text-safety">CUSTOM FABRICATION?</span>
          </h2>
          <p className="text-2xl text-steel-light mb-12 max-w-3xl mx-auto font-semibold uppercase tracking-wide">
            BRING YOUR METALWORK VISION TO LIFE
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
              <div className="text-4xl font-black text-safety mb-2">CUSTOM</div>
              <div className="text-white font-bold uppercase tracking-wide">
                DESIGN & ENGINEERING
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
                PROJECT CONSULTATION
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
                SATISFACTION GUARANTEED
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
