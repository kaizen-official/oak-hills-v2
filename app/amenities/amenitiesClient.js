"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import SectionHead from "@/components/ui/section-head";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { amenities, amenityExtras } from "@/lib/content";

export default function AmenitiesPage() {
  return (
    <BgLayout>
      <PageHero
        title="Amenities"
        kicker="As listed in the current project brochure"
        image="/images/agamya-prime/gymnasium.jpg"
        imageAlt="Gymnasium at Agamya Prime"
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="World-class amenities, curated for daily life."
            text="From dining and indoor recreation to wellness and family spaces, every amenity below is taken directly from the latest brochure."
          />
          <Stagger className="mt-14 grid md:grid-cols-2 gap-10">
            {amenities.map((item) => (
              <StaggerItem key={item.title}>
                <Frame src={item.image} alt={item.title} className="w-full h-72" />
                <h2 className="mt-5 text-3xl text-oak-deep">{item.title}</h2>
                <p className="mt-3 text-stone leading-relaxed">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-oak-deep">Also included in the brochure</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {amenityExtras.map((line) => (
              <li key={line} className="border-t border-oak/15 pt-4 text-stone">{line}</li>
            ))}
          </ul>
        </div>
      </section>
    </BgLayout>
  );
}
