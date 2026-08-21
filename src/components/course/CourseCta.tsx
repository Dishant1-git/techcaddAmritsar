"use client";

import { useState } from "react";
import { Check, Phone } from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

const ASSURANCES = [
  "Free career counselling",
  "No registration fee",
  "Placement support included",
];

export default function CourseCta({ course }: { course: Course }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  /**
   * No backend yet: the form acknowledges locally so the interaction is
   * testable. Swap `onSubmit` for the real endpoint when it exists.
   */
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (phone.trim().length < 6) return;
    setSent(true);
  }

  return (
    <section
      id="enquire"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-ink to-accent/60" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-aurora-b absolute -top-24 left-1/3 size-[32rem] rounded-full bg-brand-500/25 blur-[130px] will-change-transform" />
      </div>

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                <span className="h-px w-6 bg-brand-300/60" aria-hidden="true" />
                Next batch, Amritsar campus
              </span>
            </FadeUp>
            <WordsUp
              as="h2"
              text={`Start the ${course.title} programme`}
              accent="this intake."
              accentClassName="text-brand-300"
              className="mt-4 max-w-2xl text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-5xl"
            />
            <span id="cta-heading" className="sr-only">
              Enquire about the {course.title} course
            </span>
            <FadeUp
              standalone
              as="p"
              className="mt-5 max-w-xl text-base leading-relaxed text-white/60"
            >
              Leave a number and a counsellor calls you back with batch timings,
              the fee structure and an honest read on whether this track fits
              your background.
            </FadeUp>

            <Stagger as="ul" className="mt-8 flex flex-wrap gap-x-6 gap-y-3" gap={0.07}>
              {ASSURANCES.map((item) => (
                <FadeUp
                  as="li"
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Check
                    className="size-4 text-brand-300"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  {item}
                </FadeUp>
              ))}
            </Stagger>
          </div>

          <FadeUp standalone className="lg:col-span-5">
            <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-7 backdrop-blur-xl lg:p-8">
              <h3 className="font-display text-lg font-semibold">
                Request a call back
              </h3>
              <p className="mt-1.5 text-sm text-white/55">
                About the {course.title} course · {course.spec[0].value}
              </p>

              <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
                <label htmlFor="cta-phone" className="sr-only">
                  Mobile number
                </label>
                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="98765 43210"
                  className="h-13 rounded-full border border-white/15 bg-ink/50 px-5 text-base text-white placeholder:text-white/35 focus:border-brand-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-13 rounded-full bg-white px-6 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {sent ? "Request received" : "Request a call back"}
                </button>
              </form>

              <p
                role="status"
                className="mt-3 min-h-5 text-xs text-brand-200"
              >
                {sent
                  ? "Thanks — the Amritsar desk will call you within one working day."
                  : ""}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 ring-inset transition-colors group-hover:bg-white/15">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  Prefer to call? {site.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
