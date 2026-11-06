import type { ReactNode } from "react";
import type { SectionMeta } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

/** Consistent spacing, width and landmark labelling for every section. */
export function Section({
  section,
  children,
}: {
  section: SectionMeta;
  children: ReactNode;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="border-t border-line py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[960px] px-5 sm:px-8">
        <SectionHeading section={section} />
        {children}
      </div>
    </section>
  );
}
