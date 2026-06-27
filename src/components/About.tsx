import { about } from "@/data/content";
import { Section } from "@/components/Section";
import { renderEmphasis } from "@/lib/text";

export function About() {
  return (
    <Section id="about" label="about">
      <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-ink">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{renderEmphasis(paragraph)}</p>
        ))}
      </div>
    </Section>
  );
}
