import { site } from "@/lib/site";
import ResidencesPage from "./residencesClient";

export const metadata = {
  title: "3 BHK Residences in Sonipat",
  description:
    "Oak Hills Residences: 56 three-bedroom homes in Rathdhana, Sector 35, Sonipat. Ongoing, HARERA registered HRERA-PKL-SNP-901-2026. Request pricing or book a site visit.",
  alternates: { canonical: `${site.url}/residences` },
};

export default function Page() {
  return <ResidencesPage />;
}
