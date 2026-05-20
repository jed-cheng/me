import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";


// Bento grid layout:
// - Mobile:  single column, cards stack vertically
// - Tablet:  2 columns
// - Desktop: 4 columns × 8 rows, fixed max height (bento look)

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (

    <div
      className={cn(
        "grid h-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  children,
  colSpan = "col-span-1",
  rowSpan = "",
  href,
  title,
  className,
  padding = "p-6",
}: {
  children?: ReactNode;
  colSpan?: string;
  rowSpan?: string;
  href?: string;
  title?: string;
  className?: string;
  padding?: string;
}) => {
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
        <ArrowUpRightIcon
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
};
