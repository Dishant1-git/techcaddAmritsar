import { modules } from "@/lib/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Modules() {
  return (
    <Section
      id="modules"
      eyebrow={modules.eyebrow}
      heading={modules.heading}
      accent={modules.accent}
      body={modules.body}
      dark
    >
      <ol className="mt-12 flex flex-col">
        {modules.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.n}
            delay={i * 70}
            className="group grid gap-3 border-t border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-8 md:px-4"
          >
            <span className="font-display text-sm font-semibold tracking-[0.16em] text-brand-400">
              {item.n}
            </span>
            <h3 className="font-display text-lg font-semibold text-white transition-transform duration-300 md:group-hover:translate-x-1">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/55">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
