"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Cpu,
  Database,
  LineChart,
  Network,
  Workflow,
} from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

const NODES = [
  { Icon: Database, label: "Data" },
  { Icon: Braces, label: "Code" },
  { Icon: LineChart, label: "Models" },
  { Icon: Network, label: "Serving" },
  { Icon: Workflow, label: "Pipelines" },
  { Icon: Cpu, label: "Compute" },
];

/**
 * A constellation of the six disciplines the programme covers, wired back to a
 * glowing core.
 *
 * Built for the dark panel specifically: the spokes are a gradient stroke that
 * fades toward the rim, and each plate carries its own glow rather than a
 * border — on ink, a hairline border disappears while a glow reads as depth.
 * Node positions are computed from the list length so the spokes and plates
 * can never drift out of agreement.
 */
function AiConstellation() {
  const reduce = useReducedMotion();
  const radius = 38;

  const nodes = NODES.map((node, i) => {
    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...node,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
    };
  });

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      {/* Everything measures against this one inset box, so a plate always
          lands on the end of its own spoke. */}
      <div className="absolute inset-12">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
          <defs>
            <radialGradient id="ai-spoke" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="rgb(147 197 253)"
                stopOpacity="0.9"
              />
              <stop
                offset="100%"
                stopColor="rgb(96 165 250)"
                stopOpacity="0.1"
              />
            </radialGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgb(255 255 255 / 0.14)"
            strokeWidth="0.3"
            strokeDasharray="1.5 2.5"
          />
          {nodes.map((node) => (
            <line
              key={node.label}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="url(#ai-spoke)"
              strokeWidth="0.55"
            />
          ))}
        </svg>

        {nodes.map((node, i) => {
          const { Icon } = node;
          return (
            <motion.span
              key={node.label}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.08 }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white/[0.06] text-brand-300 shadow-[0_0_28px_-6px_rgb(96_165_250/0.75)] ring-1 ring-white/12 ring-inset backdrop-blur-md">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <span className="text-[0.6rem] font-medium tracking-wide text-white/45">
                {node.label}
              </span>
            </motion.span>
          );
        })}

        {/* Core. */}
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="absolute top-1/2 left-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink/80 shadow-[0_0_70px_-8px_rgb(96_165_250/0.8)] ring-1 ring-brand-300/30 ring-inset backdrop-blur-xl"
        >
          <span className="font-display bg-gradient-to-br from-white via-brand-100 to-brand-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            AI
          </span>
        </motion.span>
      </div>

      <span className="absolute inset-[28%] -z-10 rounded-full bg-brand-500/20 blur-[80px]" />
    </div>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiReadiness({ view }: { view: AiCourseView }) {
  return (
    <section
      id="ai-readiness"
      aria-labelledby="ai-readiness-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeUp standalone className="lg:col-span-5">
            <AiConstellation />
          </FadeUp>

          <div className="lg:col-span-7">
            <AiHead
              id="ai-readiness-heading"
              eyebrow="Built for hiring, not for marks"
              heading={view.readiness.heading}
              accent={view.readiness.accent}
              body={view.readiness.body}
              dark
            />

            {/* A numbered ladder rather than a tick list — these are sequential
                commitments about how the course runs, not interchangeable
                feature bullets. */}
            <Stagger as="ol" className="mt-8 space-y-3" gap={0.07}>
              {view.readiness.points.map((point, i) => (
                <FadeUp
                  as="li"
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.06]"
                >
                  <span className="font-display mt-px grid size-6 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-[0.7rem] font-semibold text-brand-300 ring-1 ring-brand-400/25 ring-inset">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/65">
                    {point}
                  </span>
                </FadeUp>
              ))}
            </Stagger>

            <div className="mt-9 flex flex-wrap items-stretch gap-3">
              {view.readiness.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/45">{metric.label}</p>
                </div>
              ))}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-medium text-white ring-1 ring-white/25 ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Talk to a counsellor
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
