export const site = {
  name: "Oak Hills",
  legalName: "Oak Hills Infra",
  tagline: "Fifty-six 3 BHK homes. One quiet gate.",
  rera: "HRERA-PKL-SNP-901-2026",
  reraAuthority: "HARERA, Panchkula",
  url: "https://www.oakhills.in",
  phone: "+919053077702",
  phoneDisplay: "+91 90530 77702",
  whatsapp: "919053077702",
  email: "",
  addressLines: [
    "Village Rathdhana, Sector 35",
    "Sonipat, Haryana 131001",
  ],
  mapQuery: "Rathdhana Sector 35 Sonipat Haryana",
};

export const project = {
  name: "Oak Hills Residences",
  slug: "oak-hills-residences",
  location: "Rathdhana, Sector 35, Sonipat",
  district: "Sonipat, Haryana",
  type: "Residential group housing",
  unitTypes: ["3 BHK Residences"],
  configuration: "3 BHK Residences",
  units: 56,
  status: "Ongoing",
  possession: "As recorded on the HARERA certificate",
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
  const message = text || "Hello Oak Hills, I would like to know more about the 3 BHK residences.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const telHref = `tel:${site.phone}`;
