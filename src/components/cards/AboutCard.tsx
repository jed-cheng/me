import { Badge } from "@/components/ui/badge";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { SITE } from "@/site-config";

export default function AboutCard() {
  return (
    <BentoGridItem
      title="About me"
      colSpan="col-span-1"
      rowSpan="lg:row-span-6"
    >
      <div className="flex flex-col gap-4 text-sm leading-relaxed">
        <p className="text-muted-foreground">{SITE.author.about}</p>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SITE.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </BentoGridItem>
  );
}
