import type { SectionMeta } from "@/lib/types";

/** Section h2, styled as the mono "02 — Selected work" label. */
export function SectionHeading({ section }: { section: SectionMeta }) {
  return (
    <h2
      id={`${section.id}-heading`}
      className="mb-10 font-mono text-xs uppercase tracking-[0.14em] text-dim sm:mb-12"
    >
      <span aria-hidden="true">{section.number} — </span>
      {section.label}
    </h2>
  );
}
