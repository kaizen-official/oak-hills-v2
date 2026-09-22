import { site } from "@/lib/site";

export default function ReraLine({ compact = false, light = false }) {
  const size = compact ? "text-xs" : "text-sm";
  const tone = light ? "text-cream" : "text-oak-deep";
  const mark = light ? "text-bronze-light" : "text-bronze";

  return (
    <p className={`${size} tracking-widest uppercase ${tone}`}>
      RERA Approved <span className={mark}>·</span> {site.rera}
    </p>
  );
}
