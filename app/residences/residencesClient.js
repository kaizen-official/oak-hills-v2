"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import SectionHead from "@/components/ui/section-head";
import EnquiryModal from "@/components/enquiry/enquiry-modal";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { amenities } from "@/lib/content";
import { project, site } from "@/lib/site";
import { useState } from "react";

const facts = [
  ["Project", project.name],
  ["Location", project.location],
  ["Type", project.type],
  ["Configuration", project.configuration],
  ["Status", project.status],
  ["Possession", project.possession],
  ["Pricing", project.price],
  ["RERA", site.rera],
];

export default function ResidencesPage() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState("pricing");

  const openForm = (next) => {
    setIntent(next);
    setOpen(true);
  };

  return (
    <BgLayout>
      <PageHero
        title={project.name}
        kicker="Ongoing · A project by Oak Hills Infra"
        image="/images/agamya-prime/generated/living-dining.jpg"
        imageAlt="Premium living and dining space at Agamya Prime"
      />
      <Facts openForm={openForm} />
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Inside the home"
            title="Thoughtful layouts. Grand balconies. Room to exhale."
            text="Type A and Type B 3 BHK layouts pair generous balconies with carefully planned interiors."
          />
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Frame src="/images/agamya-prime/generated/grand-balcony.jpg" alt="Grand balcony at Agamya Prime" className="aspect-video w-full" />
            </StaggerItem>
            <StaggerItem>
              <Frame src="/images/agamya-prime/generated/kitchen.jpg" alt="Contemporary kitchen at Agamya Prime" className="aspect-video w-full" />
            </StaggerItem>
            <StaggerItem>
              <Frame src="/images/agamya-prime/generated/master-bedroom.jpg" alt="Premium bedroom at Agamya Prime" className="aspect-video w-full" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Amenities" title="Everyday convenience, wellness, and recreation." />
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item) => (
              <li key={item.title} className="border-t border-oak/15 pt-4">
                <h3 className="text-xl text-oak-deep">{item.title}</h3>
                <p className="mt-2 text-stone">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EnquiryModal open={open} onClose={() => setOpen(false)} intent={intent} />
    </BgLayout>
  );
}

function Facts({ openForm }) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHead
            eyebrow="The inventory"
            title="Agamya Prime at JGC (Jindal Global City)."
            text="Premium 3 BHK residences in Sector 35, Sonipat. Construction is ongoing, with thoughtfully planned homes and generous private balconies."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => openForm("pricing")} title="Request pricing" className="bg-oak-deep text-cream px-6 py-3">
              Request pricing
            </button>
            <button type="button" onClick={() => openForm("visit")} title="Book a site visit" className="border border-oak-deep px-6 py-3">
              Book a site visit
            </button>
          </div>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map(([label, value]) => (
            <div key={label} className="border-t border-oak/15 pt-4">
              <dt className="text-xs tracking-widest uppercase text-bronze">{label}</dt>
              <dd className="mt-1 text-oak-deep">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
