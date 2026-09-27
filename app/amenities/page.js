import { site } from "@/lib/site";
import AmenitiesPage from "./amenitiesClient";

export const metadata = {
  title: "Amenities",
  description:
    "Explore Agamya Prime amenities including a coffee shop, mini theatre, dine-in restaurant, indoor games, toddlers' club, wellness spa, gymnasium, yoga centre, steam, and sauna.",
  alternates: { canonical: `${site.url}/amenities` },
};

export default function Page() {
  return <AmenitiesPage />;
}
