"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/components/motion/reveal";

export default function SectionHead({ eyebrow, title, text, light = false }) {
  const reduce = useReducedMotion();
  const tone = light ? "text-bronze-light" : "text-bronze";
  const heading = light ? "text-cream" : "text-oak-deep";
  const body = light ? "text-cream/80" : "text-stone";
  const rule = light ? "bg-bronze-light" : "bg-bronze";

  return (
    <motion.div
      className="max-w-3xl"
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1, ease }}
    >
      {eyebrow ? <p className={`text-sm tracking-widest uppercase ${tone}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 text-4xl md:text-5xl leading-tight ${heading}`}>{title}</h2>
      <motion.span
        className={`mt-5 block h-px w-16 origin-left ${rule}`}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
      />
      {text ? <p className={`mt-5 text-lg leading-relaxed ${body}`}>{text}</p> : null}
    </motion.div>
  );
}
