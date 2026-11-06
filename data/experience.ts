import type { Experience } from "../lib/types";

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
    role: "DevOps & Infrastructure (Sub-Team 4) — Production Deployment",
    dates: "September 2026",
    summary:
      "APC served as the NAMFREL Election Data Analytics Center for the September 14–15 elections.",
    points: [
      "Handled continuous deployment of the live election portal on Vercel through election day",
      "Shipped 13 production deployments on September 14, including teammates' changes that the team's Vercel plan blocked from deploying — pushed through trigger commits from my authorized account",
      "Verified each production deployment during my shift before handing off to the next shift",
    ],
    links: [
      {
        label: "namfrel-barmm2026.apc.edu.ph",
        href: "https://namfrel-barmm2026.apc.edu.ph/",
      },
    ],
  },
];
