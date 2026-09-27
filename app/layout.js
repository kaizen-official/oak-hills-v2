import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2A44" },
  ],
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Agamya Prime | Oak Hills",
    template: "%s | Oak Hills",
  },
  description:
    "Agamya Prime offers premium 3 BHK residences in Sector 35, Jindal Global City, Sonipat. Book a site visit, request pricing, or call the Oak Hills sales desk.",
  keywords: [
    "Oak Hills",
    "Oak Hills Sonipat",
    "3 BHK Sonipat",
    "Jindal Global City Sector 35",
    "RERA Sonipat",
    "HRERA-PKL-SNP-901-2026",
    "residential property Sonipat",
    "NRI property Haryana",
    "site visit Sonipat",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Agamya Prime | 3 BHK Residences in Sonipat",
    description:
      "Premium 3 BHK residences in Sector 35, Jindal Global City, Sonipat.",
    images: [{ url: "/images/agamya-prime/exterior-night.jpg", width: 1200, height: 630, alt: "Agamya Prime" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamya Prime | 3 BHK Residences in Sonipat",
    description: "Premium 3 BHK residences in Jindal Global City. Book a site visit.",
    images: ["/images/agamya-prime/exterior-night.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: site.url },
  category: "real estate",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Agamya Prime",
    url: site.url,
    image: `${site.url}/images/agamya-prime/exterior-night.jpg`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 35, Jindal Global City",
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    identifier: site.rera,
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
