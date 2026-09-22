import PrivacyPage from "./privacyClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Oak Hills collects and uses enquiry information for site visits, callbacks, and pricing requests.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function Page() {
  return <PrivacyPage />;
}
