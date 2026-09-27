import Link from "next/link";
import Image from "next/image";
import SectionHead from "@/components/ui/section-head";
import { Frame, Reveal } from "@/components/motion/reveal";
import { project } from "@/lib/site";

export default function Ongoing() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Frame
          src="/images/agamya-prime/exterior-night.jpg"
          alt="Agamya Prime, the ongoing Oak Hills project in Sector 35 Sonipat"
          className="w-full h-125"
        />
        <Reveal>
          <Image src="/AP transparent.png" alt="Agamya Prime" width={1024} height={1024} className="mb-6 h-24 w-24 object-contain" />
          <SectionHead
            eyebrow="Ongoing project"
            title={project.name}
            text="Premium 3 BHK residences with grand balconies, everyday conveniences, and a connected Jindal Global City address."
          />
          <dl className="mt-8 grid grid-cols-2 gap-6 text-oak-deep">
            <Item label="Type" value={project.type} />
            <Item label="Plan" value={project.configuration} />
            <Item label="Location" value="Jindal Global City" />
            <Item label="Status" value={project.status} />
          </dl>
          <p className="mt-6 text-stone leading-relaxed">
            Possession follows the RERA certificate. Pricing is shared directly by the sales desk.
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
