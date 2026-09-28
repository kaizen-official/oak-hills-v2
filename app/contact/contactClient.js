"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";
import EnquiryForm from "@/components/enquiry/enquiry-form";
import SuccessModal from "@/components/enquiry/success-modal";
import { site, telHref, whatsappHref } from "@/lib/site";

export default function ContactPage() {
  const [thanks, setThanks] = useState(false);

  return (
    <BgLayout>
      <PageHero
        title="Contact"
        kicker="The sales desk"
        image="/images/agamya-prime/generated/elevator-lobby.jpg"
        imageAlt="Premium arrival lobby at Agamya Prime"
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
          <aside>
            <h2 className="text-4xl text-oak-deep">Come once. Call as often as you need.</h2>
            <p className="mt-4 text-stone leading-relaxed">
              Use the form for an enquiry, a visit, a callback, or a price. WhatsApp and phone stay on the same page so you are not hunted by a second pop-up.
            </p>
            <ul className="mt-10 space-y-5 text-oak-deep">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-bronze" />
                <span>{site.addressLines.join(", ")}</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-bronze" />
                <a href={telHref}>{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-3 items-center">
                <FaWhatsapp className="text-bronze" />
                <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  WhatsApp the desk
                </Link>
              </li>
            </ul>
          </aside>
          <div className="bg-cream p-6 md:p-8">
            <h3 className="text-2xl text-oak-deep mb-6">Write to us</h3>
            <EnquiryForm onSuccess={() => setThanks(true)} />
          </div>
        </div>
      </section>
      <SuccessModal open={thanks} onClose={() => setThanks(false)} />
    </BgLayout>
  );
}
