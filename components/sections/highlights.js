import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { highlights } from "@/lib/content";

export default function Highlights() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Project highlights"
          title="Details that shape the everyday experience."
        />
        <Stagger className="mt-14 grid md:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group relative aspect-video overflow-hidden bg-oak-deep">
                <Frame src={item.image} alt={item.title} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-oak-deep via-oak-deep/85 to-transparent px-6 pb-6 pt-24 text-cream">
                  <h3 className="text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-cream/80">{item.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
