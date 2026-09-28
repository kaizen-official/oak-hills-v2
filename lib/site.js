export const site = {
  name: "Oak Hills",
  legalName: "Oak Hills Infra",
  tagline: "A landmark in the making.",
  rera: "HRERA-PKL-SNP-901-2026",
  url: "https://www.oakhills.in",
  phone: "+917400760064",
  phoneDisplay: "+91 7400 760064",
  whatsapp: "917400760064",
  email: "",
  addressLines: [
    "Sector 35",
    "JGC (Jindal Global City)",
    "Sonipat, Haryana",
  ],
  mapQuery: "Sector 35 JGC Jindal Global City Sonipat Haryana",
};

export const project = {
  name: "Agamya Prime",
  slug: "agamya-prime",
  location: "Sector 35, JGC (Jindal Global City), Sonipat",
  district: "Sonipat, Haryana",
  type: "Premium 3 BHK residences",
  configuration: "3 BHK Residences",
  status: "Ongoing",
  possession: "As recorded on the RERA certificate",
  price: "Shared on request after a site discussion",
  rera: site.rera,
};

export const nav = [
  { href: "/residences", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/residences", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/construction-updates", label: "Construction Updates" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const intents = [
  { id: "enquiry", label: "Project enquiry" },
  { id: "visit", label: "Book a site visit" },
  { id: "callback", label: "Request a callback" },
  { id: "pricing", label: "Request pricing" },
];

export const whatsappHref = (text) => {
  const message = text || "Hello Oak Hills, I would like to know more about Agamya Prime.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const telHref = `tel:${site.phone}`;
