import { site } from "@/lib/site";
import ResidencesPage from "./residencesClient";

export const metadata = {
  title: "Agamya Prime Residences",
  description:
    "Explore Agamya Prime's premium 3 BHK residences in Sector 35, JGC (Jindal Global City), Sonipat. Request pricing or book a site visit.",
  alternates: { canonical: `${site.url}/residences` },
};

export default function Page() {
  return <ResidencesPage />;
}
