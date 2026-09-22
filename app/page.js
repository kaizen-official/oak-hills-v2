import BgLayout from "@/components/layout/bgLayout";
import Hero from "@/components/sections/hero";
import Ongoing from "@/components/sections/ongoing";
import WhyUs from "@/components/sections/why-us";
import Stats from "@/components/sections/stats";
import LocationPreview from "@/components/sections/location-preview";
import Highlights from "@/components/sections/highlights";
import AmenitiesPreview from "@/components/sections/amenities-preview";
import GalleryPreview from "@/components/sections/gallery-preview";
import UpdatesPreview from "@/components/sections/updates-preview";
import Testimonials from "@/components/sections/testimonials";
import Faqs from "@/components/sections/faqs";
import Enquiry from "@/components/sections/form";
import { site } from "@/lib/site";

export const metadata = {
  title: "Oak Hills | 3 BHK Residences in Sonipat",
  description:
    "Fifty-six HARERA-registered 3 BHK homes in Rathdhana, Sector 35, Sonipat. Book a site visit, request pricing, or WhatsApp the Oak Hills sales desk. RERA HRERA-PKL-SNP-901-2026.",
  alternates: { canonical: site.url },
};

export default function Home() {
  return (
    <BgLayout>
      <Hero />
      <Ongoing />
      <WhyUs />
      <Stats />
      <LocationPreview />
      <Highlights />
      <AmenitiesPreview />
      <GalleryPreview />
      <UpdatesPreview />
      <Testimonials />
      <Faqs />
      <Enquiry />
    </BgLayout>
  );
}
