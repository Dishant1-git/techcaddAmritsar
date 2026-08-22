"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  ChevronRight,
  Clock,
  MonitorPlay,
  Rocket,
  Signal,
  UserRound,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import type { AiCourseView, AiIcon } from "@/lib/ai-course";
import { site } from "@/lib/content";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";

const CHIP_ICON: Record<AiIcon, typeof Rocket> = {
  live: Rocket,
  mentor: UserRound,
  certificate: BadgeCheck,
  placement: Briefcase,
};

/**
 * The AI core: a labelled centre plate ringed by two counter-rotating orbits
 * carrying the course's own tool names.
 *
 * Purely decorative, so it is aria-hidden — the tools it shows are listed
 * accessibly further down the page in the tool mesh section.
 */
function AiCore({ course }: { course: Course }) {
  const reduce = useReducedMotion();
  const inner = course.tools.slice(0, 4);
  const outer = course.tools.slice(4, 10);

  function ring(
    items: string[],
    radius: number,
    duration: number,
    reverse: boolean,
  ) {
    return (
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: reverse ? -360 : 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.map((tool, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.span
              key={tool}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                marginLeft: `${Math.cos(angle) * radius}%`,
                marginTop: `${Math.sin(angle) * radius}%`,
              }}
              /* Counter-rotate so the labels stay upright as the ring turns. */
              animate={reduce ? undefined : { rotate: reverse ? 360 : -360 }}
              transition={{ duration, ease: "linear", repeat: Infinity }}
            >
              <span className="block rounded-lg border border-white/12 bg-ink/70 px-2.5 py-1.5 text-[0.65rem] font-medium whitespace-nowrap text-white/65 backdrop-blur-md">
                {tool}
              </span>
            </motion.span>
          );
        })}
      </motion.div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg"
    >
      {/* Orbit guides. */}
      <span className="absolute inset-[22%] rounded-full border border-white/8" />
      <span className="absolute inset-[6%] rounded-full border border-white/[0.06]" />

      {ring(inner, 28, 34, false)}
      {ring(outer, 46, 52, true)}

      {/* Centre plate. */}
      <motion.div
        initial={reduce ? false : { scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-brand-300/35 bg-ink/70 shadow-[0_0_60px_-8px_rgb(96_165_250/0.65)] backdrop-blur-xl sm:size-36"
      >
        <span className="font-display bg-gradient-to-br from-white via-brand-100 to-brand-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
          AI
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.22em] text-brand-300/80 uppercase">
          {course.category}
        </span>
      </motion.div>

      <div className="absolute inset-[18%] -z-10 rounded-full bg-brand-500/20 blur-[80px]" />
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

export default function AiHero({
  course,
  view,
}: {
  course: Course;
  view: AiCourseView;
}) {
  const meta = [
    { icon: Clock, label: course.spec[0].value },
    { icon: Signal, label: course.spec[1].value },
    { icon: MonitorPlay, label: course.spec[2].value },
  ];

  return (
    <section
      aria-labelledby="ai-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-24"
    >
      <AiBackdrop />
      <div
        aria-hidden="true"
        className="animate-beam absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-transparent via-brand-400/12 to-transparent opacity-0 will-change-transform"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* --------------------------------------------------------- copy */}
          <Stagger className="lg:col-span-7" gap={0.08}>
            <FadeUp>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li>
                    <Link
                      href="/courses"
                      className="transition-colors hover:text-white"
                    >
                      Courses
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li aria-current="page" className="text-white/70">
                    {course.title}
                  </li>
                </ol>
              </nav>
            </FadeUp>

            <FadeUp className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {view.hero.eyebrow}
              </span>
              {course.badge && (
                <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                  {course.badge}
                </span>
              )}
            </FadeUp>

            <WordsUp
              as="h1"
              text={view.hero.headline}
              accent={view.hero.accent}
              className="mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.4rem]"
              delay={0.12}
            />
            <span id="ai-hero-heading" className="sr-only">
              {course.title} course in {site.city}
            </span>

            <FadeUp className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
              {view.hero.body}
            </FadeUp>

            {/* Delivery facts, then the promise chips — two different kinds of
                claim, so they are kept as two separate rails. */}
            <FadeUp className="mt-8 flex flex-wrap items-center gap-2.5">
              {meta.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
                >
                  <Icon
                    className="size-3.5 text-brand-400"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </FadeUp>

            <FadeUp className="mt-3 flex flex-wrap items-center gap-2.5">
              {view.hero.chips.map((chip) => {
                const Icon = CHIP_ICON[chip.icon];
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-500/12 px-3.5 py-2 text-xs font-medium text-brand-100 ring-1 ring-brand-400/25 ring-inset"
                  >
                    <Icon
                      className="size-3.5 text-brand-300"
                      aria-hidden="true"
                    />
                    {chip.label}
                  </span>
                );
              })}
            </FadeUp>

            <FadeUp className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book a free demo class
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#ai-curriculum"
                className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                See the curriculum
              </Link>
            </FadeUp>
          </Stagger>

          {/* --------------------------------------------------------- core */}
          <div className="lg:col-span-5">
            <AiCore course={course} />
          </div>
        </div>

        {/* -------------------------------------------------------- stat band */}
        <Stagger
          as="ul"
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-3"
          gap={0.08}
        >
          {view.hero.stats.map((stat) => (
            <FadeUp as="li" key={stat.label} className="bg-ink/70 px-6 py-7">
              <p className="font-display text-3xl font-semibold text-white lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-white/75">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-white/40">{stat.note}</p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
