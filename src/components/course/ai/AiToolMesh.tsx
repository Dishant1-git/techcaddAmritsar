"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * The tool stack drawn as a mesh: the course at the centre, every tool on a
 * ring around it, each wired back to the middle.
 *
 * Positions are computed from the tool count rather than hard-coded, so a
 * course with six tools and one with twelve both come out evenly spaced.
 * Hovering or focusing a node lights its spoke, which is what turns the
 * picture from decoration into something you can read.
 *
 * Built for the light panel: spokes are brand-tinted strokes that would vanish
 * on ink, and each node is a raised white chip rather than a glass plate.
 */
function Mesh({ course }: { course: Course }) {
  const [lit, setLit] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const tools = course.tools.slice(0, 12);
  const radius = 40;

  const nodes = tools.map((tool, i) => {
    const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
    return {
      tool,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.25"
          strokeDasharray="1.5 2.5"
          className="text-brand-300"
        />
        {nodes.map((node, i) => (
          <line
            key={node.tool}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth={lit === i ? 0.75 : 0.35}
            className={cn(
              "transition-all duration-300",
              lit === i ? "text-brand-600" : "text-brand-300/70",
            )}
          />
        ))}
      </svg>

      {/* Ring nodes — a real list so screen readers get the tool names. */}
      <ul>
        {nodes.map((node, i) => (
          <li
            key={node.tool}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <button
              type="button"
              onMouseEnter={() => setLit(i)}
              onMouseLeave={() => setLit(null)}
              onFocus={() => setLit(i)}
              onBlur={() => setLit(null)}
              className={cn(
                "rounded-xl border px-3 py-2 text-[0.7rem] font-medium whitespace-nowrap transition-all duration-300 sm:text-xs",
                lit === i
                  ? "-translate-y-0.5 border-brand-600 bg-brand-600 text-white shadow-[0_12px_28px_-14px_rgb(37_99_235/0.9)]"
                  : "border-line bg-white text-ink-mute shadow-[0_8px_20px_-16px_rgb(15_23_42/0.5)]",
              )}
            >
              {node.tool}
            </button>
          </li>
        ))}
      </ul>

      {/* Centre plate. */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="absolute top-1/2 left-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-center shadow-[0_25px_60px_-20px_rgb(37_99_235/0.85)] sm:size-40"
      >
        <span>
          <span className="font-display block text-sm leading-tight font-semibold text-white sm:text-base">
            {course.title}
          </span>
          <span className="mt-1 block text-[0.6rem] tracking-[0.18em] text-brand-200 uppercase">
            one course
          </span>
        </span>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-[22%] -z-10 rounded-full bg-brand-200/40 blur-[80px]"
      />
    </div>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiToolMesh({ course }: { course: Course }) {
  return (
    <section
      id="ai-tools"
      aria-labelledby="ai-tools-heading"
      className="relative overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-brand-50 blur-[130px]"
      />

      <div className="container-page">
        <AiHead
          id="ai-tools-heading"
          eyebrow="The working stack"
          heading="One course."
          accent="A mesh of real tools."
          body={`All ${course.tools.length} are installed, configured and used by you during the programme — none of them are demonstrated on a slide. You leave able to set the environment up from scratch on your own machine.`}
          centered
          className="mx-auto"
        />

        {/* The mesh needs room to be legible; below `sm` it collapses into a
            plain chip grid rather than overlapping labels. */}
        <div className="mt-14 hidden sm:block">
          <Mesh course={course} />
        </div>

        <Stagger
          as="ul"
          className="mt-10 flex flex-wrap gap-2 sm:hidden"
          gap={0.04}
        >
          {course.tools.map((tool) => (
            <FadeUp
              as="li"
              key={tool}
              className="rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink-mute"
            >
              {tool}
            </FadeUp>
          ))}
        </Stagger>

        {/* Grouped rails restate the same tools in the order you meet them. */}
        <Stagger
          as="ul"
          className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-3"
          gap={0.08}
        >
          {course.toolGroups.map((group) => (
            <FadeUp as="li" key={group.label}>
              <span className="font-display text-[0.65rem] font-semibold tracking-[0.22em] text-brand-600 uppercase">
                {group.label}
              </span>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
