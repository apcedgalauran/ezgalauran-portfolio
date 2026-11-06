import { sections } from "@/data/profile";
import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function Education() {
  return (
    <Section section={sections.education}>
      <div className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
        <p className="font-mono text-xs leading-7 text-dim">{education.dates}</p>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-heading">
            {education.degree}
          </h3>
          <p className="mt-1 text-[0.9375rem] text-body">
            {education.school}, {education.location}
          </p>
          <ul className="mt-4 space-y-1 text-[0.9375rem] text-body">
            {education.honors.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-dim">
            Relevant coursework
          </h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <li key={c}>
                <Tag>{c}</Tag>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-dim">
            Certification
          </h4>
          <ul className="mt-3 space-y-1 text-[0.9375rem] text-body">
            {education.certifications.map((c) => (
              <li key={c.name}>
                <span className="text-heading">{c.name}</span> — {c.issuer},{" "}
                {c.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
