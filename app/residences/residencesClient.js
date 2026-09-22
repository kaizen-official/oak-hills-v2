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
  ["Unit types", project.unitTypes.join(", ")],
  ["Configuration", project.configuration],
  ["Homes", `${project.units}`],
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
        kicker="Ongoing · Our project"
        image="/images/oak-hills-exterior.jpg"
        imageAlt="Oak Hills 3 BHK residences"
      />
      <Facts openForm={openForm} />
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Inside the home"
            title="Three bedrooms. A living room that can take a long table."
            text="Floor plans are shared as registered drawings after an enquiry — not as decorative PDFs that drift from the HARERA file."
          />
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Frame src="/images/residence-interior.jpg" alt="Living room of a 3 BHK at Oak Hills" className="h-64 w-full" />
            </StaggerItem>
            <StaggerItem>
              <Frame src="/images/family-balcony.jpg" alt="Balcony of an Oak Hills residence" className="h-64 w-full" />
            </StaggerItem>
            <StaggerItem>
              <Frame src="/images/kitchen.jpg" alt="Kitchen in an Oak Hills residence" className="h-64 w-full" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Amenities" title="Shared ground for fifty-six keys." />
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
            title="One project. One plan. Fifty-six homes."
            text="Residential group housing in Sector 35, Rathdhana. Construction is ongoing. Videos of the site will be posted when we have film that matches the land, not a stock reel."
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
