import { Building2, GraduationCap, Landmark, Stethoscope, Users2 } from "lucide-react";
import Reveal from "./Reveal";

const networkMembers = [
  { icon: Building2, label: "Hospitals" },
  { icon: Stethoscope, label: "Medical Professionals" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Landmark, label: "Governments" },
  { icon: Users2, label: "Development Partners" },
];

/**
 * Who We Are — positions WGHC as a healthcare *partnership platform*,
 * not merely a patient-coordination service, and names the network it convenes.
 */
export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Who We Are</span>
          <h2 className="heading-lg text-navy-700">
            A healthcare partnership platform — not just a referral service
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-navy-500">
            Whitestar Global Health Connect is an international healthcare
            partnership organization. We bring together patients, hospitals,
            medical professionals, and academic institutions across Somalia and
            the Horn of Africa, and connect them with world-class healthcare
            providers around the world.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-navy-500">
            More than coordinating individual journeys, we build lasting
            relationships across the entire health ecosystem — strengthening
            systems, sharing knowledge, and expanding access to advanced care.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {networkMembers.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-sand/60 px-4 py-3"
              >
                <m.icon className="h-5 w-5 shrink-0 text-terra" aria-hidden="true" />
                <span className="font-heading text-sm font-semibold text-navy-700">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
