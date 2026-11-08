import type { Experience } from "../lib/types";
import { namfrel } from "./namfrel.ts";

// Source: docs/portfolio-content.md (v2) → Experience.
export const experience: Experience[] = [
  {
    organization: "Optum",
    program: "Student Advocate Program",
    role: "Intern, Early Careers",
    dates: "November 2026 – Present",
    summary: "Started November 5, 2026.",
    // Content rule: no accomplishments until work is actually performed.
    points: [],
  },
  {
    organization: "APC × NAMFREL",
    program: "2026 BARMM Parliamentary Elections",
    // Shared with the project card so the wording is identical in both.
    role: namfrel.role,
    dates: "September 2026",
    summary: namfrel.summary,
    points: namfrel.points,
    note: namfrel.teamContext,
    links: [namfrel.link],
  },
];
