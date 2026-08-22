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
              accentClassName="text-gold-300"
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
        </Reveal>
      </div>
    </section>
  );
}
