import ContactPage from "./contactClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact / Enquiry",
  description:
    "Enquire, book a site visit, request a callback, or ask for pricing at Agamya Prime, Sonipat. Call +91 7400 760064 or WhatsApp the sales desk.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function Page() {
  return <ContactPage />;
}
