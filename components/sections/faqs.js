"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";
import SectionHead from "@/components/ui/section-head";
import { ease } from "@/components/motion/reveal";
import { faqs } from "@/lib/content";

export default function Faqs() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section className="py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="FAQs"
          title="The questions a careful buyer actually asks."
        />
        <ul className="mt-12">
          {faqs.map((faq, index) => (
            <li key={faq.q} className="border-t border-oak/15">
              <button
                type="button"
                title={open === index ? "Collapse answer" : "Expand answer"}
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left"
              >
                <span className="text-lg text-oak-deep">{faq.q}</span>
                <motion.span animate={{ rotate: open === index ? 180 : 0 }} transition={{ duration: 0.45, ease }}>
                  <IconChevronDown className="shrink-0 mt-1" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === index ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden text-stone leading-relaxed"
                  >
                    <span className="block pb-5">{faq.a}</span>
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
