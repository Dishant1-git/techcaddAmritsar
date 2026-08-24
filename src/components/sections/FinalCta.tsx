"use client";

import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import { finalCta } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function FinalCta() {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent) {
    // Layout pass only — nothing is sent anywhere yet.
    event.preventDefault();
    const digits = value.replace(/\D/g, "");
    setError(
      digits.length === 10 ? null : "Enter a valid 10-digit mobile number.",
    );
  }

  return (
    <section
      data-cursor="light"
      id="get-started"
      aria-labelledby="get-started-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow dark>{finalCta.eyebrow}</Eyebrow>
          <SplitHeading
            id="get-started-heading"
            text={finalCta.heading}
            accent={finalCta.accent}
            className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-xl text-base leading-relaxed text-white/60">
            {finalCta.body}
          </p>

          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-4 flex w-full max-w-lg flex-col gap-3"
          >
            <label htmlFor={inputId} className="sr-only">
              {finalCta.inputLabel}
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 focus-within:border-brand-500">
                <span
                  className="shrink-0 border-r border-white/15 pr-3 text-sm text-white/50"
                  aria-hidden="true"
                >
                  +91
                </span>
                <input
                  id={inputId}
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder={finalCta.placeholder}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError(null);
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? errorId : undefined}
                  className="h-13 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
              <Button type="submit" variant="primary" size="lg">
                {finalCta.submitLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <p
              id={errorId}
              role="alert"
              className="min-h-5 text-left text-sm text-red-400 sm:text-center"
            >
              {error}
            </p>
          </form>

          <Button
            href={finalCta.secondaryCta.href}
            variant="ghost"
            size="md"
            className="mt-1"
          >
            {finalCta.secondaryCta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
