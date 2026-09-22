import { site } from "@/lib/site";
import AmenitiesPage from "./amenitiesClient";

export const metadata = {
  title: "Amenities",
  description:
    "Lawn, children's court, community hall, walking loop, and a secure gate — amenities scaled for 56 homes at Oak Hills, Sonipat.",
  alternates: { canonical: `${site.url}/amenities` },
};

export default function Page() {
  return <AmenitiesPage />;
}
