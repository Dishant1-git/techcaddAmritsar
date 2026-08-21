"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { aiMenu } from "@/lib/content";
import { cn } from "@/lib/utils";

const GROUP_ICON = { sparkles: Sparkles, bolt: Zap };

/**
 * Bespoke AI mega panel: two icon-led link groups, a featured course card and
 * a gradient promo rail. Shares the open/close mechanics of MegaMenu — it
 * stays mounted while closed so the transition runs both ways.
 */
export default function AiMega({
  open,
  onNavigate,
  id,
}: {
  open: boolean;
  onNavigate: () => void;
  id: string;
}) {
  return (
    <div
      id={id}
      aria-hidden={!open}
      className={cn(
        "absolute inset-x-0 top-full hidden pt-3 transition-all duration-300 xl:block",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0",
      )}
    >
      <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-brand-50 shadow-[0_40px_90px_-30px_rgb(15_23_42/0.45)]">
        {/* Gradient hairline across the top edge. */}
        <div
          aria-hidden="true"
          className="h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-violet-500"
        />

        <div className="grid grid-cols-4 gap-7 p-8">
          {/* ------------------------------------------- link groups (half) */}
          <div className="col-span-2">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {aiMenu.title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {aiMenu.body}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6">
              {aiMenu.groups.map((group) => {
                const Icon = GROUP_ICON[group.icon];
                return (
                  <div key={group.label}>
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-[0_6px_16px_-6px_rgb(37_99_235/0.9)]">
                        <Icon className="size-4 fill-current" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {group.label}
                      </h3>
                    </div>

                    <ul className="mt-4 flex flex-col gap-0.5 border-t border-line pt-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onNavigate}
                            className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg px-2.5 py-1.5 text-sm leading-snug text-ink-mute transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                          >
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="shrink-0 rounded-md bg-gradient-to-br from-brand-500 to-brand-600 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-[0.08em] text-white uppercase">
                                {link.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ------------------------------------------ featured course card */}
          <Link
            href={aiMenu.featured.href}
            onClick={onNavigate}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {/* Artwork stands in for photography: a glowing AI plate on a
                circuit-textured gradient. */}
            <div className="relative grid h-40 place-items-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500">
              <div
                aria-hidden="true"
                className="circuit-texture absolute inset-0 opacity-50"
              />
              <div
                aria-hidden="true"
                className="dot-matrix absolute inset-0 opacity-[0.08]"
              />
              <span className="font-display relative rounded-xl border border-brand-300/50 bg-ink/50 px-5 py-2.5 text-2xl font-bold tracking-tight text-brand-100 shadow-[0_0_30px_-4px_rgb(96_165_250/0.8)] backdrop-blur-sm">
                AI
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2.5 p-4">
              <span className="w-fit rounded-md bg-gradient-to-br from-brand-500 to-brand-600 px-2 py-1 text-[0.6rem] font-bold tracking-[0.1em] text-white uppercase">
                {aiMenu.featured.eyebrow}
              </span>
              <h3 className="font-display text-base leading-snug font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">
                {aiMenu.featured.title}
              </h3>
            </div>
          </Link>

          {/* --------------------------------------------------- promo rail */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 p-6 text-white shadow-[0_20px_50px_-24px_rgb(37_99_235/0.9)]">
            <p className="font-display text-lg leading-snug font-semibold text-balance">
              {aiMenu.promo.body}
            </p>

            <Link
              href={aiMenu.promo.cta.href}
              onClick={onNavigate}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium ring-1 ring-white/30 ring-inset backdrop-blur-sm transition-colors duration-300 hover:bg-white/25"
            >
              {aiMenu.promo.cta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
