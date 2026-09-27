import SectionHead from "@/components/ui/section-head";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { whyPoints } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Why Oak Hills"
          title="Considered living, connected by design."
          text="A premium address shaped around space, everyday convenience, and the way families actually live."
        />
        <Stagger className="mt-14 grid md:grid-cols-2 gap-10">
          {whyPoints.map((point) => (
            <StaggerItem key={point.title}>
              <article className="border-t border-oak/15 pt-6">
                <h3 className="text-2xl text-oak-deep">{point.title}</h3>
                <p className="mt-3 text-stone leading-relaxed">{point.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
