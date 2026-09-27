"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import SectionHead from "@/components/ui/section-head";
import { updates } from "@/lib/content";
import Link from "next/link";

export default function UpdatesPage() {
  return (
    <BgLayout>
      <PageHero
        title="Construction updates"
        kicker="A ledger, when there is something to show"
        image="/images/agamya-prime/exterior-night.jpg"
        imageAlt="Agamya Prime signature elevation"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="Photographs will be dated as stages close."
            text="Until a slab or a brick line is finished, the honest update is a site visit. We will not fill this page with another project's crane."
          />
          <ol className="mt-14 space-y-10">
            {updates.map((item) => (
              <li key={item.title} className="border-t border-oak/15 pt-6">
                <p className="text-sm tracking-widest uppercase text-bronze">{item.date}</p>
                <h2 className="mt-2 text-3xl text-oak-deep">{item.title}</h2>
                <p className="mt-3 text-stone leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
          <Link href="/contact" title="Book a site visit" className="inline-block mt-12 border border-oak-deep px-6 py-3 text-oak-deep hover:bg-oak-deep hover:text-cream">
            Walk the plot with us
          </Link>
        </div>
      </section>
    </BgLayout>
  );
}
