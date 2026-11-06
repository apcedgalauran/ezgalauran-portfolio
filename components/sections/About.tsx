import { profile, sections } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section section={sections.about}>
      <div className="max-w-[44rem] space-y-8">
        <p className="text-base leading-[1.8] text-body sm:text-lg">
          {profile.about}
        </p>
        <blockquote className="border-l border-line-strong pl-5 text-base leading-relaxed text-heading sm:text-lg">
          {profile.engineeringValue}
        </blockquote>
      </div>
    </Section>
  );
}
