import { founderProfile } from "@/lib/founder-content";
import { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/** Bio on the left, a plain initials card on the right — no stock photography stand-in. */
export default function FounderProfile() {
  return (
    <section id="profile" aria-labelledby="profile-heading" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>{founderProfile.eyebrow}</Eyebrow>
            <h2
              id="profile-heading"
              className="font-display max-w-xl text-3xl leading-[1.15] font-semibold text-balance text-ink sm:text-4xl"
            >
              {founderProfile.headingLead}{" "}
              <span className="text-brand-600">{founderProfile.headingAccent}</span>{" "}
              {founderProfile.headingTail}
            </h2>

            <div className="flex flex-col gap-4">
              {founderProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="max-w-xl text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-2 border-t border-line pt-5">
              <p className="font-display text-base font-semibold text-ink">
                Mr. {founderProfile.name}
              </p>
              <p className="text-sm text-muted">{founderProfile.role}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex aspect-4/5 flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-gradient-to-br from-brand-50 to-white">
              <span className="font-display grid size-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-3xl font-bold text-white">
                {founderProfile.initials}
              </span>
              <div className="text-center">
                <p className="font-display text-base font-semibold text-ink">
                  Mr. {founderProfile.name}
                </p>
                <p className="text-sm text-muted">{founderProfile.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
