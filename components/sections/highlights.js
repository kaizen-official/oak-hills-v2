import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { highlights } from "@/lib/content";

export default function Highlights() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Project highlights"
          title="What you should notice before the brochure."
        />
        <Stagger className="mt-14 grid md:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <StaggerItem key={item.title} className="bg-paper">
              <Frame src={item.image} alt={item.title} className="w-full h-64" />
              <div className="p-6">
                <h3 className="text-2xl text-oak-deep">{item.title}</h3>
                <p className="mt-3 text-stone leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
