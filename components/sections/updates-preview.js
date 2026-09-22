import Link from "next/link";
import SectionHead from "@/components/ui/section-head";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { updates } from "@/lib/content";

export default function UpdatesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Construction updates"
          title="A dated record, not a crane collage."
        />
        <Stagger className="mt-14 space-y-8">
          {updates.map((item) => (
            <StaggerItem key={item.title} className="grid md:grid-cols-4 gap-4 border-t border-oak/15 pt-6">
              <p className="text-bronze tracking-widest uppercase text-sm">{item.date}</p>
              <div className="md:col-span-3">
                <h3 className="text-2xl text-oak-deep">{item.title}</h3>
                <p className="mt-2 text-stone leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/construction-updates" title="Construction update page" className="inline-block mt-10 border-b border-oak-deep text-oak-deep pb-1">
          Construction update page
        </Link>
      </div>
    </section>
  );
}
