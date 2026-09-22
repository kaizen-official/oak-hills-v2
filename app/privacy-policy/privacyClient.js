"use client";

import BgLayout from "@/components/layout/bgLayout";
import PageHero from "@/components/ui/page-hero";

const sections = [
  {
    title: "1. Information we collect",
    body: "When you enquire, book a visit, request a callback, or ask for pricing, we collect your name, phone number, optional email, preferred visit date, and any message you type. Call and WhatsApp records may also sit with the sales desk.",
  },
  {
    title: "2. How we use it",
    body: "We use this information only to answer your request, schedule a site visit, share registered project details, and follow up on inventory. We do not sell enquiry lists.",
  },
  {
    title: "3. Where it is stored",
    body: "Form submissions are written to our lead sheet for the sales desk. Access is limited to people who handle Oak Hills enquiries.",
  },
  {
    title: "4. Sharing",
    body: "We may share details with HARERA or other authorities if the law requires it, and with lenders or channel partners only when you ask us to introduce you.",
  },
  {
    title: "5. Retention",
    body: "Enquiry records are kept for as long as they are useful to complete a booking or as required by real-estate and tax law, then deleted or archived.",
  },
  {
    title: "6. Your choices",
    body: "Write to the sales desk or call +91 90530 77702 to correct a record or ask us to stop follow-up calls. We will still keep what the law requires us to keep.",
  },
];

export default function PrivacyPage() {
  return (
    <BgLayout>
      <PageHero
        title="Privacy policy"
        kicker="How the desk treats your name"
        image="/images/lawn.jpg"
        imageAlt="Lawn at Oak Hills"
      />
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-stone leading-relaxed">
            This policy covers oakhills.in and the forms, calls, and WhatsApp messages used to sell Oak Hills Residences in Sonipat.
          </p>
          {sections.map((item) => (
            <article key={item.title}>
              <h2 className="text-2xl text-oak-deep mb-3">{item.title}</h2>
              <p className="text-stone leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </BgLayout>
  );
}
