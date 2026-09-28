import { site } from "@/lib/site";
import LocationPage from "./locationClient";

export const metadata = {
  title: "Location & Connectivity",
  description:
    "Agamya Prime is in Sector 35, JGC (Jindal Global City), Sonipat, close to O.P. Jindal Global University, NH 334B, NH 44, and Rajiv Gandhi Education City.",
  alternates: { canonical: `${site.url}/location` },
};

export default function Page() {
  return <LocationPage />;
}
