"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/content";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function Categories() {
  const [filter, setFilter] = useState(categories.filters[0]);

  const visible =
    filter === categories.filters[0]
      ? categories.items
      : categories.items.filter((item) => item.group === filter);

  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="border-y border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <Eyebrow>{categories.eyebrow}</Eyebrow>
            <SplitHeading
              id="categories-heading"
              text={categories.heading}
              accent={categories.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            />
          </div>

          <div
            role="group"
            aria-label="Filter categories"
            className="flex flex-wrap gap-2"
          >
            {categories.filters.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  filter === label
                    ? "bg-brand-600 text-white shadow-sm shadow-brand-600/25"
                    : "bg-white text-muted ring-1 ring-inset ring-line hover:text-ink hover:ring-brand-200",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <Card className="h-full">
                <Link href={item.href} className="flex h-full flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-muted transition-all duration-300 group-hover:text-brand-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                    {item.count}
                  </span>
                </Link>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
