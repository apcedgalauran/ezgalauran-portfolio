import { sections } from "@/data/profile";
import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { Bullets } from "@/components/ui/Bullets";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function Experience() {
  return (
    <Section section={sections.experience}>
      <ol className="space-y-14">
        {experience.map((job) => (
          <li
            key={job.organization}
            className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs leading-7 text-dim">{job.dates}</p>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-heading">
                {job.organization}
                {job.program && (
                  <span className="font-normal text-body"> — {job.program}</span>
                )}
              </h3>
              <p className="mt-1 text-[0.9375rem] text-heading/80">{job.role}</p>
              {job.summary && (
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                  {job.summary}
                </p>
              )}
              {job.points.length > 0 && (
                <Bullets items={job.points} className="mt-4" />
              )}
              {job.links?.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-heading underline decoration-line-strong underline-offset-4 hover:decoration-heading"
                >
                  {link.label}
                  <ArrowUpRightIcon />
                  <span className="sr-only">(opens in a new tab)</span>
                </ExternalLink>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
