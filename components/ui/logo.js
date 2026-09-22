import Link from "next/link";

export default function Logo({ light = false, stacked = false }) {
  const mark = light ? "/logo-mark-light.png" : "/logo-mark.png";
  const type = light ? "text-cream" : "text-oak-deep";

  if (stacked) {
    return (
      <Link href="/" title="Oak Hills home" className="flex flex-col items-start">
        <img src={mark} alt="" className="h-12 w-auto object-contain" />
        <span className={`mt-1 text-lg tracking-widest ${type}`}>OAK HILLS</span>
      </Link>
    );
  }

  return (
    <Link href="/" title="Oak Hills home" className="flex items-center gap-3">
      <img src={mark} alt="" className="h-10 lg:h-12 w-auto object-contain" />
      <span className={`text-xl lg:text-2xl tracking-widest ${type}`}>OAK HILLS</span>
    </Link>
  );
}
