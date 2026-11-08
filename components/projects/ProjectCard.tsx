"use client";

import { useId, useRef, useState, type TransitionEvent } from "react";
import type { DetailGroup, Project } from "@/lib/types";
import { StatusBadge, Tag } from "@/components/ui/Tag";
import { Bullets } from "@/components/ui/Bullets";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRightIcon } from "@/components/ui/icons";

function Group({
  group,
  as: Heading = "h4",
}: {
  group: DetailGroup;
  as?: "h4" | "h5";
}) {
  return (
    <div>
      <Heading className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
        {group.heading}
      </Heading>
      {group.items.length === 1 ? (
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
          {group.items[0]}
        </p>
      ) : (
        <Bullets items={group.items} className="mt-2" />
      )}
      {group.note && (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
          <span className="font-medium text-heading">{group.note.label}:</span>{" "}
          {group.note.text}
        </p>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Collapsing a long card pulls the toggle button up past the top of the
  // viewport. Once the collapse finishes, bring it back into view so keyboard
  // and screen-reader users don't lose their place.
  const onCollapseEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (open || e.target !== e.currentTarget) return;
    toggleRef.current?.scrollIntoView({ block: "nearest" });
  };

  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-line-strong sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
          {project.label}
        </p>
        {project.status && <StatusBadge>{project.status}</StatusBadge>}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-heading sm:text-xl">
        {project.title}
      </h3>
      {project.dates && (
        <p className="mt-1.5 font-mono text-xs text-dim">{project.dates}</p>
      )}
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
        {project.summary}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <Bullets items={project.highlights} tone="strong" className="mt-5" />
      )}

      {project.note && (
        <p className="mt-5 text-sm leading-relaxed text-dim">{project.note}</p>
      )}

      {project.stackLabel && (
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-dim">
          {project.stackLabel}
        </p>
      )}
      <ul
        className={`${project.stackLabel ? "mt-2" : "mt-5"} flex flex-wrap gap-1.5`}
        aria-label={project.stackLabel ?? "Tech stack"}
      >
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div
        onTransitionEnd={onCollapseEnd}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div id={detailsId} inert={!open} className="overflow-hidden">
          <div className="mt-6 space-y-5 border-t border-line pt-6">
            {project.role && (
              <Group group={{ heading: "Role", items: [project.role] }} />
            )}
            {project.detailsHeading ? (
              <div>
                <h4 className="text-base font-semibold tracking-tight text-heading">
                  {project.detailsHeading}
                </h4>
                <div className="mt-5 space-y-6">
                  {project.details.map((group) => (
                    <Group key={group.heading} group={group} as="h5" />
                  ))}
                </div>
              </div>
            ) : (
              project.details.map((group) => (
                <Group key={group.heading} group={group} />
              ))
            )}
            {project.links && project.links.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <ExternalLink
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-heading underline decoration-line-strong underline-offset-4 hover:decoration-heading"
                    >
                      {link.label}
                      <ArrowUpRightIcon />
                      <span className="sr-only">(opens in a new tab)</span>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex items-center gap-2 rounded text-sm font-medium text-heading"
        >
          {open ? "Show less" : "Read more"}
          <span className="sr-only"> about {project.title}</span>
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}
