"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronRight, Clock, MonitorPlay, Signal } from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * The syllabus deck: the first three modules as physical, stacked cards that
 * fan apart on load and tilt with the pointer.
 *
 * This is the page's signature element — a course is a sequence of modules, so
 * the hero shows the actual sequence rather than a generic illustration.
 */
function SyllabusDeck({ course }: { course: Course }) {
  const reduce = useReducedMotion();
  const cards = course.modules.slice(0, 3);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 110, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), spring);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem] lg:h-[34rem] lg:max-w-none"
      style={{ perspective: 1400 }}
      aria-hidden="true"
    >
      <motion.div
        className="relative size-full"
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {cards.map((module, i) => {
          /* Front card is index 0; the others sit behind and above it. */
          const depth = cards.length - 1 - i;
          return (
            <motion.article
              key={module.code}
              initial={reduce ? false : { opacity: 0, y: 40, rotate: 0, scale: 0.94 }}
              animate={{
                opacity: 1,
                y: depth * -26,
                rotate: depth === 0 ? 0 : depth === 1 ? -3.5 : -7,
                scale: 1 - depth * 0.045,
              }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: EASE }}
              style={{
                zIndex: 10 - depth,
                translateZ: depth * -40,
              }}
              className={cn(
                "absolute inset-x-0 top-8 origin-bottom rounded-3xl border border-white/12 p-6 backdrop-blur-xl",
                depth === 0
                  ? "bg-ink/85 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.9)]"
                  : "bg-ink/60",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[0.65rem] font-semibold tracking-[0.24em] text-brand-400 uppercase">
                  Module {module.code}
                </span>
                <span className="text-[0.65rem] tracking-[0.16em] text-white/35 uppercase">
                  {course.category}
                </span>
              </div>

              <h3 className="font-display mt-3 text-lg leading-snug font-semibold text-white sm:text-xl">
                {module.title}
              </h3>

              <ul className="mt-5 space-y-2.5">
                {module.skills.slice(0, 3).map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-white/60"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-brand-400" />
                    {skill}
                  </li>
                ))}
              </ul>

              {depth === 0 && (
                <>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {module.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-white/8 px-2 py-1 text-[0.7rem] text-white/55 ring-1 ring-white/10 ring-inset"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/20 to-accent/25 p-4">
                    <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-200 uppercase">
                      You finish with
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {module.deliverable}
                    </p>
                  </div>
                </>
              )}
            </motion.article>
          );
        })}
      </motion.div>

      {/* Ambient glow anchored behind the deck. */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

export default function CourseHero({ course }: { course: Course }) {
  const meta = [
    { icon: Clock, label: course.spec[0].value },
    { icon: Signal, label: course.spec[1].value },
    { icon: MonitorPlay, label: course.spec[2].value },
  ];

  return (
    <>
      <section
        aria-labelledby="course-hero-heading"
        className="relative isolate overflow-hidden bg-ink pt-32 pb-36 text-white lg:pt-40 lg:pb-44"
      >
        {/*
          Background stack — decorative. Unlike the homepage hero, which drifts
          a single circuit layer, this one is built from counter-moving layers:
          traces crawl up-left, the grid pans down-right, two aurora blooms
          breathe on different periods, and a scan beam falls through it all.
          Every animation is disabled under prefers-reduced-motion in
          globals.css; the beam starts at opacity 0 so it stays hidden there.
        */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
          <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-[0.28]" />
          <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
          <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
          <div className="animate-aurora-a absolute -top-[22%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
          <div className="animate-aurora-b absolute -right-40 bottom-[-32%] size-[38rem] rounded-full bg-accent/45 blur-[130px] will-change-transform" />
          <div className="animate-beam absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-transparent via-brand-400/12 to-transparent opacity-0 will-change-transform" />
          <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            {/* ------------------------------------------------------ copy */}
            <Stagger className="lg:col-span-7" gap={0.09}>
              <FadeUp>
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
                    <li>
                      <Link href="/" className="transition-colors hover:text-white">
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
                  {course.hero.eyebrow}
                </span>
                {course.badge && (
                  <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                    {course.badge}
                  </span>
                )}
              </FadeUp>

              <WordsUp
                as="h1"
                text={course.hero.headline}
                accent={course.hero.accent}
                className="mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.6rem]"
                delay={0.15}
              />
              <span id="course-hero-heading" className="sr-only">
                {course.title} course in {site.city}
              </span>

              <FadeUp className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {course.hero.tagline}
              </FadeUp>

              <FadeUp className="mt-8 flex flex-wrap items-center gap-2.5">
                {meta.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
                  >
                    <Icon className="size-3.5 text-brand-400" aria-hidden="true" />
                    {label}
                  </span>
                ))}
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
                  href="#curriculum"
                  className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See the curriculum
                </Link>
              </FadeUp>
            </Stagger>

            {/* ------------------------------------------------------ deck */}
            <div className="lg:col-span-5">
              <SyllabusDeck course={course} />
            </div>
          </div>
        </div>
      </section>

      {/* Stat rail — a light card straddling the dark/light seam. */}
      <div className="relative z-20 -mt-16 lg:-mt-20">
        <div className="container-page">
          <Stagger
            as="ul"
            className="grid gap-px overflow-hidden rounded-3xl bg-line shadow-[0_30px_70px_-40px_rgb(15_23_42/0.5)] sm:grid-cols-2 lg:grid-cols-4"
            gap={0.07}
          >
            {course.stats.map((stat) => (
              <FadeUp as="li" key={stat.label} className="bg-white px-6 py-7">
                <p className="font-display text-3xl font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </>
  );
}
