import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Compact value tile used in the Core Values grid.
 */
export default function ValueCard({
  icon: Icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="group flex h-full gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-terra/10 text-terra transition-colors group-hover:bg-terra group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-lg font-bold text-navy-700">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
          {description}
        </p>
      </div>
    </div>
  );
}
