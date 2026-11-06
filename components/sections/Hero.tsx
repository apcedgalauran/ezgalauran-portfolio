import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/Button";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[960px] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
          {profile.title} · {profile.location}
        </p>
        <h1
          id="hero-heading"
          className="mt-5 text-4xl font-semibold tracking-tight text-heading sm:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-body sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects">View projects</ButtonLink>
          <ButtonLink href={profile.resumePath} variant="secondary" download>
            <DownloadIcon />
            Download resume
          </ButtonLink>
          <ButtonLink
            href={profile.github}
            variant="icon"
            external
            aria-label="GitHub profile (opens in a new tab)"
          >
            <GitHubIcon />
          </ButtonLink>
          <ButtonLink
            href={profile.linkedin}
            variant="icon"
            external
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <LinkedInIcon />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
