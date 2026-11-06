"use client";

import { useId, useState } from "react";
import type { DetailGroup, Project } from "@/lib/types";
import { StatusBadge, Tag } from "@/components/ui/Tag";
import { Bullets } from "@/components/ui/Bullets";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRightIcon } from "@/components/ui/icons";

function Group({ group }: { group: DetailGroup }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
        {group.heading}
      </h4>
      {group.items.length === 1 ? (
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
          {group.items[0]}
        </p>
      ) : (
        <Bullets items={group.items} className="mt-2" />
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-line-strong sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
          {project.label}
        </p>
        <StatusBadge>{project.status}</StatusBadge>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-heading sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div id={detailsId} inert={!open} className="overflow-hidden">
          <div className="mt-6 space-y-5 border-t border-line pt-6">
            <Group group={{ heading: "Role", items: [project.role] }} />
            {project.details.map((group) => (
              <Group key={group.heading} group={group} />
            ))}
            {project.credit && (
              <p className="text-sm leading-relaxed text-dim">
                {project.credit}
              </p>
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
