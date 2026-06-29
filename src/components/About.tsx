import Image from "next/image";
import { about, profile } from "@/data/content";
import { Section } from "@/components/Section";
import { renderEmphasis } from "@/lib/text";

type AboutProps = {
  /** Show the profile photo beside the text. Off by default since the
   * homepage already shows the photo in the sidebar next to the name —
   * the standalone /about page turns this on since it has no sidebar. */
  showPhoto?: boolean;
};

export function About({ showPhoto = false }: AboutProps) {
  return (
    <Section id="about" label="about">
      <div
        className={
          showPhoto
            ? "flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10"
            : undefined
        }
      >
        {showPhoto && (
          <div className="flex justify-center sm:order-last sm:block sm:shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-xl ring-1 ring-hairline sm:h-48 sm:w-48">
              <Image
                src={profile.avatarSrc}
                alt={profile.name}
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-ink">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{renderEmphasis(paragraph)}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
