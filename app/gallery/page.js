import { site } from "@/lib/site";
import GalleryPage from "./galleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "View Agamya Prime project imagery, premium finishes, balcony views, recreation spaces, and the signature elevation.",
  alternates: { canonical: `${site.url}/gallery` },
};

export default function Page() {
  return <GalleryPage />;
}
