import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

/**
 * Placeholder wordmark: a monogram tile plus the TECHCADD / AMRITSAR lockup.
 * Swap the tile for the real logo asset when it lands.
 */
export default function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} ${site.city} — home`}
      className={cn("flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-lg bg-brand-600 font-display text-sm font-bold tracking-tight text-white"
      >
        TC
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight transition-colors duration-500",
            inverted ? "text-white" : "text-ink",
          )}
        >
          {site.wordmark}
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-semibold uppercase tracking-[0.32em] transition-colors duration-500",
            inverted ? "text-white/60" : "text-brand-600",
          )}
        >
          {site.wordmarkAccent}
        </span>
      </span>
    </Link>
  );
}
