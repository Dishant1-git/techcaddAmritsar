"use client";

import { Globe2, Layers, TrendingUp, Wrench, type LucideIcon } from "lucide-react";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

const DRIVER_ICONS: LucideIcon[] = [TrendingUp, Layers, Wrench, Globe2];

const TINTS = [
  "bg-brand-50 text-brand-600",
  "bg-gold-100 text-gold-700",
  "bg-accent/10 text-accent",
  "bg-brand-100 text-brand-800",
] as const;

/**
 * Future scope. Sits after the careers/outcomes panel on every course page —
 * the "where does this actually go" answer, framed as durability rather than a
 * number, with the hedge ("markets move") left in on purpose.
 */
export default function CourseFutureScope({ course }: { course: Course }) {
  const { futureScope } = course;

  return (
    <section
      id="future-scope"
      aria-labelledby="future-scope-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Future scope
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text={futureScope.heading}
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="future-scope-heading" className="sr-only">
            {futureScope.heading}
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            {futureScope.intro}
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16"
          gap={0.08}
        >
          {futureScope.drivers.map((driver, i) => {
            const Icon = DRIVER_ICONS[i % DRIVER_ICONS.length];
            const tint = TINTS[i % TINTS.length];

            return (
              <FadeUp
                as="li"
                key={driver.title}
                className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_20px_40px_-30px_rgb(15_23_42/0.5)]"
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl ${tint}`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="font-display block text-base leading-snug font-semibold text-ink">
                    {driver.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {driver.body}
                  </span>
                </span>
              </FadeUp>
            );
          })}
        </Stagger>

        <FadeUp
          standalone
          className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:p-7"
        >
          <p className="text-sm leading-relaxed text-ink-mute">
            {futureScope.horizon}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
