"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Phasing: the same modules regrouped into the three stages a batch actually
 * moves through. The spine fills as the section scrolls, so progress down the
 * page maps onto progress through the programme — the one place on this page
 * where a numbered sequence carries real information.
 */
export default function CoursePhases({ course }: { course: Course }) {
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

  const modules = course.modules;
  const cut = Math.ceil(modules.length / 3);

  const phases = [
    {
      label: "Stage one",
      title: "Foundations",
      body: "Fundamentals, vocabulary and the first working artefacts. Nothing is assumed; everything is implemented.",
      modules: modules.slice(0, cut),
    },
    {
      label: "Stage two",
      title: "Core practice",
      body: "The professional middle of the course. Real tooling, realistic inputs, and mentor review on every submission.",
      modules: modules.slice(cut, cut * 2),
    },
    {
      label: "Stage three",
      title: "Advanced & capstone",
      body: "Depth, deployment and the capstone build that becomes the centre of your portfolio and your interview answers.",
      modules: modules.slice(cut * 2),
    },
  ].filter((phase) => phase.modules.length > 0);

  return (
    <section
      id="phases"
      aria-labelledby="phases-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              How the programme is paced
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="Three stages, in the order"
            accent="a working practitioner learns them"
            accentClassName="text-brand-600"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="phases-heading" className="sr-only">
            Programme stages
          </span>
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

          <Stagger className="space-y-12 lg:space-y-16" gap={0.12}>
            {phases.map((phase, i) => (
              <FadeUp key={phase.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-10 grid size-5 place-items-center rounded-full border-2 border-white bg-brand-600 shadow-[0_0_0_4px_rgb(219_234_254/0.9)] sm:-left-16"
                >
                  <span className="size-1.5 rounded-full bg-white" />
                </span>

                <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-5">
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-600 uppercase">
                      {phase.label}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
                      {phase.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      {phase.body}
                    </p>
                    <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
                      Modules {phase.modules[0].code} –{" "}
                      {phase.modules[phase.modules.length - 1].code}
                    </p>
                  </div>

                  <ul className="grid gap-2.5 lg:col-span-7">
                    {phase.modules.map((module) => (
                      <li
                        key={module.code}
                        className="group flex items-center gap-4 rounded-xl border border-line bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_16px_36px_-24px_rgb(37_99_235/0.45)]"
                      >
                        <span className="font-display text-xs font-semibold text-brand-600">
                          {module.code}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {module.title}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted">
                            {module.skills.join(" · ")}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </Stagger>
        </div>

        <FadeUp
          standalone
          className="mt-16 rounded-3xl border border-line bg-brand-50/50 px-7 py-8 text-center lg:px-12"
        >
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-mute">
            {course.closing}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
