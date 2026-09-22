"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/section-head";
import EnquiryForm from "@/components/enquiry/enquiry-form";
import SuccessModal from "@/components/enquiry/success-modal";
import { Reveal } from "@/components/motion/reveal";
import { telHref, whatsappHref, site } from "@/lib/site";
import Link from "next/link";

export default function Enquiry() {
  const [thanks, setThanks] = useState(false);

  return (
    <section className="py-24 bg-oak-deep text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionHead
            light
            eyebrow="Enquire"
            title="One form. A call. A morning on site."
            text="Ask for a price, a callback, or a visit. We will not stack three more forms under this one."
          />
          <div className="mt-10 space-y-3 text-cream/80">
            <p>Sales desk · {site.phoneDisplay}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={telHref} title="Call Oak Hills" className="border border-cream/40 px-5 py-2.5 hover:bg-cream/10">
                Call
              </Link>
              <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" title="WhatsApp Oak Hills" className="border border-cream/40 px-5 py-2.5 hover:bg-cream/10">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <Reveal className="bg-paper text-ink p-6 md:p-8">
          <h3 className="text-2xl text-oak-deep mb-6">Write to the desk</h3>
          <EnquiryForm onSuccess={() => setThanks(true)} />
        </Reveal>
      </div>
      <SuccessModal open={thanks} onClose={() => setThanks(false)} />
    </section>
  );
}
