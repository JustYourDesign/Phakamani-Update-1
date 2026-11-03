"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { navGroups, navDirect, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Paper header with three disclosure dropdowns, a Team link and an ink
 * Connect button. Opens on hover and on click; one panel at a time. Below
 * 760px the whole nav collapses behind a Menu toggle.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeAll = useCallback(() => {
    setOpen(null);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // A short grace period so the pointer can cross the gap to the panel.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-20 flex min-h-[100px] flex-wrap items-center justify-between gap-4 border-b border-line bg-paper px-[5%] py-5 max-[1000px]:px-[4%] max-[760px]:min-h-[90px]">
      <Brand />

      <button
        type="button"
        className="hidden border border-ink px-[18px] py-2.5 font-bold max-[760px]:block"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        Menu
      </button>

      <nav
        id="navigation"
        aria-label="Main navigation"
        onClickCapture={(event) => {
          // Any link click is a navigation; the disclosure buttons handle
          // their own state and must not close the bar underneath them.
          if ((event.target as HTMLElement).closest("a")) closeAll();
        }}
        className={cn(
          "flex items-center gap-[30px] text-small font-bold max-[1000px]:gap-[18px]",
          // Mobile: a full-width stack dropping out of the header.
          "max-[760px]:absolute max-[760px]:inset-x-0 max-[760px]:top-[90px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-[22px] max-[760px]:border-b max-[760px]:border-line max-[760px]:bg-paper max-[760px]:p-6",
          !menuOpen && "max-[760px]:hidden",
        )}
      >
        {navGroups.map((group) => {
          const isOpen = open === group.label;
          return (
            <div
              key={group.label}
              className="relative max-[760px]:static"
              onMouseEnter={() => {
                cancelClose();
                setOpen(group.label);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : group.label)}
                className="flex w-full items-center font-bold"
              >
                {group.label}
                <span aria-hidden className="ml-2.5 text-muted-ink">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  className={cn(
                    "absolute left-[-24px] top-9 w-[310px] border border-line bg-paper p-3 shadow-[0_14px_30px_#11181318]",
                    "max-[760px]:static max-[760px]:mt-[15px] max-[760px]:w-full max-[760px]:shadow-none",
                  )}
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block p-3.5 no-underline hover:bg-wash-deep"
                    >
                      {link.label}
                      <small className="block text-small font-normal text-muted-ink">
                        {link.note}
                      </small>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {navDirect.map((link) =>
          link.emphasis ? (
            <Link
              key={link.href}
              href={link.href}
              className="bg-ink px-6 py-3 text-center text-white no-underline hover:underline"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:underline hover:underline-offset-[5px]",
                isActive(link.href) && "underline underline-offset-[5px]",
              )}
            >
              {link.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}

/** Two-line wordmark: name over the payoff line. */
export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "inline-block shrink-0 text-[1.9rem] font-extrabold leading-none tracking-[-1.5px] no-underline hover:no-underline",
        className,
      )}
    >
      phakamani
      <span className="mt-2.5 block text-[0.75rem] tracking-[2px]">
        RISE UP. BE MORE.
      </span>
    </Link>
  );
}
