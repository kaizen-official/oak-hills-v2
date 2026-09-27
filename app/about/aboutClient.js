"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import SectionHead from "@/components/ui/section-head";
import { aboutStory, stats, values } from "@/lib/content";
import { site } from "@/lib/site";
import Link from "next/link";

export default function AboutPage() {
  return (
    <BgLayout>
      <PageHero
        title="About Oak Hills"
        kicker="The house behind the gate"
        image="/images/agamya-prime/exterior-night.jpg"
        imageAlt="Agamya Prime signature elevation"
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <SectionHead eyebrow={aboutStory.eyebrow} title={aboutStory.title} />
          <div className="space-y-5 text-stone text-lg leading-relaxed">
            {aboutStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-oak-deep text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-4xl text-bronze-light">{item.value}</p>
              <p className="mt-3 text-cream/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How we work" title="Four rules that keep the brochure honest." />
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {values.map((item) => (
              <article key={item.title} className="border-t border-oak/15 pt-6">
                <h3 className="text-2xl text-oak-deep">{item.title}</h3>
                <p className="mt-3 text-stone leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" title="Contact Oak Hills" className="inline-block mt-12 border border-oak-deep px-6 py-3 text-oak-deep hover:bg-oak-deep hover:text-cream">
            Speak with the desk · {site.phoneDisplay}
          </Link>
        </div>
      </section>
    </BgLayout>
  );
}
