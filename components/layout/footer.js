"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { footerNav, site, telHref, whatsappHref } from "@/lib/site";
import ReraLine from "@/components/ui/rera-line";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-oak-deep text-cream pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <BrandBlock />
          <nav aria-label="Footer">
            <h2 className="text-lg mb-4">On this site</h2>
            <ul className="space-y-2 text-cream/70">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cream">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ContactBlock />
        </div>
        <div className="border-t border-cream/15 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-cream/60">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Project information is subject to RERA filings and may be updated as required.</p>
        </div>
      </div>
      <Link
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Oak Hills"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-oak-deep text-cream px-4 py-3 items-center gap-2"
      >
        <FaWhatsapp size={22} />
        WhatsApp
      </Link>
    </footer>
  );
}

function BrandBlock() {
  return (
    <div>
      <div className="mb-5">
        <Logo light stacked />
      </div>
      <p className="text-cream/75 leading-relaxed mb-5">
        Agamya Prime brings premium 3 BHK residences to Sector 35, JGC (Jindal Global City), Sonipat.
      </p>
      <ReraLine light />
    </div>
  );
}

function ContactBlock() {
  return (
    <div>
      <h2 className="text-lg mb-4">Sales desk</h2>
      <ul className="space-y-4 text-cream/75">
        <li className="flex gap-3">
          <FaMapMarkerAlt className="mt-1 shrink-0" />
          <span>{site.addressLines.join(", ")}</span>
        </li>
        <li className="flex gap-3 items-center">
          <FaPhoneAlt className="shrink-0" />
          <a href={telHref} className="hover:text-cream">{site.phoneDisplay}</a>
        </li>
        <li className="flex gap-3 items-center">
          <FaWhatsapp className="shrink-0" />
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            WhatsApp the desk
          </a>
        </li>
      </ul>
    </div>
  );
}
