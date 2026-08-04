import { ArrowRight } from "lucide-react";
import NetworkGraphic from "./NetworkGraphic";
import Reveal from "./Reveal";

/**
 * Hero: headline tagline, supporting copy, dual CTAs, and the signature
 * network graphic. Sits on a soft navy-to-white gradient with a subtle
 * dotted texture so it reads as branded — not a generic gradient blob.
 *
 * Entrance uses the shared <Reveal> wrapper, which sets visibility directly
 * from React state (not an animation timeline). This guarantees the
 * above-the-fold content always ends visible, even if animation timelines are
 * paused/throttled (e.g. background tabs) — the failure mode that previously
 * left sections blank.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sand to-white pt-28 sm:pt-32"
    >
      {/* subtle brand texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#CBDDEC 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="container-page relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Global Health Partnerships</span>

          <h1 className="heading-xl text-navy-700">
            Connecting Africa to{" "}
            <span className="text-terra">World-Class Healthcare</span> Through
            Strategic Partnerships
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-navy-500">
            We coordinate international patient services, hospital partnerships,
            medical education, research, and digital health — building bridges
            between the Horn of Africa and trusted providers in India, Kenya,
            Egypt, and Türkiye.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Begin Your Journey
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#who-we-are" className="btn-secondary">
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-navy-400">
            <span>Patients</span>
            <span className="h-1 w-1 rounded-full bg-terra" aria-hidden="true" />
            <span>Hospitals</span>
            <span className="h-1 w-1 rounded-full bg-terra" aria-hidden="true" />
            <span>Professionals</span>
            <span className="h-1 w-1 rounded-full bg-terra" aria-hidden="true" />
            <span>Institutions</span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <NetworkGraphic />
        </Reveal>
      </div>
    </section>
  );
}
