"use client";

import { cn } from "@/lib/utils";

type MarqueeProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Seconds for one full pass. */
  duration?: number;
  reverse?: boolean;
  /** Hold the row still while the pointer is over it. */
  pauseOnHover?: boolean;
  className?: string;
};

/**
 * Seamless horizontal scroller. The track holds the items twice — the clone is
 * `aria-hidden` — and translates by exactly -50%, so the loop has no seam.
 * Pauses on hover unless `pauseOnHover` is off; disabled entirely under
 * prefers-reduced-motion (globals.css).
 */
export default function Marquee<T>({
  items,
  renderItem,
  duration = 60,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps<T>) {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      // Edges fade out so cards don't collide with the viewport boundary.
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex w-max gap-5",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={
          { "--marquee-duration": `${duration}s` } as React.CSSProperties
        }
      >
        {items.map((item, i) => (
          <div key={`a-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`b-${i}`} className="shrink-0" aria-hidden="true">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
