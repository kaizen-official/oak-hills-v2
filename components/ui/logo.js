import Link from "next/link";
import Image from "next/image";

export default function Logo({ light = false, stacked = false }) {
  const mark = light ? "/logo-mark-light.png" : "/logo-mark.png";
  const type = light ? "text-cream" : "text-oak-deep";

  if (stacked) {
    return (
      <Link href="/" title="Oak Hills home" className="inline-flex flex-col items-start">
        <Image src={mark} alt="" aria-hidden="true" width={840} height={760} className="h-12 w-auto object-contain" />
        <span className={`mt-2 font-serif text-xl font-semibold leading-none tracking-[0.16em] ${type}`}>OAK HILLS</span>
      </Link>
    );
  }

  return (
    <Link href="/" title="Oak Hills home" className="group flex items-center gap-3">
      <Image src={mark} alt="" aria-hidden="true" width={840} height={760} className="h-10 w-auto object-contain lg:h-12" priority />
      <span className="flex flex-col">
        <span className={`font-serif text-xl font-semibold leading-none tracking-[0.16em] lg:text-2xl ${type}`}>OAK HILLS</span>
      </span>
    </Link>
  );
}
