import { profile, sections } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <Section section={sections.contact}>
      <a
        href={`mailto:${profile.email}`}
        className="break-all text-2xl font-semibold tracking-tight text-heading underline decoration-line-strong underline-offset-8 transition-colors duration-150 hover:decoration-heading sm:text-3xl"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={profile.github} variant="secondary" external>
          <GitHubIcon className="h-4 w-4" />
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
        <ButtonLink href={profile.linkedin} variant="secondary" external>
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
        <ButtonLink href={profile.resumePath} variant="secondary" download>
          <DownloadIcon />
          Download resume
        </ButtonLink>
      </div>
    </Section>
  );
}
