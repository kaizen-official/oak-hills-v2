"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { heroFacts } from "@/lib/content";
import { site, telHref, whatsappHref } from "@/lib/site";
import EnquiryModal from "@/components/enquiry/enquiry-modal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const onVisit = () => setOpen(true);

  return (
    <>
      <HeroStatic onVisit={onVisit} />
      <EnquiryModal open={open} onClose={() => setOpen(false)} intent="visit" />
    </>
  );
}

function HeroStatic({ onVisit }) {
  return (
    <section className="relative mt-18 min-h-[calc(100svh-4.5rem)] overflow-hidden bg-oak-deep lg:mt-22 lg:min-h-[calc(100svh-5.5rem)]">
      <HeroFilm />
      <div className="pointer-events-none absolute inset-0 bg-oak-deep/20" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-oak-deep/25 to-oak-deep/95" />
      <HeroOverlay onVisit={onVisit} />
    </section>
  );
}

function HeroOverlay({ onVisit }) {
  return (
    <div className="relative z-10 flex min-h-[calc(100svh-4.5rem)] items-end lg:min-h-[calc(100svh-5.5rem)]">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pb-24 sm:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            <Tagline />
          </h1>
        </div>
        <div className="mt-4 max-w-xl sm:mt-6">
          <p className="max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
            Agamya Prime brings thoughtfully planned 3 BHK residences and considered everyday conveniences to Jindal Global City.
          </p>
          <HeroActions onVisit={onVisit} />
          <HeroFacts />
        </div>
      </div>
    </div>
  );
}

const walkthrough = [
  {
    src: "/images/agamya-prime/exterior-night.jpg",
    alt: "Agamya Prime front elevation in Jindal Global City",
  },
  {
    src: "/images/agamya-prime/generated/grand-balcony.jpg",
    alt: "Agamya Prime wraparound balcony lounge",
  },
  {
    src: "/images/agamya-prime/generated/living-dining.jpg",
    alt: "Premium living and dining room at Agamya Prime",
  },
];

function HeroFilm() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % walkthrough.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <div className="absolute inset-0" role="img" aria-label={walkthrough[index].alt}>
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={walkthrough[index].src}
          src={walkthrough[index].src}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-top"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.7 } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-r from-oak-deep/45 via-transparent to-oak-deep/10" />
    </div>
  );
}

function Tagline() {
  const lines = ["A landmark", "in the making."];
  return (
    <span className="block pb-[0.12em]">
      {lines.map((line) => (
        <span key={line} className="block pb-[0.04em]">
          {line}
        </span>
      ))}
    </span>
  );
}

function HeroActions({ onVisit }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
      <button
        type="button"
        onClick={onVisit}
        title="Book a site visit"
        className="bg-cream px-6 py-3 text-oak-deep hover:bg-white"
      >
        Book a site visit
      </button>
      <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" title="WhatsApp Oak Hills" className="text-cream underline decoration-bronze underline-offset-4 hover:text-bronze-light">
        WhatsApp
      </Link>
      <Link href={telHref} title="Call the sales desk" className="text-cream underline decoration-bronze underline-offset-4 hover:text-bronze-light">
        Call
      </Link>
    </div>
  );
}

function HeroFacts() {
  return (
    <div className="mt-6 border-t border-cream/20 pt-4 sm:mt-10 sm:pt-6">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
        {heroFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs tracking-widest uppercase text-bronze-light">{fact.label}</dt>
            <dd className="mt-1 text-cream">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs tracking-widest uppercase text-cream">
        RERA No. <span className="text-bronze-light">·</span> {site.rera}
      </p>
    </div>
  );
}
