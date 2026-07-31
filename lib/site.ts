/**
 * Central content + configuration for the WGHC marketing site.
 * Edit copy, contact details, and navigation here — components read from this file
 * so there is a single source of truth for editable text.
 */

export const siteConfig = {
  name: "Whitestar Global Health Connect",
  shortName: "WGHC",
  tagline:
    "Connecting Africa to World-Class Healthcare Through Strategic Partnerships",
  // ---- Editable contact placeholders ----
  contact: {
    email: "info@whitestar.com",
    phone: "+252 61 000 0000",
    location: "Mogadishu, Somalia · Serving the Horn of Africa",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
};

/** Anchor navigation — kept consistent across header and footer. */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

/** Partner countries in the international network. */
export const networkCountries = [
  {
    name: "India",
    role: "Advanced tertiary care & specialty treatment",
  },
  {
    name: "Kenya",
    role: "Regional referral hospitals & diagnostics",
  },
  {
    name: "Egypt",
    role: "Specialized surgery & medical training",
  },
  {
    name: "Türkiye",
    role: "Modern hospital systems & advanced procedures",
  },
];

/** Audience segments for the "Begin Your Journey" CTA. */
export const audiences = [
  {
    key: "patient",
    title: "Patients",
    description:
      "Access coordinated, world-class care abroad with support at every step.",
  },
  {
    key: "hospital",
    title: "Hospitals",
    description:
      "Build international partnerships that strengthen your capacity and reach.",
  },
  {
    key: "professional",
    title: "Healthcare Professionals",
    description:
      "Advance your practice through training, exchange, and collaboration.",
  },
  {
    key: "institution",
    title: "Institutions",
    description:
      "Partner on research, education, and health-system development.",
  },
];
