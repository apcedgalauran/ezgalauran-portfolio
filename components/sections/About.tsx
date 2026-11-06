import { profile, sections } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section section={sections.about}>
      <div className="max-w-[44rem] space-y-6">
        {profile.about.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-[1.8] text-body sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
