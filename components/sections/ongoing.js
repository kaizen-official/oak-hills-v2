import Link from "next/link";
import SectionHead from "@/components/ui/section-head";
import { Frame, Reveal } from "@/components/motion/reveal";
import { project } from "@/lib/site";

export default function Ongoing() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Frame
          src="/images/facade-detail.jpg"
          alt="Oak Hills residences, the ongoing project in Sector 35 Sonipat"
          className="w-full h-125"
        />
        <Reveal>
          <SectionHead
            eyebrow="Ongoing project"
            title={project.name}
            text="The only work on this land: fifty-six 3 BHK residences, registered and for sale from the desk on site."
          />
          <dl className="mt-8 grid grid-cols-2 gap-6 text-oak-deep">
            <Item label="Type" value={project.type} />
            <Item label="Homes" value={`${project.units}`} />
            <Item label="Plan" value={project.configuration} />
            <Item label="Status" value={project.status} />
          </dl>
          <p className="mt-6 text-stone leading-relaxed">
            Possession follows the HARERA certificate. Pricing is given in conversation, not as a painted number on a hoarding.
          </p>
          <Link href="/residences" title="View Oak Hills residences" className="inline-block mt-8 border border-oak-deep px-6 py-3 text-oak-deep hover:bg-oak-deep hover:text-cream">
            View the residences
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Item({ label, value }) {
  return (
    <div>
      <dt className="text-xs tracking-widest uppercase text-bronze">{label}</dt>
      <dd className="mt-1 text-lg">{value}</dd>
    </div>
  );
}
