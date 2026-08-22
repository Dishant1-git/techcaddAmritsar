"use client";

import { ArrowRight } from "lucide-react";
import { technologies } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import TabGroup from "@/components/ui/TabGroup";
import { Eyebrow } from "@/components/ui/Section";
import Link from "next/link";

export default function Technologies() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute left-1/3 top-1/4 size-[36rem] rounded-full bg-brand-700/20 blur-[140px]" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <Eyebrow dark>{technologies.eyebrow}</Eyebrow>
            <SplitHeading
              id="technologies-heading"
              text={technologies.heading}
              accent={technologies.accent}
              className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
              accentClassName="text-brand-400"
            />
            <p className="max-w-xl text-base leading-relaxed text-white/60">
              {technologies.body}
            </p>
          </div>
          <Link
            href={technologies.cta.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-white"
          >
            {technologies.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

<<<<<<< Updated upstream
        <Reveal delay={120} className="mt-12">
          <TabGroup
            dark
            labels={technologies.tabs.map((tab) => tab.label)}
            renderPanel={(index) => (
              <ul className="flex flex-wrap gap-2.5">
                {technologies.tabs[index].items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-white/[0.08] hover:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          />
        </Reveal>

        <Reveal
          delay={200}
          className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/10 pt-8"
        >
          <span className="font-display text-2xl font-bold text-white">
            {technologies.footnote.value}
          </span>
          <span className="text-sm text-white/50">
            {technologies.footnote.label}
          </span>
=======
        {/* --------------------------------------- category rail + tiles */}
        <Reveal delay={120} className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm lg:p-7">
            <TabGroup
              dark
              orientation="vertical"
              labels={technologies.tabs.map((tab) => tab.label)}
              listClassName="lg:w-56 xl:w-64"
              renderLabel={(label, index, selected) => (
                <span className="flex items-center justify-between gap-3">
                  {label}
                  <span
                    className={cn(
                      "hidden rounded-full px-2 py-0.5 text-[0.65rem] tabular-nums transition-colors duration-300 lg:inline-block",
                      selected
                        ? "bg-ink/10 text-ink/70"
                        : "bg-white/10 text-white/50",
                    )}
                  >
                    {technologies.tabs[index].items.length}
                  </span>
                </span>
              )}
              renderPanel={(index) => (
                <ul className="grid min-h-64 grid-cols-2 gap-3 sm:grid-cols-3">
                  {technologies.tabs[index].items.map((item) => (
                    <li key={item}>
                      <span className="group/tile relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-white/[0.09]">
                        {/* Glow that blooms from the badge on hover. */}
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 size-20 rounded-full bg-brand-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover/tile:opacity-100"
                        />
                        <span className="relative grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-white/20 to-white/[0.04] text-xs font-semibold text-brand-200 ring-1 ring-white/10 ring-inset transition-colors duration-300 group-hover/tile:text-white">
                          {monogram(item)}
                        </span>
                        <span className="relative truncate text-sm text-white/75 transition-colors duration-300 group-hover/tile:text-white">
                          {item}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            />
          </div>
>>>>>>> Stashed changes
        </Reveal>
      </div>
    </section>
  );
}
