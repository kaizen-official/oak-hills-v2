"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import SectionHead from "@/components/ui/section-head";
import { connections } from "@/lib/content";
import { site } from "@/lib/site";

export default function LocationPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`;

  return (
    <BgLayout>
      <PageHero
        title="Location & connectivity"
        kicker="Sector 35, JGC (Jindal Global City), Sonipat"
        image="/images/agamya-prime/generated/jgc-connectivity.jpg"
        imageAlt="Aerial view of a connected, green district in Sonipat"
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="Connected to education, healthcare, and the wider NCR."
            text={`${site.addressLines.join(", ")}. Travel times are approximate and may vary with traffic conditions.`}
          />
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {connections.map((item) => (
              <article key={item.title} className="border-t border-oak/15 pt-5">
                <h2 className="text-2xl text-oak-deep">{item.title}</h2>
                <p className="mt-3 text-stone leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            title="Map of Sector 35, JGC (Jindal Global City), Sonipat"
            src={mapSrc}
            className="w-full h-100 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </BgLayout>
  );
}
