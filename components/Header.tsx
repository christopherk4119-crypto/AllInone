"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { MenuIcon, PhoneIcon, PinIcon, XIcon } from "./Icons";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: Esc closes, focus moves into the panel, simple focus trap.
  useEffect(() => {
    if (!open) return;
    const first = panel.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
      if (e.key === "Tab" && panel.current) {
        const items = Array.from(panel.current.querySelectorAll<HTMLElement>("a,button"));
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === items[0]) {
          e.preventDefault();
          menuBtn.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          menuBtn.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-charcoal/95 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur" : "bg-gradient-to-b from-charcoal/70 to-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-copper focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to content
      </a>

      <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[76px]">
        <a href="#top" aria-label={`${site.name}, back to top`} className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper">
          {/* 200x80 slot reserved for the client's PNG logo — see Logo.tsx */}
          <Logo tone="dark" compact />
        </a>

        {/* Centre (desktop) */}
        <div className="hidden items-center gap-6 lg:flex">
          <span className="flex items-center gap-1.5 text-sm text-warmgrey">
            <PinIcon className="h-4 w-4 text-copper" />
            Serving Airdrie &amp; Calgary
          </span>
          <a
            href={site.phone.href}
            className="flex items-center gap-2 rounded-md font-display text-2xl font-bold tracking-wide text-white transition hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            aria-label={`Call ${site.phone.display}`}
          >
            <PhoneIcon className="h-5 w-5 text-copper" />
            {site.phone.display}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-copper hidden min-h-[46px] px-5 text-lg sm:inline-flex">
            {site.estimateLabel}
          </a>
          <a
            href={site.phone.href}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper lg:hidden"
            aria-label={`Call ${site.phone.display}`}
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
          <button
            ref={menuBtn}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Desktop nav row */}
      <nav aria-label="Main" className="hidden border-t border-white/10 lg:block">
        <ul className="container-site flex h-10 items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded font-display text-[1.05rem] font-semibold uppercase tracking-[0.14em] text-warmgrey transition hover:text-copper focus-visible:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="border-t border-white/10 bg-charcoal lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center border-b border-white/5 font-display text-2xl font-semibold uppercase tracking-wider text-white hover:text-copper focus-visible:text-copper focus-visible:outline-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-site flex flex-col gap-3 pb-6">
            <p className="flex items-center gap-1.5 text-sm text-warmgrey">
              <PinIcon className="h-4 w-4 text-copper" /> Serving Airdrie &amp; Calgary
            </p>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-copper w-full">
              {site.estimateLabel}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
