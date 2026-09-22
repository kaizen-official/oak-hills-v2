import AboutPage from "./aboutClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Oak Hills Infra",
  description:
    "Oak Hills Infra is building 56 three-bedroom residences in Rathdhana, Sector 35, Sonipat. HARERA registered HRERA-PKL-SNP-901-2026.",
  alternates: { canonical: `${site.url}/about` },
};

export default function Page() {
  return <AboutPage />;
}
