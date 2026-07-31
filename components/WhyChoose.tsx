import { Check } from "lucide-react";
import Reveal from "./Reveal";

const commitments = [
  "Connecting patients to trusted, world-class care abroad",
  "Supporting hospitals with international partnerships and expertise",
  "Promoting medical education and workforce development",
  "Expanding telemedicine and digital health access",
  "Advancing collaborative research and innovation",
  "Providing personalized, end-to-end coordination for every journey",
];

/**
 * Why Choose Whitestar — checklist of commitments beside a supporting statement.
 */
export default function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Why Choose Whitestar</span>
          <h2 className="heading-lg text-navy-700">
            A partner committed to every part of your journey
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-500">
            From the first consultation to long-term follow-up, we coordinate
            the details so patients, hospitals, and institutions can focus on
            what matters most — better health outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-sand/50 p-5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-terra text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-medium leading-relaxed text-navy-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
