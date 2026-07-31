import Reveal from "./Reveal";

/**
 * Our Commitment — full-bleed navy section with white text and a brown accent
 * divider. A mission-driven closing statement before the contact CTA.
 */
export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-24 text-white">
      {/* soft brand glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-azure/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-terra/20 blur-3xl"
      />

      <div className="container-page relative text-center">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-terra-light">
            Our Commitment
          </span>
          <span
            aria-hidden="true"
            className="mx-auto mb-8 block h-1 w-16 rounded-full bg-terra"
          />
          <p className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug sm:text-3xl">
            We are committed to building bridges that bring world-class
            healthcare within reach — strengthening systems, sharing knowledge,
            and improving lives across the Horn of Africa and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
