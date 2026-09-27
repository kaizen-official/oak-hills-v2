"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import { Frame, Stagger, StaggerItem } from "@/components/motion/reveal";
import { gallery } from "@/lib/content";

export default function GalleryPage() {
  return (
    <BgLayout>
      <PageHero
        title="Gallery"
        kicker="Project views and premium detailing"
        image="/images/agamya-prime/exterior-night.jpg"
        imageAlt="Agamya Prime front elevation"
      />
      <section className="py-24">
        <Stagger className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((shot) => (
            <StaggerItem key={shot.src} className="bg-cream">
              <Frame src={shot.src} alt={shot.alt} className="w-full h-72" />
              <p className="px-4 py-3 text-sm tracking-widest uppercase text-bronze">
                {shot.caption}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </BgLayout>
  );
}
