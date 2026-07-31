import { MapPin } from "lucide-react";
import { networkCountries } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Our International Network — partner-country cards with location-pin icons.
 * We deliberately avoid flags (accuracy) and use consistent branded cards.
 */
export default function Network() {
  return (
    <section id="network" className="section bg-sand">
      <div className="container-page">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Our International Network</span>
          <h2 className="heading-lg text-navy-700">
            Trusted partners across four countries
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            We connect the Horn of Africa with established healthcare providers
            in India, Kenya, Egypt, and Türkiye.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {networkCountries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="flex items-center justify-center bg-gradient-to-br from-navy-600 to-azure py-8">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                    <MapPin className="h-8 w-8" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-navy-700">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {c.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
