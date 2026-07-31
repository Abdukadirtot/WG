"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

/**
 * Sticky site header.
 * - Transparent-to-solid transition as the page scrolls.
 * - Collapses into an accessible hamburger menu on mobile.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between">
        <a href="#home" aria-label="Whitestar Global Health Connect — home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold text-navy-700 transition-colors hover:text-terra"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary text-sm">
            Connect With Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-700 hover:bg-navy-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100 bg-white lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col gap-1 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-navy-700 hover:bg-navy-50 hover:text-terra"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Connect With Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
