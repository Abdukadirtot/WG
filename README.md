# Whitestar Global Health Connect (WGHC) — Marketing Website

A modern, professional single-page marketing site for **Whitestar Global Health Connect**, an international healthcare partnership organization connecting the Horn of Africa with world-class providers in India, Kenya, Egypt, and Türkiye.

> **Tagline:** _Connecting Africa to World-Class Healthcare Through Strategic Partnerships._

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom brand token set
- **Poppins** via `next/font` (weights 400–800; bold for headings & UI)
- **Framer Motion** — subtle scroll-reveal + hover animations (respects `prefers-reduced-motion`)
- **lucide-react** icon set
- Fully responsive, mobile-first, and accessible (semantic HTML, visible focus states, skip link, reduced-motion support)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx            # fonts, metadata, global styles, skip link
  page.tsx              # assembles all sections
  globals.css           # Tailwind layers, buttons, reduced-motion rules
  api/contact/route.ts  # placeholder contact endpoint (wire to email/CRM)
components/
  Header.tsx            # sticky nav + mobile menu
  Hero.tsx              # headline, CTAs, network graphic
  NetworkGraphic.tsx    # signature SVG hub-and-spoke diagram
  WhoWeAre.tsx
  WhatWeDo.tsx / ServiceCard.tsx
  VisionMission.tsx
  CoreValues.tsx / ValueCard.tsx
  WhyChoose.tsx
  Network.tsx
  Commitment.tsx
  CTASection.tsx / ContactForm.tsx
  Footer.tsx
  Logo.tsx
  Reveal.tsx            # reduced-motion-aware scroll reveal
lib/
  site.ts               # EDIT ME — copy, contact details, nav, network, audiences
public/
  favicon.svg
```

## Editing content

Most editable copy lives in [`lib/site.ts`](lib/site.ts): organization name, tagline,
**contact details (email / phone / location placeholders)**, navigation links,
partner countries, and audience segments. Section-specific body copy lives inside
each component and is commented for easy editing.

## Brand tokens

Defined in [`tailwind.config.ts`](tailwind.config.ts):

| Token   | Value     | Role                                  |
| ------- | --------- | ------------------------------------- |
| `navy`  | `#0B3B60` | Primary / dominant brand blue         |
| `azure` | `#2E7FB8` | Secondary blue for accents & gradients |
| `terra` | `#A9683F` | Warm terracotta accent (CTAs, icons)  |
| `sand`  | `#F7F5F1` | Soft off-white section background      |

## Wiring up the contact form

The form posts to `app/api/contact/route.ts`, which currently validates and logs
the submission. Replace the `TODO` in that file with your email provider
(e.g. Resend, SendGrid), a CRM webhook, or a database write to go live.
