import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BentoCardProps {
  children?: ReactNode;
  /** Tailwind col-span classes, e.g. "col-span-1 md:col-span-2" */
  colSpan?: string;
  /** Tailwind row-span classes, e.g. "row-span-2" */
  rowSpan?: string;
  /** When set, the whole card becomes a link */
  href?: string;
  /** Card title rendered at the top (optional) */
  title?: string;
  /** Extra classes added to the outer card div */
  className?: string;
  /** Inner padding override, defaults to "p-6" */
  padding?: string;
}

export default function BentoCard({
  children,
  colSpan = "col-span-1",
  rowSpan = "",
  href,
  title,
  className,
  padding = "p-6",
}: BentoCardProps) {
  const base = cn(
    "group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
    "transition-all duration-300 hover:border-primary/50 hover:shadow-md",
    colSpan,
    rowSpan,
    padding,
    className,
  );

  const inner = (
    <>
      {href && (
        <ArrowUpRight
          size={18}
          className="absolute right-4 top-4 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {title && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return <div className={base}>{inner}</div>;
}
