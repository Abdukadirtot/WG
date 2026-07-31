import { Eye, Target } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Vision & Mission — two visually distinct panels: a solid navy panel and a
 * white panel with brown accents, for clear contrast and rhythm.
 */
export default function VisionMission() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Our Direction</span>
          <h2 className="heading-lg text-navy-700">Vision &amp; Mission</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision — navy panel */}
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-2xl bg-navy-700 p-9 text-white shadow-card">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-azure/20 blur-2xl"
              />
              <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-white/10 text-white">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 font-heading text-2xl font-bold">
                Our Vision
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-white/80">
                A future where every patient in the Horn of Africa can access
                world-class healthcare, and where local health systems grow
                stronger through global partnership.
              </p>
            </div>
          </Reveal>

          {/* Mission — white panel with brown accent */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-9 shadow-card">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1.5 bg-terra"
              />
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-terra/10 text-terra">
                <Target className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-navy-700">
                Our Mission
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-navy-500">
                To connect patients, hospitals, professionals, and institutions
                across Africa with trusted international healthcare partners —
                advancing access, education, research, and digital health for
                lasting impact.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
