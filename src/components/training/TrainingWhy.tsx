import Link from "next/link";
import { site } from "@/lib/content";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import { trainingBasePath } from "@/lib/training";

/**
 * Why this institute rather than the one down the road.
 *
 * Every figure here is one the site already claims elsewhere — "since 2007"
 * from the footer, "15,000+ students" from the about-page timeline — so this
 * section cannot drift away from the rest of the site. The placement line is
 * deliberately about persistence rather than a rate, because a guaranteed
 * outcome is not something we say anywhere else either.
 */
const REASONS = [
  {
    title: "Trainers who still do the work",
    body: `Your trainer is not a full-time lecturer. They deliver client projects for the ${site.name} services arm, so the examples in class are current rather than a case study from five years ago.`,
  },
  {
    title: "Live projects, real consequences",
    body: "You work on genuine client requirements under supervision. That is where a portfolio comes from, and it is the first thing an interviewer asks to see.",
  },
  {
    title: "Small batches and open lab hours",
    body: "Batches stay small enough that a trainer sees your screen daily. Lab time runs outside class hours, and doubt sessions continue until the concept lands.",
  },
  {
    title: "Internship letter and certificate",
    body: (
      <>
        Every student finishes with an industry-recognised certificate and a
        documented internship on real work, accepted for university{" "}
        <Link
          href={`${trainingBasePath}/industrial-training`}
          className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-600"
        >
          industrial training
        </Link>{" "}
        requirements.
      </>
    ),
  },
  {
    title: "A placement cell that persists",
    body: `Mock interviews, CV reviews and drives with hiring partners across ${site.city} and Punjab — repeated after a rejection, not abandoned.`,
  },
  {
    title: "Since 2007, 15,000+ students",
    body: `Nearly two decades of hiring relationships in Punjab is why a call from our placement cell gets answered, and why local employers know what a ${site.name} certificate means.`,
  },
];

export default function TrainingWhy({ title }: { title: string }) {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      /* Flat white, the same ground the after-12th eligibility section sits
         on — no gradient or bloom, so it reads as one continuous page rather
         than a dark band cut into it. */
      className="scroll-mt-28 bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <FadeUp standalone>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-mute ring-1 ring-line ring-inset">
            Why {site.name.toLowerCase()}
          </span>
        </FadeUp>

        <FadeUp standalone>
          <h2
            id="why-heading"
            className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl"
          >
            Why students choose {site.name.toLowerCase()}
          </h2>
        </FadeUp>

        <FadeUp
          standalone
          as="p"
          className="mt-7 max-w-3xl text-base leading-relaxed text-muted lg:text-lg"
        >
          There are many places to learn this in {site.city}, and the brochure
          syllabus looks similar at all of them. What differs is who teaches,
          whether you ever touch real work, and whether anyone picks up the
          phone after you have paid. {site.name} has trained students across
          Punjab since 2007 on the same model: small batches, working
          practitioners as trainers, client projects as coursework — and {title}{" "}
          runs on exactly that model.
        </FadeUp>

        <Stagger
          as="ul"
          className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-14"
          gap={0.07}
        >
          {REASONS.map((reason) => (
            <FadeUp
              as="li"
              key={reason.title}
              className="border-t border-line pt-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {reason.body}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
