"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

/**
 * Fixed header. Transparent over the dark hero, then transitions to a solid
 * white bar once the page scrolls past the threshold.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll(); // Account for a restored scroll position on reload.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-white/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-page">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-18" : "h-20",
            )}
          >
            <Logo inverted={!scrolled} />

            <nav
              aria-label="Main"
              className="hidden items-center gap-5 self-stretch xl:flex 2xl:gap-7"
            >
              {navItems.map((item) => (
                <div key={item.label} className="group relative flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-1.5 text-sm transition-colors duration-300",
                      scrolled
                        ? "text-ink-mute hover:text-ink"
                        : "text-white/75 hover:text-white",
                    )}
                  >
                    {item.sparkle && (
                      <Sparkles
                        className={cn(
                          "animate-twinkle size-4",
                          scrolled ? "fill-brand-600 text-brand-600" : "fill-white text-white",
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className="size-2.5 transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                        scrolled ? "bg-ink" : "bg-white",
                      )}
                    />
                  </Link>

                  {item.children && (
                    <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-line bg-white p-2 shadow-[0_24px_60px_-20px_rgb(15_23_42/0.28)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-ink-mute transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                            {child.badge && (
                              <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase text-white">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant={scrolled ? "primary" : "ghost"}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Book Demo
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className={cn(
                  "grid size-10 place-items-center rounded-full ring-1 ring-inset transition-colors duration-300 xl:hidden",
                  scrolled
                    ? "text-ink ring-line hover:bg-brand-50"
                    : "text-white ring-white/25 hover:bg-white/10",
                )}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
