"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { TrainingSeed } from "@/lib/training-data";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * How the duration is spent, span by span.
 *
 * This replaces the course pages' `CoursePhases`, which infers three stages
 * from the length of the module list. That inference is right for a subject and
 * wrong for a format: someone reading a 45-day page is buying a calendar, so
 * the spans are stated outright — and they are uneven on purpose, because a
 * six-month programme is not two weeks repeated twelve times.
 */
export default function TrainingPlan({
  title,
  duration,
  plan,
}: {
  title: string;
  duration: string;
  plan: TrainingSeed["plan"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="plan"
      aria-labelledby="plan-heading"
      className="scroll-mt-28 bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Where the {duration.toLowerCase()} goes
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="The calendar, spelled out"
            accent="before you enrol"
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="plan-heading" className="sr-only">
            {title} schedule
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            No block is padding and none of it is a lecture series. Each span
            below ends in something a trainer has signed off on.
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-14 pl-10 sm:pl-16">
          {/* Spine: a static hairline with a scroll-driven brand fill on top. */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-line sm:left-[1.6rem]"
          />
          <motion.span
            aria-hidden="true"
            style={reduce ? { scaleY: 1 } : { scaleY: fill }}
            className="absolute top-2 bottom-2 left-[0.6rem] w-px origin-top bg-gradient-to-b from-brand-500 via-brand-600 to-accent sm:left-[1.6rem]"
          />

          <Stagger as="ol" className="space-y-4 lg:space-y-5" gap={0.1}>
            {plan.map((step, i) => (
              <FadeUp as="li" key={step.span} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-7 -left-10 grid size-5 place-items-center rounded-full border-2 border-white bg-brand-600 shadow-[0_0_0_4px_rgb(219_234_254/0.9)] sm:-left-16"
                >
                  <span className="size-1.5 rounded-full bg-white" />
                </span>

                <div className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_24px_50px_-38px_rgb(15_23_42/0.45)] lg:p-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-sm font-semibold text-brand-600">
                      {step.span}
                    </span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted uppercase">
                      Step {String(i + 1).padStart(2, "0")} of{" "}
                      {String(plan.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-xl leading-snug font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
