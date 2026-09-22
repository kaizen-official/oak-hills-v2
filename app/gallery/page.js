import { site } from "@/lib/site";
import GalleryPage from "./galleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "Photographs of rooms, lawns, and elevations for Oak Hills, the 56-home 3 BHK community in Sonipat.",
  alternates: { canonical: `${site.url}/gallery` },
};

export default function Page() {
  return <GalleryPage />;
}
