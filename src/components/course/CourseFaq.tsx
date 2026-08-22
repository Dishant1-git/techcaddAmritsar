"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Course } from "@/lib/courses";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function CourseFaq({ course }: { course: Course }) {
  /** Single-open accordion; the first answer is visible on arrival. */
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                  <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                  Before you enrol
                </span>
              </FadeUp>
              <WordsUp
                as="h2"
                text="Questions we get asked"
                accent="at the admissions desk"
                accentClassName="text-gold-600"
                className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
              />
              <span id="faq-heading" className="sr-only">
                Frequently asked questions
              </span>
              <FadeUp
                standalone
                as="p"
                className="mt-5 max-w-sm text-base leading-relaxed text-muted"
              >
                If something here is not covered, the Amritsar desk will answer
                it directly — no call-back queue.
              </FadeUp>
              <FadeUp standalone className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex h-11 items-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Call {site.phone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
                >
                  Send an enquiry
                </a>
              </FadeUp>
            </div>
          </div>

          <Stagger as="ul" className="lg:col-span-7" gap={0.06}>
            {course.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <FadeUp as="li" key={faq.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="group flex w-full items-start gap-5 py-5 text-left"
                    >
                      <span
                        className={cn(
                          "font-display flex-1 text-base leading-snug font-semibold transition-colors duration-300 sm:text-lg",
                          isOpen
                            ? "text-brand-700"
                            : "text-ink group-hover:text-brand-600",
                        )}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                          isOpen
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-line bg-white text-muted group-hover:border-brand-300",
                        )}
                      >
                        {isOpen ? (
                          <Minus className="size-3.5" strokeWidth={2.5} />
                        ) : (
                          <Plus className="size-3.5" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        key="panel"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-muted sm:text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
