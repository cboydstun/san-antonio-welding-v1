import { Metadata } from "next";
import FAQPage from "./FAQPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | San Antonio Welding Pros",
  description:
    "Find answers to common questions about our mobile welding services, custom fabrication, and professional welding processes in San Antonio, TX.",
  keywords:
    "welding FAQ, mobile welding questions, custom fabrication FAQ, welding services questions, San Antonio welding, welding process questions",
  openGraph: {
    title: "Frequently Asked Questions | San Antonio Welding Pros",
    description:
      "Find answers to common questions about our mobile welding services, custom fabrication, and professional welding processes.",
    url: "https://sanantonioweldingpros.com/faq",
    siteName: "San Antonio Welding Pros",
    images: [
      {
        url: "/hero-welding-image.jpg",
        width: 1200,
        height: 630,
        alt: "San Antonio Welding Pros FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FAQ() {
  return <FAQPage />;
}
