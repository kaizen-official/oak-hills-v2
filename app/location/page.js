import { site } from "@/lib/site";
import LocationPage from "./locationClient";

export const metadata = {
  title: "Location & Connectivity",
  description:
    "Oak Hills is in Village Rathdhana, Sector 35, Sonipat, on the NH 334B belt facing Kundli and the Delhi edge of NCR.",
  alternates: { canonical: `${site.url}/location` },
};

export default function Page() {
  return <LocationPage />;
}
