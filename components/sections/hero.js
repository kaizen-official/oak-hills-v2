"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
        <HeroOverlay onVisit={onVisit} intro={motionValues.intro} introY={motionValues.introY} detail={motionValues.detail} detailY={motionValues.detailY} />
      </div>
    </section>
  );
}

function useHeroMotion(ref) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const veil = useTransform(scrollYProgress, [0, 0.22, 0.55], [0.12, 0.42, 0.58]);
  const intro = useTransform(scrollYProgress, [0.1, 0.28], [0, 1]);
  const introY = useTransform(scrollYProgress, [0.1, 0.28], [28, 0]);
  const detail = useTransform(scrollYProgress, [0.42, 0.6], [0, 1]);
  const detailY = useTransform(scrollYProgress, [0.42, 0.6], [22, 0]);
  return { veil, intro, introY, detail, detailY };
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

function HeroOverlay({ onVisit, intro, introY, detail, detailY }) {
  return (
    <div className="absolute inset-0 z-10 flex items-end">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pb-24 sm:pb-16">
        <motion.div className="max-w-xl" style={intro ? { opacity: intro, y: introY } : undefined}>
          <p className="text-xs tracking-widest uppercase text-bronze-light">{project.location}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-cream lg:text-6xl">
            <Tagline />
          </h1>
        </motion.div>
        <motion.div className="mt-6 max-w-xl" style={detail ? { opacity: detail, y: detailY } : undefined}>
          <p className="max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
            A HARERA-registered community of {project.units} three-bedroom homes, for families and buyers who prefer a finished count to a crowded skyline.
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
    <img
      src="/images/oak-hills-exterior.jpg"
      alt="Oak Hills residences among trees in Sonipat"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function HeroFilm() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.muted = true;
    if (node.readyState >= 2) setReady(true);
    const pending = node.play();
    if (pending) pending.catch(() => {});
  }, []);

  return (
    <>
      <img src="/images/oak-hills-exterior.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Oak Hills residences: the arrival court, the garden, and a living room"
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}

function Tagline() {
  const parts = site.tagline.split(". ");
  if (parts.length < 2) return site.tagline;
  const words = parts[0].split(" ");
  return (
    <>
      {words[0]}
      <br />
      {words.slice(1).join(" ")}.
      <br />
      {parts[1]}
    </>
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
        HARERA <span className="text-bronze-light">·</span> {site.rera}
      </p>
    </div>
  );
}
