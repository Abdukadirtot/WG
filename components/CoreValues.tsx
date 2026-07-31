import {
  Heart,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Leaf,
} from "lucide-react";
import ValueCard from "./ValueCard";
import Reveal from "./Reveal";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We put people first, treating every patient and partner with dignity and care.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We act transparently and honor our commitments to those we serve.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we coordinate and deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We achieve more by working together across borders and institutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas and technology to expand access to care.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We build partnerships and systems designed to last for generations.",
  },
];

/**
 * Core Values — six-tile grid.
 */
export default function CoreValues() {
  return (
    <section className="section bg-sand">
      <div className="container-page">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">What Guides Us</span>
          <h2 className="heading-lg text-navy-700">Our Core Values</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            The principles behind every partnership we build and every patient
            we support.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.08}>
              <ValueCard {...v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
