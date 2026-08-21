import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-ink pb-20 pt-32 text-white lg:pb-28 lg:pt-40"
    >
      {/* Background: brand wash + grid, both purely decorative. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute -left-40 top-[-15%] size-[42rem] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-[-25%] size-[38rem] rounded-full bg-accent/40 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* ---------------------------------------------------- left column */}
          <Reveal className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-inset ring-white/15">
              <Sparkles className="animate-twinkle size-3.5 fill-brand-400 text-brand-400" aria-hidden="true" />
              {hero.eyebrow}
              <span className="text-white/40">·</span>
              <span className="text-white/60">{hero.eyebrowMeta}</span>
            </span>

            <h1
              id="hero-heading"
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
            >
              {hero.headingLines.map((line, lineIndex) => (
                <span key={line.text} className="block">
                  {line.code && (
                    <span
                      aria-hidden="true"
                      className="mr-2 inline-block rounded-md bg-brand-600/20 px-2 py-0.5 align-middle font-mono text-[0.55em] text-brand-400 ring-1 ring-inset ring-brand-500/30"
                    >
                      {"</>"}
                    </span>
                  )}
                  {line.text.split(" ").map((word, i) => (
                    <span key={`${word}-${i}`}>
                      <span
                        className={cn(
                          "word",
                          line.accent.includes(word) && "text-brand-400",
                        )}
                        style={
                          {
                            "--i": lineIndex * 4 + i,
                          } as React.CSSProperties
                        }
                      >
                        {word}
                      </span>{" "}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/60 lg:text-lg">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <dl className="mt-2 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div key={stat.title} className="bg-ink px-5 py-5">
                  <dt className="font-display text-sm font-semibold text-white">
                    {stat.title}
                  </dt>
                  <dd className="mt-1 text-sm text-white/50">{stat.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* --------------------------------------------------- right column */}
          <Reveal delay={150} className="lg:pt-4">
            <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm lg:p-7">
              <div className="flex items-center gap-2">
                <Sparkles className="animate-twinkle size-4 fill-brand-400 text-brand-400" aria-hidden="true" />
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
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
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
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-200">
                  {hero.panel.featured.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
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
      </div>
    </section>
  );
}
