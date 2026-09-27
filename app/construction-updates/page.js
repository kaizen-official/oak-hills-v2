import { site } from "@/lib/site";
import UpdatesPage from "./updatesClient";

export const metadata = {
  title: "Construction Updates",
  description:
    "Dated construction progress for Agamya Prime in Sector 35, Jindal Global City, Sonipat.",
  alternates: { canonical: `${site.url}/construction-updates` },
};

export default function Page() {
  return <UpdatesPage />;
}
