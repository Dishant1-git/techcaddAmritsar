"use client";

import { Check } from "lucide-react";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Overview. The reference layouts put prose on the left and a media panel on
 * the right; this one inverts it — the hard facts sit in a sticky ledger on the
 * left where they stay readable while the prose scrolls past.
 */
export default function CourseOverview({ course }: { course: Course }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ------------------------------------------------------ ledger */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                  <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                  Programme facts
                </span>
              </FadeUp>

              <Stagger as="ul" className="mt-7 border-t border-line" gap={0.06}>
                {course.spec.map((row) => (
                  <FadeUp
                    as="li"
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                  >
                    <span className="text-sm text-muted">{row.label}</span>
                    <span className="font-display text-right text-sm font-semibold text-ink">
                      {row.value}
                    </span>
                  </FadeUp>
                ))}
              </Stagger>

              <FadeUp
                standalone
                className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6"
              >
                <p className="font-display text-sm font-semibold text-ink">
                  Not sure this is the right track?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A counselling call maps your background against the syllabus
                  before you commit to anything. It takes about twenty minutes.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
                >
                  Book a counselling call
                </a>
              </FadeUp>
            </div>
          </div>

          {/* ------------------------------------------------------- prose */}
          <div className="lg:col-span-7">
            <WordsUp
              as="h2"
              text={course.overview.heading}
              className="max-w-xl text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
              accentClassName="text-gold-600"
            />
            <span id="overview-heading" className="sr-only">
              {course.overview.heading}
            </span>

            <Stagger className="mt-7 space-y-5" gap={0.09}>
              {course.overview.paragraphs.map((paragraph, i) => (
                <FadeUp
                  as="p"
                  key={i}
                  className={
                    i === 0
                      ? "border-l-2 border-brand-500 pl-5 text-lg leading-relaxed font-medium text-ink"
                      : "text-base leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </FadeUp>
              ))}
            </Stagger>

            <Stagger
              as="ul"
              className="mt-10 grid gap-3 sm:grid-cols-2"
              gap={0.07}
            >
              {course.overview.checks.map((check) => (
                <FadeUp
                  as="li"
                  key={check}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors duration-300 hover:border-brand-200"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600"
                    aria-hidden="true"
                  >
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-mute">
                    {check}
                  </span>
                </FadeUp>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
