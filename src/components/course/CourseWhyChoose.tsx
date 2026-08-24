"use client";

import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Why choose. Six concrete reasons to enrol here, laid out as the same
 * numbered-tile grid the AI mega-menu pages use for the equivalent argument —
 * kept as its own component because the standard and after-12th page shapes
 * have no analogue for it otherwise.
 */
export default function CourseWhyChoose({ course }: { course: Course }) {
  const { whyChoose } = course;

  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-50 blur-[130px]"
      />

      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Why choose {course.title}
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text={whyChoose.heading}
            accent={whyChoose.accent}
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="why-choose-heading" className="sr-only">
            {whyChoose.heading} {whyChoose.accent}
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            {whyChoose.body}
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          gap={0.06}
        >
          {whyChoose.reasons.map((reason, i) => (
            <FadeUp
              as="li"
              key={reason.title}
              className="group relative bg-white p-7 transition-colors duration-300 hover:bg-brand-50/60"
            >
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-600/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-lg leading-snug font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {reason.body}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
