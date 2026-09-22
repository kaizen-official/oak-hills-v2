"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { telHref, whatsappHref } from "@/lib/site";

export default function FloatCta() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const top = footer.getBoundingClientRect().top;
      setShow(top > window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <section className="fixed bottom-0 sm:hidden left-0 right-0 z-40 flex shadow-2xl">
      <Link
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Oak Hills"
        className="w-1/2 bg-oak-deep text-cream py-3 flex items-center justify-center gap-2"
      >
        <FaWhatsapp className="text-2xl" />
        WhatsApp
      </Link>
      <Link
        href={telHref}
        title="Call the Oak Hills sales desk"
        className="w-1/2 bg-paper text-oak-deep py-3 flex items-center justify-center gap-2 border-t border-oak/10"
      >
        <FaPhone className="text-xl rotate-90" />
        Call
      </Link>
    </section>
  );
}
