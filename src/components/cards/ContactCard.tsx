import { EnvelopeIcon, MapPinIcon, GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { SITE } from "@/site-config";

export default function ContactCard() {
  return (
    <BentoGridItem
      title="Get in touch"
      colSpan="col-span-1"
      rowSpan="lg:row-span-4"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold leading-tight">
          Let's work together!
        </h2>

        <address className="not-italic flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${SITE.links.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <EnvelopeIcon size={14} />
            {SITE.links.email}
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPinIcon size={14} />
            {SITE.location.city}, {SITE.location.countryName}
          </span>
        </address>

        <nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Socials
          </p>
          <ul className="flex flex-col gap-1.5 text-sm">
            <li>
              <a
                href={SITE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubLogoIcon size={14} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={SITE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinLogoIcon size={14} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={SITE.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <TwitterLogoIcon size={14} />
                Twitter / X
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </BentoGridItem>
  );
}
