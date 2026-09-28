"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ease } from "@/components/motion/reveal";

export default function PageHero({ title, kicker, image, imageAlt }) {
  const reduce = useReducedMotion();

  return (
    <section className="mt-18 lg:mt-22">
      <div className="lux-frame aspect-video overflow-hidden bg-oak-deep">
        <motion.img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover md:object-contain"
          initial={reduce ? false : { opacity: 0.72 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        />
      </div>
      <motion.div
        className="bg-oak-deep text-cream"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease, delay: 0.15 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-cream">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">{title}</span>
          </nav>
          {kicker ? (
            <p className="mt-5 text-sm tracking-widest uppercase text-bronze-light">{kicker}</p>
          ) : null}
          <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl leading-tight font-semibold">{title}</h1>
        </div>
      </motion.div>
    </section>
  );
}
