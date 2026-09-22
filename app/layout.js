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
    default: "Oak Hills | 3 BHK Residences in Sonipat",
    template: "%s | Oak Hills",
  },
  description:
    "Oak Hills is a HARERA-registered community of 56 three-bedroom residences in Rathdhana, Sector 35, Sonipat. RERA: HRERA-PKL-SNP-901-2026. Book a site visit, request pricing, or call the sales desk.",
  keywords: [
    "Oak Hills",
    "Oak Hills Sonipat",
    "3 BHK Sonipat",
    "Rathdhana Sector 35",
    "HARERA Sonipat",
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
    title: "Oak Hills | 56 three-bedroom homes in Sonipat",
    description:
      "HARERA-registered 3 BHK residences in Rathdhana, Sector 35, Sonipat. RERA HRERA-PKL-SNP-901-2026.",
    images: [{ url: "/images/oak-hills-exterior.jpg", width: 1200, height: 630, alt: "Oak Hills residences" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak Hills | 3 BHK Residences in Sonipat",
    description: "56 HARERA-registered three-bedroom homes. Book a site visit.",
    images: ["/images/oak-hills-exterior.jpg"],
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
    name: "Oak Hills Residences",
    url: site.url,
    image: `${site.url}/images/oak-hills-exterior.jpg`,
    telephone: site.phone,
    numberOfAccommodationUnits: 56,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Village Rathdhana, Sector 35",
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      postalCode: "131001",
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
