import Link from "next/link";
import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { amenities } from "@/lib/content";

export default function AmenitiesPreview() {
  const preview = amenities.slice(0, 6);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Amenities"
          title="Wellness, leisure, dining, and everyday ease."
          text="Every amenity shown here is listed in the current Agamya Prime brochure."
        />
        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((item) => (
            <StaggerItem key={item.title}>
              <Frame src={item.image} alt={item.title} className="w-full h-56" />
              <h3 className="mt-4 text-xl text-oak-deep">{item.title}</h3>
              <p className="mt-2 text-stone leading-relaxed">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/amenities" title="See all amenities" className="inline-block mt-10 border-b border-oak-deep text-oak-deep pb-1">
          See all amenities
        </Link>
      </div>
    </section>
  );
}
