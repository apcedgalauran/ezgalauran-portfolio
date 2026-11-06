import type { Experience } from "../lib/types";

// Source: docs/portfolio-content.md → Experience.
export const experience: Experience[] = [
  {
    organization: "Optum",
    program: "Student Advocate Program",
    role: "Intern, Early Careers",
    dates: "November 2026 – Present",
    summary:
      "Intern in the Optum Student Advocate Program under the Early Careers team, started November 5, 2026.",
    // Content rule: no accomplishments until work is actually performed.
    points: [],
  },
  {
    organization: "APC × NAMFREL",
    program: "2026 BARMM Parliamentary Elections",
    role: "DevOps & Infrastructure (Sub-Team 4) — Production Deployment",
    dates: "September 2026",
    summary:
      "APC served as the NAMFREL Election Data Analytics Center. 46 students and 9 faculty across CS, IT, and CpE built and supported the election analytics system.",
    points: [
      "Main handler of continuous deployment to Vercel on election day (Sept 14)",
      "Performed live production redeployments as teammates' changes were merged",
      "QA of production deployments during shift, before handoff to the next shift",
      "Shipped teammates' changes with \"chore: trigger deployment\" commits from my authorized account when their merged commits were \"Blocked\" on the team's Vercel plan — 13 production deployments on Sept 14",
    ],
    links: [
      {
        label: "namfrel-barmm2026.apc.edu.ph",
        href: "https://namfrel-barmm2026.apc.edu.ph/",
      },
    ],
  },
];
