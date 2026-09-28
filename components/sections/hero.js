"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { heroFacts } from "@/lib/content";
import { project, site, telHref, whatsappHref } from "@/lib/site";
import EnquiryModal from "@/components/enquiry/enquiry-modal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const onVisit = () => setOpen(true);

  return (
    <>
      {reduce ? <HeroStatic onVisit={onVisit} /> : <HeroCinematic onVisit={onVisit} />}
      <EnquiryModal open={open} onClose={() => setOpen(false)} intent="visit" />
    </>
  );
}

function HeroCinematic({ onVisit }) {
  const ref = useRef(null);
  const motionValues = useHeroMotion(ref);

  return (
    <section ref={ref} className="relative h-[240svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-oak-deep">
        <HeroFilm />
        <motion.div className="absolute inset-0 bg-oak-deep pointer-events-none" style={{ opacity: motionValues.veil }} />
        <HeroOverlay onVisit={onVisit} detail={motionValues.detail} detailY={motionValues.detailY} />
      </div>
    </section>
  );
}

function useHeroMotion(ref) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const veil = useTransform(scrollYProgress, [0, 0.22, 0.55], [0.12, 0.42, 0.58]);
  const detail = useTransform(scrollYProgress, [0.42, 0.6], [0, 1]);
  const detailY = useTransform(scrollYProgress, [0.42, 0.6], [22, 0]);
  return { veil, detail, detailY };
}

function HeroStatic({ onVisit }) {
  return (
    <section className="relative h-svh overflow-hidden bg-oak-deep">
      <HeroStill />
      <div className="absolute inset-0 bg-oak-deep/55 pointer-events-none" />
      <HeroOverlay onVisit={onVisit} />
    </section>
  );
}

function HeroOverlay({ onVisit, detail, detailY }) {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 z-10 flex items-end">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pb-24 sm:pb-16">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-xs tracking-widest uppercase text-bronze-light"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {project.location}
          </motion.p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-cream lg:text-6xl">
            <Tagline reduce={reduce} />
          </h1>
        </motion.div>
        <motion.div className="mt-6 max-w-xl" style={detail ? { opacity: detail, y: detailY } : undefined}>
          <p className="max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
            Agamya Prime brings thoughtfully planned 3 BHK residences and considered everyday conveniences to JGC.
          </p>
          <HeroActions onVisit={onVisit} />
          <HeroFacts />
        </motion.div>
      </div>
    </div>
  );
}

function HeroStill() {
  return (
    <Image
      src="/images/agamya-prime/exterior-night.jpg"
      alt="Agamya Prime front elevation in Jindal Global City"
      fill
      priority
      sizes="100vw"
      className="absolute inset-0 h-full w-full object-cover md:object-contain"
    />
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
          className="absolute inset-0 h-full w-full object-cover md:object-contain"
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

function Tagline({ reduce }) {
  const lines = ["A landmark", "in the making."];
  return (
    <span className="block pb-[0.12em]">
      {lines.map((line, lineIndex) => (
        <motion.span
          key={line}
          className="block pb-[0.04em]"
          initial={reduce ? false : { y: 24, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.24 + lineIndex * 0.13, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.span>
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
    <div className="mt-10 border-t border-cream/20 pt-6">
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
