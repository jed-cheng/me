import { BentoGridItem } from "@/components/ui/bento-grid";
import { SITE } from "@/site-config";

export default function NowCard() {
  return (
    <BentoGridItem colSpan="col-span-1" rowSpan="lg:row-span-1">
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">Now</h2>
            <a
              href="https://sive.rs/now"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline-offset-2 hover:underline"
            >
              what's this?
            </a>
          </div>
          {/* Animated pulse dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{SITE.now}</p>
      </div>
    </BentoGridItem>
  );
}
