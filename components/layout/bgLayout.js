"use client";

import Header from "./header";
import Footer from "./footer";
import FloatCta from "../sections/floatCta";

export default function BgLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative bg-paper text-ink pb-16 sm:pb-0">{children}</main>
      <FloatCta />
      <Footer />
    </>
  );
}
