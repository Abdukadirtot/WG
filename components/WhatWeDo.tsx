import {
  HeartPulse,
  Handshake,
  GraduationCap,
  FlaskConical,
  MonitorSmartphone,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const services = [
  {
    icon: HeartPulse,
    title: "International Patient Services",
    description:
      "End-to-end coordination for patients seeking specialized care abroad — from referral and travel to treatment and follow-up.",
  },
  {
    icon: Handshake,
    title: "Hospital Partnerships",
    description:
      "Connecting local hospitals with international institutions to expand services, share expertise, and raise standards of care.",
  },
  {
    icon: GraduationCap,
    title: "Medical Education & Capacity Building",
    description:
      "Training, exchange programs, and skills development that strengthen the healthcare workforce across the region.",
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description:
      "Collaborative research and knowledge-sharing that advance evidence-based, locally relevant healthcare solutions.",
  },
  {
    icon: MonitorSmartphone,
    title: "Telemedicine & Digital Health",
    description:
      "Digital platforms that link patients and providers for remote consultations, second opinions, and continuity of care.",
  },
];

/**
 * What We Do — five core service areas presented as consistent cards.
 */
export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section bg-sand">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="heading-lg text-navy-700">
            Comprehensive support across the health ecosystem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            Five connected service areas that move patients, institutions, and
            professionals toward better outcomes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
