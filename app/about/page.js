import AboutPage from "./aboutClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Oak Hills Infra",
  description:
    "Oak Hills Infra is developing Agamya Prime, premium 3 BHK residences in Sector 35, Jindal Global City, Sonipat.",
  alternates: { canonical: `${site.url}/about` },
};

export default function Page() {
  return <AboutPage />;
}
