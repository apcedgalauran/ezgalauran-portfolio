import type { ReactNode } from "react";

/** Small mono label used for tech stacks. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line px-2 py-0.5 font-mono text-xs text-body">
      {children}
    </span>
  );
}

/** Pill used for project status, visually distinct from stack tags. */
export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-dim">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-body" />
      {children}
    </span>
  );
}
