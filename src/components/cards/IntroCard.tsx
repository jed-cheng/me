import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/BentoCard";
import { SITE } from "@/site-config";

export default function IntroCard() {
  return (
    <BentoCard
      colSpan="col-span-1 md:col-span-2 lg:col-span-3"
      rowSpan="lg:row-span-4"
      padding="p-6"
    >
      <div className="flex h-full flex-col justify-between gap-6 md:flex-row md:items-center">
        {/* Text content */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-light text-muted-foreground">welcome</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">{SITE.author.firstName}</span>
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{SITE.author.jobTitle}</p>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE.author.bio}
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1.5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="mr-1.5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${SITE.links.email}`}>
                <Mail size={16} className="mr-1.5" />
                Email
              </a>
            </Button>
          </div>
        </div>

        {/* Avatar — replace src with your own image in /public */}
        <img
          src={SITE.avatarSrc}
          alt={`${SITE.author.firstName}'s avatar`}
          className="h-32 w-32 rounded-full border-2 border-border object-cover md:h-40 md:w-40 lg:h-48 lg:w-48 self-center md:self-auto"
          onError={(e) => {
            // Fallback to initials if image is missing
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </BentoCard>
  );
}
