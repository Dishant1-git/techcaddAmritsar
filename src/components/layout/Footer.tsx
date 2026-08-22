import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { footer, site } from "@/lib/content";
import { Facebook, Instagram, Linkedin, Youtube } from "./SocialIcons";
import Logo from "./Logo";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="flex flex-col gap-5">
            <Logo inverted />
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {site.blurb}
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-brand-400" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-brand-400" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">{site.copyright}</p>
          <ul className="flex items-center gap-3">
            {footer.socials.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full ring-1 ring-inset ring-white/12 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:ring-brand-600"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
