import Link from "next/link";
import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { gallery } from "@/lib/content";

export default function GalleryPreview() {
  const shots = gallery.slice(0, 6);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Gallery"
          title="Rooms, lawns, and the evening elevation."
        />
        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3">
          {shots.map((shot) => (
            <StaggerItem key={shot.src}>
              <figure>
                <Frame src={shot.src} alt={shot.alt} className="w-full h-56 md:h-72" />
                <figcaption className="sr-only">{shot.caption}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/gallery" title="Open the full gallery" className="inline-block mt-10 border-b border-oak-deep text-oak-deep pb-1">
          Open the full gallery
        </Link>
      </div>
    </section>
  );
}
