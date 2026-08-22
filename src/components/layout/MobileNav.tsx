"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { navItems, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

/**
 * Slide-in drawer for < xl. Locks body scroll, closes on Escape, and keeps
 * focus inside the panel while open.
 */
export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-ink text-white shadow-2xl transition-transform duration-400 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/10"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(expanded === item.label ? null : item.label)
                      }
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[0.95rem] text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-300",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="ml-3 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
                            >
                              {child.label}
                              {child.badge && (
                                <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-[0.95rem] text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-6">
          <Button href="/contact" variant="primary" size="md" className="w-full">
            Book Demo
          </Button>
          <a
            href={site.phoneHref}
            className="text-center text-sm text-white/60 transition-colors hover:text-white"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
