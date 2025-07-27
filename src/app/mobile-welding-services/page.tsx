import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Welding Services San Antonio | San Antonio Welding Pros",
  description:
    "Professional mobile welding services in San Antonio, TX. On-site welding, emergency repairs, structural welding, and equipment welding. We come to you with fully equipped mobile units.",

  keywords:
    "mobile welding services, san antonio mobile welding, on-site welding, emergency welding, mobile welder san antonio, structural welding, equipment welding, San Antonio, New Braunfels, Cibolo, Seguin, Texas",
  openGraph: {
    title: "Mobile Welding Services San Antonio | San Antonio Welding Pros",
    description:
      "Professional mobile welding services in San Antonio, TX. On-site welding, emergency repairs, structural welding, and equipment welding.",
    url: "https://sanantonioweldingpros.com/mobile-welding-services",
    siteName: "San Antonio Welding Pros",
    images: [
      {
        url: "/hero-welding-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Welding Services San Antonio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MobileWeldingServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-welding-image.jpg"
            alt="Mobile Welding Services"
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
              <span className="block text-glow">MOBILE</span>
              <span className="block text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                WELDING
              </span>
              <span className="block text-white">SERVICES</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-bold text-steel-light mb-12 uppercase tracking-wide">
              PROFESSIONAL ON-SITE WELDING SOLUTIONS
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
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-bold uppercase tracking-wider">
                WE COME TO YOUR LOCATION
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
                CALL NOW: (210) 555-WELD
              </a>
              <Link href="/contact" className="btn-secondary">
                GET FREE QUOTE
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-steel">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  24/7 EMERGENCY
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  FULLY EQUIPPED
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-safety animate-spark"></div>
                <span className="font-bold uppercase tracking-wide">
                  CERTIFIED WELDERS
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

      {/* Why Mobile Welding Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-white mb-6">
              WHY <span className="text-industrial">MOBILE WELDING?</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
            <p className="text-xl text-steel-light max-w-3xl mx-auto font-semibold uppercase tracking-wide">
              ELIMINATE DOWNTIME • SAVE MONEY • PROFESSIONAL RESULTS
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
                      NO TRANSPORTATION HASSLES
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Heavy equipment stays put. We bring professional welding
                      directly to your location, eliminating costly
                      transportation and logistics.
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
                      MINIMIZE DOWNTIME
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Equipment breakdowns cost money every minute. Our rapid
                      response mobile welding gets you back in operation fast.
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
                      PROFESSIONAL EQUIPMENT
                    </h3>
                    <p className="text-steel-light text-lg leading-relaxed">
                      Fully equipped mobile units with industrial-grade welding
                      equipment and certified professionals.
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
                  EMERGENCY WELDING?
                </h3>
                <p className="text-steel-light mb-6 text-lg">
                  Equipment failure doesn't wait for business hours. Our 24/7
                  emergency mobile welding service is ready when you need us
                  most.
                </p>
                <a
                  href="tel:210-555-9353"
                  className="btn-industrial w-full text-center block animate-glow"
                >
                  CALL NOW: (210) 555-WELD
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="section-light py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-deep mb-6">
              MOBILE WELDING <span className="text-industrial">SERVICES</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
            <p className="text-xl text-steel max-w-3xl mx-auto font-semibold uppercase tracking-wide">
              COMPREHENSIVE ON-SITE WELDING SOLUTIONS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency Repairs */}
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
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  EMERGENCY REPAIRS
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                24/7 emergency welding for critical equipment failures. Rapid
                response to minimize downtime and get operations running.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Equipment Breakdowns
                <br />
                • Structural Failures
                <br />
                • Pipeline Repairs
                <br />• Machinery Welding
              </div>
            </div>

            {/* Industrial Equipment */}
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
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  INDUSTRIAL EQUIPMENT
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                On-site welding for heavy machinery, manufacturing equipment,
                and industrial infrastructure.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Manufacturing Equipment
                <br />
                • Heavy Machinery
                <br />
                • Conveyor Systems
                <br />• Industrial Structures
              </div>
            </div>

            {/* Automotive & Fleet */}
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
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase">
                  AUTOMOTIVE & FLEET
                </h3>
              </div>
              <p className="text-steel-light mb-6 leading-relaxed">
                Mobile welding for vehicles, trailers, and fleet maintenance.
                Keep your vehicles on the road.
              </p>
              <div className="text-safety font-bold uppercase tracking-wide">
                • Fleet Vehicle Repairs
                <br />
                • Trailer Welding
                <br />
                • Exhaust Systems
                <br />• Frame Repairs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-mega font-black text-white mb-6">
              WHY CHOOSE{" "}
              <span className="text-industrial">OUR MOBILE SERVICE?</span>
            </h2>
            <div className="divider-industrial w-32 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-industrial/50 p-8 text-center border border-steel/30"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div
                className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-2xl font-black text-white uppercase mb-4">
                24/7 AVAILABILITY
              </h3>
              <p className="text-steel-light font-semibold uppercase tracking-wide">
                Emergency response when you need it most
              </p>
            </div>

            <div
              className="bg-industrial/50 p-8 text-center border border-steel/30"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div
                className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-2xl font-black text-white uppercase mb-4">
                CERTIFIED WELDERS
              </h3>
              <p className="text-steel-light font-semibold uppercase tracking-wide">
                Professional expertise you can trust
              </p>
            </div>

            <div
              className="bg-industrial/50 p-8 text-center border border-steel/30"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
              }}
            >
              <div
                className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-2xl font-black text-white uppercase mb-4">
                FULLY EQUIPPED
              </h3>
              <p className="text-steel-light font-semibold uppercase tracking-wide">
                Professional-grade mobile welding units
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-industrial py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-mega font-black text-white mb-8">
            NEED <span className="text-safety">MOBILE WELDING?</span>
          </h2>
          <p className="text-2xl text-steel-light mb-12 max-w-3xl mx-auto font-semibold uppercase tracking-wide">
            DON'T LET EQUIPMENT FAILURES SHUT YOU DOWN
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
              <div className="text-4xl font-black text-safety mb-2">RAPID</div>
              <div className="text-white font-bold uppercase tracking-wide">
                RESPONSE TIME
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
                ON-SITE ESTIMATES
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
