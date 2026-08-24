import { Phone } from "lucide-react";
import { collegeStrip } from "@/lib/college-content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** A slim, no-nonsense bar right before the footer — the last nudge. */
export default function CollegeStrip() {
  return (
    <section aria-labelledby="college-strip-heading" className="border-y border-line bg-white py-10">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="college-strip-heading"
              className="font-display text-xl font-semibold text-ink sm:text-2xl"
            >
              {collegeStrip.heading}
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-muted">{collegeStrip.body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={collegeStrip.primaryCta.href} variant="primary" size="lg">
              {collegeStrip.primaryCta.label}
            </Button>
            <a
              href={collegeStrip.secondaryCta.href}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 text-base font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
            >
              <Phone className="size-4" aria-hidden="true" />
              {collegeStrip.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
