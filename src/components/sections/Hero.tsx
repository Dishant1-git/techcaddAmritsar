import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-28"
    >
      {/*
        Background stack, all decorative. Mirrors the techcadd Jalandhar hero
        (ink base + two brand gradient washes) with a circuit-board texture
        standing in for that site's background video.
      */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/80 to-brand-700/65" />
        <div className="animate-trace absolute inset-0 circuit-texture opacity-[0.5]" />
        <div className="absolute inset-0 dot-matrix opacity-[0.07]" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute -top-[15%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute -right-32 -bottom-[25%] size-[38rem] rounded-full bg-accent/40 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-brand-600/10 to-ink" />
        <div className="absolute inset-0 tech-noise opacity-[0.035] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page flex flex-1 flex-col">
        {/* ------------------------------------------------ centred headline */}
        <Reveal className="flex flex-col items-center gap-7 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {hero.eyebrow}
            <span className="text-white/40">·</span>
            <span className="text-white/60">{hero.eyebrowMeta}</span>
          </span>

          <h1
            id="hero-heading"
            className="font-display max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.headingLines.map((line, lineIndex) => (
              <span
                key={line.text}
                className={cn("block", line.muted && "text-white/35")}
              >
                {line.text.split(" ").map((word, i) => (
                  <span key={`${word}-${i}`}>
                    <span
                      className="word"
                      style={
                        { "--i": lineIndex * 4 + i } as React.CSSProperties
                      }
                    >
                      {word}
                    </span>{" "}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/55 lg:text-lg">
            {hero.body}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium whitespace-nowrap text-ink shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
            >
              {hero.primaryCta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <dl className="mt-6 grid w-full max-w-4xl gap-px overflow-hidden rounded-2xl bg-white/10 text-left sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.title} className="bg-ink/70 px-5 py-5 backdrop-blur-sm">
                <dt className="font-display text-sm font-semibold text-white">
                  {stat.title}
                </dt>
                <dd className="mt-1 text-sm text-white/50">{stat.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ------------------------------------------- AI course preview card */}
        <Reveal delay={150} className="mx-auto mt-16 w-full max-w-4xl">
          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm lg:p-7">
            <div className="flex items-center gap-2">
              <Sparkles
                className="animate-twinkle size-4 fill-brand-400 text-brand-400"
                aria-hidden="true"
              />
              <h2 className="font-display text-xl font-semibold">
                {hero.panel.title}
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {hero.panel.body}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {hero.panel.groups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-[0.7rem] font-semibold tracking-[0.16em] text-brand-400 uppercase">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-1">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <span className="flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm text-white/70 transition-colors duration-300 hover:bg-white/8 hover:text-white">
                          <span className="truncate">{item.label}</span>
                          {item.badge && (
                            <span className="shrink-0 rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Nested featured-course panel */}
            <div className="mt-6 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/25 to-accent/25 p-5">
              <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand-200 uppercase">
                {hero.panel.featured.eyebrow}
              </span>
              <h3 className="font-display mt-2 text-lg leading-snug font-semibold">
                {hero.panel.featured.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {hero.panel.featured.body}
              </p>
              <Link
                href={hero.panel.featured.cta.href}
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 transition-colors hover:text-white"
              >
                {hero.panel.featured.cta.label}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
