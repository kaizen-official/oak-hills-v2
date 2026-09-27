"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { nav, site, telHref } from "@/lib/site";
import EnquiryModal from "@/components/enquiry/enquiry-modal";
import Logo from "@/components/ui/logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="bg-paper/95 border-b border-oak/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 lg:h-22 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7 text-oak-deep">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link hover:text-bronze">
                {item.label}
              </Link>
            ))}
          </nav>
          <DesktopActions onVisit={() => setFormOpen(true)} />
          <button
            type="button"
            className="lg:hidden text-oak-deep"
            title={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconX size={26} /> : <IconMenu2 size={26} />}
          </button>
        </div>
        <AnimatePresence>
          {open ? <MobileMenu onClose={() => setOpen(false)} onVisit={() => setFormOpen(true)} /> : null}
        </AnimatePresence>
      </div>
      <EnquiryModal open={formOpen} onClose={() => setFormOpen(false)} intent="visit" />
    </header>
  );
}

function DesktopActions({ onVisit }) {
  return (
    <div className="hidden lg:flex items-center gap-5">
      <Link href={telHref} className="text-oak-deep hover:text-bronze">
        {site.phoneDisplay}
      </Link>
      <button
        type="button"
        onClick={onVisit}
        title="Book a site visit"
        className="bg-oak-deep text-cream px-5 py-2.5 hover:bg-oak"
      >
        Book a site visit
      </button>
    </div>
  );
}

function MobileMenu({ onClose, onVisit }) {
  return (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden overflow-hidden border-t border-oak/10 bg-paper px-4 pb-6"
    >
      <ul className="flex flex-col gap-4 py-4 text-lg text-oak-deep">
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onClose}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <Link href={telHref} className="block text-center border border-oak/20 py-3 mb-3">
        {site.phoneDisplay}
      </Link>
      <button
        type="button"
        onClick={() => {
          onClose();
          onVisit();
        }}
        title="Book a site visit"
        className="w-full bg-oak-deep text-cream py-3"
      >
        Book a site visit
      </button>
    </motion.nav>
  );
}
