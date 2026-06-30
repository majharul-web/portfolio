"use client";

import { useState } from "react";
import Image from "next/image";
import { about, profile } from "@/data/content";
import { Section } from "@/components/Section";
import { renderEmphasis } from "@/lib/text";
import { ResumeButton } from "./ResumeButton";
import { ExternalLinkIcon } from "./icons";

type AboutProps = {
  /** Show the profile photo beside the text. Off by default since the
   * homepage already shows the photo in the sidebar next to the name —
   * the standalone /about page turns this on since it has no sidebar. */
  showPhoto?: boolean;
};

export function About({ showPhoto = false }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreThanOneParagraph = about.paragraphs.length > 1;

  return (
    <Section id="about" label="about">
      <div className={showPhoto ? "flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10" : undefined}>
        {showPhoto && (
          <div className="flex flex-col items-center gap-6 sm:order-last sm:block sm:shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-xl ring-1 ring-hairline sm:h-48 sm:w-48">
              <Image
                src={profile.avatarSrc}
                alt={profile.name}
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="sm:hidden">
              <ResumeButton href={profile.resumeHref} icon={<ExternalLinkIcon className="h-4 w-4 " />}>
                View full résumé
              </ResumeButton>
            </div>
          </div>
        )}

        <div className="space-y-4 text-[15px] leading-relaxed text-ink">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i > 0 && !isExpanded ? "hidden sm:block" : undefined}>
              {renderEmphasis(paragraph)}
            </p>
          ))}

          {hasMoreThanOneParagraph && (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-dim sm:hidden"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
      <div className={`mt-6 ${showPhoto ? "hidden sm:block" : "block"}`}>
        <ResumeButton href={profile.resumeHref} icon={<ExternalLinkIcon className="h-4 w-4 " />}>
          View full résumé
        </ResumeButton>
      </div>
    </Section>
  );
}
