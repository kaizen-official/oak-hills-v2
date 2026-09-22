"use client";

import { motion, useReducedMotion } from "motion/react";

export const ease = [0.22, 1, 0.36, 1];

const view = { once: true, margin: "-8% 0px" };

export function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={view}
      transition={{ duration: 1.05, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={view}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Frame({ src, alt, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <div className={`lux-frame overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={view}
        transition={{ duration: 1.7, ease }}
        whileHover={reduce ? undefined : { scale: 1.045 }}
      />
    </div>
  );
}
