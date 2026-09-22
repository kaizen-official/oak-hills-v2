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
        kicker="Sector 35, Rathdhana, Sonipat"
        image="/images/oak-hills-exterior.jpg"
        imageAlt="Roads connecting Sonipat to the Delhi edge"
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="A Sonipat address with a Delhi-facing road."
            text={`${site.addressLines.join(", ")}. We would rather you drive it than trust a travel-time graphic.`}
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
            title="Map of Rathdhana, Sector 35, Sonipat"
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
