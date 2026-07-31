import { Mail, Phone, MapPin, HeartPulse, Building2, Stethoscope, Landmark } from "lucide-react";
import { audiences, siteConfig } from "@/lib/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

const audienceIcons: Record<string, typeof HeartPulse> = {
  patient: HeartPulse,
  hospital: Building2,
  professional: Stethoscope,
  institution: Landmark,
};

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.contact.location },
];

/**
 * Begin Your Journey / Contact — segmented audience cards, a contact form,
 * and editable contact details.
 */
export default function CTASection() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-page">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Begin Your Journey</span>
          <h2 className="heading-lg text-navy-700">
            Let&apos;s connect you to world-class care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            Whoever you are, there&apos;s a place for you in our network. Tell us
            a little about yourself and we&apos;ll take it from there.
          </p>
        </Reveal>

        {/* Audience segments */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[a.key] ?? HeartPulse;
            return (
              <Reveal key={a.key} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-sand/50 p-6 transition-colors hover:border-terra/30">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-terra/10 text-terra">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy-700">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Form + details */}
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-navy-700 p-8 text-white shadow-card">
              <div>
                <h3 className="font-heading text-2xl font-bold">Get in touch</h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  Reach out directly and a member of our team will respond as
                  soon as possible.
                </p>
              </div>

              <ul className="space-y-5">
                {contactDetails.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-terra-light">
                      <d.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-heading font-semibold text-white transition-colors hover:text-terra-light"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-heading font-semibold text-white">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
