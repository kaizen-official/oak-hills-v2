import BgLayout from "@/components/layout/bgLayout";
import Hero from "@/components/sections/hero";
import Ongoing from "@/components/sections/ongoing";
import WhyUs from "@/components/sections/why-us";
import Stats from "@/components/sections/stats";
import LocationPreview from "@/components/sections/location-preview";
import Highlights from "@/components/sections/highlights";
import AmenitiesPreview from "@/components/sections/amenities-preview";
import UpdatesPreview from "@/components/sections/updates-preview";
import Testimonials from "@/components/sections/testimonials";
import Faqs from "@/components/sections/faqs";
import Enquiry from "@/components/sections/form";
import { site } from "@/lib/site";

export const metadata = {
  title: "Agamya Prime | 3 BHK Residences in Jindal Global City",
  description:
    "Explore Agamya Prime, premium 3 BHK residences in Sector 35, Jindal Global City, Sonipat. Book a site visit or contact the Oak Hills sales desk.",
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
      <UpdatesPreview />
      <Testimonials />
      <Faqs />
      <Enquiry />
    </BgLayout>
  );
}
