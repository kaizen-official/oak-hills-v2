import { site } from "@/lib/site";
import UpdatesPage from "./updatesClient";

export const metadata = {
  title: "Construction Updates",
  description:
    "Dated construction progress for Oak Hills, Rathdhana Sector 35, Sonipat. HARERA HRERA-PKL-SNP-901-2026.",
  alternates: { canonical: `${site.url}/construction-updates` },
};

export default function Page() {
  return <UpdatesPage />;
}
