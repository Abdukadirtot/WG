import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Reusable service card: brown accent icon circle, bold heading, short copy.
 * Hover-lift is handled with Tailwind transitions (reduced-motion safe).
 */
export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="card group h-full hover:-translate-y-1.5 hover:border-terra/30 hover:shadow-card-hover">
      <span className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-terra/10 text-terra transition-colors group-hover:bg-terra group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-xl font-bold text-navy-700">{title}</h3>
      <p className="mt-3 leading-relaxed text-navy-500">{description}</p>
    </article>
  );
}
