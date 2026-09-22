import ContactPage from "./contactClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact / Enquiry",
  description:
    "Enquire, book a site visit, request a callback, or ask for pricing at Oak Hills, Sonipat. Call +91 90530 77702 or WhatsApp the sales desk.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function Page() {
  return <ContactPage />;
}
