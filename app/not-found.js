import BgLayout from "@/components/layout/bgLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <BgLayout>
      <div className="min-h-svh flex items-center justify-center px-4 pt-32">
        <div className="max-w-xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze">404</p>
          <h1 className="text-5xl text-oak-deep mt-4">This path is not on the map.</h1>
          <p className="text-stone mt-4 leading-relaxed">
            The page has moved, or it never belonged to Oak Hills. Return home, or write to the desk from Contact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" title="Oak Hills home" className="bg-oak-deep text-cream px-6 py-3">
              Home
            </Link>
            <Link href="/residences" title="Residences" className="border border-oak-deep px-6 py-3">
              Residences
            </Link>
            <Link href="/contact" title="Contact" className="border border-oak-deep px-6 py-3">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </BgLayout>
  );
}
