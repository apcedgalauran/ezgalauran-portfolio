// Source: docs/portfolio-content.md (v2.4) → Featured Projects 3 / Experience.
// NAMFREL wording, shared by the project card (data/projects.ts), the
// Experience entry (data/experience.ts) and therefore the resume, so all three
// stay word-for-word identical. Approved by Ezekiel, Nov 8, 2026.
export const namfrel = {
  role: "Production deployment, DevOps & Infrastructure",
  summary:
    "Set up the production deployment of the live election-analytics portal for APC's NAMFREL Election Data Analytics Center, and served as the deployment contact for the 2026 BARMM Parliamentary Elections.",
  points: [
    "Created the Vercel project on the school's Vercel team, with access and approval from the web development team head. Connected the GitHub repository and configured the production environment variables, including the Supabase database connection.",
    "Served as the deployment contact for the web development team head: kept the live site synced with the latest commits on main and confirmed each sync.",
    "Enabled Vercel's built-in Web Analytics when the team asked for it.",
    "Shipped 13 production deployments on September 14. When teammates' merged commits were blocked on the team's Vercel plan, I deployed their changes through trigger commits from my authorized account.",
    "Verified each production deployment during my shift. A teammate took over deployment on September 15, when I was unavailable.",
  ],
  teamContext:
    "The domain and DNS were set up by others, and the CI pipeline, caching and Playwright automation were teammates' work.",
  link: {
    label: "namfrel-barmm2026.apc.edu.ph",
    href: "https://namfrel-barmm2026.apc.edu.ph/",
  },
};
