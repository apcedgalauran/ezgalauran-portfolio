import { sections } from "@/data/profile";
import { infrastructureIntro, platforms } from "@/data/infrastructure";
import { Section } from "@/components/ui/Section";

export function Deployment() {
  return (
    <Section section={sections.deployment}>
      <p className="mb-10 max-w-[44rem] text-base leading-relaxed text-body sm:text-lg">
        {infrastructureIntro}
      </p>

      {/* A list of rows rather than a <table>, so each row stacks at 375px. */}
      <ul className="divide-y divide-line border-y border-line">
        {platforms.map((p) => (
          <li
            key={p.name}
            className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <h3 className="font-mono text-sm leading-7 text-heading">
              {p.name}
            </h3>
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-body">
                {p.what}
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-dim">
                <span className="sr-only">Where: </span>
                {p.where.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
