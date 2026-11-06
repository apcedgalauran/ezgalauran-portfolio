import { sections } from "@/data/profile";
import { leadership } from "@/data/leadership";
import { Section } from "@/components/ui/Section";
import { Bullets } from "@/components/ui/Bullets";

export function Leadership() {
  return (
    <Section section={sections.leadership}>
      {/* A list rather than a <table>, so each row reflows cleanly at 375px. */}
      <ul className="divide-y divide-line border-y border-line">
        {leadership.roles.map((item) => (
          <li
            key={`${item.role}-${item.organization}`}
            className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <h3 className="text-base font-medium text-heading">{item.role}</h3>
              <p className="mt-0.5 text-[0.9375rem] text-body">
                {item.organization}
              </p>
            </div>
            <p className="font-mono text-xs leading-6 text-dim sm:text-right">
              {item.dates}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.12em] text-dim">
        Speaking &amp; hosting
      </h3>
      <Bullets items={leadership.speaking} className="mt-4" />
    </Section>
  );
}
