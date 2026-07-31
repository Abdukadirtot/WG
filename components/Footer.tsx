import { Linkedin, Twitter, Facebook, Instagram, MapPin } from "lucide-react";
import Logo from "./Logo";
import { navLinks, networkCountries, siteConfig } from "@/lib/site";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Twitter, label: "Twitter / X", href: siteConfig.social.twitter },
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
];

/**
 * Site footer — logo, tagline, quick links, network list, social icons,
 * and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm leading-relaxed text-white/70">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-terra hover:text-white"
              >
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="md:col-span-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/75 transition-colors hover:text-terra-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Network */}
        <div className="md:col-span-4">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/50">
            Our Network
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {networkCountries.map((c) => (
              <li key={c.name} className="flex items-center gap-2 text-white/75">
                <MapPin className="h-4 w-4 text-terra-light" aria-hidden="true" />
                {c.name}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            {siteConfig.contact.email}
            <br />
            {siteConfig.contact.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
