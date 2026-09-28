import Link from "next/link";
import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { connections } from "@/lib/content";

export default function LocationPreview() {
  const preview = connections.slice(0, 4);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <SectionHead
            eyebrow="Location / connectivity"
            title="Sector 35, Jindal Global City, Sonipat."
            text="Close to leading universities, NH 334B, NH 44, and the wider NCR road network."
          />
          <Frame
            src="/images/agamya-prime/generated/jgc-connectivity.jpg"
            alt="Aerial view of a connected, green urban district in Sonipat"
            className="aspect-video w-full"
          />
        </div>
        <Stagger className="mt-12 grid md:grid-cols-2 gap-8">
          {preview.map((item) => (
            <StaggerItem key={item.title}>
              <h3 className="text-xl text-oak-deep">{item.title}</h3>
              <p className="mt-2 text-stone leading-relaxed">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/location" title="Explore the location" className="inline-block mt-10 border-b border-oak-deep text-oak-deep pb-1">
          Explore the location
        </Link>
      </div>
    </section>
  );
}
