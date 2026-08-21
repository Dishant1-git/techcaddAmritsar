"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import TabGroup from "@/components/ui/TabGroup";
import { Eyebrow } from "@/components/ui/Section";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{capabilities.eyebrow}</Eyebrow>
          <SplitHeading
            id="capabilities-heading"
            text={capabilities.heading}
            accent={capabilities.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
          />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <TabGroup
            orientation="vertical"
            labels={capabilities.items.map((item) => item.label)}
            renderPanel={(index) => {
              const item = capabilities.items[index];
              return (
                <div className="rounded-2xl border border-line bg-brand-50/40 p-7 lg:p-9">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {item.label}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex items-center rounded-lg border border-line bg-white px-3 py-1.5 text-sm text-ink-mute">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/courses"
                    className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              );
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
