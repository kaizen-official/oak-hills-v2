"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroFacts } from "@/lib/content";
import { project, site, telHref, whatsappHref } from "@/lib/site";
import EnquiryModal from "@/components/enquiry/enquiry-modal";
import { ease } from "@/components/motion/reveal";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export default function Hero() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="mt-28 lg:mt-32 lg:grid lg:h-[calc(100svh-8rem)] lg:grid-cols-12">
      <HeroPhoto reduce={reduce} />
      <HeroCopy reduce={reduce} onVisit={() => setOpen(true)} />
      <EnquiryModal open={open} onClose={() => setOpen(false)} intent="visit" />
    </section>
  );
}

function HeroPhoto({ reduce }) {
  return (
    <div className="relative h-[44svh] min-h-64 overflow-hidden sm:h-[54svh] lg:col-span-7 lg:order-2 lg:h-auto lg:min-h-full">
      <motion.img
        src="/images/oak-hills-exterior.jpg"
        alt="Oak Hills residences among trees in Sonipat"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />
    </div>
  );
}

function HeroCopy({ reduce, onVisit }) {
  return (
    <motion.div
      className="flex items-center bg-cream px-5 pt-10 pb-24 sm:px-8 sm:py-12 lg:col-span-5 lg:order-1 lg:px-10 lg:py-8 xl:px-14"
      initial={reduce ? "show" : "hidden"}
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}
    >
      <div className="flex w-full max-w-lg flex-col">
        <motion.p variants={rise} className="order-1 text-xs tracking-widest uppercase text-bronze">
          {project.location}
        </motion.p>
        <motion.h1 variants={rise} className="order-1 mt-4 text-5xl leading-[1.05] text-oak-deep lg:text-6xl">
          <Tagline />
        </motion.h1>
        <motion.p variants={rise} className="order-3 mt-5 max-w-md text-base leading-relaxed text-stone sm:text-lg lg:order-2">
          A HARERA-registered community of {project.units} three-bedroom homes, for families and buyers who prefer a finished count to a crowded skyline.
        </motion.p>
        <motion.div variants={rise} className="order-2 lg:order-3">
          <HeroActions onVisit={onVisit} />
        </motion.div>
        <HeroFacts />
      </div>
    </motion.div>
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
        className="bg-oak-deep px-6 py-3 text-cream hover:bg-oak"
      >
        Book a site visit
      </button>
      <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" title="WhatsApp Oak Hills" className="text-oak-deep underline decoration-bronze underline-offset-4 hover:text-bronze">
        WhatsApp
      </Link>
      <Link href={telHref} title="Call the sales desk" className="text-oak-deep underline decoration-bronze underline-offset-4 hover:text-bronze">
        Call
      </Link>
    </div>
  );
}

function HeroFacts() {
  return (
    <motion.div variants={rise} className="order-4 mt-10 border-t border-oak/15 pt-6">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-5">
        {heroFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs tracking-widest uppercase text-bronze">{fact.label}</dt>
            <dd className="mt-1 text-oak-deep">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs tracking-widest uppercase text-oak-deep">
        HARERA <span className="text-bronze">·</span> {site.rera}
      </p>
    </motion.div>
  );
}
