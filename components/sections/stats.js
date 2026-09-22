import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="py-20 bg-oak-deep text-cream">
      <Stagger className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item) => (
          <StaggerItem key={item.label}>
            <p className="text-5xl text-bronze-light">{item.value}</p>
            <p className="mt-3 text-cream/75 leading-relaxed">{item.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
