"use client";

import { Layers } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Portfolio projects. The first one is given the wide card because it is the
 * project students are most often asked to walk through in an interview.
 */
export default function CourseProjects({ course }: { course: Course }) {
  const [lead, ...rest] = course.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                What you build
              </span>
            </FadeUp>
            <WordsUp
              as="h2"
              text="Projects that answer"
              accent="the interview question for you"
              accentClassName="text-gold-500"
              className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="projects-heading" className="sr-only">
              Portfolio projects
            </span>
          </div>
          <FadeUp standalone className="text-sm text-muted lg:max-w-xs lg:text-right">
            Each project is reviewed individually, and the review notes go into
            your portfolio documentation.
          </FadeUp>
        </div>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-12" gap={0.1}>
          <FadeUp className="lg:col-span-12">
            <article className="group relative overflow-hidden rounded-3xl border border-line bg-ink p-8 text-white transition-all duration-500 hover:border-brand-500/40 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-70"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900/70 via-ink to-accent/45" />
                <div className="grid-overlay absolute inset-0 opacity-30" />
                <div className="absolute -top-24 -right-16 size-80 rounded-full bg-brand-600/30 blur-[100px] transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 ring-inset">
                  <Layers className="size-4 text-brand-300" aria-hidden="true" />
                </span>
                <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-300 uppercase">
                  Flagship project
                </span>
              </div>

              <h3 className="font-display mt-6 max-w-2xl text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                {lead.body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {lead.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>

          {rest.map((project, i) => (
            <FadeUp
              key={project.title}
              className={cn("lg:col-span-6", rest.length === 1 && "lg:col-span-12")}
            >
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-40px_rgb(37_99_235/0.5)]">
                <span className="font-display text-sm font-semibold text-brand-600">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl leading-snug font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-line bg-brand-50/60 px-2.5 py-1.5 text-xs font-medium text-ink-mute"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
