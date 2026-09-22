import SectionHead from "@/components/ui/section-head";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { audiences } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Who these homes are for"
          title="Investors, NRIs, and families who want the third bedroom."
          text="We will not invent five-star quotes for a project that is still finding its first keys. These are the people the plan was drawn for."
        />
        <Stagger className="mt-14 grid md:grid-cols-2 gap-10">
          {audiences.map((item) => (
            <StaggerItem key={item.title} className="bg-paper p-8">
              <h3 className="text-2xl text-oak-deep">{item.title}</h3>
              <p className="mt-4 text-stone leading-relaxed">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
