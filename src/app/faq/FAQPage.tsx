"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Define a client-side FAQ interface
interface FAQ {
  _id: {
    toString: () => string;
  };
  question: string;
  answer: string;
  category: string;
  order: number;
  isPublished: boolean;
  createdAt: {
    toString: () => string;
  };
  updatedAt: {
    toString: () => string;
  };
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch FAQs
  const fetchFAQs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/v1/faq");

      if (!response.ok) {
        throw new Error("Failed to fetch FAQs");
      }

      const data = await response.json();
      if (data.success) {
        // Only show published FAQs
        const publishedFaqs = data.faqs.filter((faq: FAQ) => faq.isPublished);

        // Sort by order and then by category
        publishedFaqs.sort((a: FAQ, b: FAQ) => {
          if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
          }
          return a.order - b.order;
        });

        setFaqs(publishedFaqs);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(publishedFaqs.map((faq: FAQ) => faq.category)),
        );
        setCategories(uniqueCategories as string[]);
      } else {
        throw new Error(data.message || "Failed to fetch FAQs");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching FAQs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch FAQs on component mount
  useEffect(() => {
    fetchFAQs();
  }, []);

  // Filter FAQs by selected category
  const filteredFaqs = selectedCategory
    ? faqs.filter((faq) => faq.category === selectedCategory)
    : faqs;

  // Group FAQs by category
  const faqsByCategory = filteredFaqs.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    },
    {} as Record<string, FAQ[]>,
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-welding-image.jpg"
            alt="Welding FAQ"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero font-black text-white mb-8 leading-none">
              <span className="block text-glow">WELDING</span>
              <span className="block text-industrial bg-gradient-to-r from-primary to-safety bg-clip-text text-transparent">
                FAQ
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-steel-light mb-12 uppercase tracking-wide">
              ANSWERS TO YOUR WELDING QUESTIONS
            </p>

            {/* Location Badge */}
            <div
              className="inline-flex items-center bg-industrial/80 backdrop-blur-sm px-6 py-3 border border-primary/30"
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
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-bold uppercase tracking-wider">
                EXPERT WELDING KNOWLEDGE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-light py-24">
        <div className="container mx-auto px-6">
          {error && (
            <div
              className="bg-primary/10 border-l-4 border-primary p-6 mb-12 max-w-4xl mx-auto"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
              }}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-bold text-primary uppercase tracking-wide">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div
                className="w-16 h-16 bg-primary animate-spark flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
                }}
              >
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              {/* Category Filter */}
              {categories.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-2xl font-black text-deep uppercase text-center mb-8">
                    FILTER BY <span className="text-industrial">CATEGORY</span>
                  </h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300 ${
                        selectedCategory === null
                          ? "bg-primary text-white shadow-glow"
                          : "bg-industrial text-white hover:bg-primary"
                      }`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
                      }}
                    >
                      ALL CATEGORIES
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-primary text-white shadow-glow"
                            : "bg-industrial text-white hover:bg-primary"
                        }`}
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%, 0 100%)",
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-24">
                  <div
                    className="w-24 h-24 bg-industrial mx-auto mb-8 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%, 0 100%)",
                    }}
                  >
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-steel uppercase tracking-wide">
                    NO FAQs FOUND
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {Object.entries(faqsByCategory).map(
                    ([category, categoryFaqs]) => (
                      <div
                        key={category}
                        className="card-industrial overflow-hidden"
                      >
                        <div className="bg-primary px-8 py-6">
                          <h2 className="text-2xl font-black text-white uppercase tracking-wide">
                            {category}
                          </h2>
                        </div>
                        <div className="bg-industrial divide-y divide-steel/30">
                          {categoryFaqs.map((faq) => (
                            <details key={faq._id.toString()} className="group">
                              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-8 text-white hover:bg-primary/10 transition-colors duration-300">
                                <span className="text-lg uppercase tracking-wide pr-4">
                                  {faq.question}
                                </span>
                                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                                  <div
                                    className="w-8 h-8 bg-safety flex items-center justify-center"
                                    style={{
                                      clipPath:
                                        "polygon(0 0, calc(100% - 4px) 0, 100% calc(100% - 4px), 4px 100%, 0 100%)",
                                    }}
                                  >
                                    <svg
                                      className="w-5 h-5 text-deep"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </span>
                              </summary>
                              <div className="px-8 pb-8 pt-0 text-steel-light text-lg leading-relaxed whitespace-pre-wrap">
                                {faq.answer}
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA Section */}
      <section className="section-industrial py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mega font-black text-white mb-8">
              STILL HAVE <span className="text-safety">QUESTIONS?</span>
            </h2>
            <p className="text-2xl text-steel-light mb-12 font-semibold uppercase tracking-wide">
              OUR WELDING EXPERTS ARE HERE TO HELP
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-deep/50 p-8 backdrop-blur-sm border border-primary/20"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 16px) 0, 100% calc(100% - 16px), 16px 100%, 0 100%)",
                }}
              >
                <div
                  className="w-16 h-16 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
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
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-4">
                  CALL US DIRECTLY
                </h3>
                <p className="text-steel-light mb-6 font-semibold">
                  Speak with our welding experts for immediate answers to your
                  questions.
                </p>
                <a
                  href="tel:210-555-9353"
                  className="btn-industrial animate-glow"
                >
                  (210) 555-WELD
                </a>
              </div>

              <div
                className="bg-deep/50 p-8 backdrop-blur-sm border border-primary/20"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 16px) 0, 100% calc(100% - 16px), 16px 100%, 0 100%)",
                }}
              >
                <div
                  className="w-16 h-16 bg-primary mx-auto mb-6 flex items-center justify-center animate-spark"
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
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-4">
                  CONTACT FORM
                </h3>
                <p className="text-steel-light mb-6 font-semibold">
                  Send us your detailed questions and we'll get back to you
                  quickly.
                </p>
                <Link href="/contact" className="btn-secondary">
                  CONTACT US
                </Link>
              </div>
            </div>

            <div
              className="bg-primary/20 border border-primary/30 p-8 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% calc(100% - 20px), 20px 100%, 0 100%)",
              }}
            >
              <h3 className="text-2xl font-black text-white uppercase mb-4">
                EMERGENCY <span className="text-safety">WELDING SERVICES</span>
              </h3>
              <p className="text-steel-light text-lg mb-6">
                Equipment failures don't wait for business hours. Our 24/7
                emergency welding service is ready when you need us most.
              </p>
              <a
                href="tel:210-555-9353"
                className="btn-industrial animate-glow text-xl px-12 py-4"
              >
                24/7 EMERGENCY: (210) 555-WELD
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
